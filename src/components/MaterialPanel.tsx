import { useEffect, useState } from 'react'
import Api from '../utils/api'
import Table from './Table'
import MaterialForm from './MaterialForm'
import { type Material } from '../types/Material'

export default function MaterialPanel() {
  const api = new Api(import.meta.env.VITE_API_URI + '/material')

  const [ materials, setMaterials ] = useState<Material[]>([])
  const [ error, setError ] = useState('')
  const [ id, setId ] = useState('')
  const [ option, setOption ] = useState('show')

  const getPIS = async () => {
    const response = await api.get()
    setMaterials((await response.json()).data)
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
            title='Materiales de apoyo'
            items={ materials }
            setOption={ setOption }
            api={ api }
            setError={ setError }
            setId={ setId }
          />
        ) : (
          option === 'new' ? (
            <MaterialForm setOption={ setOption } />
          ) : (
            <MaterialForm setOption={ setOption } id={ id } />
          )
        )
      }
    </>
  )
}
