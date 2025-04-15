<template>
  <div class="charts-grid">
    <div class="chart-container">
      <div ref="barChartRef"></div>
    </div>
    <div class="chart-container">
      <div ref="lineChartRef"></div>
    </div>
    <div class="chart-container">
      <div ref="pieChartRef"></div>
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

const barOptions: Highcharts.Options = {
  chart: {
    type: 'column',
    backgroundColor: 'transparent'
  },
  title: {
    text: '월별 판매 현황',
    align: 'left',
    style: { fontSize: '16px', fontWeight: 'bold' }
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
    column: { borderRadius: 4 }
  },
  credits: { enabled: false }
}

const lineOptions: Highcharts.Options = {
  chart: {
    type: 'line',
    backgroundColor: 'transparent'
  },
  title: {
    text: '월별 수익 추이',
    align: 'left',
    style: { fontSize: '16px', fontWeight: 'bold' }
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
    line: { lineWidth: 3 }
  },
  credits: { enabled: false }
}

const pieOptions: Highcharts.Options = {
  chart: {
    type: 'pie',
    backgroundColor: 'transparent'
  },
  title: {
    text: '제조사별 판매 비율',
    align: 'left',
    style: { fontSize: '16px', fontWeight: 'bold' }
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
      showInLegend: true
    }
  },
  credits: { enabled: false }
}

onMounted(() => {
  if (barChartRef.value) barChart = Highcharts.chart(barChartRef.value, barOptions)
  if (lineChartRef.value) lineChart = Highcharts.chart(lineChartRef.value, lineOptions)
  if (pieChartRef.value) pieChart = Highcharts.chart(pieChartRef.value, pieOptions)
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
  @apply bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-4 sm:p-6;
  height: 400px;
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
  }
}
</style>