import Vue from 'vue'
import VueRouter from 'vue-router'

import App from '@/App.vue'
import routes from '@/routes'
import store from '@/store/index'

Vue.use(VueRouter)

const router = new VueRouter({
  // mode: 'history',   => not working with dynamic routes
  routes
})

new Vue({
  el: '#app',
  router,
  store,
  //data: { store },
  render: h => h(App)
})