import { RefObject, useState } from 'react'
import { scrollToRef } from '../helpers/scroll'
import { Link } from 'react-router-dom'

function MenuHamburguer({ isScrolled, ref }: { isScrolled: boolean, ref: RefObject<HTMLDivElement | null> }) {
  const [menu, setMenu] = useState(false)

  return (
    <div className="flex flex-col justify-start items-start gap-4 xl:flex-row xl:gap-2.5">
      <button
        className="cursor-pointer uppercase text-[rgb(230,203,176)] bg-[rgb(89,63,36)] text-title flex items-center justify-center rounded-md p-3 xl:hidden"
        onClick={() => setMenu(!menu)}
      >
        Menu
        <svg
          className="w-6 h-6 text-[rgb(230,203,176)]"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="none"
          viewBox="0 0 24 24"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeWidth="2"
            d="M5 7h14M5 12h14M5 17h14"
          />
        </svg>
      </button>

      <div className='border-none flex items-center w-full bg-[#ff9900] max-h-10'>
        <Link
          className="hidden text-white font-extrabold text-md uppercase hover:text-black cursor-pointer text-center bg-[#ff9900] w-full lg:block"
          to="/panel"
        >Iniciar sesión</Link>
        <span
          className={`text-title py-5 w-full absolute left-0 bottom-[-30px] flex px-4 text-left text-white hover:text-black cursor-pointer uppercase xl:static xl:block xl:px-0 transition-transform duration-300 transform origin-top ${
            menu ? "scale-y-100" : "scale-y-0"
          } xl:scale-y-100 ${
            isScrolled
              ? "bg-[#ff9900] lg:bg-[#555555] lg:w-[300px] lg:rounded-md lg:py-4 ml-2"
              : "bg-[#ff9900] lg:w-[200px] lg:rounded-lg"
          }`}
          onClick={ () => scrollToRef(ref) }
        >
          Ingeniería en computación
        </span>
      </div>
    </div>
  )
}

export default MenuHamburguer
