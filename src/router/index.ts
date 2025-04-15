import { createRouter, createWebHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import CounterView from '../views/CounterView.vue'
import VehicleOptionsView from '../views/VehicleOptionsView.vue'
import UsedCarStatusView from '../views/UsedCarStatusView.vue'
import EchartJs from '../views/EchartJs.vue'
import D3Js from '../views/D3Js.vue'
import ApexChartsJs from '../views/ApexChartsJs.vue'
import HighchartsJs from '../views/HighchartsJs.vue'
import SoftwareArchitectureView from '../views/SoftwareArchitectureView.vue'
import MobileWebArchitectureView from '../views/MobileWebArchitectureView.vue'
import ChartJsView from '../views/ChartJsView.vue'

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
  },
  {
    path: '/architecture',
    name: 'architecture',
    component: SoftwareArchitectureView
  },
  {
    path: '/mobile-web-architecture',
    name: 'mobile-web-architecture',
    component: MobileWebArchitectureView
  },
  {
    path: '/echart-js',
    name: 'echart-js',
    component: EchartJs
  },
  {
    path: '/d3-js',
    name: 'd3-js',
    component: D3Js
  },
  {
    path: '/apex-charts-js',
    name: 'apex-charts-js',
    component: ApexChartsJs
  },
  {
    path: '/highcharts-js',
    name: 'highcharts-js',
    component: HighchartsJs
  },
  {
    path: '/chartjs',
    name: 'chartjs',
    component: ChartJsView
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router 