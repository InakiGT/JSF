import { showDialogType } from "../types/Dialog"

const pis: showDialogType[] = [
  {
    title: "SmartTransport",
    subtitle: "¿Dónde está mi transporte? ¿Dónde está mi pasaje?",
    img: "/SmartTransport.png",
    content: [
      {
        content: "Esta aplicación móvil mejora la experiencia en servicios de transporte ofreciendo información en tiempo real sobre la ubicación de unidades, paradas cercanas y tiempos estimados de llegada. Además, cuenta con secciones especiales para conductores y administradores: los choferes pueden monitorear la presencia de pasajeros en las próximas paradas, mientras que los pasajeros pueden saber cuándo llegará su transporte. Esta propuesta requiere que tanto choferes como pasajeros tengan la aplicación instalada y, de popularizarse, resultaría de gran utilidad para ambas partes. (Congreso Internacional de Informática y Computación ANIEI 2025)",
        creator: "Brenda Abigail Valdez Crisanto",
        technologies: "",
        link: "",
        perks: [
          { title: "Optimización del servicio", desc: "Los conductores pueden monitorear la presencia de pasajeros en próximas paradas, facilitando la gestión del recorrido."  },
          { title: "Evita esperas prolongadas", desc: " Reduce la incertidumbre y ayuda a organizar el viaje al conocer la ubicación del transporte, paradas cercanas y tiempos estimados de llegada.", }
        ],
      }
    ]
  },
  {
    title: "Viaja Sin Tránsito",
    subtitle: "",
    img: "/ViajaSinTransito.png",
    content: [
      {
        content: "Fomenta el uso compartido de automóvil entre los estudiantes de la UAM-C. Permite a los conductores crear itinerarios de sus rutas y darlos a conocer para poder así compartir los gastos de gasolina con los pasajeros que acepta. Por otra parte, los pasajeros sin auto viajan de forma más segura y cómoda en vehículos que se dirigen a la universidad. Los alumnos con coche y rutas similares, pueden turnarse para viajar en un solo auto. Con roles específicos, el sistema facilita la gestión de reservas. Para generar un ambiente de confianza los usuarios proporcionan su tira de materias del trimestre en el que el itinerario esté activo.",
        creator: "Iñaki Yarim García Tenorio (idea original: Christian Jiménez Vázquez y Alexis Hernández Gómez)",
        technologies: "",
        link: "",
        perks: [
          { title: "Fomento del transporte colaborativo", desc: "Promueve un ambiente de comunidad y reduce la congestión de tráfico.", },
          { title: "Ahorro de costos", desc: "Comparte gastos de gasolina entre conductores y pasajeros." },
        ]
      }
    ]
  },
  {
    title: "Sistema de donativos para alumnos de la UAM-C",
    subtitle: "",
    img: "/DonativosUAMC.png",
    content: [
      {
        content: "Permite que productos en buen estado encuentren un nuevo uso. Los miembros de la UAM Cuajimalpa pueden hacer o recibir donaciones de productos que ya no utilizan y que podrían ser útiles para cualquier persona que pertenezca a la institución. El donador publica lo que quiere donar y, con la ayuda del sistema, algún usuario puede manifestar su interés. En caso de que haya varios interesados, el donador selecciona al destinatario. Por medio de mensajes, se ponen de acuerdo en el punto de entrega.",
        creator: "César Jovani Rodríguez De Jesús",
        technologies: "JavaServer Faces",
        link: "http://148.206.168.145:8080/JSF2_Prime8/",
        perks: [
          { title: "Sustentabilidad", desc: "Promueve la reutilización de artículos, reduciendo el desperdicio.", },
          { title: "Comunicación y Comunidad", desc: "Conecta a los miembros de la UAM Cuajimalpa, fortaleciendo la colaboración interna." },
        ]
      }
    ]
  },
  {
    title: "Hector Raciel Ledesma Vázquez",
    subtitle: "",
    img: "/PequenosGenios.png",
    content: [
      {
        content: "Proporciona un entorno educativo personalizado y adaptativo que responde a las necesidades y habilidades individuales de cada niño. Fomenta el desarrollo de habilidades cognitivas, emocionales y sociales a través de actividades y juegos interactivos. Incluye juegos educativos diseñados para desarrollar habilidades clave, presentados en diferentes niveles de dificultad. Además, ofrece un sistema de retroalimentación y recompensas que motiva a los niños a través de puntos y logros digitales. Para padres y educadores, la plataforma proporciona un panel de control que permite monitorear el progreso del niño en tiempo real, con indicadores clave y filtros de datos que facilitan un seguimiento detallado. Finalmente, el sistema también incluye notificaciones y recordatorios que aseguran la continuidad del proceso educativo, informando sobre actividades pendientes y recomendaciones de uso.",
        creator: "César Jovani Rodríguez De Jesús",
        technologies: "React y Firebase",
        link: "",
      }
    ]
  },
]

export default pis
