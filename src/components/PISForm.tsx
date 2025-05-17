import React, { useEffect, useState } from 'react'
import Api from '../utils/api'
import { sendForm } from '../helpers/form'
import { Project } from '../types/Project'
import ImageForm from './ImageForm'

export default function PISForm({ setOption, id }: {
  setOption: React.Dispatch<React.SetStateAction<string>>,
  id?: string
}) {

  const [ error, setError ] = useState('')
  const [ project, setProject ] = useState<Project>()
  const api = new Api(import.meta.env.VITE_API_URI + '/impacto')

   const getProject = async () => {
    const response = await api.get(`/${ id }`)
    const data = (await response.json()) as { data: Project }

    setProject(data.data)
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
      <h1 className='text-center text-4xl font-bold mb-5'>{ id ? 'Actualizar' : 'Crear' } Proyecto de Impacto Social</h1>
      <div className='flex flex-col w-full'>
        <label htmlFor="title">*Título del proyecto:</label>
        <input value={ project?.title || '' } onChange={ e => setProject({ ...project, title: e.target.value }) } name="titlen" autoComplete='title' id="title" type="text" placeholder="Proyecto" className='border-b-1 border-b-gray-400 p-2' />
      </div>
      <div className='flex flex-col w-full'>
        <label htmlFor="subtitle">Subtitulo del proyecto:</label>
        <input value={ project?.subtitle || '' } onChange={ e => setProject({ ...project, subtitle: e.target.value }) } name="subtitleo" autoComplete='subtitle' id="subtitle" type="text" placeholder="Proyecto UAM" className='border-b-1 border-b-gray-400 p-2' />
      </div>
      <div className='flex flex-col w-full'>
        <label htmlFor="content-content">*Descripción:</label>
        <textarea value={project?.content?.[0]?.content ?? ''} onChange={ e => setProject({ ...project, content: [{ ...project?.content?.[0], content: e.target.value }]}) } autoComplete='content-content' id="content-content" placeholder="Un proyecto"  className='border-b-1 border-b-gray-400 p-2 resize-none' ></textarea>
      </div>
      <div className='flex flex-col w-full'>
        <label htmlFor="content-creator">*Autor:</label>
        <input value={ project?.content?.[0]?.creator ?? '' } onChange={ e => setProject({ ...project, content: [{ ...project?.content?.[0], creator: e.target.value}] } ) } autoComplete='new-password' id="content-creator" type="text" placeholder="John Doe" className='border-b-1 border-b-gray-400 p-2' />
      </div>
      <div className='flex flex-col w-full'>
        <label htmlFor="content-link">URL:</label>
        <input value={ project?.content?.[0]?.link ?? '' } onChange={ e => setProject({ ...project, content: [{ ...project?.content?.[0], link: e.target.value} ]} ) } autoComplete='link' id="content-link" type="text" placeholder="www.cua.uam.mx" className='border-b-1 border-b-gray-400 p-2' />
      </div>
      <div className='flex flex-col w-full'>
        <label htmlFor="content-technologies">Stack de tecnologías:</label>
        <input value={ project?.content?.[0]?.technologies ?? '' } onChange={ e => setProject({ ...project, content: [{ ...project?.content?.[0], technologies: e.target.value} ]} ) } autoComplete='technologies' id="content-technologies" type="text" placeholder="React, NodeJS y MongoDB" className='border-b-1 border-b-gray-400 p-2' />
      </div>
      <div className='flex flex-col w-full'>
        <ImageForm p={ project?.img } />
      </div>
      {
        error && (
          <span className='bg-red-500 w-9/12 text-center text-white py-2'>{ error }</span>
        )
      }
      <input type="hidden" name="content[0].contentn" value={project?.content?.[0]?.content ?? ''} />
      <input type="hidden" name="content[0].creatorn" value={project?.content?.[0]?.creator ?? ''} />
      <input type="hidden" name="content[0].linko" value={project?.content?.[0]?.link ?? ''} />
      <input type="hidden" name="content[0].technologieso" value={project?.content?.[0]?.technologies ?? ''} />
      <button type="submit" className='bg-[var(--cua-orange)] text-white text-2xl py-2 font-bold w-40 rounded-lg mt-10 cursor-pointer'>{ id ? 'Actualizar' : 'Crear' }</button>
    </form>
    </aside>
  )
}
