import { removeToken } from '../helpers/token'

export default function PanelLeftBar({ setJwt, setSelected, selected }: {
  setJwt: React.Dispatch<React.SetStateAction<string>>,
  setSelected: React.Dispatch<React.SetStateAction<string>>,
  selected: string,
}) {
  const logout = async () => {
    await removeToken()
    setJwt('')
  }

  const isSelected = (li: string) => selected === li ? 'border-b-white border-b-1' : ''

  return (
    <nav>
      <ul className="bg-[var(--cua-orange)] text-white font-black text-xl flex flex-col justify-between h-[100vh] py-20 px-10">
        <div className="flex flex-col gap-5">
          <li onClick={ () => setSelected('usuarios') } className={`cursor-pointer ${ isSelected('usuarios') }`}>Usuarios</li>
          <li onClick={ () => setSelected('pts') } className={`cursor-pointer ${ isSelected('pts') }`}>Proyectos de titulación</li>
          <li onClick={ () => setSelected('pis') } className={`cursor-pointer ${ isSelected('pis') }`}>Proyectos de impacto social</li>
          <li onClick={ () => setSelected('material') } className={`cursor-pointer ${ isSelected('material') }`}>Materiales, cursos y proyectos</li>
        </div>
        <li className="cursor-pointer" onClick={ logout }>Cerrar sesión</li>
      </ul>
    </nav>
  )
}
