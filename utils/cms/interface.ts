export interface IMetadata {
  title: string
  metaDescription: string
}

export interface IPage extends IMetadata {
  slug: string
  content: string | null
}

export interface ILandingPage extends IPage {
  slug: 'index'
  content: null
}
