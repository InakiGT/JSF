import { useState } from "react";
import "../css/Animations.css";

function MenuHamburguer({ isScrolled }: { isScrolled: boolean }) {
  const [menu, setMenu] = useState(false);

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

      {/* Ingeniería en Computación con cambios en scroll */}
      <a
        className={`text-title absolute left-0 bottom-[-60px] flex px-4 text-left text-white hover:text-black cursor-pointer uppercase xl:static xl:block xl:px-0 transition-transform duration-300 transform origin-top ${
          menu ? "scale-y-100" : "scale-y-0"
        } xl:scale-y-100 ${
          isScrolled
            ? "bg-[#555555] w-[300px] rounded-md py-4"
            : "bg-cua-orange w-[220px] rounded-lg py-5"
        }`}
      >
        Ingeniería en computación
      </a>
    </div>
  );
}

export default MenuHamburguer;
