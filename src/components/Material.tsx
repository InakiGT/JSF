import { useEffect, useRef, useState } from 'react'
import { DialogType, kind, showDialogType } from '../types/Dialog'
import Dialog from './Dialog'
import Api from '../utils/api'
import { type Material } from '../types/Material'

type refType = {
  ref: React.RefObject<HTMLDivElement | null>
}

function Material({ ref }: refType) {
  const api = new Api(import.meta.env.VITE_API_URI)

  const modalRef = useRef<HTMLDialogElement>(null)

  const [ material, setMaterial ] = useState<Material[]>([])
  const [ dialogContent, setDialogContent ] = useState<DialogType>({ title: '', subtitle: '', content: [], kind: kind.MATERIAL, modalRef })


  const showDialog = ({ title, subtitle, content }: showDialogType) => {
    setDialogContent({
      ...dialogContent,
      title,
      subtitle,
      content,
      kind: kind.MATERIAL,
    })

    modalRef.current?.showModal()
  }

    useEffect(() => {
      async function fetchData() {
        const response = await api.get('/material')
        const data = await response.json()

        setMaterial([ ...data.data ])
      }

      fetchData()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

  return (
    <section  className="border-b-2 border-[#e1e1e1] pt-60 md:pt-40">
      <Dialog
        title={ dialogContent.title }
        subtitle={ dialogContent.subtitle }
        content={ dialogContent.content }
        kind={ dialogContent.kind }
        modalRef={ modalRef }
      />


      <div className="max-w-6xl mx-auto">
        <h2 ref={ ref } className="text-title text-4xl mx-auto w-80 uppercase leading-[36px] lg:w-full">Materiales de Apoyo</h2>

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

        <div className="grid grid-cols-1 md:grid-cols-3 gap-20 lg:gap-5 lg:gap-y-15 mb-40">
        {
          material.map((item, index) => (
            <article
              key={ index }
              className="relative w-80 mx-auto cursor-pointer group rounded-lg"
              onClick={ () => { showDialog({ title: item.title ?? '', content: item.content ?? [] })  } }
            >
              <img src={ item.img } alt="" />
              <div className="absolute inset-0 bg-[rgba(0,0,0,0.5)] opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out flex items-center justify-center rounded-lg">
                <svg className="w-10 h-10 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" d="M5 12h14m-7 7V5"/>
                </svg>
              </div>
            </article>
          ))
        }
        </div>
      </div>
    </section>
  )
}

export default Material
