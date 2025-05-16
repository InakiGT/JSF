import React, { useEffect, useState } from 'react'
import Api from '../utils/api'
import { sendForm } from '../helpers/form'
import ImageForm from './ImageForm'
import { type Material } from '../types/Material'

export default function MaterialForm({ setOption, id }: {
  setOption: React.Dispatch<React.SetStateAction<string>>,
  id?: string
}) {

  const [ error, setError ] = useState('')
  const [ project, setProject ] = useState<Material>({
    content: [{}]
  })
  const [ contentCount, setContentCount ] = useState(0)

  const api = new Api(import.meta.env.VITE_API_URI + '/material')

   const getProject = async () => {
    const response = await api.get(`/${ id }`)
    const data = (await response.json()) as { data: Material }

    setProject(data.data)
    setContentCount(data.data.content?.length ? data.data.content.length - 1 : 0)
  }

  const addContent = () => {
    setProject(prev => {
      const content = prev?.content?.concat({
        title: '',
        content: '',
        link: '',
      })

      return {
        ...prev,
        content,
      }
    })
    setContentCount(prev => prev + 1)
  }

  const updateContent = ( id: number, value: string, key: string ) => {
    const content = project?.content?.map((c, i) => {
      if ( i === id ) {
        return {
          ...c,
          [key]: value
        }
      }

      return c
    })

    setProject({ ...project, content: [ ...content ?? [] ]})
  }

  useEffect(() => {
    setTimeout(() => {
      setError('')
    }, 3000)
  }, [ error ])

  useEffect(() => {
    if ( id ) {
      getProject()
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ id ])

  return (
    <aside>
    <button onClick={ () => setOption('show') } className='bg-[var(--cua-orange)] text-white text-xl py-1 font-bold w-30 rounded-lg mb-5 drop-shadow-lg cursor-pointer'>Regresar</button>
    <form onSubmit={ e =>  sendForm(e, api, setOption, setError, id)} className="bg-[#f5f5f5] p-10 flex flex-col items-center text-2xl gap-5 rounded-lg drop-shadow-lg h-[80vh] overflow-scroll">
      <h1 className='text-center text-4xl font-bold mb-5'>{ id ? 'Actualizar' : 'Crear' } Material</h1>
      <div className='flex flex-col w-full'>
        <label htmlFor="title">Título del material:</label>
        <input value={ project?.title || '' } onChange={ e => setProject({ ...project, title: e.target.value }) } name="titlen" autoComplete='title' id="title" type="text" placeholder="Proyecto" className='border-b-1 border-b-gray-400 p-2' />
      </div>
      <div className='flex flex-col w-full'>
        <label htmlFor="subtitle">Subtitulo del material:</label>
        <input value={ project?.subtitle || '' } onChange={ e => setProject({ ...project, subtitle: e.target.value }) } name="subtitleo" autoComplete='subtitle' id="subtitle" type="text" placeholder="Proyecto UAM" className='border-b-1 border-b-gray-400 p-2' />
      </div>
      <div className='flex flex-col w-full'>
        <ImageForm p={ project?.img } />
      </div>

      <div className='flex w-full justify-between items-center'>
      <h3 className='font-bold items-center'>Contenido <span className='text-lg font-light ml-2'>Agregar uno por cada card a mostrar</span></h3>
      <button
        type='button'
        className='cursor-pointer bg-[var(--cua-orange)] text-white text-sm py-2 font-bold w-40 rounded-lg mt-10'
        onClick={ addContent }
      >+ Agregar contenido</button>
      </div>

      {
       (Array.from({ length: contentCount + 1 }, (_, i) => i)).map(i => (
        <div key={ i } className='w-full flex flex-col gap-5'>
          <div className='flex flex-col w-full'>
            <label htmlFor="content-title">Título:</label>
            <input
              value={ project?.content?.[i]?.title ?? '' }
              onChange={ e => updateContent(i, e.target.value, 'title') }
              autoComplete='link'
              id="content-link"
              type="text"
              placeholder="Un material"
              className='border-b-1 border-b-gray-400 p-2'
            />
          </div>
          <div className='flex flex-col w-full'>
            <label htmlFor="content-link">URL:</label>
            <input
              value={ project?.content?.[i]?.link ?? '' }
              onChange={ e => updateContent(i, e.target.value, 'link')  }
              autoComplete='link'
              id="content-link"
              type="text"
              placeholder="www.cua.uam.mx"
              className='border-b-1 border-b-gray-400 p-2'
            />
          </div>
          <div className='flex flex-col w-full'>
            <label htmlFor="content-content">Descripción:</label>
            <textarea
              value={ project?.content?.[i]?.content ?? '' }
              onChange={ e => updateContent(i, e.target.value, 'content')  }
              autoComplete='link'
              id="content-link"
              placeholder="Un buen material"
              className='border-b-1 border-b-gray-400 p-2 resize-none'
            />
          </div>
        </div>
       ))
      }
      {
        error && (
          <span className='bg-red-500 w-9/12 text-center text-white py-2'>{ error }</span>
        )
      }
      {
        (Array.from({ length: contentCount + 1 }, (_, i) => i)).map(i => (
        <div key={ i }>
          <input type="hidden" name={`content[${i}].contentn`} value={project?.content?.[i]?.content ?? ''} />
          <input type="hidden" name={`content[${i}].titleo`} value={project?.content?.[i]?.title ?? ''} />
          <input type="hidden" name={`content[${i}].linko`} value={project?.content?.[i]?.link ?? ''} />
        </div>
        ))
      }
      <button type="submit" className='cursor-pointer bg-[var(--cua-orange)] text-white text-2xl py-2 font-bold w-40 rounded-lg mt-10'>{ id ? 'Actualizar' : 'Crear' }</button>
    </form>
    </aside>
  )
}
