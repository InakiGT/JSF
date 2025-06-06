import { showDialogType } from "../types/Dialog"

const projects: showDialogType[] = [
  {
    title: "Football Manager",
    subtitle: "",
    content: [
      {
        content: "Automatiza la organización de equipos de fútbol, tiene dos tipos de usuario: entrenador y jugador. El entrenador puede gestionar los equipos, los calendarios de partidos y entrenamientos y los jugadores. Mientras que el jugador puede consultar los calendarios organizados por el entrenador y recibir las notificaciones de los próximos eventos.",
        creator: "Daniel Nieto Dominguez",
        technologies: "React",
        link: "https://gestionfutbol-c1514.web.app"
      }
    ]
  },
  {
    title: "Maxcom Games",
    content: [
      {
        content: "MaxcomGames es una plataforma en línea para la compra de videojuegos que combina seguridad y simplicidad. Permite registrarse de forma tradicional o a través de Google y Facebook, garantizando accesibilidad. La interfaz intuitiva y el catálogo optimizado, con filtros por género y plataforma, facilitan la búsqueda y elección de productos, complementados con descripciones detalladas, imágenes y reseñas de usuarios. El proceso de compra es fluido: se gestionan carritos, se aceptan múltiples métodos de pago y se emiten facturas electrónicas, mientras que la entrega inmediata de claves digitales y notificaciones aseguran el acceso oportuno al contenido. Además, políticas claras de devolución y reembolso refuerzan una experiencia confiable y sin complicaciones.",
        creator: "Max Uriel Sánchez Díaz",
        technologies: "Mongodb, Express y Node.js",
        link: ""
      }
    ]
  },
  {
    title: "Ualendarización",
    content: [
      {
        content: "Para gestionar recordatorios de clases y eventos importantes en la UAM. Los usuarios pueden registrarse, inscribirse en grupos de UEAs en las que están dados de alta, y recibir notificaciones automáticas de eventos creados por compañeros o profesores. Estos eventos incluyen horarios de clase, exámenes, entregas de tareas y otros eventos relevantes. La plataforma se sincroniza con Google Calendar, permitiendo que los eventos se agreguen automáticamente al calendario personal del usuario. Además, los administradores pueden gestionar grupos, profesores y un calendario escolar oficial, asegurando una organización eficiente y evitando la creación de eventos innecesarios.",
        creator: "Bryan Michelle García Díaz",
        technologies: "React y Firebase",
        link: ""
      }
    ]
  },
  {
    title: "MediUAM",
    content: [
      {
        content: "MediUAM es una plataforma integral que mejora la atención médica al facilitar el registro y actualización de datos de pacientes, la gestión de citas y la emisión de recetas electrónicas. Además, permite agregar notas médicas con imágenes, todo en un entorno seguro y fácil de usar, garantizando que solo los usuarios autorizados puedan acceder a información sensible.",
        creator: "Rodrigo Vega Zamora",
        technologies: "Python, Flask y Firebase",
        link: ""
      }
    ]
  },
  {
    title: "ConferPass",
    content: [
      {
        content: "ConferPass es una plataforma integral para gestionar conferencias. Los usuarios pueden registrarse, consultar la agenda, comprar pases con PayPal, seleccionar eventos de interés y, en el caso de pases presenciales, elegir un regalo. Mientras tanto, los administradores cuentan con herramientas para manejar registros de usuarios, ventas, disponibilidad de espacios y detalles de conferencias y ponentes, además de acceder a gráficos sobre la distribución de regalos. En resumen, el sistema optimiza la organización y experiencia de los eventos para participantes y organizadores.",
        creator: "Eduardo González González",
        technologies: "PHP",
        link: ""
      }
    ]
  },
  {
    title: "FootBallMaster",
    content: [
      {
        content: "Es un sistema gestor de torneos de fútbol que permite la creación y administración de torneos de manera eficiente. Los partidos se generan aleatoriamente dentro de las ligas o torneos, y los creadores de partidos son responsables de subir la información de los resultados, así como de asignar la fecha y la hora de los encuentros. Los usuarios normales pueden acceder a la aplicación para consultar los resultados actualizados de cada partido, ver los próximos encuentros y obtener información detallada sobre los torneos. La aplicación móvil garantiza una experiencia simple e intuitiva para todos los usuarios, con acceso a estadísticas en tiempo real y una interfaz amigable para la gestión completa del torneo.",
        creator: "Jessica Lara Cruz",
        technologies: "React y Firebase",
        link: ""
      }
    ]
  },
  {
    title: "IMx Admin",
    subtitle: "Control de jornadas y roles de empleados, automatización de inventario y manejo de órdenes de servicio.",
    content: [
      {
        content: "Es una plataforma web integral que moderniza los procesos operativos de la empresa al centralizar y automatizar tres áreas principales:Gestión del personal: Permite registrar y validar jornadas laborales (incluyendo horarios de entrada, salida y comidas) y asegura el acceso mediante autenticación según roles. Control de inventarios: Facilita la creación, edición y consulta en tiempo real de productos por sucursal, actualizando el inventario automáticamente y gestionando pedidos entre la central y las sucursales. Manejo de órdenes de servicio: Incorpora formularios dinámicos para distintos tipos de venta, genera documentos en PDF automáticamente y mantiene un historial de órdenes para facilitar el seguimiento.",
        creator: "Brandon Chavez Salaverria",
        technologies: "Django y Postgre, se entrega en Firebase)"
      }
    ]
  },
  {
    title: 'AgroConnect',
    subtitle: 'distribución a mediana y gran escala de productos agrícolas.',
    content: [
      {
        content: "AgroConnect es una plataforma en línea que conecta directamente a agricultores y compradores de productos agrícolas. Los clientes pueden explorar, comprar y rastrear sus pedidos de productos como lechugas, maíz, espárragos, etc., mientras que los proveedores gestionan su inventario, procesan pedidos y emiten facturas. En esencia, el sistema facilita una cadena de suministro más ágil y eficiente para alimentos frescos, ofreciendo una alternativa especializada para productos perecederos.",
        creator: "Iñaki Yarim García Tenorio",
        technologies: "TS y NodeJS -SolidJS"
      }
    ]
  },
  {
    title: 'Medición de la eficiencia de los entrenamientos de hipertrofia',
    content: [
      {
        creator: 'Arturo Reyes Paniagua',
        content: 'ControlFit es un sistema web diseñado para monitorear y ayudar a mejorar el estado físico de sus usuarios. Permite registrar datos personales y medidas corporales, calcular el porcentaje de grasa mediante fórmulas específicas para hombres y mujeres, y gestionar el acceso con autenticación automática y recuperación de contraseña. Además, el sistema facilita la visualización del progreso en medidas y ejercicios a través de gráficos personalizados. Entre sus funcionalidades destaca la creación y personalización de rutinas de entrenamiento, las cuales se ajustan automáticamente mediante el método de sobrecarga progresiva según el rendimiento del usuario, permitiendo así una evaluación continua del progreso físico.',
        technologies: 'React, node.js, express y firebase',
      },
    ],
  },
  {
    title: 'NovaMer',
    content: [
      {
        content: 'Permite a los usuarios registrarse, iniciar sesión y gestionar sus cuentas (con la opción de convertirse en vendedor tras verificación). Facilita la navegación, búsqueda y filtrado de productos organizados por departamentos, y permite a los vendedores y administradores crear, editar y publicar productos. Además, los usuarios pueden agregar productos a su carrito o lista de favoritos y realizar compras mediante un proceso de pago seguro (integrado con PayPal y tarjetas). Por último, el sistema gestiona el historial y estado de pedidos para compradores y vendedores.',
        creator: 'Jhoan Daniel Reyes Arenas',
        technologies: 'Firebase',
      }
    ],
  },
  {
    title: 'Seguimiento médico y físico de pacientes',
    content: [
      {
        creator: 'Miguel Etzel García Delgado',
        content: 'Permite que los clientes de un entrenador deportivo y un médico especializado en medicina del deporte, tengan un seguimiento de sus planes alimenticios, rutinas de ejercicio y citas médicas y/o deportivas. En la parte medica se agregan a la plataforma peso, grasa corporal, la cantidad de ejercicio, etc. También se pueden se agendar citas. En la parte de la rutina física el especialista asigna una lista de ejercicios y el cliente podrá visualizarlos para hacerlos como corresponda.',
        link: 'https://authentication-app-ec68a.web.app/',
        technologies: 'Vue.js y Pinia',
      }
    ],
  },
  {
    title: 'Tienda de Instrumentos Musicales.',
    content: [
      {
        creator: 'Eduardo Mauricio Granados Hernández',
        content: 'Los clientes puedan hacer sus compras en la tienda con paypal.  El usuario “administrador” puede gestionar las modificaciones a los productos de la tienda, mientras que el “cliente” solo puede gestionar sus compras.',
        link: 'https://storemusic-f0b4b.web.app/',
        technologies: 'React y firebase'
      }
    ]
  },
  {
    title: 'Gestor de compra-venta para alumnos de la UAM-C',
    content: [
      {
        creator: ' Ricardo Huicochea Pérez',
        content: '¿Quieres comprar o vender en un ambiente en el que puedas confiar como la comunidad UAM-Cuajimalpa? MercaUAMC es el lugar indicado para ti. Aquí puedes comprar y vender productos exclusivamente entre alumnos de la comunidad universitaria de la UAM-C. Publica lo que quieres vender y consulta lo que está en oferta. Puedes agendar una cita con el vendedor para comprar los productos que te interesen con la comodidad de adquirirlo en tu escuela. También puedes hacer una pre-orden de un producto que se encuentre agotado y ser informado cuando esté nuevamente disponible.',
        technologies: 'JavaServer Faces',
      }
    ]
  },
  {
   title: 'Administrador de las tareas de proyectos.' ,
   content: [
      {
        content: 'Facilita la gestión de proyectos y la organización de tareas, orientado a satisfacer las necesidades de un amplio espectro de usuarios, más allá del ámbito académico. Permite a individuos y equipos, ya sean estudiantes, profesionales o entusiastas de cualquier sector, estructurar, planificar y monitorear eficazmente las actividades necesarias para llevar a cabo sus proyectos y tareas.',
        technologies: '(Backend: MongoDB, Express y Node.js, Frontend: Tailwind CSS, Headless UI y React)',
        creator: 'Francisco Ortega García',
        link: 'https://app-mern-frontend.vercel.app/'
      }
   ]
  },
  {
    title: 'MyQuiz',
    subtitle: 'aplicación web para los grupos de estudio entre compañeros',
    content: [
      {
        content: 'Con MyQuiz, los grupos de estudio tienen una herramienta que les permite estudiar a distancia y de forma asíncrona. La retroalimentación que proporcionan y reciben los miembros del grupo refuerza o corrige los conocimientos del tema de estudio.',
        technologies: 'php',
        creator: 'Alan Kevin Bastida Cervantes',
        link: 'http://148.206.168.174/myquiz/views/loginRegistro.html ',
      }
    ]
  },
]

export default projects
