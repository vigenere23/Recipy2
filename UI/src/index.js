import Vue from 'vue';
import VueRouter from 'vue-router'
import VueStash from 'vue-stash'

import App from '@/App.vue'
import routes from '@/routes'
import store from '@/store'

Vue.use(VueRouter)
Vue.use(VueStash)

const router = new VueRouter({
  // mode: 'history',   => not working with dynamic routes
  routes
})

const app = new Vue({
  router,
  data: { store },
  render: h => h(App)
}).$mount('#app')