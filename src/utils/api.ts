import { getToken } from '../helpers/token'

const headers =({ value }: {
  value: string,
}) => ({
  'Content-Type': 'application/json',
  'Authorization': `Bearer ${ value }`
})

class Api {
  url: string
  currentUrl: string

  constructor (url: string) {
    this.url = url
    this.currentUrl = url
  }

  async get(endpoint: string = ''): Promise<Response> {
    this.currentUrl = this.url + endpoint
    const token = await getToken()

    try {
      const response = await fetch(this.currentUrl, {
        headers: headers(token),
      })

      return response
    } catch (err) {
      console.error(err)
      throw new Error('Error during the consult')
    }
  }

  async post(endpoint: string, data: { [k: string]: FormDataEntryValue; }): Promise<Response> {
    this.currentUrl = this.url + endpoint
    const token = await getToken()

    try {
      const response = await fetch(this.currentUrl, {
        method: 'POST',
        headers: headers(token ? token : { value: '' }),
        body: JSON.stringify({ ...data })
      })

      return response
    } catch (err) {
      console.error(err)
      throw new Error('Error during the consult')
    }
  }

  async patch(endpoint: string, data: { [k: string]: FormDataEntryValue; }): Promise<Response> {
    this.currentUrl = this.url + endpoint
    const token = await getToken()

    try {
      const response = await fetch(this.currentUrl, {
        method: 'PATCH',
        headers: headers(token),
        body: JSON.stringify({ ...data })
      })

      return response
    } catch (err) {
      console.error(err)
      throw new Error('Error during the consult')
    }
  }

  async delete(endpoint: string): Promise<Response> {
    this.currentUrl = this.url + endpoint
    const token = await getToken()

    try {
      const response = await fetch(this.currentUrl, {
        method: 'DELETE',
        headers: headers(token)
      })

      return response
    } catch (err) {
      console.error(err)
      throw new Error('Error during the consult')
    }
  }
}

export default Api
