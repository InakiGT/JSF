import { useRef, useState } from 'react'
import { DialogType, kind, showDialogType } from '../types/Dialog';
import Dialog from './Dialog';

type refType = {
  ref: React.RefObject<HTMLDivElement | null>
}

function Material({ ref }: refType) {
  const modalRef = useRef<HTMLDialogElement>(null)

  const [ material ] = useState([
    {
      img: 'Curso1.png',
      title: 'Auto Aprendizaje de Aplicaciones Web y Android',
      content: [
        { title: 'SEAWeb 1', content: 'Bienvenido al curso de desarrollo web donde aprenderás los fundamentos de aplicaciones web, desde HTML básico hasta el manejo de servidores Java con Servlets y JSP, incluyendo el acceso a bases de datos.', link: 'http://148.206.168.124:8080/seaweb/' },
        { title: 'SEAWeb 2', content: 'JavaServer Faces (JSF) es un marco de desarrollo de aplicaciones web en Java que simplifica el proceso de creación de interfaces de usuario al separar la presentación de la lógica de la aplicación. Utiliza páginas Facelets que contienen componentes de alto nivel para interactuar con el servidor de manera independiente.', link: 'http://148.206.168.124:8080/seaweb/' },
        { title: 'Aprende React', content: 'Aprender a construir una aplicación web con React por primera vez es desafiante debido a la necesidad de integrar conocimientos previos y adquirir nuevos conocimientos relacionados con React y su entorno de programación. Los videos educativos y los manuales son opciones populares, pero este curso ofrece una alternativa autocontenido con enlaces para profundizar en temas específicos.', link: 'https://aprendereactapp.web.app/' },
        { title: 'SAAndroid ST', content: 'Este curso te llevará a través de un viaje de aprendizaje paso a paso para dominar el desarrollo de aplicaciones Android utilizando Android Studio de manera fácil y efectiva. Desde los conceptos básicos hasta técnicas avanzadas, explorarás cómo crear aplicaciones móviles impresionantes con una curva de aprendizaje suave y un enfoque práctico.', link: 'http://148.206.168.145:8080/SAAndroit_JSF/' },
      ]
    },
    {
      img: 'Curso2.png',
      title: 'Sistema de apoyo a “Calidad y Pruebas” (QualiTeam)',
      content: [
        { title: 'Qualiteam', content: 'QualiTeam es una aplicación web que ayuda al control de la documentación asociada a proyectos de desarrollo de software siguiendo los principios y procedimientos del aseguramiento de la calidad de la Ingeniería del Software.', link: 'http://qualiteam.cua.uam.mx:8080/QualiTeam/' },
        { title: 'Libro de Texto', content: 'En el libro Calidad y Pruebas en el Desarrollo de Software, hay prácticas diseñadas para que con QualiTeam reafirmes los conceptos aprendidos en la teoría.', link: 'https://www.cua.uam.mx/404_override' }
      ]
    },
    {
      img: 'Curso3.png',
      title: 'Sistema Interactivo de Metodos Númericos (SIMetNum)',
      content: [
        { title: 'SIMetNum', content: 'SIMetNum es una herramienta didáctica que permite obtener rápidamente resultados, parciales y finales de los métodos numéricos que contiene. Su propósito es que los usuarios puedan ejecutar fácilmente diversos métodos numéricos y estudiar sus propiedades.', link: 'http://148.206.168.145:8080/SiMetNum/' },
        { title: 'Libro de Texto', content: 'El libro Practicas con SIMetNum: Material de apoyo para la impartición de métodos numéricos, contiene una breve explicación de los métodos y prácticas diseñadas para ilustrar con SIMetNum propiedades clave de cada uno.', link: 'https://www.cua.uam.mx/404_override' },
      ]
    },
    {
      img: 'Curso4.png',
      title: 'Proyectos de Impacto Social',
      content: [
        { content: 'En este apartado hay diferentes tipos de proyectos destinados a contribuir a la sociedad.', link: 'http://148.206.168.145:8080/ProyectoImpactoSocialJSF/' },
      ]
    },
    {
      img: 'Curso5.png',
      title: 'Aplicaciones de Ayuda al proceso de Enseñanza-Aprendizaje',
      content: [
        { content: 'En este apartado hay proyectos para generar dinámicas en clase que ayuden a reforzar el conocimiento.', link: 'http://148.206.168.145:8080/AplicacionesEnsenanzaAprendizaje/' },
      ]
    },
    {
      img: 'Curso6.png',
      title: 'Página de los Diagramas de Transición entre Interfaces de Usuario (DTIU)',
      content: [
        { title: 'DTIU', content: 'Los Diagramas de Transición entre Interfaces de Usuario (DTIU) son una herramienta que sirve para modelar el flujo entre las diferentes interfaces que se le presentan al usuario en un sistema de software. En la Página del DTIU (UITD en inglés) encontrarás explicaciones, ejemplos, un editor especializado y más.', link: 'https://uitd-portal.firebaseapp.com/' },
      ]
    },
  ])
  const [ dialogContent, setDialogContent ] = useState<DialogType>({ title: '', subtitle: '', content: [], kind: kind.MATERIAL, modalRef })


  const showDialog = ({ title, subtitle, content }: showDialogType) => {
    setDialogContent({
      ...dialogContent,
      title,
      subtitle,
      content,
      kind: kind.MATERIAL,
    })

    modalRef.current?.showModal()
  }

  return (
    <section  className="mt-20 border-b-2 border-[#e1e1e1]">
      <Dialog
        title={ dialogContent.title }
        subtitle={ dialogContent.subtitle }
        content={ dialogContent.content }
        kind={ dialogContent.kind }
        modalRef={ modalRef }
      />


      <div className="max-w-6xl mx-auto">
        <h2 ref={ ref } className="text-title text-4xl mx-auto w-80 uppercase leading-[36px] lg:w-full">Materiales - Cursos - Proyectos</h2>

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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-20 lg:gap-5 lg:gap-y-15 mb-40">
        {
          material.map((item, index) => (
            <article
              key={ index }
              className="relative w-80 mx-auto cursor-pointer group rounded-lg"
              onClick={ () => { showDialog({ title: item.title, content: item.content })  } }
            >
              <img src={ item.img } alt="" />
              <div className="absolute inset-0 bg-[rgba(0,0,0,0.5)] opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out flex items-center justify-center rounded-lg">
                <svg className="w-10 h-10 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" d="M5 12h14m-7 7V5"/>
                </svg>
              </div>
            </article>
          ))
        }
        </div>
      </div>
    </section>
  )
}

export default Material
