<template>
  <div class="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors">
    <header class="bg-white dark:bg-gray-800 shadow">
      <nav class="container mx-auto px-4 py-4">
        <div class="flex justify-between items-center">
          <div class="font-bold text-xl text-primary-600 dark:text-primary-400">
            Vue + Tailwind + Pinia
          </div>
          <div class="flex items-center space-x-4">
            <router-link 
              v-for="link in navLinks" 
              :key="link.to" 
              :to="link.to"
              class="px-3 py-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-gray-200"
              :class="{ 'bg-primary-50 dark:bg-primary-900 text-primary-700 dark:text-primary-300': $route.path === link.to }"
            >
              {{ link.text }}
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
import { ref, onMounted } from 'vue'
import { useThemeStore } from './stores/theme'
import ThemeToggle from './components/ThemeToggle.vue'

const themeStore = useThemeStore()

interface NavLink {
  to: string;
  text: string;
}

const navLinks = ref<NavLink[]>([
  { to: '/', text: 'Home' },
  { to: '/counter', text: 'Counter' },
  { to: '/vehicle-options', text: '차량 옵션' },
  { to: '/used-car-status', text: '중고차 현황' },
  { to: '/echart-js', text: 'EchartJs' },
  { to: '/d3-js', text: 'D3Js' },
  { to: '/apex-charts-js', text: 'ApexCharts' },
  { to: '/highcharts-js', text: 'Highcharts' },
  { to: '/about', text: 'About' },
  { to: '/architecture', text: '소프트웨어 구성도' },
  { to: '/mobile-web-architecture', text: '모바일 웹 구성도' }
])

onMounted(() => {
  themeStore.initTheme()
})
</script>