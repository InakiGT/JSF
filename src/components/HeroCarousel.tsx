import 'carruzilla/carruzilla.css'
import CarruZilla from 'carruzilla'
import { RefObject, useState } from 'react'
import { scrollToRef } from '../helpers/scroll'

type refsType = {
  ref: RefObject<HTMLDivElement | null>
  materialRef: RefObject<HTMLDivElement | null>
  projectRef: RefObject<HTMLDivElement | null>
}

function HeroCarousel({ref, materialRef, projectRef}: refsType) {
  const [ carouselContent ] = useState([
    {
      title: 'Proyectos terminales de Ingenieria en Computación',
      subtitle: 'Proyectos realizados en el departamento de Ingenieria en Computación',
      clickEvent: () => scrollToRef(projectRef),
    },
    {
      title: 'Recursos de aproyo',
      subtitle: 'De alumnos y profesores para ayudar a la comunidad',
      clickEvent: () => scrollToRef(materialRef),
    },
  ])

  return (
    <div className='pt-[178px] md:pt-[136px]' ref={ ref }>
    <CarruZilla config={{ autoplay: true, interval: 3000, showArrows: true, animationDuration: 600 }}>
      <section className="bg-[rgb(64,64,64)] py-50">
      {
        carouselContent.map((content, index) => (
          <div
            key={ index }
            className="max-w-6xl mx-auto text-white text-center flex flex-col items-center cursor-pointer py-5 justify-center md:h-120 md:px-30"
            onClick={ content.clickEvent }
          >
            <h2 className="text-title text-[#DDDDDD] text-5xl xl:text-7xl uppercase">{ content.title }</h2>
            <div className="flex items-center gap-2 justify-center my-5">
              <svg width="120" height="4" xmlns="http://www.w3.org/2000/svg">
                <rect x="0" y="0" width="120" height="4" rx="5" ry="5" fill="white" />
              </svg>
              <svg className="w-10 h-10 text-[#DDDDDD]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m8 8-4 4 4 4m8 0 4-4-4-4m-2-3-4 14"/>
              </svg>
              <svg width="120" height="4" xmlns="http://www.w3.org/2000/svg">
                <rect x="0" y="0" width="120" height="4" rx="5" ry="5" fill="white" />
              </svg>
            </div>
            <p className="text-xl xl:text-2xl text-[#DDDDDD]">{ content.subtitle }</p>
          </div>
        ))
      }
      </section>
    </CarruZilla>
    </div>
  )
}

export default HeroCarousel
