export type Project = {
  _id?: string
  title?: string,
  subtitle?: string,
  __v?: string,
  updatedAt?: Date,
  createdAt?: Date,
  img?: string,
  content?: {
    creator?: string,
    content?: string,
    technologies?: string
    link?: string,
  },
}
