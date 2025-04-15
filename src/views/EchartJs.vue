<template>
  <div class="chart-container">
    <Bar 
      :data="chartData"
      :options="chartOptions"
    />
  </div>
</template>

<script setup lang="ts">
import { Bar } from 'vue-chartjs'
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale
} from 'chart.js'
import { ref } from 'vue'

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
)

const chartData = ref({
  labels: ['1월', '2월', '3월', '4월', '5월', '6월'],
  datasets: [
    {
      label: '월별 판매량',
      backgroundColor: '#3B82F6',
      borderRadius: 8,
      data: [40, 20, 12, 39, 10, 40],
      barThickness: 20,
    }
  ]
})

const chartOptions = ref({
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      position: 'top' as const,
      labels: {
        font: {
          family: "'Inter', sans-serif",
          size: 12
        },
        padding: 20,
        usePointStyle: true,
        pointStyle: 'circle'
      }
    },
    title: {
      display: true,
      text: '월별 판매 현황',
      font: {
        family: "'Inter', sans-serif",
        size: 16,
        weight: 'bold' as const
      },
      padding: {
        bottom: 30
      }
    },
    tooltip: {
      backgroundColor: 'white',
      titleColor: '#111827',
      bodyColor: '#111827',
      bodyFont: {
        family: "'Inter', sans-serif"
      },
      titleFont: {
        family: "'Inter', sans-serif",
        weight: 'bold' as const
      },
      padding: 12,
      borderColor: '#E5E7EB',
      borderWidth: 1,
      displayColors: false
    }
  },
  scales: {
    y: {
      beginAtZero: true,
      grid: {
        drawBorder: false,
        color: '#E5E7EB'
      },
      ticks: {
        font: {
          family: "'Inter', sans-serif",
          size: 12
        },
        padding: 10
      }
    },
    x: {
      grid: {
        display: false
      },
      ticks: {
        font: {
          family: "'Inter', sans-serif",
          size: 12
        },
        padding: 10
      }
    }
  }
})
</script>

<style scoped>
.chart-container {
  @apply bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-4 sm:p-6;
  height: 400px;
}

:deep(.chartjs-tooltip) {
  @apply shadow-lg;
}

/* 다크모드 지원 */
:deep(.dark) {
  .chartjs-tooltip {
    @apply bg-gray-800 border-gray-700;
  }
  
  .chartjs-tooltip-header,
  .chartjs-tooltip-body {
    @apply text-white;
  }
}
</style>