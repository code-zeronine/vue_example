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
              <div class="absolute left-0 w-48 rounded-b-md shadow-lg bg-gray-100 dark:bg-gray-700 ring-1 ring-black ring-opacity-5 invisible group-hover:visible">
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
              <div class="absolute left-0 w-56 rounded-b-md shadow-lg bg-gray-100 dark:bg-gray-700 ring-1 ring-black ring-opacity-5 invisible group-hover:visible">
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

    <main class="container mx-auto px-4 py-8">
      <router-view />
    </main>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import { useThemeStore } from './stores/theme'
import ThemeToggle from './components/ThemeToggle.vue'

const themeStore = useThemeStore()

onMounted(() => {
  themeStore.initTheme()
})
</script>