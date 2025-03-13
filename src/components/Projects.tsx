import { useRef, useState } from 'react'

import Dialog from './Dialog'
import { DialogType, kind, showDialogType } from '../types/Dialog'

type refType = {
  ref: React.RefObject<HTMLDivElement | null>
}

function Projects({ ref }: refType) {
  const modalRef = useRef<HTMLDialogElement>(null)

  const [ projects ] = useState([
    {
      title: 'My Quiz',
      img: 'quiz.png',
      content: [
        { content: 'Con MyQuiz, los grupos de estudio tienen una herramienta que les permite estudiar a distancia y de forma asíncrona. La retroalimentación que proporcionan y reciben los miembros del grupo refuerza o corrige los conocimientos del tema de estudio.', link: 'http://148.206.168.174/myquiz/views/loginRegistro.html' },
      ],
    },
    {
      title: 'Tienda de instrumentos musicales',
      img: 'tienda_instrumentos.png',
      content: [
        { content: 'Los clientes puedan hacer sus compras en la tienda con paypal. El usuario “administrador” puede gestionar las modificaciones a los productos de la tienda, mientras que el “cliente” solo puede gestionar sus compras.', link: 'https://storemusic-f0b4b.web.app/' },
      ],
    },
    {
      title: 'Seguimiento médico y físico de pacientes',
      img: 'seguimientoMedico.png',
      content: [
        { content: 'Permite que los clientes de un entrenador deportivo y un médico especializado en medicina del deporte, tengan un seguimiento de sus planes alimenticios, rutinas de ejercicio y citas médicas y/o deportivas. En la parte medica se agregan a la plataforma peso, grasa corporal, la cantidad de ejercicio, etc. También se pueden se agendar citas. En la parte de la rutina física el especialista asigna una lista de ejercicios y el cliente podrá visualizarlos para hacerlos como corresponda.', link: 'https://authentication-app-ec68a.web.app/' },
      ],
    },
    {
      title: 'Administrador de las tareas de proyectos',
      img: 'adminProyectos.png',
      content: [
        { content: 'Facilita la gestión de proyectos y la organización de tareas, orientado a satisfacer las necesidades de un amplio espectro de usuarios, más allá del ámbito académico. Permite a individuos y equipos, ya sean estudiantes, profesionales o entusiastas de cualquier sector, estructurar, planificar y monitorear eficazmente las actividades necesarias para llevar a cabo sus proyectos y tareas.', link: 'https://app-mern-frontend.vercel.app/' },
      ],
    },
    {
      title: 'Sistema de donativos para alumnos de la UAM-C',
      img: 'Intramed.png',
      content: [
        { content: 'Plataforma para la gestión de donativos de artículos en buen estado. Los miembros de la UAM Cuajimalpa podrán hacer o recibir donaciones de productos que ya no utilizan y que podrían ser útiles para cualquier persona que pertenezca a una institución. El donador publica lo que quiere donar y, con la ayuda del sistema, algún usuario puede manifestar su interés. En caso de que haya varios interesados, el donador selecciona al destinatario.', link: 'http://148.206.168.145:8080/JSF2_Prime8/' }
      ],
    },
    {
      title: 'Gestor de compra-venta para alumnos de la UAM-C',
      img: 'EnProceso.png',
      content: [
        {  content: '¿Quieres comprar o vender en un ambiente en el que puedas confiar como la comunidad UAM-Cuajimalpa? MercaUAMC es el lugar indicado para ti. Aquí puedes comprar y vender productos exclusivamente entre alumnos de la comunidad universitaria de la UAM-C. Publica lo que quieres vender y consulta lo que está en oferta. Puedes agendar una cita con el vendedor para comprar los productos que te interesen con la comodidad de adquirirlo en tu escuela. También puedes hacer una pre-orden de un producto que se encuentre agotado y ser informado cuando esté nuevamente disponible.', link: '*' }
      ],
    },
    {
      title: 'Panteritas hambrientas',
      img: 'EnProceso.png',
      content: [
        { content: 'Este proyecto terminal se centra en desarrollar una plataforma en línea dirigida a la comunidad universitaria de la unidad Cuajimalpa. La plataforma facilita la compra y venta de productos alimenticios entre los alumnos. Además, permite la consulta de productos, servicios y menús ofrecidos por la cafetería del campus. Se establecen roles diferenciados para alumnos, empleados y administradores, cada uno con funciones y privilegios específicos. El sistema sirve para gestionar usuarios, tiendas, productos y solicitudes, enfocándose exclusivamente en transacciones y consultas relacionadas con la alimentación dentro del campus.', link: '*' }
      ],
    },
    {
      title: 'Football Manager',
      subtitle: 'Sistema administrador de partidos de football',
      img: 'Football.png',
      content: [
        { title: 'Sistema administrador de partidos de football', content: 'Automatiza la organización de equipos de futbol, tiene dos tipos de usuario: entrenador y jugador. El entrenador puede gestionar los equipos, los calendarios de partidos y entrenamientos y los jugadores. Mientras que el jugador puede consultar los calendarios organizados por el entrenador y recibir las notificaciones de los próximos eventos.', link: 'https://gestionfutbol-c1514.web.app/' }
      ],
    },
    {
      title: 'Duelo por casillas: Migración a React',
      img: 'EnProceso.png',
      content: [
        { content: 'En construcción...', link: '*' }
      ],
    },
    {
      title: 'Ualendarización',
      img: 'EnProceso.png',
      content: [
        { content: 'Ualendarización es una aplicación web diseñada para gestionar recordatorios de clases y eventos importantes en la UAM. Los usuarios pueden registrarse, inscribirse en grupos de UEAs en las que están dados de alta, y recibir notificaciones automáticas de eventos creados por compañeros o profesores. Estos eventos incluyen horarios de clase, exámenes, entregas de tareas y otros eventos relevantes. La plataforma se sincroniza con Google Calendar, permitiendo que los eventos se agreguen automáticamente al calendario personal del usuario. Además, los administradores pueden gestionar grupos, profesores y un calendario escolar oficial, asegurando una organización eficiente y evitando la creación de eventos innecesarios.', link: '*' }
      ],
    },
    {
      title: 'Sistema para red de transporte en la ciudad',
      img: 'EnProceso.png',
      content: [
        { content: 'En construcción...', link: '*' },
      ],
    },
    {
      title: 'Plataforma de Gestión de Historias Clínicas',
      img: 'EnProceso.png',
      content: [
        { content: 'En construcción...', link: '*' },
      ],
    },
    {
      title: 'Sistema para medir la eficiencia de los entrenamientos de hipertrofia',
      img: 'EnProceso.png',
      content: [
        { content: 'En construcción...', link: '*' },
      ],
    },
    {
      title: 'Software para Tienda Online de Videojuego',
      img: 'EnProceso.png',
      content: [
        { content: 'En construcción...', link: '*' },
      ],
    },
    {
      title: 'Plataforma de aprendizaje interactivo para niños con TDAH y autismo',
      img: 'EnProceso.png',
      content: [
        { content: 'Proporcionar un entorno educativo personalizado y adaptativo que responde a las necesidades y habilidades individuales de cada niño. Fomenta el desarrollo de habilidades cognitivas, emocionales y sociales a través de actividades y juegos interactivos. Incluye juegos educativos diseñados para desarrollar habilidades clave, presentados en diferentes niveles de dificultad. Además, ofrece un sistema de retroalimentación y recompensas que motiva a los niños a través de puntos y logros digitales. Para padres y educadores, la plataforma proporciona un panel de control que permite monitorear el progreso del niño en tiempo real, con indicadores clave y filtros de datos que facilitan un seguimiento detallado. Finalmente, el sistema también incluye notificaciones y recordatorios que aseguran la continuidad del proceso educativo, informando sobre actividades pendientes y recomendaciones de uso.', link: '*' }
      ],
    },
    {
      title: 'Sistema para administrar conferencias',
      img: 'EnProceso.png',
      content: [
        { content: 'En construcción...', link: '*' },
      ],
    },
    {
      title: 'Sistema para red de transporte en ciudad, una aplicación móvil',
      img: 'EnProceso.png',
      content: [
        { content: 'En construcción...', link: '*' },
      ],
    },
    {
      title: 'MatchMaster',
      subtitle: 'Plataforma Integral para la Gestión y Análisis en Tiempo Real de Ligas y Partidos de Fútbol',
      img: 'EnProceso.png',
      content: [
        { content: 'MatchMaster es un sistema gestor de partidos de fútbol que ofrece una amplia gama de funcionalidades, desde el registro y acceso seguro de usuarios, hasta la administración detallada de ligas, equipos, jugadores, y árbitros. Los usuarios pueden interactuar con el contenido de las ligas, acceder a estadísticas en tiempo real durante los partidos, y realizar acciones como comentar, compartir contenido y calificar el rendimiento de jugadores y equipos. Además, el sistema asegura la correcta asignación y confirmación de árbitros para los partidos, garantizando una experiencia de gestión completa y eficiente.', link: '*' }
      ],
    },
  ].reverse())
  const [ dialogContent, setDialogContent ] = useState<DialogType>({ title: '', subtitle: '', content: [], kind: kind.MATERIAL, modalRef })

  const showDialog = ({ title, subtitle, content }: showDialogType) => {
    setDialogContent({
      ...dialogContent,
      title,
      subtitle,
      content,
      kind: kind.PROJECT,
    })

    modalRef.current?.showModal()
  }

  return (
    <section ref={ ref } className="mt-20 max-w-6xl mx-auto">
      <Dialog
        title={ dialogContent.title }
        subtitle={ dialogContent.subtitle }
        content={ dialogContent.content }
        kind={ dialogContent.kind }
        modalRef={ modalRef }
      />

      <h2 className="text-title text-4xl mx-auto w-80 uppercase leading-[36px] lg:w-full">Proyectos terminales</h2>

      <div className="flex items-center gap-2 justify-center my-5">
        <svg width="120" height="4" xmlns="http://www.w3.org/2000/svg">
          <rect x="0" y="0" width="120" height="4" rx="5" ry="5" fill="#2c3e50" />
        </svg>
        <svg className="w-10 h-10 text-[#2c3e50]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
          <path fillRule="evenodd" d="M6 2a2 2 0 0 0-2 2v15a3 3 0 0 0 3 3h12a1 1 0 1 0 0-2h-2v-2h2a1 1 0 0 0 1-1V4a2 2 0 0 0-2-2h-8v16h5v2H7a1 1 0 1 1 0-2h1V2H6Z" clipRule="evenodd"/>
        </svg>

        <svg width="120" height="4" xmlns="http://www.w3.org/2000/svg">
          <rect x="0" y="0" width="120" height="4" rx="5" ry="5" fill="#2c3e50" />
        </svg>
      </div>

      <ul className="overflow-x-auto w-90 mx-auto flex gap-0 md:w-full md:px-6">
      { projects.map((project, index) => (
        <li key={ index } className="group flex-none w-[150px] lg:w-[200px] cursor-pointer relative" onClick={ () => showDialog({ title: project.title, subtitle: project.subtitle, content: project.content })  }>
          <img
            src={ project.img }
            alt={`project_img_${index}`}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-[rgba(0,0,0,0.5)] opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out flex items-center justify-center p-10">
            <p className="text-title text-[#DDDDDD] text-xl">{ project.title }</p>
          </div>
        </li>

      ))}
      </ul>
    </section>
  )
}

export default Projects
