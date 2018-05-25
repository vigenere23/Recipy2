import Vue from 'vue';
import VueRouter from 'vue-router'

import App from '@/App.vue'
import routes from '@/routes'

Vue.use(VueRouter)

const router = new VueRouter({
  // mode: 'history',   => not working with dynamic routes
  routes
})

const app = new Vue({
  router,
  render: h => h(App)
}).$mount('#app')