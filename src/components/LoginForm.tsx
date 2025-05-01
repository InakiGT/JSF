import { Dispatch, FormEvent, SetStateAction, useEffect, useState } from 'react'
import Api from '../utils/api'
import { setToken } from '../helpers/token'

function LoginForm({ setJwt }: {
  setJwt: Dispatch<SetStateAction<string>>
}) {
  const [ error, setErr ] = useState('')
  const [ form, setForm ] = useState({
    email: '',
    password: '',
  })

  useEffect(() => {
    if ( error ) {
      setTimeout(() => {
        setErr('')
      }, 2000)
    }
  }, [ error ])

  const api = new Api(import.meta.env.VITE_API_URI)

  const login = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if ( form.email.trim() === '' || form.password.trim() === '' ) {
      setErr('Los campos no pueden ir vacíos')
      return
    }

    try {
      const response = await api.post('/auth', { ...form })

      if ( response.status === 401 ) {
        setErr('Credenciales incorrectas')
        return
      } else if ( response.status === 500 ) {
        setErr('Error en el servidor')
      }
      const { data } = await response.json()
      await setToken(data)
      setJwt(data)
    } catch {
      setErr('Error en la petición')
    }
  }

  return (
    <form onSubmit={ e => login(e) } className="bg-[#f5f5f5] rounded-lg p-10 flex items-center justify-center flex-col w-[50%] shadow-xl">
      <h1 className="font-bold text-4xl mb-10">UAM Cuajimalpa</h1>
      <div className="mb-4 flex flex-col text-2xl w-[90%]">
        <label htmlFor="email">Correo:</label>
        <input autoComplete='email' value={ form.email } className="border-b-1 border-b-stone-400 px-2 py-3" type="email" name="email" id="email" placeholder="cuajimalpa@cua.uam.mx" onChange={ e => setForm({ ...form, email: e.target.value }) } />
      </div>
      <div className="mb-8 flex flex-col text-2xl w-[90%]">
        <label htmlFor="password">Contraseña:</label>
        <input autoComplete='current-password' value={ form.password } className="border-b-1 border-b-stone-400 px-2 py-3" type="password" name="password" id="password" placeholder="Contraseña" onChange={ e => setForm({ ...form, password: e.target.value }) } />
      </div>
      {
        error && (
          <p className='font-bold bg-red-600 text-white text-2xl mb-10 py-3 px-5 rounded-lg'>{ error }</p>
        )
      }

      <button type='submit' className="bg-[var(--cua-orange)] text-white px-4 py-2 font-bold text-xl rounded-lg cursor-pointer">Iniciar Sesión</button>
    </form>
  )
}

export default LoginForm
