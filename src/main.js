import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import axios from 'axios';

import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap'
import 'bootstrap-icons/font/bootstrap-icons.css'
import 'bootstrap-icons/font/bootstrap-icons.json'

import Register from './components/Register.vue'
import Login from './components/Login.vue'
import Device from './components/Device.vue'
import Dashboard from './components/Dashboard.vue'
import Admin from './components/Admin.vue'
import Pengaturan from './components/Pengaturan.vue'
import Bantuan from './components/Bantuan.vue'
import Tentang from './components/Tentang.vue'
import LandingPage from './components/LandingPage.vue'
import ResetPassword from './components/ResetPassword.vue'

// Demo Page Components
import DemoDevice from './components/Demo/Device.vue'
import DemoDashboard from './components/Demo/Dashboard.vue'
import DemoPengaturan from './components/Demo/Pengaturan.vue'
import DemoBantuan from './components/Demo/Bantuan.vue'
import DemoTentang from './components/Demo/Tentang.vue'

Vue.use(VueRouter)

const routes = [
  { name: 'landing', path: '/', component: LandingPage },
  { name: 'register', path: '/register', component: Register }, // register
  { name: 'login', path: '/login', component: Login }, // login
  { name: 'reset-password', path:'/reset-password/:token', component: ResetPassword },
  { name: 'device', path: '/device', component: Device }, // list device
  { name: 'admin', path: '/admin', component: Admin },
  { name: 'dashboard', path: '/dashboard/:device_id', component: Dashboard }, // Dashboard Monitoring
  { name: 'pengaturan', path: '/pengaturan/:device_id', component: Pengaturan },
  { name: 'bantuan', path: '/bantuan/:device_id', component: Bantuan },
  { name: 'tentang', path: '/tentang/:device_id', component: Tentang },

  // Demo Page Route
  { name: 'demoDevice', path: '/demo/device', component: DemoDevice },
  { name: 'demoDashboard', path: '/demo/dashboard', component: DemoDashboard }, 
  { name: 'demoPengaturan', path: '/demo/pengaturan', component: DemoPengaturan },
  { name: 'demoBantuan', path: '/demo/bantuan', component: DemoBantuan },
  { name: 'demoTentang', path: '/demo/tentang', component: DemoTentang }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

router.beforeEach((to, from, next)=>{
  // if (to.name === 'reset-password')
  if (
    to.name !== 'login' && localStorage.getItem('token') == null && to.name !== 'landing' && to.name !== 'register' && to.name !== 'reset-password'
    && to.name === 'demoDevice' && to.name === 'demoDashboard' && to.name === 'demoPengaturan' && to.name === 'demoBantuan' && to.name === 'demoTentang'
  ) { next({name: 'login'}) }

  if (to.name === 'login' && localStorage.getItem('token') != null) next(from)
  if (to.name === 'register' && localStorage.getItem('token') != null) next(from)
  if (to.name === 'reset-password' && localStorage.getItem('token') != null) next(from)

  if (from.name !== 'device'){
    if (to.name === 'login' && localStorage.getItem('token') != null) next(from) 
  }
  if (to.name === 'admin'){
    axios.get(`https://api-egg.herokuapp.com/api/admin/validate`, {
        headers: { token: localStorage.getItem('token') }
    })
    .then(res => {
        if (res.status === 200) {
          next()
        }
    },err => {
        next(from)
        console.log("bukan admin")
    });
  }
  else next()
});

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
