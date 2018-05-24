// Components
import Home from '@/components/pages/Home.vue'
import Collections from '@/components/pages/Collections.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/collections', component: Collections },
  { path: '/collections/:collection', component: Collections }
]

export default routes