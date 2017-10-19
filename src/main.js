// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'

import MangeProduct from './components/ManageProduct.vue'
import ProductCatalog from './components/ProductCatlog.vue'

Vue.use(VueRouter)
const routes = [
  {path:'/home',alias:'/',component:ProductCatalog},
  {path:'/manage-products',component:MangeProduct}
]
const router = new VueRouter({
  routes
})


Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
