import React, { useEffect, useState } from 'react'
import Api from '../utils/api'

const IMAGES_URI = import.meta.env.VITE_IMAGE_API_URI + '/images/'

export default function ImageForm({ p }: { p: string | undefined }) {
  const api = new Api(import.meta.env.VITE_IMAGE_API_URI)

  const [ image, setImage ] = useState('')
  const [ path, setPath ] = useState('')

  const createImage = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (!file) return

    const formData = new FormData()
    formData.append('image', file)

    const response = await api.postFormData('/upload', formData)

    if ( response.ok ) {
      const img = (await response.json()).filename
      setImage(img)
      setPath(IMAGES_URI + img)
    }
  }

  const removeImage = async () => {
    if ( !image ) return

    const response = await api.delete('/', { filename: image })

    if ( response.ok ) {
      setImage('')
      setPath('')
      return
    }

    console.error('Ocurrió un error al intentar eliminar la imagen')
  }

  useEffect(() => {
    if ( p ) {
      const regex = RegExp(`${IMAGES_URI}(.*)`)
      const match = regex.exec(p)
      setPath(p)
      setImage(match?.[1] ?? '')
    }
  }, [ p ])

  return (
    <>
      <label htmlFor="image" className="cursor-pointer">Imagen:</label>
      <input hidden id="image" type="file" onChange={ createImage } />
      <input readOnly name='imgo' type="text" placeholder='hola' value={ path } onChange={ () => setPath(path) } />
      {
        image &&
        <span onClick={ removeImage } className="flex justify-end cursor-pointer">
          <img className="w-8" src="https://img.icons8.com/fluent-systems-regular/512/FA5252/trash.png" alt="Icono de basurero" />
        </span>
      }
      <label className="cursor-pointer" htmlFor="image">
        <img className="w-50 mx-auto" src={ image ? IMAGES_URI + image : 'https://pixsector.com/cache/517d8be6/av5c8336583e291842624.png' } alt="Imagen del proyecto de impacto social" />
      </label>
    </>
  )
}
