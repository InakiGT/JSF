import { useRef, useState } from 'react'
import PISNav from './components/PISNav'
import Footer from './components/Footer'

function ProyectosImpactoSocial() {
  const section1Ref = useRef<HTMLDivElement>(null)

  const [ projects ] = useState([
    { title: 'Viaje sin tránsito', content: 'VST pretende ayudar a compartir automóviles entre los alumnos de la UAM Cuajimalpa', link: '/VST'  },
    { title: 'RouteSmart', content: 'En construcción...', link: '/VST'  },
    { title: 'Plataforma de aprendizaje interactivo para niños con TDAH y autismo', content: 'Proporcionar un entorno educativo personalizado y adaptativo que responde a las necesidades y habilidades individuales de cada niño', link: '/VST'  },
  ])

  return (
    <>
      <PISNav />

      <section className="pt-60 md:pt-40 max-w-6xl mx-auto min-h-[80vh]">
        <h2 className="text-title text-4xl mx-auto w-80 uppercase leading-[36px] lg:w-full">Proyectos</h2>

        <div className="flex items-center gap-2 justify-center my-5">
          <svg width="120" height="4" xmlns="http://www.w3.org/2000/svg">
            <rect x="0" y="0" width="120" height="4" rx="5" ry="5" fill="#2c3e50" />
          </svg>
          <svg className="w-10 h-10 text-[#2c3e50]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m8 8-4 4 4 4m8 0 4-4-4-4m-2-3-4 14"/>
          </svg>
          <svg width="120" height="4" xmlns="http://www.w3.org/2000/svg">
            <rect x="0" y="0" width="120" height="4" rx="5" ry="5" fill="#2c3e50" />
          </svg>
        </div>

        <div
          className="grid gap-5 w-full justify-items-center md:grid-cols-3"
          style={{ gridAutoRows: "1fr" }}
          ref={section1Ref}
        >
          {projects.map((project, index) => (
            <article
              key={index}
              className="rounded-xl flex flex-col items-center justify-center bg-[#f5f5f5] w-full max-w-[400px] px-10 text-[#1a252f] md:px-20 md:py-10 shadow cursor-pointer h-full transition-transform transform hover:scale-105"
            >
              <h3 className="text-title text-4xl mb-5">{project.title}</h3>
              <p>{project.content}</p>
            </article>
          ))}
        </div>
      </section>

      <Footer ref={ section1Ref }>
        <li>Universidad Autonoma Metropolitanta 2025</li>
      </Footer>
    </>
  )
}

export default ProyectosImpactoSocial
