<template>
  <div class="chart-container">
    <div ref="chartRef"></div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import ApexCharts from 'apexcharts'

const chartRef = ref<HTMLElement | null>(null)
let chart: ApexCharts | null = null

const options = {
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

onMounted(() => {
  if (chartRef.value) {
    chart = new ApexCharts(chartRef.value, options)
    chart.render()
  }
})

onUnmounted(() => {
  if (chart) {
    chart.destroy()
  }
})
</script>

<style scoped>
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
</style>