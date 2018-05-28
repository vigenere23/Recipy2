// Components
import Recipes from '@/components/pages/Recipes.vue'
import Collections from '@/components/pages/Collections.vue'

const routes = [
  { path: '/', redirect: '/recipes/all' },
  { path: '/recipes/:type', component: Recipes },
  { path: '/recipes', redirect: '/recipes/all' },
  { path: '/collections/:collection', component: Collections },
  { path: '/collections', component: Collections },
  { path: '*', redirect: '/recipes' /*, component: '404'*/ }
]

export default routes