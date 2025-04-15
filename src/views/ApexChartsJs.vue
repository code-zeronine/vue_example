<template>
  <div class="charts-grid">
    <!-- 바 차트 -->
    <div class="chart-container">
      <div ref="barChartRef"></div>
    </div>
    
    <!-- 라인 차트 -->
    <div class="chart-container">
      <div ref="lineChartRef"></div>
    </div>
    
    <!-- 파이 차트 -->
    <div class="chart-container">
      <div ref="pieChartRef"></div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import ApexCharts from 'apexcharts'

const barChartRef = ref<HTMLElement | null>(null)
const lineChartRef = ref<HTMLElement | null>(null)
const pieChartRef = ref<HTMLElement | null>(null)
let barChart: ApexCharts | null = null
let lineChart: ApexCharts | null = null
let pieChart: ApexCharts | null = null

// 바 차트 옵션
const barOptions = {
  chart: {
    type: 'bar',
    height: 350,
    toolbar: {
      show: true
    },
    fontFamily: 'Inter, sans-serif'
  },
  series: [{
    name: '월별 판매량',
    data: [40, 20, 12, 39, 10, 40]
  }],
  xaxis: {
    categories: ['1월', '2월', '3월', '4월', '5월', '6월'],
    labels: {
      style: {
        colors: '#6B7280',
        fontSize: '12px',
        fontFamily: 'Inter, sans-serif'
      }
    }
  },
  yaxis: {
    labels: {
      style: {
        colors: '#6B7280',
        fontSize: '12px',
        fontFamily: 'Inter, sans-serif'
      }
    }
  },
  colors: ['#3B82F6'],
  plotOptions: {
    bar: {
      borderRadius: 4,
      columnWidth: '50%'
    }
  },
  dataLabels: {
    enabled: false
  },
  grid: {
    borderColor: '#E5E7EB',
    strokeDashArray: 4
  },
  tooltip: {
    theme: 'light',
    y: {
      formatter: (value: number) => `${value}대`
    }
  },
  title: {
    text: '월별 판매 현황',
    align: 'left' as const,
    style: {
      fontSize: '16px',
      fontWeight: 'bold',
      fontFamily: 'Inter, sans-serif',
      color: '#111827'
    }
  }
}

// 라인 차트 옵션
const lineOptions = {
  chart: {
    type: 'line',
    height: 350,
    toolbar: {
      show: true
    },
    fontFamily: 'Inter, sans-serif'
  },
  series: [{
    name: '월별 수익',
    data: [150, 200, 180, 250, 220, 300]
  }],
  xaxis: {
    categories: ['1월', '2월', '3월', '4월', '5월', '6월'],
    labels: {
      style: {
        colors: '#6B7280',
        fontSize: '12px',
        fontFamily: 'Inter, sans-serif'
      }
    }
  },
  yaxis: {
    labels: {
      style: {
        colors: '#6B7280',
        fontSize: '12px',
        fontFamily: 'Inter, sans-serif'
      },
      formatter: (value: number) => `${value}만원`
    }
  },
  colors: ['#10B981'],
  stroke: {
    curve: 'smooth',
    width: 3
  },
  markers: {
    size: 4,
    colors: ['#10B981'],
    strokeColors: '#fff',
    strokeWidth: 2,
    hover: {
      size: 6
    }
  },
  fill: {
    type: 'gradient',
    gradient: {
      shade: 'light',
      type: 'vertical',
      shadeIntensity: 0.5,
      gradientToColors: ['#D1FAE5'],
      inverseColors: true,
      opacityFrom: 0.6,
      opacityTo: 0.1,
      stops: [0, 100]
    }
  },
  dataLabels: {
    enabled: false
  },
  grid: {
    borderColor: '#E5E7EB',
    strokeDashArray: 4
  },
  tooltip: {
    theme: 'light',
    y: {
      formatter: (value: number) => `${value}만원`
    }
  },
  title: {
    text: '월별 수익 추이',
    align: 'left' as const,
    style: {
      fontSize: '16px',
      fontWeight: 'bold',
      fontFamily: 'Inter, sans-serif',
      color: '#111827'
    }
  }
}

// 파이 차트 옵션
const pieOptions = {
  chart: {
    type: 'pie',
    height: 350,
    toolbar: {
      show: true
    },
    fontFamily: 'Inter, sans-serif'
  },
  series: [30, 25, 15, 20, 10],
  labels: ['현대', '기아', 'BMW', '벤츠', '아우디'],
  colors: ['#3B82F6', '#10B981', '#F59E0B', '#EF4444', '#8B5CF6'],
  legend: {
    position: 'bottom',
    horizontalAlign: 'center',
    fontSize: '14px',
    fontFamily: 'Inter, sans-serif',
    markers: {
      width: 12,
      height: 12,
      strokeWidth: 0,
      strokeColor: '#fff',
      radius: 12
    }
  },
  plotOptions: {
    pie: {
      dataLabels: {
        offset: -5
      }
    }
  },
  dataLabels: {
    formatter: (val: number) => `${Math.round(val)}%`
  },
  tooltip: {
    theme: 'light',
    y: {
      formatter: (value: number) => `${value}대`
    }
  },
  title: {
    text: '제조사별 판매 비율',
    align: 'left' as const,
    style: {
      fontSize: '16px',
      fontWeight: 'bold',
      fontFamily: 'Inter, sans-serif',
      color: '#111827'
    }
  }
}

onMounted(() => {
  if (barChartRef.value) {
    barChart = new ApexCharts(barChartRef.value, barOptions)
    barChart.render()
  }
  if (lineChartRef.value) {
    lineChart = new ApexCharts(lineChartRef.value, lineOptions)
    lineChart.render()
  }
  if (pieChartRef.value) {
    pieChart = new ApexCharts(pieChartRef.value, pieOptions)
    pieChart.render()
  }
})

onUnmounted(() => {
  if (barChart) {
    barChart.destroy()
  }
  if (lineChart) {
    lineChart.destroy()
  }
  if (pieChart) {
    pieChart.destroy()
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

:deep(.apexcharts-tooltip) {
  @apply bg-white dark:bg-gray-800 shadow-lg border border-gray-200 dark:border-gray-700;
}

:deep(.dark) {
  .apexcharts-text,
  .apexcharts-title-text {
    @apply fill-white;
  }

  .apexcharts-gridline {
    @apply stroke-gray-600;
  }

  .apexcharts-tooltip {
    @apply bg-gray-800 border-gray-700;
  }

  .apexcharts-tooltip-title,
  .apexcharts-tooltip-text {
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