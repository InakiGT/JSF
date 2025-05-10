import { Routes, Route } from 'react-router-dom'

import Home from './Home'
import ProyectosImpactoSocial from './ProyectosImpactoSocial'
import AdminPanel from './AdminPanel'

function App() {
  return (
    <Routes>
        <Route path="/" element={ <Home /> } />
        <Route path="/ProyectoImpactoSocialJSF" element={ <ProyectosImpactoSocial /> } />
        <Route path="/Panel" element={ <AdminPanel /> } />
    </Routes>
  )
}

export default App
