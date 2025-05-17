import { useState } from 'react'
import { Link } from 'react-router-dom'

function MenuHamburguer() {
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
      </div>
    </div>
  )
}

export default MenuHamburguer
