import { useRef } from 'react'
import Footer from './components/Footer'
import MainNav from './components/MainNav'
import './css/App.css'
import Material from './components/Material'
import Projects from './components/Projects'

function App() {
  const section1Ref = useRef<HTMLDivElement>(null);
  const section2Ref = useRef<HTMLDivElement>(null);
  const section3Ref = useRef<HTMLDivElement>(null);

  return (
    <>
      <MainNav refHero={ section1Ref } />


      <Material ref={ section2Ref } />

      <Projects ref={ section3Ref } />

      <Footer />
    </>
  )
}

export default App
