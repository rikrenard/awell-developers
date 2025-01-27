import { apiReferenceStartRoute, docsStartRoute } from '../../config/routes'
import { type NavType } from '../../types/menu.types'

export const nav: NavType[] = [
  {
    label: 'Docs',
    path: docsStartRoute,
    slug: 'docs',
  },
  {
    label: 'API Reference',
    path: apiReferenceStartRoute,
    slug: 'api-reference',
  },
]
