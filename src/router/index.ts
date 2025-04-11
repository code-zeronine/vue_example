import { createRouter, createWebHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import CounterView from '../views/CounterView.vue'
import VehicleOptionsView from '../views/VehicleOptionsView.vue'
import UsedCarStatusView from '../views/UsedCarStatusView.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: AboutView
  },
  {
    path: '/counter',
    name: 'counter',
    component: CounterView
  },
  {
    path: '/vehicle-options',
    name: 'vehicle-options',
    component: VehicleOptionsView
  },
  {
    path: '/used-car-status',
    name: 'used-car-status',
    component: UsedCarStatusView
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router 