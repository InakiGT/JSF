import { useState } from 'react'
import { Link } from 'react-router-dom'

function PISMenuHamburguer() {
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

      <Link
        className={ `text-title py-5 w-full absolute left-0 bottom-[-40px] flex px-4 text-left text-white hover:text-black cursor-pointer uppercase xl:static xl:block xl:px-0 transition-transform duration-300 transform origin-top ${
          menu ? "scale-y-100" : "scale-y-0"
        } xl:scale-y-100 bg-cua-orange` }
        to="../"
      >
        <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
          <path fillRule="evenodd" d="M11.293 3.293a1 1 0 0 1 1.414 0l6 6 2 2a1 1 0 0 1-1.414 1.414L19 12.414V19a2 2 0 0 1-2 2h-3a1 1 0 0 1-1-1v-3h-2v3a1 1 0 0 1-1 1H7a2 2 0 0 1-2-2v-6.586l-.293.293a1 1 0 0 1-1.414-1.414l2-2 6-6Z" clipRule="evenodd"/>
        </svg>
      </Link>
    </div>
  )
}

export default PISMenuHamburguer
