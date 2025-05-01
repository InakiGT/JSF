import { useEffect, useState } from 'react'
import Api from '../utils/api'
import Table from './Table'
import { Project } from '../types/Project'

export default function PISPanel() {
  const api = new Api(import.meta.env.VITE_API_URI + '/impacto')

  const [ pis, setPis ] = useState<Project[]>([])
  const [ error, setError ] = useState('')
  const [ , setId ] = useState('')
  const [ option, setOption ] = useState('show')

  useEffect(() => {
    const getUsers = async () => {
      const response = await api.get()
      setPis((await response.json()).data)
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
            title='Proyectos de impacto social'
            items={ pis }
            setOption={ setOption }
            api={ api }
            setError={ setError }
            setId={ setId }
          />
        ) : (
          option === 'new' ? (
            <p></p>
          ) : (
            <p></p>
          )
        )
      }
    </>
  )
}
