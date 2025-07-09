import { useState } from 'react'
import { Link } from 'react-router-dom'

function MenuHamburguer() {
  const [menu, setMenu] = useState(false)

  return (
    <div className="w-full flex flex-col justify-start items-start xl:flex-row xl:gap-2.5 bg-[#ff9900] px-4 lg:w-fit">
      <button
        className="cursor-pointer uppercase text-[rgb(230,203,176)] bg-[rgb(89,63,36)] text-title flex items-center justify-center rounded-md p-3 lg:hidden"
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
      <div className='border-none flex items-center w-full'>
        <Link
          className={`${ !menu ? 'hidden' : 'block' } py-2 text-white font-extrabold text-md uppercase hover:text-black cursor-pointer text-center w-full lg:pt-0 lg:block`}
          to="/panel"
        >Iniciar sesión</Link>
      </div>
    </div>
  )
}

export default MenuHamburguer
