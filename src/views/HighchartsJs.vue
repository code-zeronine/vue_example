<template>
  <div class="charts-grid">
    <div class="chart-container">
      <h3 class="chart-title">월별 판매 현황</h3>
      <div class="chart-wrapper">
        <div ref="barChartRef"></div>
      </div>
    </div>
    <div class="chart-container">
      <h3 class="chart-title">월별 수익 추이</h3>
      <div class="chart-wrapper">
        <div ref="lineChartRef"></div>
      </div>
    </div>
    <div class="chart-container">
      <h3 class="chart-title">제조사별 판매 비율</h3>
      <div class="chart-wrapper">
        <div ref="pieChartRef"></div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import Highcharts from 'highcharts'

const barChartRef = ref<HTMLElement | null>(null)
const lineChartRef = ref<HTMLElement | null>(null)
const pieChartRef = ref<HTMLElement | null>(null)
let barChart: Highcharts.Chart | null = null
let lineChart: Highcharts.Chart | null = null
let pieChart: Highcharts.Chart | null = null

const commonChartOptions = {
  chart: {
    backgroundColor: 'transparent',
    style: {
      fontFamily: "'Inter', sans-serif"
    }
  },
  title: {
    text: undefined // 타이틀을 HTML로 이동
  },
  credits: { enabled: false }
}

const barOptions: Highcharts.Options = {
  ...commonChartOptions,
  chart: {
    ...commonChartOptions.chart,
    type: 'column'
  },
  xAxis: {
    categories: ['1월', '2월', '3월', '4월', '5월', '6월']
  },
  yAxis: {
    title: { text: '판매량' }
  },
  series: [{
    name: '판매량',
    type: 'column',
    data: [40, 20, 12, 39, 10, 40],
    color: '#3B82F6'
  }],
  plotOptions: {
    column: { 
      borderRadius: 4,
      pointPadding: 0.1,
      groupPadding: 0.1
    }
  }
}

const lineOptions: Highcharts.Options = {
  ...commonChartOptions,
  chart: {
    ...commonChartOptions.chart,
    type: 'line'
  },
  xAxis: {
    categories: ['1월', '2월', '3월', '4월', '5월', '6월']
  },
  yAxis: {
    title: { text: '수익 (만원)' },
    labels: {
      formatter: function() {
        return this.value + '만원'
      }
    }
  },
  series: [{
    name: '수익',
    type: 'line',
    data: [150, 200, 180, 250, 220, 300],
    color: '#10B981'
  }],
  plotOptions: {
    line: { 
      lineWidth: 3,
      marker: {
        radius: 4
      }
    }
  }
}

const pieOptions: Highcharts.Options = {
  ...commonChartOptions,
  chart: {
    ...commonChartOptions.chart,
    type: 'pie'
  },
  series: [{
    type: 'pie',
    name: '판매 비율',
    data: [
      { name: '현대', y: 30, color: '#3B82F6' },
      { name: '기아', y: 25, color: '#10B981' },
      { name: 'BMW', y: 15, color: '#F59E0B' },
      { name: '벤츠', y: 20, color: '#EF4444' },
      { name: '아우디', y: 10, color: '#8B5CF6' }
    ]
  }],
  plotOptions: {
    pie: {
      allowPointSelect: true,
      cursor: 'pointer',
      dataLabels: {
        enabled: true,
        format: '{point.percentage:.1f}%',
        distance: -30,
        style: {
          color: 'white',
          textOutline: 'none'
        }
      },
      showInLegend: true,
      size: '85%'
    }
  }
}

onMounted(() => {
  if (barChartRef.value) {
    barChart = Highcharts.chart(barChartRef.value, {
      ...barOptions,
      chart: {
        ...barOptions.chart,
        height: '100%'
      }
    })
  }
  if (lineChartRef.value) {
    lineChart = Highcharts.chart(lineChartRef.value, {
      ...lineOptions,
      chart: {
        ...lineOptions.chart,
        height: '100%'
      }
    })
  }
  if (pieChartRef.value) {
    pieChart = Highcharts.chart(pieChartRef.value, {
      ...pieOptions,
      chart: {
        ...pieOptions.chart,
        height: '100%'
      }
    })
  }
})

onUnmounted(() => {
  if (barChart) barChart.destroy()
  if (lineChart) lineChart.destroy()
  if (pieChart) pieChart.destroy()
})
</script>

<style scoped>
.charts-grid {
  @apply grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-4;
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

.chart-wrapper {
  position: relative;
  flex: 1;
  min-height: 0;
  width: 100%;
  height: calc(100% - 2.5rem); /* 제목 높이와 마진을 제외한 높이 */
}

:deep(.highcharts-background) {
  @apply fill-transparent;
}

:deep(.dark) {
  .highcharts-title,
  .highcharts-axis-labels text,
  .highcharts-axis-title,
  .highcharts-legend-item text {
    @apply fill-white;
  }

  .highcharts-grid-line {
    @apply stroke-gray-600;
  }
}

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