import { Routes, Route } from 'react-router-dom'

import Home from './Home'
import ProyectosImpactoSocial from './ProyectosImpactoSocial'

function App() {
  return (
    <Routes>
      <Route path="/" element={ <Home /> } />
      <Route path="/ProyectoImpactoSocialJSF" element={ <ProyectosImpactoSocial /> } />
    </Routes>
  )
}

export default App
