import { atom } from 'recoil'
import { Page } from './cms/interface'

// eslint-disable-next-line import/prefer-default-export
export const currentPageState = atom<Page | null>({
  key: 'currentPage',
  default: null,
})
