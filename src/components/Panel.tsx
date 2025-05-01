import { useState } from "react"
import PanelLeftBar from "./PanelLeftBar"
import Users from "./Users";
import PISPanel from "./PISPanel";
import PTPanel from "./PTPanel";

export default function Panel({ setJwt }: {
  setJwt: React.Dispatch<React.SetStateAction<string>>
}) {
  const [ selected, setSelected ] = useState('usuarios');

  return (
    <div className="flex w-[100%] gap-5">
      <PanelLeftBar setJwt={ setJwt } setSelected={ setSelected } selected={ selected } />
      <aside className="pt-20 px-10 w-[100%]">
        {
          selected === 'usuarios' ? (
            <Users />
          ) : ( selected === 'pis' ? (
            <PISPanel />
          ) :
            <PTPanel />
          )
        }

      </aside>
    </div>
  )
}
