import { ReactNode, RefObject } from 'react'

type refType = {
  ref: RefObject<HTMLDivElement | null>
  children: ReactNode
}

function Footer({ ref, children }: refType) {
  return (
    <footer ref={ ref } className="bg-[#1a252f] mt-20">
      <div className="max-w-6xl w-90 mx-auto md:w-full">
        <ul className="text-[#dddddd] text-center text-sm py-10 flex flex-col gap-2 leading-[25px] md:gap-1">
        { children }
        </ul>
      </div>
    </footer>
  )
}

export default Footer
