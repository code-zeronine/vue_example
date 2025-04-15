<template>
  <div class="chart-container">
    <div ref="chartRef"></div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import Highcharts from 'highcharts'

const chartRef = ref<HTMLElement | null>(null)
let chart: Highcharts.Chart | null = null

const options: Highcharts.Options = {
  chart: {
    type: 'column',
    backgroundColor: 'transparent',
    style: {
      fontFamily: 'Inter, sans-serif'
    }
  },
  title: {
    text: '월별 판매 현황',
    style: {
      fontSize: '16px',
      fontWeight: 'bold',
      color: '#111827'
    }
  },
  xAxis: {
    categories: ['1월', '2월', '3월', '4월', '5월', '6월'],
    labels: {
      style: {
        color: '#6B7280',
        fontSize: '12px'
      }
    },
    lineColor: '#E5E7EB',
    tickColor: '#E5E7EB'
  },
  yAxis: {
    title: {
      text: '판매량',
      style: {
        color: '#6B7280'
      }
    },
    labels: {
      style: {
        color: '#6B7280',
        fontSize: '12px'
      }
    },
    gridLineColor: '#E5E7EB',
    gridLineDashStyle: 'Dash'
  },
  series: [{
    name: '월별 판매량',
    type: 'column',
    data: [40, 20, 12, 39, 10, 40],
    color: '#3B82F6'
  }],
  plotOptions: {
    column: {
      borderRadius: 4,
      pointPadding: 0.2,
      borderWidth: 0
    }
  },
  tooltip: {
    backgroundColor: 'white',
    borderColor: '#E5E7EB',
    borderRadius: 8,
    style: {
      color: '#111827'
    },
    formatter: function() {
      return `<b>${this.x}</b><br/>${this.series.name}: ${this.y}대`
    }
  },
  credits: {
    enabled: false
  }
}

onMounted(() => {
  if (chartRef.value) {
    chart = Highcharts.chart(chartRef.value, options)
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

:deep(.highcharts-container) {
  @apply w-full h-full;
}

/* 다크모드 지원 */
:deep(.dark) {
  .highcharts-background {
    @apply fill-gray-800;
  }

  .highcharts-title,
  .highcharts-axis-labels text {
    @apply fill-white;
  }

  .highcharts-grid-line {
    @apply stroke-gray-600;
  }

  .highcharts-tooltip {
    @apply fill-gray-800;
  }

  .highcharts-tooltip-box {
    @apply stroke-gray-700;
  }

  .highcharts-tooltip text {
    @apply fill-white;
  }
}
</style>