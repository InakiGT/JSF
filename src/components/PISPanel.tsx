import { useEffect, useState } from 'react'
import Api from '../utils/api'
import Table from './Table'
import { Project } from '../types/Project'
import PISForm from './PISForm'

export default function PISPanel() {
  const api = new Api(import.meta.env.VITE_API_URI + '/impacto')

  const [ pis, setPis ] = useState<Project[]>([])
  const [ error, setError ] = useState('')
  const [ id, setId ] = useState('')
  const [ option, setOption ] = useState('show')

  const getPIS = async () => {
    const response = await api.get()
    setPis((await response.json()).data)
  }

  useEffect(() => {
    getPIS()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    if ( option === 'show' ) {
      getPIS()
      setId('')
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ option ])

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
            <PISForm setOption={ setOption } />
          ) : (
            <PISForm setOption={ setOption } id={ id } />
          )
        )
      }
    </>
  )
}
