<template>
  <div>
    <h1 class="text-3xl font-bold text-gray-900 dark:text-white mb-6">Pinia Counter Example</h1>
    
    <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
      <div class="card">
        <h2 class="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-100">Counter: {{ store.count }}</h2>
        <p class="mb-4 text-gray-600 dark:text-gray-300">Double count: {{ store.doubleCount }}</p>
        
        <div class="flex items-center space-x-4 mb-6">
          <button @click="store.decrement" class="btn-secondary">
            Decrement
          </button>
          <button @click="store.increment" class="btn-primary">
            Increment
          </button>
        </div>
        
        <div class="space-y-4">
          <div class="flex items-center space-x-4">
            <input 
              v-model="amountToAdd" 
              type="number" 
              class="form-input max-w-32"
              min="1"
            />
            <button 
              @click="addAmount" 
              class="btn-primary"
              :disabled="!amountToAdd"
            >
              Add Amount
            </button>
          </div>
          
          <button @click="store.reset" class="btn-secondary w-full">
            Reset Counter
          </button>
        </div>
      </div>
      
      <div class="card">
        <h2 class="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-100">Action History</h2>
        
        <div v-if="store.lastFiveChanges.length > 0">
          <div class="bg-gray-50 dark:bg-gray-700 p-4 rounded-md">
            <h3 class="text-sm font-medium text-gray-600 dark:text-gray-300 mb-2">Last 5 actions:</h3>
            <ul class="space-y-2">
              <li v-for="(change, index) in store.lastFiveChanges" :key="index" class="text-sm text-gray-600 dark:text-gray-300">
                <span class="font-medium text-gray-700 dark:text-gray-200">{{ change.action }}</span>
                <span class="text-gray-500 dark:text-gray-400"> - Result: {{ change.count }}</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div v-else class="text-gray-500 dark:text-gray-400 italic">
          No actions recorded yet.
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useCounterStore } from '../stores/counter'

const store = useCounterStore()
const amountToAdd = ref<number>(1)

const addAmount = (): void => {
  if (amountToAdd.value) {
    store.incrementBy(parseInt(amountToAdd.value.toString()))
  }
}
</script>