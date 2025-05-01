/* eslint-disable @typescript-eslint/no-explicit-any */

export const getToken = async (): Promise<any> => {
  return await cookieStore.get('jwt')
}

export const setToken = async ( token: string ): Promise<any> => {
  await cookieStore.set({ name: 'jwt', value: token })
}

export const removeToken = async () => {
  await cookieStore.delete({ name: 'jwt' })
}
