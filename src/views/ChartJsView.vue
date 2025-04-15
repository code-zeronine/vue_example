<template>
  <div class="charts-grid">
    <!-- 바 차트 -->
    <div class="chart-container">
      <h3 class="chart-title">월별 판매 현황</h3>
      <div class="chart-wrapper">
        <Bar :data="barChartData" :options="barChartOptions" />
      </div>
    </div>
    
    <!-- 라인 차트 -->
    <div class="chart-container">
      <h3 class="chart-title">월별 수익 추이</h3>
      <div class="chart-wrapper">
        <Line :data="lineChartData" :options="lineChartOptions" />
      </div>
    </div>
    
    <!-- 파이 차트 -->
    <div class="chart-container">
      <h3 class="chart-title">제조사별 판매 비율</h3>
      <div class="chart-wrapper">
        <Pie :data="pieChartData" :options="pieChartOptions" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  ArcElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js'
import ChartDataLabels from 'chartjs-plugin-datalabels'
import type { Scale, CoreScaleOptions } from 'chart.js'
import { Bar, Line, Pie } from 'vue-chartjs'

// Chart.js 컴포넌트 등록
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  ArcElement,
  Title,
  Tooltip,
  Legend,
  ChartDataLabels
)

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
        usePointStyle: true,
        padding: 15
      },
      maxHeight: 40
    },
    tooltip: {
      backgroundColor: 'white',
      titleColor: '#111827',
      bodyColor: '#111827',
      titleFont: {
        family: "'Inter', sans-serif",
        size: 14,
        weight: 'bold' as const
      },
      bodyFont: {
        family: "'Inter', sans-serif",
        size: 13
      },
      padding: 12,
      borderColor: '#E5E7EB',
      borderWidth: 1
    },
    // 파이 차트를 제외한 차트에서는 datalabels 비활성화
    datalabels: {
      display: false
    }
  },
  layout: {
    padding: {
      top: 10,
      right: 15,
      bottom: 10,
      left: 15
    }
  }
}

// 바 차트 데이터 및 옵션
const barChartData = ref({
  labels: ['1월', '2월', '3월', '4월', '5월', '6월'],
  datasets: [{
    label: '판매량',
    data: [40, 20, 12, 39, 10, 40],
    backgroundColor: '#3B82F6',
    borderRadius: 4
  }]
})

const barChartOptions = ref({
  ...commonOptions,
  scales: {
    y: {
      beginAtZero: true,
      grid: {
        color: '#E5E7EB'
      },
      ticks: {
        font: {
          family: "'Inter', sans-serif"
        }
      }
    },
    x: {
      grid: {
        display: false
      },
      ticks: {
        font: {
          family: "'Inter', sans-serif"
        }
      }
    }
  }
})

// 라인 차트 데이터 및 옵션
const lineChartData = ref({
  labels: ['1월', '2월', '3월', '4월', '5월', '6월'],
  datasets: [{
    label: '수익',
    data: [150, 200, 180, 250, 220, 300],
    borderColor: '#10B981',
    backgroundColor: 'rgba(16, 185, 129, 0.1)',
    tension: 0.4,
    fill: true
  }]
})

const lineChartOptions = ref({
  ...commonOptions,
  scales: {
    y: {
      beginAtZero: true,
      grid: {
        color: '#E5E7EB'
      },
      ticks: {
        callback: function(this: Scale<CoreScaleOptions>, tickValue: string | number) {
          return `${tickValue}만원`
        },
        font: {
          family: "'Inter', sans-serif"
        }
      }
    },
    x: {
      grid: {
        display: false
      },
      ticks: {
        font: {
          family: "'Inter', sans-serif"
        }
      }
    }
  }
})

// 파이 차트 데이터 및 옵션
const pieChartData = ref({
  labels: ['현대', '기아', 'BMW', '벤츠', '아우디'],
  datasets: [{
    data: [30, 25, 15, 20, 10],
    backgroundColor: [
      '#3B82F6',
      '#10B981',
      '#F59E0B',
      '#EF4444',
      '#8B5CF6'
    ]
  }]
})

const pieChartOptions = ref({
  ...commonOptions,
  plugins: {
    ...commonOptions.plugins,
    // 파이 차트에서만 datalabels 활성화
    datalabels: {
      color: '#FFFFFF',
      font: {
        weight: 'bold' as const,
        size: 14,
        family: "'Inter', sans-serif"
      },
      display: true,
      formatter: (value: number, context: any) => {
        const total = context.dataset.data.reduce((a: number, b: number) => a + b, 0)
        const percentage = Math.round((value / total) * 100)
        return `${percentage}%`
      },
      textAlign: 'center' as const
    },
    tooltip: {
      ...commonOptions.plugins.tooltip,
      callbacks: {
        label: (context: any) => {
          const label = context.label || ''
          const value = context.raw || 0
          const total = context.dataset.data.reduce((a: number, b: number) => a + b, 0)
          const percentage = Math.round((value / total) * 100)
          return `${label}: ${percentage}%`
        }
      }
    }
  }
})
</script>

<style scoped>
.charts-grid {
  display: grid;
  grid-template-columns: repeat(1, minmax(0, 1fr));
  gap: 1.5rem;
  padding: 1rem;
}

@media (min-width: 768px) {
  .charts-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

@media (min-width: 1024px) {
  .charts-grid {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
}

.chart-container {
  @apply bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700;
  height: 400px;
  padding: 1rem;
  display: flex;
  flex-direction: column;
}

.chart-title {
  @apply text-lg font-semibold text-gray-900 dark:text-white;
  margin-bottom: 0.75rem;
  flex-shrink: 0;
}

/* Chart wrapper to control dimensions */
.chart-wrapper {
  position: relative;
  flex: 1;
  min-height: 0;
  width: 100%;
  height: calc(100% - 2.5rem); /* 제목 높이와 마진을 제외한 높이 */
}

:deep(.chart-wrapper canvas) {
  width: 100% !important;
  height: 100% !important;
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
  .chart-container {
    height: 300px;
    padding: 0.75rem;
  }

  .chart-title {
    @apply text-base;
    margin-bottom: 0.5rem;
  }

  .chart-wrapper {
    height: calc(100% - 2rem); /* 모바일에서 제목 높이와 마진 조정 */
  }
}
</style> 