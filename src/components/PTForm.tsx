import React, { useEffect, useState } from 'react'
import Api from '../utils/api'
import { sendForm } from '../helpers/form'
import { Project } from '../types/Project'

export default function PTForm({ setOption, id }: {
  setOption: React.Dispatch<React.SetStateAction<string>>,
  id?: string
}) {

  const [ error, setError ] = useState('')
  const [ project, setProject ] = useState<Project>()
  const api = new Api(import.meta.env.VITE_API_URI + '/user')

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
    <form onSubmit={ e => sendForm(e, api, setOption, setError, id) } className="bg-[#f5f5f5] p-10 flex flex-col items-center text-2xl gap-5 rounded-lg drop-shadow-lg">
      <h1 className='text-center text-4xl font-bold mb-5'>{ id ? 'Actualizar' : 'Crear' } Usuario</h1>
      {
        error && (
          <span className='bg-red-500 w-9/12 text-center text-white py-2'>{ error }</span>
        )
      }
      <div className='flex flex-col w-full'>
        <label htmlFor="title">Título del proyecto:</label>
        <input value={ project?.title || '' } onChange={ e => setProject({ ...project, title: e.target.value }) } name="title" autoComplete='title' id="title" type="text" placeholder="Proyecto" className='border-b-1 border-b-gray-400 p-2' />
      </div>
      <div className='flex flex-col w-full'>
        <label htmlFor="content-content">Descripción:</label>
        <textarea value={ project?.content?.content || '' } onChange={ e => setProject({ ...project, content: { ...project?.content, content: e.target.value} }) } autoComplete='content-content' name="content-content" id="content-content" placeholder="Un proyecto"  className='border-b-1 border-b-gray-400 p-2 resize-none' ></textarea>
      </div>
      <div className='flex flex-col w-full'>
        <label htmlFor="content-creator">Autor:</label>
        <input value={ project?.content?.creator || '' } onChange={ e => setProject({ ...project, content: { ...project?.content, creator: e.target.value} } ) } autoComplete='new-password' name="content-creator" id="content-creator" type="text" placeholder="John Doe" className='border-b-1 border-b-gray-400 p-2' />
      </div>

      <button type="submit" className='bg-[var(--cua-orange)] text-white text-2xl py-2 font-bold w-40 rounded-lg mt-10'>{ id ? 'Actualizar' : 'Crear' }</button>
    </form>
    </aside>
  )
}
