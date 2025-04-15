<template>
  <div class="charts-grid">
    <div class="chart-container">
      <Bar 
        :data="barChartData"
        :options="barChartOptions"
      />
    </div>
    <div class="chart-container">
      <Line
        :data="lineChartData"
        :options="lineChartOptions"
      />
    </div>
    <div class="chart-container">
      <Pie
        :data="pieChartData"
        :options="pieChartOptions"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { Bar, Line, Pie } from 'vue-chartjs'
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale,
  LineElement,
  PointElement,
  ArcElement
} from 'chart.js'
import { ref } from 'vue'

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  ArcElement,
  Title,
  Tooltip,
  Legend
)

// 바 차트 데이터
const barChartData = ref({
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

// 라인 차트 데이터
const lineChartData = ref({
  labels: ['1월', '2월', '3월', '4월', '5월', '6월'],
  datasets: [
    {
      label: '월별 수익',
      borderColor: '#10B981',
      backgroundColor: 'rgba(16, 185, 129, 0.1)',
      data: [150, 200, 180, 250, 220, 300],
      tension: 0.4,
      fill: true
    }
  ]
})

// 파이 차트 데이터
const pieChartData = ref({
  labels: ['현대', '기아', 'BMW', '벤츠', '아우디'],
  datasets: [
    {
      backgroundColor: ['#3B82F6', '#10B981', '#F59E0B', '#EF4444', '#8B5CF6'],
      data: [30, 25, 15, 20, 10]
    }
  ]
})

// 공통 차트 옵션
const commonOptions = {
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
  }
}

// 바 차트 옵션
const barChartOptions = ref({
  ...commonOptions,
  plugins: {
    ...commonOptions.plugins,
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

// 라인 차트 옵션
const lineChartOptions = ref({
  ...commonOptions,
  plugins: {
    ...commonOptions.plugins,
    title: {
      display: true,
      text: '월별 수익 추이',
      font: {
        family: "'Inter', sans-serif",
        size: 16,
        weight: 'bold' as const
      },
      padding: {
        bottom: 30
      }
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
        padding: 10,
        callback: (value: number) => `${value}만원`
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

// 파이 차트 옵션
const pieChartOptions = ref({
  ...commonOptions,
  plugins: {
    ...commonOptions.plugins,
    title: {
      display: true,
      text: '제조사별 판매 비율',
      font: {
        family: "'Inter', sans-serif",
        size: 16,
        weight: 'bold' as const
      },
      padding: {
        bottom: 30
      }
    }
  }
})
</script>

<style scoped>
.charts-grid {
  @apply grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-4;
}

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

/* 모바일 최적화 */
@media (max-width: 640px) {
  .charts-grid {
    @apply gap-4;
  }
  
  .chart-container {
    height: 300px;
  }
}
</style>