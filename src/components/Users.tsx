import { useEffect, useState } from 'react'
import Api from '../utils/api'
import { User } from '../types/User'
import Table from './Table'
import UserForm from './UserForm'

export default function Users() {
  const api = new Api(import.meta.env.VITE_API_URI + '/user')

  const [ users, setUsers ] = useState<User[]>([])
  const [ error, setError ] = useState('')
  const [ id, setId ] = useState('')
  const [ option, setOption ] = useState('show')

  const getUsers = async () => {
    const response = await api.get()
    const data = (await response.json()) as { data: User[] }
    setUsers(data.data)
  }

  useEffect(() => {
    getUsers()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    if ( option === 'show' ) {
      getUsers()
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
          title='Usuarios'
          items={ users }
          setOption={ setOption }
          api={ api }
          setError={ setError }
          setId={ setId }
        />
      ) : (
        option === 'new' ? (
          <UserForm setOption={ setOption } />
        ) : (
          <UserForm setOption={ setOption } id={ id } />
        )
      )
    }
    </>
  )
}
