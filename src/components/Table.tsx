import { useEffect, useState } from 'react'
import {type  User } from '../types/User'
import Api from '../utils/api'
import { type Project } from '../types/Project'
import { type Material } from '../types/Material'

type setStateType = React.Dispatch<React.SetStateAction<string>>
type SafeItem = Record<string, string | number | undefined>

export default function Table({ title, items, setOption, api, setError, setId }: {
  title: string,
  items: User[] | Project[] | Material[],
  setOption: setStateType,
  api: Api,
  setError: setStateType,
  setId: setStateType,
}) {

  const [ elements, setElements ] = useState(items)
  const [ keys, setKeys ] = useState({})

  useEffect(() => {
    if ( elements[0] ) {
      const ks = { ...elements[0] }
      delete ks.__v
      delete ks._id

      if ( 'password' in ks ) {
        delete ks.password
      }

      if ( 'content' in ks ) {
        delete ks.content
      }

      if ( 'updatedAt' in ks ) {
        delete ks.updatedAt
        delete ks.createdAt
      }

      setKeys(ks)
    }
  }, [ elements ])

  useEffect(() => {
    if ( items[0]) {
      const ks = { ...items[0] }
      delete ks.__v
      delete ks._id
      if ( 'password' in ks ) {
        delete ks.password
      }

      if ( 'content' in ks ) {
        delete ks.content
      }

      if ( 'updatedAt' in ks ) {
        delete ks.updatedAt
        delete ks.createdAt
      }

      setElements(items)
    }
  }, [ items ])


  const  removeItem = async (
    id: string = '',
    api: Api,
    setError: React.Dispatch<React.SetStateAction<string>>
  ) => {
    try {
      const response = await api.delete(`/${ id }`)

      if ( response.status ) {
        const response = await api.get()
        const data = (await response.json()) as { data: User[] }
        setElements(data.data)
      }
    } catch {
      setError('Error al intentar eliminar el item')
    }
  }


  return (
    <div>
      <div className="mb-10 flex justify-between items-center">
        <h2 className="text-4xl font-bold">{ title }</h2>
        <button onClick={ () => setOption('new') } className="text-white font-bold text-xl bg-[var(--cua-orange)] px-3 py-2 rounded-lg cursor-pointer drop-shadow-lg">Nuevo { title }</button>
      </div>

      <section className="h-[60vh] overflow-scroll w-full bg-[#f5f5f5] rounded-lg drop-shadow-lg p-10">
      {
        keys && (
        <table className="text-left text-2xl w-full table-auto">
          <thead>
            <tr>
              {
                Object.keys(keys).map(i =>(
                  <th className='w-[400px] capitalize' key={ i }>{i}</th>
                ))
              }
              <th className='w-[400px] text-right'>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {
              elements &&
              elements.map(item => (
                <tr key={ item._id } className="border-b-gray-300 border-b-1">
                  {
                    Object.keys(keys).map(i => (
                      <td key={ i }>{ (item as SafeItem)[i] }</td>
                    ))
                  }
                  <td className='flex justify-end py-10'>
                    <ul className="flex gap-5 items-center">
                      <li className="cursor-pointer" onClick={ () => removeItem(item._id, api, setError) }>
                      <svg className="w-10 h-10 text-gray-800" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 7h14m-9 3v8m4-8v8M10 3h4a1 1 0 0 1 1 1v3H9V4a1 1 0 0 1 1-1ZM6 7h12v13a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V7Z"/>
                      </svg>
                      </li>
                      <li className="cursor-pointer" onClick={ () => { setOption('update'); setId(item._id + '') } }>
                      <svg className="w-10 h-10 text-gray-80" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m14.304 4.844 2.852 2.852M7 7H4a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-4.5m2.409-9.91a2.017 2.017 0 0 1 0 2.853l-6.844 6.844L8 14l.713-3.565 6.844-6.844a2.015 2.015 0 0 1 2.852 0Z"/>
                      </svg>
                      </li>
                    </ul>
                  </td>
                </tr>
              ))
            }
          </tbody>
        </table>
        )
      }
      </section>
    </div>
  )
}
