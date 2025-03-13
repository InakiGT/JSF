export enum kind {
  MATERIAL = 'material',
  PROJECT = 'project'
}

export type ContentType = {
  title?: string,
  content: string,
  link: string,
}

export type DialogType = {
  title: string
  subtitle?: string
  content: ContentType[] | never
  kind: kind
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  modalRef: any
}

export type showDialogType = {
  title: string
  subtitle?: string
  content: ContentType[]
}
