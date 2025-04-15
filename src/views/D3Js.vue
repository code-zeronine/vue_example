<template>
  <div class="chart-container">
    <svg ref="chartRef" class="d3-chart"></svg>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, watch, onUnmounted } from 'vue'
import * as d3 from 'd3'

interface ChartData {
  month: string
  value: number
}

const chartRef = ref<SVGElement | null>(null)
const data = ref<ChartData[]>([
  { month: '1월', value: 40 },
  { month: '2월', value: 20 },
  { month: '3월', value: 12 },
  { month: '4월', value: 39 },
  { month: '5월', value: 10 },
  { month: '6월', value: 40 }
])

const renderChart = () => {
  if (!chartRef.value) return

  // 컨테이너 크기 가져오기
  const container = d3.select(chartRef.value.parentElement)
  const containerWidth = parseInt(container.style('width'))
  const containerHeight = parseInt(container.style('height'))

  // SVG 크기 설정
  const margin = { top: 20, right: 20, bottom: 30, left: 40 }
  const width = containerWidth - margin.left - margin.right
  const height = containerHeight - margin.top - margin.bottom

  // 기존 차트 제거
  d3.select(chartRef.value).selectAll('*').remove()

  const svg = d3.select(chartRef.value)
    .attr('width', width + margin.left + margin.right)
    .attr('height', height + margin.top + margin.bottom)

  const g = svg.append('g')
    .attr('transform', `translate(${margin.left},${margin.top})`)

  // 스케일 설정
  const x = d3.scaleBand()
    .range([0, width])
    .padding(0.2)
    .domain(data.value.map(d => d.month))

  const y = d3.scaleLinear()
    .range([height, 0])
    .domain([0, d3.max(data.value, d => d.value) || 0])

  // 툴팁 생성
  const tooltip = d3.select('body')
    .append('div')
    .attr('class', 'chart-tooltip')
    .style('opacity', 0)
    .style('position', 'absolute')
    .style('pointer-events', 'none')

  // X축 생성
  g.append('g')
    .attr('transform', `translate(0,${height})`)
    .attr('class', 'x-axis')
    .call(d3.axisBottom(x))
    .selectAll('text')
    .style('text-anchor', 'middle')
    .style('font-size', '12px')
    .style('font-family', "'Inter', sans-serif")

  // Y축 생성
  g.append('g')
    .attr('class', 'y-axis')
    .call(d3.axisLeft(y))
    .selectAll('text')
    .style('font-size', '12px')
    .style('font-family', "'Inter', sans-serif")

  // 그리드 라인 추가
  g.append('g')
    .attr('class', 'grid')
    .call(d3.axisLeft(y)
      .tickSize(-width)
      .tickFormat(() => '')
    )
    .style('stroke-dasharray', '3,3')
    .style('stroke-opacity', 0.2)

  // 바 차트 생성
  g.selectAll('.bar')
    .data(data.value)
    .enter()
    .append('rect')
    .attr('class', 'bar')
    .attr('x', d => x(d.month) || 0)
    .attr('y', d => y(d.value))
    .attr('width', x.bandwidth())
    .attr('height', d => height - y(d.value))
    .attr('fill', '#3B82F6')
    .attr('rx', 4)
    .on('mouseover', (event, d) => {
      tooltip.transition()
        .duration(200)
        .style('opacity', 1)
      tooltip.html(`
        <div class="tooltip-content">
          <div class="font-medium">${d.month}</div>
          <div class="text-sm">판매량: ${d.value}대</div>
        </div>
      `)
        .style('left', `${event.pageX + 10}px`)
        .style('top', `${event.pageY - 28}px`)
    })
    .on('mousemove', (event) => {
      tooltip
        .style('left', `${event.pageX + 10}px`)
        .style('top', `${event.pageY - 28}px`)
    })
    .on('mouseout', () => {
      tooltip.transition()
        .duration(500)
        .style('opacity', 0)
    })
}

// 리사이즈 핸들러
const handleResize = () => {
  renderChart()
}

// 컴포넌트 마운트 시 차트 렌더링 및 리사이즈 이벤트 리스너 추가
onMounted(() => {
  renderChart()
  window.addEventListener('resize', handleResize)
})

// 컴포넌트 언마운트 시 리사이즈 이벤트 리스너 제거
onUnmounted(() => {
  window.removeEventListener('resize', handleResize)
})

// 데이터 변경 시 차트 다시 렌더링
watch(data, () => {
  renderChart()
}, { deep: true })
</script>

<style scoped>
.chart-container {
  @apply bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-4 sm:p-6;
  width: 100%;
  height: 400px;
  position: relative;
}

.d3-chart {
  @apply w-full h-full;
}

:deep(.bar) {
  transition: all 0.3s ease;
}

:deep(.bar:hover) {
  @apply opacity-80;
}

:deep(.x-axis path),
:deep(.y-axis path) {
  @apply stroke-gray-300 dark:stroke-gray-600;
}

:deep(.x-axis line),
:deep(.y-axis line) {
  @apply stroke-gray-300 dark:stroke-gray-600;
}

:deep(.x-axis text),
:deep(.y-axis text) {
  @apply fill-gray-600 dark:fill-gray-400;
}

/* 툴팁 스타일 */
:global(.chart-tooltip) {
  @apply bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 p-2;
  z-index: 10;
}

:global(.tooltip-content) {
  @apply text-gray-900 dark:text-white;
}

/* 다크모드 지원 */
.dark {
  :deep(.grid line) {
    @apply stroke-gray-600;
  }
}

/* 반응형 설정 */
@media (max-width: 640px) {
  .chart-container {
    height: 300px;
  }

  :deep(.x-axis text),
  :deep(.y-axis text) {
    font-size: 10px;
  }
}
</style>