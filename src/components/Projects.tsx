import { useEffect, useRef, useState } from 'react'

import Dialog from './Dialog'
import { ContentType, DialogType, kind, showDialogType } from '../types/Dialog'
import Api from '../utils/api'
import { Project } from '../types/Project'

type refType = {
  ref: React.RefObject<HTMLDivElement | null>
}

function Projects({ ref }: refType) {
  const modalRef = useRef<HTMLDialogElement>(null)
  const scrollContainerRef = useRef<HTMLUListElement>(null)

  const api = new Api(import.meta.env.VITE_API_URI)

  const [ projects, setProjects ] = useState<Project[]>([])
  const [ dialogContent, setDialogContent ] = useState<DialogType>({ title: '', subtitle: '', content: [], kind: kind.MATERIAL, modalRef })

  const showDialog = ({ title, subtitle, content }: showDialogType) => {
    setDialogContent({
      ...dialogContent,
      title,
      subtitle,
      content,
      kind: kind.PROJECT,
    })

    modalRef.current?.showModal()
  }

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollLeft -= 100
    }
  }

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollLeft += 100
    }
  }

  useEffect(() => {
    async function fetchData() {
      const response = await api.get('/pt')
      const data = await response.json()

      setProjects([ ...data.data ].reverse())
    }

    fetchData()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <section ref={ ref } className="mt-20 max-w-6xl mx-auto">
      <Dialog
        title={ dialogContent.title }
        subtitle={ dialogContent.subtitle }
        content={ dialogContent.content }
        kind={ dialogContent.kind }
        modalRef={ modalRef }
      />

      <h2 className="text-title text-4xl mx-auto w-80 uppercase leading-[36px] lg:w-full">Proyectos terminales</h2>

      <div className="flex items-center gap-2 justify-center my-5">
        <svg width="120" height="4" xmlns="http://www.w3.org/2000/svg">
          <rect x="0" y="0" width="120" height="4" rx="5" ry="5" fill="#2c3e50" />
        </svg>
        <svg className="w-10 h-10 text-[#2c3e50]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
          <path fillRule="evenodd" d="M6 2a2 2 0 0 0-2 2v15a3 3 0 0 0 3 3h12a1 1 0 1 0 0-2h-2v-2h2a1 1 0 0 0 1-1V4a2 2 0 0 0-2-2h-8v16h5v2H7a1 1 0 1 1 0-2h1V2H6Z" clipRule="evenodd"/>
        </svg>

        <svg width="120" height="4" xmlns="http://www.w3.org/2000/svg">
          <rect x="0" y="0" width="120" height="4" rx="5" ry="5" fill="#2c3e50" />
        </svg>
      </div>

      <div className="relative w-90 mx-auto md:w-full md:px-6">
        <button
          className="bg-cua-orange rounded-full absolute z-10 left-0 top-1/2 -translate-y-1/2 p-2 cursor-pointer"
          onClick={scrollLeft}
        >
          <svg className="w-10 h-10 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h14M5 12l4-4m-4 4 4 4"/>
          </svg>
        </button>
        <ul
          className="overflow-x-scroll flex gap-5 px-6"
          ref={scrollContainerRef}
        >
          {projects && projects.map((project, index) => {

            const { title = '', subtitle = '', content } = project
            const typedContent = content as ContentType[]

            return (
            <li
              key={index}
              className="shadow rounded-2xl min-w-[300px] cursor-pointer flex items-center bg-[#F5F5F5] p-10 flex-col justify-center"
              onClick={() => showDialog({ title, subtitle, content: typedContent })}
            >
              <p className="text-center text-xl">Autor: { typedContent[0].creator }</p>
              <p className="text-title text-center text-[#1A252F] text-2xl">{ project.title }</p>
            </li>
            )
          })}
        </ul>
        <button
          className="bg-cua-orange rounded-full absolute z-10 right-0 top-1/2 -translate-y-1/2 p-2 cursor-pointer"
          onClick={scrollRight}
        >
          <svg className="w-10 h-10 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 12H5m14 0-4 4m4-4-4-4"/>
          </svg>
        </button>
    </div>
    </section>
  )

}

export default Projects
