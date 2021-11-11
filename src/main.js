import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'

import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap'
import 'bootstrap-icons/font/bootstrap-icons.css'
import 'bootstrap-icons/font/bootstrap-icons.json'

import Register from './components/Register.vue'
import Login from './components/Login.vue'
import Device from './components/Device.vue'
import Dashboard from './components/Dashboard.vue'
import Admin from './components/Admin.vue'

Vue.use(VueRouter)

const routes = [
  { path: '/register', component: Register }, // register
  { path: '/login', component: Login }, // login
  { path: '/device', component: Device }, // list device
  { name: 'dashboard', path: '/dashboard/:device_id', component: Dashboard }, // Dashboard Monitoring
  { path: '/device/admin', component: Admin }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
