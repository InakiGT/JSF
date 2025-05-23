import React, { useEffect, useState } from 'react'
import Api from '../utils/api'
import { sendForm } from '../helpers/form'
import { User } from '../types/User'

export default function UserForm({ setOption, id }: {
  setOption: React.Dispatch<React.SetStateAction<string>>,
  id?: string
}) {

  const [ error, setError ] = useState('')
  const [ user, setUser ] = useState<User>()
  const api = new Api(import.meta.env.VITE_API_URI + '/user')

   const getUser = async () => {
    const response = await api.get(`/${ id }`)
    const data = (await response.json()) as { data: User }

    delete data.data.password

    setUser(data.data)
  }

  useEffect(() => {
    setTimeout(() => {
      setError('')
    }, 3000)
  }, [ error ])

  useEffect(() => {
    if ( id ) {
      getUser()
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ id ])

  return (
    <aside>
    <button onClick={ () => setOption('show') } className='bg-[var(--cua-orange)] text-white text-xl py-1 font-bold w-30 rounded-lg mb-5 drop-shadow-lg'>Regresar</button>
    <form onSubmit={ e => sendForm(e, api, setOption, setError, id) } className="bg-[#f5f5f5] p-10 flex flex-col items-center text-2xl gap-5 rounded-lg drop-shadow-lg">
      <h1 className='text-center text-4xl font-bold mb-5'>{ id ? 'Actualizar' : 'Crear' } Usuario</h1>
      {
        error && (
          <span className='bg-red-500 w-9/12 text-center text-white py-2'>{ error }</span>
        )
      }
      <div className='flex flex-col w-full'>
        <label htmlFor="nombre">Nombre:</label>
        <input value={ user?.userName || '' } onChange={ e => setUser({ ...user, userName: e.target.value }) } name="userNamen" autoComplete='username' id="nombre" type="text" placeholder="Alumno UAM" className='border-b-1 border-b-gray-400 p-2' />
      </div>
      <div className='flex flex-col w-full'>
        <label htmlFor="email">Correo:</label>
        <input value={ user?.email || '' } onChange={ e => setUser({ ...user, email: e.target.value }) } autoComplete='new-email' name="emailn" id="email" type="email" placeholder="alumno@cua.uam.mx"  className='border-b-1 border-b-gray-400 p-2' />
      </div>
      <div className='flex flex-col w-full'>
        <label htmlFor="pass">Contraseña:</label>
        <input value={ user?.password || '' } onChange={ e => setUser({ ...user, password: e.target.value }) } autoComplete='new-password' name="passwordn" id="pass" type="password" placeholder="Contraseña" className='border-b-1 border-b-gray-400 p-2' />
      </div>

      <button type="submit" className='bg-[var(--cua-orange)] text-white text-2xl py-2 font-bold w-40 rounded-lg mt-10'>{ id ? 'Actualizar' : 'Crear' }</button>
    </form>
    </aside>
  )
}
