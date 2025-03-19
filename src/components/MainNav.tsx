import { RefObject, useEffect, useState } from 'react'
import MenuHamburguer from './MenuHambuguer'
import { scrollToRef } from '../helpers/scroll'

type refType = {
  ref: RefObject<HTMLDivElement | null>
}

function MainNav({ ref }: refType) {
  const [ isScrolled, setIsScrolled ] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 60)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav
      className={`bg-cua-orange fixed w-full z-50 transition-all duration-300 ease-in-out h-[178px] ${
        isScrolled ? "lg:h-[80px] shadow-md" : "lg:h-[136px]"
      }`}
    >
      <div
        className={`py-6  max-w-full md:max-w-7xl mx-auto gap-2 p-4 w-full flex flex-col xl:flex-row md:justify-between xl:items-center relative transition-all duration-300 ease-in-out ${
          isScrolled ? "lg:py-3" : "lg:py-6"
        }`}
      >
        <div
          className="flex flex-col gap-1 md:items-center md:flex-row md:gap-2.5"
          onClick={() => scrollToRef(ref)}
        >
          <img
            src="EmblemaUAM2.png"
            alt="uam_logo"
            className={`cursor-pointer transition-all duration-300 ease-in-out w-[90px]
            }`}
          />

          <h1
            className={`uppercase cursor-pointer text-white text-title transition-all duration-300 ease-in-out ${
              isScrolled ? "text-xl xl:text-xl" : "text-xl xl:text-[28px]"
            }`}
          >
            U<span className="hidden md:inline-block">niversidad </span>a
            <span className="hidden md:inline-block">utonoma </span>m
            <span className="hidden md:inline-block">etropolitana</span> - Cuajimalpa
          </h1>
        </div>

        <MenuHamburguer isScrolled={ isScrolled } ref={ ref } />
      </div>
    </nav>
  )
}

export default MainNav
