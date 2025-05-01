import { useEffect, useState } from 'react'
import LoginForm from './components/LoginForm'
import { getToken } from './helpers/token'
import Panel from './components/Panel'

function AdminPanel() {
  const [ token, setJwt ] = useState('')

  useEffect(() => {
    const token = async () => {
      const token = await getToken()
      if ( token ) {
        setJwt(token.value)
      }
    }

    token()
  }, [])

  return (
    <main className="flex items-center justify-center h-[100vh]">
      {
        token ? (
          <Panel setJwt={ setJwt } />
        ) : (
          <LoginForm setJwt={ setJwt } />
        )
      }
    </main>
  )
}

export default AdminPanel
