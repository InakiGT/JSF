import Api from '../utils/api'

type SetType = React.Dispatch<React.SetStateAction<string>>


export const sendForm = async (
  e: React.FormEvent<HTMLFormElement>,
  api: Api,
  setOption: SetType,
  setError: SetType,
  id?: string,
) => {
  e.preventDefault()
  const formData = new FormData(e.currentTarget)
  const entries = [ ...formData.entries() ]

  const validate = entries.every(i => i[1] !== '')

  if ( !validate ) {
    setError('Todos los campos deben llenarse')
    return
  }

  const response = await api[id ? 'patch' : 'post'](`/${ id ? id : '' }`, Object.fromEntries(formData.entries()))
  console.log(response)
  if ( response.status === 201 || response.status === 200) {
    setOption('show')
    return
  }

  setError('Error en el servidor, favor de intentar más tarde')
}
