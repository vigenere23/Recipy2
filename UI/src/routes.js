// Components
import Recipes from '@/components/pages/Recipes.vue'
import Collections from '@/components/pages/Collections.vue'

const routes = [
  { path: '/', redirect: '/recipes' },
  { path: '/recipes', component: Recipes },
  { path: '/collections/:collection', component: Collections },
  { path: '/collections', component: Collections },
  { path: '*', redirect: '/recipes' /*, component: '404'*/ }
]

export default routes