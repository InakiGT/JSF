import { useEffect, useRef, useState } from 'react'
import Footer from './components/Footer'
import MainNav from './components/MainNav'
import './css/App.css'
import Material from './components/Material'
import Projects from './components/Projects'
import { scrollToRef } from './helpers/scroll'

function Home() {
  const section1Ref = useRef<HTMLDivElement>(null)
  const section2Ref = useRef<HTMLDivElement>(null)
  const section3Ref = useRef<HTMLDivElement>(null)

  const [ isScrolled, setIsScrolled ] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY >= 500)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div>
      <MainNav ref={ section1Ref } />

      <Material ref={ section1Ref } />

      <Projects ref={ section2Ref } />

      <div
        className='bg-cua-orange rounded-[9999px] max-w-fit cursor-pointer fixed bottom-20 right-10 md:right-20'
        onClick={ () => scrollToRef(isScrolled ? section1Ref : section3Ref) }
      >
        <svg className="w-12 h-12 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
          {
            !isScrolled ? (
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19V5m0 14-4-4m4 4 4-4"/>
            ) : (
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v13m0-13 4 4m-4-4-4 4"/>
            )
          }
        </svg>
      </div>

      <Footer ref={ section3Ref }>
          <li>Universidad Autonoma Metropolitanta 2025</li>
          <li>Responsables del sitio: Dra. María del Carmen Gómez Fuentes y Dr. Jorge Cervantes Ojeda</li>
          <li>Colaboradores: Iñaki García Tenorio, Kevin Adair López Ugalde, Andres Vicente Peña Macias y Estephane Andrea Aguilar González</li>
          <li>Actualizacion del sitio: Daniel Alejandro García Torres y Alejandro Trejo Cienfuegos</li>
      </Footer>
    </div>
  )
}

export default Home
