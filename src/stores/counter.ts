import { defineStore } from 'pinia'

interface CounterState {
  count: number;
  history: HistoryEntry[];
}

interface HistoryEntry {
  action: string;
  timestamp: string;
  count: number;
}

export const useCounterStore = defineStore('counter', {
  state: (): CounterState => ({
    count: 0,
    history: []
  }),
  
  getters: {
    doubleCount: (state: CounterState): number => state.count * 2,
    lastFiveChanges: (state: CounterState): HistoryEntry[] => state.history.slice(-5)
  },
  
  actions: {
    increment(): void {
      this.count++
      this.recordChange('increment')
    },
    
    decrement(): void {
      this.count--
      this.recordChange('decrement')
    },
    
    reset(): void {
      this.count = 0
      this.recordChange('reset')
    },
    
    incrementBy(amount: number): void {
      this.count += amount
      this.recordChange(`increment by ${amount}`)
    },
    
    recordChange(action: string): void {
      this.history.push({
        action,
        timestamp: new Date().toISOString(),
        count: this.count
      })
    }
  }
}) 