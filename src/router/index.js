import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import auth from '../views/Auth.vue'
import hero from '../views/hero.vue'
import equip from '../views/equip.vue'
const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }  ,{
    path: '/auth',
    name: 'auth',
    component: auth
  }, {
    path: '/hero',
    name: 'hero',
    component: hero

  }, {
    path: '/equip',
    name: 'equip',
    component: equip

  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
