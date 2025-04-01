import { useRef, useState } from 'react'
import PISNav from './components/PISNav'
import Footer from './components/Footer'
import pis from './utils/ProjectsImpactoSocial'
import Dialog from './components/Dialog'
import { DialogType, showDialogType } from './types/Dialog'

function ProyectosImpactoSocial() {
  const section1Ref = useRef<HTMLDivElement>(null)
  const modalRef = useRef<HTMLDialogElement>(null)

  const [ projects ] = useState([ ...pis ])

    const [ dialogContent, setDialogContent ] = useState<DialogType>({ title: '', subtitle: '', content: [], modalRef })

  const showDialog = ({ title, subtitle, content }: showDialogType) => {
      setDialogContent({
        ...dialogContent,
        title,
        subtitle,
        content,
      })

      modalRef.current?.showModal()
  }


  return (
    <>
      <PISNav />

      <Dialog
        title={ dialogContent.title }
        subtitle={ dialogContent.subtitle }
        content={ dialogContent.content }
        kind={ dialogContent.kind }
        modalRef={ modalRef }
      />

      <section className="pt-60 md:pt-40 max-w-6xl mx-auto min-h-[80vh]">
        <h2 className="text-title text-4xl mx-auto w-80 uppercase leading-[36px] lg:w-full">Proyectos</h2>

        <div className="flex items-center gap-2 justify-center my-5">
          <svg width="120" height="4" xmlns="http://www.w3.org/2000/svg">
            <rect x="0" y="0" width="120" height="4" rx="5" ry="5" fill="#2c3e50" />
          </svg>
          <svg className="w-10 h-10 text-[#2c3e50]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m8 8-4 4 4 4m8 0 4-4-4-4m-2-3-4 14"/>
          </svg>
          <svg width="120" height="4" xmlns="http://www.w3.org/2000/svg">
            <rect x="0" y="0" width="120" height="4" rx="5" ry="5" fill="#2c3e50" />
          </svg>
        </div>

        <div
          className="grid gap-5 w-full justify-items-center md:grid-cols-3"
          style={{ gridAutoRows: "1fr" }}
          ref={section1Ref}
        >
          {projects.map((project, index) => (
            <article
              key={index}
              className="px-10 text-[#1a252f] cursor-pointer h-full transition-transform transform hover:scale-105"
              onClick={() => showDialog({ title: project.title, subtitle: project.subtitle, content: project.content })}
            >
              <img className="rounded-2xl shadow w-[400px]" src={ project.img } alt={ project.title } />
            </article>
          ))}
        </div>
      </section>

      <Footer ref={ section1Ref }>
        <li>Universidad Autonoma Metropolitanta 2025</li>
      </Footer>
    </>
  )
}

export default ProyectosImpactoSocial
