import { RefObject } from "react";

type refType = {
  ref: RefObject<HTMLDivElement | null>;
};

function Footer({ ref }: refType) {
  return (
    <footer ref={ ref } className="bg-[#1a252f] mt-20">
      <div className="max-w-6xl w-90 mx-auto md:w-full">
        <ul className="text-[#dddddd] text-center text-sm py-10 flex flex-col gap-2 leading-[25px] md:gap-1">
          <li>Universidad Autonoma Metropolitanta 2025</li>
          <li>Responsables del sitio: Dra. María del Carmen Gómez Fuentes y Dr. Jorge Cervantes Ojeda</li>
          <li>Colaboradores: Iñaki García Tenorio, Kevin Adair López Ugalde, Andres Vicente Peña Macias y Estephane Andrea Aguilar González</li>
          <li>Actualizacion del sitio: Daniel Alejandro García Torres y Alejandro Trejo Cienfuegos</li>
        </ul>
      </div>
    </footer>
  )
}

export default Footer
