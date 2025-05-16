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

  const validate = entries.every(i => i[1] !== '' || i[0].split('')[i[0].length - 1] === 'o' )

  if ( !validate ) {
    setError('Todos los campos obligatorios (*) deben llenarse')
    return
  }

  const data = entries
    .map(e => [e[0].split('').slice(0, -1).join(''), e[1]]) as [string, FormDataEntryValue][]

  const regex = /content\[(\d+)\]\.(\w*)/
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const newData: { [key: string]: any } = { content: [] }

  data.forEach(e => {
    const match = regex.exec(e[0] as string)

    if (match) {
      const index = parseInt(match[1], 10)
      const field = match[2]
      const value = e[1]

      if (!newData.content[index]) {
        newData.content[index] = {}
      }

      newData.content[index][field] = value
    } else {
      newData[e[0]] = e[1];
    }
  })

  const response = await api[id ? 'patch' : 'post'](`/${ id ? id : '' }`, newData as { [k: string]: FormDataEntryValue; })
  if ( response.status === 201 || response.status === 200 || response.status === 204) {
    setOption('show')
    return
  }

  setError('Error en el servidor, favor de intentar más tarde')
}
