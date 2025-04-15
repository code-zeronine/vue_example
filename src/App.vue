<template>
  <div class="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors">
    <header class="bg-white dark:bg-gray-800 shadow">
      <nav class="container mx-auto px-4 py-4">
        <div class="flex justify-between items-center">
          <div class="font-bold text-xl text-primary-600 dark:text-primary-400">
            My Demo
          </div>
          <div class="flex items-center space-x-4">
            <router-link 
              to="/" 
              class="px-3 py-2 rounded-md text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"
              :class="{ 'bg-primary-50 dark:bg-primary-900 text-primary-700 dark:text-primary-300': $route.path === '/' }"
            >
              Home
            </router-link>

            <!-- Example Dropdown -->
            <div class="relative group">
              <button class="px-3 py-2 rounded-t-md text-gray-700 dark:text-gray-200 group-hover:bg-gray-100 dark:group-hover:bg-gray-700 flex items-center">
                Example
                <svg class="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div class="absolute left-0 w-48 rounded-b-md shadow-lg bg-gray-100 dark:bg-gray-700 ring-1 ring-black ring-opacity-5 invisible group-hover:visible">
                <router-link to="/counter" class="block px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-600">
                  Counter
                </router-link>
              </div>
            </div>

            <!-- Mobile List Example Dropdown -->
            <div class="relative group">
              <button class="px-3 py-2 rounded-t-md text-gray-700 dark:text-gray-200 group-hover:bg-gray-100 dark:group-hover:bg-gray-700 flex items-center">
                Mobile List Example
                <svg class="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div class="absolute left-0 w-48 rounded-b-md shadow-lg bg-gray-100 dark:bg-gray-700 ring-1 ring-black ring-opacity-5 invisible group-hover:visible">
                <router-link to="/vehicle-options" class="block px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-600">
                  차량옵션
                </router-link>
                <router-link to="/used-car-status" class="block px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-600">
                  중고차 현황
                </router-link>
                <router-link to="/vehicle-list" class="block px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-600">
                  차량 목록
                </router-link>
              </div>
            </div>

            <!-- Chart Example Dropdown -->
            <div class="relative group">
              <button class="px-3 py-2 rounded-t-md text-gray-700 dark:text-gray-200 group-hover:bg-gray-100 dark:group-hover:bg-gray-700 flex items-center">
                Chart Example
                <svg class="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div class="absolute left-0 w-48 rounded-b-md shadow-lg bg-gray-100 dark:bg-gray-700 ring-1 ring-black ring-opacity-5 invisible group-hover:visible"
                   style="z-index: 1000;">
                <router-link to="/echart-js" class="block px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-600">
                  EchartJS
                </router-link>
                <router-link to="/d3-js" class="block px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-600">
                  D3Js
                </router-link>
                <router-link to="/apex-charts-js" class="block px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-600">
                  ApexCharts
                </router-link>
                <router-link to="/highcharts-js" class="block px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-600">
                  Highcharts
                </router-link>
                <router-link to="/chartjs" class="block px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-600">
                  ChartJs
                </router-link>
              </div>
            </div>

            <!-- Architecture Dropdown -->
            <div class="relative group">
              <button class="px-3 py-2 rounded-t-md text-gray-700 dark:text-gray-200 group-hover:bg-gray-100 dark:group-hover:bg-gray-700 flex items-center">
                Architecture
                <svg class="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div class="absolute left-0 w-56 rounded-b-md shadow-lg bg-gray-100 dark:bg-gray-700 ring-1 ring-black ring-opacity-5 invisible group-hover:visible"
                   style="z-index: 1000;">
                <router-link to="/architecture" class="block px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-600">
                  소프트웨어 구성도
                </router-link>
                <router-link to="/mobile-app-architecture" class="block px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-600">
                  모바일 앱 구성도
                </router-link>
                <router-link to="/mobile-web-architecture" class="block px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-600">
                  모바일 웹 구성도
                </router-link>
                <router-link to="/pc-web-architecture" class="block px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-600">
                  PC 웹 구성도
                </router-link>
              </div>
            </div>

            <router-link 
              to="/about" 
              class="px-3 py-2 rounded-md text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"
              :class="{ 'bg-primary-50 dark:bg-primary-900 text-primary-700 dark:text-primary-300': $route.path === '/about' }"
            >
              About
            </router-link>

            <ThemeToggle />
          </div>
        </div>
      </nav>
    </header>

    <!-- Breadcrumb -->
    <div class="bg-gray-100 dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
      <div class="container mx-auto px-4 py-2">
        <div class="flex items-center space-x-2 text-sm">
          <router-link to="/" class="text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300">
            Home
          </router-link>
          <template v-if="currentRoute.meta.breadcrumb">
            <svg class="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
            </svg>
            <template v-if="currentRoute.meta.parent">
              <span class="text-gray-500 dark:text-gray-400">{{ currentRoute.meta.parent }}</span>
              <svg class="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
              </svg>
            </template>
            <span class="text-gray-700 dark:text-gray-200">{{ currentRoute.meta.breadcrumb }}</span>
          </template>
        </div>
      </div>
    </div>

    <main class="container mx-auto px-4 py-8">
      <router-view />
    </main>
  </div>
</template>

<script setup lang="ts">
import { onMounted, computed } from 'vue'
import { useThemeStore } from './stores/theme'
import { useRoute } from 'vue-router'
import ThemeToggle from './components/ThemeToggle.vue'

const themeStore = useThemeStore()
const route = useRoute()

const currentRoute = computed(() => {
  const path = route.path
  const meta = {
    breadcrumb: '',
    parent: ''
  }

  // Define breadcrumb mapping
  if (path === '/') {
    meta.breadcrumb = 'Home'
  } else if (path === '/counter') {
    meta.breadcrumb = 'Counter'
    meta.parent = 'Example'
  } else if (path === '/vehicle-options') {
    meta.breadcrumb = '차량옵션'
    meta.parent = 'Mobile List Example'
  } else if (path === '/used-car-status') {
    meta.breadcrumb = '중고차 현황'
    meta.parent = 'Mobile List Example'
  } else if (path === '/vehicle-list') {
    meta.breadcrumb = '차량 목록'
    meta.parent = 'Mobile List Example'
  } else if (path === '/echart-js') {
    meta.breadcrumb = 'EchartJS'
    meta.parent = 'Chart Example'
  } else if (path === '/d3-js') {
    meta.breadcrumb = 'D3Js'
    meta.parent = 'Chart Example'
  } else if (path === '/apex-charts-js') {
    meta.breadcrumb = 'ApexCharts'
    meta.parent = 'Chart Example'
  } else if (path === '/highcharts-js') {
    meta.breadcrumb = 'Highcharts'
    meta.parent = 'Chart Example'
  } else if (path === '/chartjs') {
    meta.breadcrumb = 'ChartJs'
    meta.parent = 'Chart Example'
  } else if (path === '/architecture') {
    meta.breadcrumb = '소프트웨어 구성도'
    meta.parent = 'Architecture'
  } else if (path === '/mobile-app-architecture') {
    meta.breadcrumb = '모바일 앱 구성도'
    meta.parent = 'Architecture'
  } else if (path === '/mobile-web-architecture') {
    meta.breadcrumb = '모바일 웹 구성도'
    meta.parent = 'Architecture'
  } else if (path === '/pc-web-architecture') {
    meta.breadcrumb = 'PC 웹 구성도'
    meta.parent = 'Architecture'
  } else if (path === '/about') {
    meta.breadcrumb = 'About'
  }

  return {
    path,
    meta
  }
})

onMounted(() => {
  themeStore.initTheme()
})
</script>

<style scoped>
.group:hover {
  z-index: 50;
}

.group > div {
  transform: translateY(0);
  transition: transform 0.2s ease-out, visibility 0.2s ease-out;
}

.group:hover > div {
  transform: translateY(1px);
}
</style>