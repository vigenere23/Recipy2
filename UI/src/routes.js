// Components
import Home from '@/components/pages/Home.vue'
import Test from '@/components/pages/Test.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/test', component: Test, children: [
    { path: 'new', component: Test }
  ]}
]

export default routes