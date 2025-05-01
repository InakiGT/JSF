import { useEffect, useState } from 'react'
import Api from '../utils/api'
import Table from './Table'
import { Project } from '../types/Project'
import PTForm from './PTForm'

export default function PTPanel() {
  const api = new Api(import.meta.env.VITE_API_URI + '/pt')

  const [ pts, setPts ] = useState<Project[]>([])
  const [ error, setError ] = useState('')
  const [ id, setId ] = useState('')
  const [ option, setOption ] = useState('show')

  useEffect(() => {
    const getUsers = async () => {
      const response = await api.get()
      setPts((await response.json()).data)
    }

    getUsers()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <>
      {
        error && (
          <span className='bg-red-500 text-white font-bold w-full text-2xl justify-center flex mb-5'>{ error }</span>
        )
      }
      {
        option === 'show' ? (
          <Table
            title='Proyectos de titulación'
            items={ pts }
            setOption={ setOption }
            api={ api }
            setError={ setError }
            setId={ setId }
          />
        ) : (
          option === 'new' ? (
            <PTForm setOption={ setOption } />
          ) : (
            <PTForm setOption={ setOption } id={ id } />
          )
        )
      }
    </>
  )
}
