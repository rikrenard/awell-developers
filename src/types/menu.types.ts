import { BadgeColorType } from '../components/Badge/badge.types'

export type NavType = { label: string; path: string; slug: string }

export type BadgeType = { label: string; color?: BadgeColorType }

export type SubmenuItemType = {
  title: string
  path: string
  badge?: BadgeType
  openInNewTab?: boolean
}

export type MenuItemType = {
  title: string
  submenu?: SubmenuItemType[]
}

export type MenuType = MenuItemType[]

export type QuickNavType = {
  prev?: {
    label: string
    url: string
  }
  next?: {
    label: string
    url: string
  }
}
