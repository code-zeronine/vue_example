<template>
  <div class="max-w-7xl mx-auto px-4 py-8">
    <h1 class="text-2xl font-bold text-gray-900 dark:text-white mb-6">차량 목록</h1>
    
    <!-- Grid.js 테이블 -->
    <div ref="gridWrapper" class="bg-white dark:bg-gray-800 rounded-lg shadow overflow-hidden"></div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue'
import { Grid } from 'gridjs'
import 'gridjs/dist/theme/mermaid.css'

interface Vehicle {
  id: number;
  manufacturer: string;
  model: string;
  year: number;
  price: number;
  status: 'available' | 'pending' | 'sold';
}

// 샘플 데이터 20개로 확장
const vehicles: Vehicle[] = [
  { id: 1, manufacturer: '현대', model: '아반떼', year: 2023, price: 25000000, status: 'available' },
  { id: 2, manufacturer: '기아', model: 'K5', year: 2022, price: 32000000, status: 'pending' },
  { id: 3, manufacturer: 'BMW', model: '3시리즈', year: 2023, price: 55000000, status: 'sold' },
  { id: 4, manufacturer: '벤츠', model: 'C클래스', year: 2022, price: 58000000, status: 'available' },
  { id: 5, manufacturer: '아우디', model: 'A4', year: 2023, price: 52000000, status: 'pending' },
  { id: 6, manufacturer: '현대', model: '그랜저', year: 2023, price: 45000000, status: 'available' },
  { id: 7, manufacturer: '기아', model: 'K8', year: 2023, price: 42000000, status: 'sold' },
  { id: 8, manufacturer: 'BMW', model: '5시리즈', year: 2022, price: 75000000, status: 'available' },
  { id: 9, manufacturer: '현대', model: '투싼', year: 2023, price: 35000000, status: 'available' },
  { id: 10, manufacturer: '기아', model: '스포티지', year: 2023, price: 36000000, status: 'pending' },
  { id: 11, manufacturer: '벤츠', model: 'E클래스', year: 2023, price: 85000000, status: 'available' },
  { id: 12, manufacturer: 'BMW', model: 'X5', year: 2023, price: 95000000, status: 'sold' },
  { id: 13, manufacturer: '아우디', model: 'Q5', year: 2023, price: 75000000, status: 'available' },
  { id: 14, manufacturer: '현대', model: '팰리세이드', year: 2023, price: 55000000, status: 'pending' },
  { id: 15, manufacturer: '기아', model: '카니발', year: 2023, price: 52000000, status: 'available' },
  { id: 16, manufacturer: '벤츠', model: 'GLC', year: 2023, price: 82000000, status: 'sold' },
  { id: 17, manufacturer: 'BMW', model: 'X3', year: 2023, price: 78000000, status: 'available' },
  { id: 18, manufacturer: '아우디', model: 'Q7', year: 2023, price: 92000000, status: 'pending' },
  { id: 19, manufacturer: '현대', model: '캐스퍼', year: 2023, price: 20000000, status: 'available' },
  { id: 20, manufacturer: '기아', model: 'EV6', year: 2023, price: 58000000, status: 'sold' }
]

// 가격 포맷 함수
const formatPrice = (price: number): string => {
  return new Intl.NumberFormat('ko-KR', {
    style: 'currency',
    currency: 'KRW',
    maximumFractionDigits: 0
  }).format(price)
}

// 상태 라벨 함수
const getStatusLabel = (status: string): string => {
  const labels: Record<string, string> = {
    available: '판매중',
    pending: '예약중',
    sold: '판매완료'
  }
  return labels[status] || status
}

// 상태별 스타일 클래스
const getStatusClass = (status: string): string => {
  const classes: Record<string, string> = {
    available: 'bg-green-100 text-green-800',
    pending: 'bg-yellow-100 text-yellow-800',
    sold: 'bg-gray-100 text-gray-800'
  }
  return `px-2 py-1 text-xs rounded-full ${classes[status] || ''}`
}

const gridWrapper = ref<HTMLElement | null>(null)
let grid: Grid | null = null

onMounted(() => {
  if (gridWrapper.value) {
    grid = new Grid({
      columns: [
        { id: 'manufacturer', name: '제조사' },
        { id: 'model', name: '모델' },
        { id: 'year', name: '연식' },
        { 
          id: 'price', 
          name: '가격',
          formatter: (cell: number) => formatPrice(cell)
        },
        { 
          id: 'status', 
          name: '상태',
          formatter: (cell: string) => {
            const label = getStatusLabel(cell)
            const className = getStatusClass(cell)
            return `<span class="${className}">${label}</span>`
          }
        }
      ],
      data: vehicles.map(vehicle => [
        vehicle.manufacturer,
        vehicle.model,
        vehicle.year,
        vehicle.price,
        vehicle.status
      ]),
      pagination: {
        limit: 10
      },
      language: {
        pagination: {
          previous: '이전',
          next: '다음',
          showing: '보기',
          results: () => '건',
          of: '중',
          to: '-',
          pages: '페이지'
        }
      },
      style: {
        table: {
          width: '100%'
        },
        th: {
          'background-color': 'rgb(249, 250, 251)',
          'padding': '0.75rem',
          'font-size': '0.75rem',
          'text-transform': 'uppercase',
          'color': 'rgb(107, 114, 128)',
          'font-weight': '500',
          'text-align': 'left'
        },
        td: {
          'padding': '0.75rem',
          'font-size': '0.875rem',
          'color': 'rgb(17, 24, 39)'
        }
      }
    }).render(gridWrapper.value)
  }
})

onBeforeUnmount(() => {
  if (grid) {
    grid.destroy()
  }
})
</script>

<style>
.gridjs-wrapper {
  border: none !important;
  box-shadow: none !important;
}

.gridjs-table {
  width: 100%;
}

.gridjs-pagination {
  border-top: 1px solid #e5e7eb;
  padding: 1rem;
}

.gridjs-pagination .gridjs-pages button {
  border: 1px solid #e5e7eb;
  padding: 0.5rem 1rem;
  margin: 0 0.25rem;
  border-radius: 0.375rem;
}

.gridjs-pagination .gridjs-pages button:hover {
  background-color: #f3f4f6;
}

.gridjs-pagination .gridjs-pages button.gridjs-currentPage {
  background-color: #3b82f6;
  color: white;
  border-color: #3b82f6;
}

.dark .gridjs-wrapper {
  background-color: rgb(31, 41, 55);
}

.dark .gridjs-table th {
  background-color: rgb(17, 24, 39);
  color: rgb(209, 213, 219);
}

.dark .gridjs-table td {
  color: rgb(209, 213, 219);
}

.dark .gridjs-pagination {
  background-color: rgb(31, 41, 55);
  color: rgb(209, 213, 219);
}

.dark .gridjs-pagination button {
  background-color: rgb(31, 41, 55);
  color: rgb(209, 213, 219);
  border-color: rgb(75, 85, 99);
}

.dark .gridjs-pagination button:hover {
  background-color: rgb(55, 65, 81);
}

.dark .gridjs-pagination button.gridjs-currentPage {
  background-color: #3b82f6;
  color: white;
}
</style> 