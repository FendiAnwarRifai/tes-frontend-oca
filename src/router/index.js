import Vue from 'vue'
import VueRouter from 'vue-router'
import Sidebar from '../views/sidebar.vue'
import Message from '../views/main/sms.vue'
import Login from '../views/main/login.vue'
import Home from '../views/main/home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'login',
    component: Login
  },

  {
    path: '/i',
    name: 'sidebar',
    component: Sidebar,
    children: [
      {
        path: 'home',
        name: 'home',
        component: Home
      },
      {
        path: 'message',
        name: 'message',
        component: Message
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
