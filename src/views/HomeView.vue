<template>
  <div>
    <h1 class="text-3xl font-bold text-gray-900 dark:text-white mb-6">Welcome to Your Vue.js App</h1>
    
    <div class="card">
      <p class="mb-4 text-gray-600 dark:text-gray-300">
        This is a starter template using:
      </p>
      <ul class="list-disc list-inside mb-4 space-y-2 text-gray-600 dark:text-gray-300">
        <li>Vue 3 with Composition API</li>
        <li>Tailwind CSS for styling</li>
        <li>Pinia for state management</li>
        <li>Vue Router for navigation</li>
      </ul>
      
      <p class="mb-4 text-gray-600 dark:text-gray-300">
        Check out the <router-link to="/counter" class="text-primary-600 dark:text-primary-400 hover:text-primary-800 dark:hover:text-primary-300 underline">Counter page</router-link> to see Pinia in action.
      </p>
      
      <div class="mt-6">
        <button @click="navigateToCounter" class="btn-primary">
          Go to Counter Demo
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'

const router = useRouter()

const navigateToCounter = (): void => {
  router.push('/counter')
}
</script>