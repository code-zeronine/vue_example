<template>
  <div class="charts-grid">
    <!-- 바 차트 -->
    <div class="chart-container">
      <h3 class="chart-title">월별 판매 현황</h3>
      <svg ref="barChartRef" class="d3-chart"></svg>
    </div>
    
    <!-- 라인 차트 -->
    <div class="chart-container">
      <h3 class="chart-title">월별 수익 추이</h3>
      <svg ref="lineChartRef" class="d3-chart"></svg>
    </div>
    
    <!-- 파이 차트 -->
    <div class="chart-container">
      <h3 class="chart-title">제조사별 판매 비율</h3>
      <svg ref="pieChartRef" class="d3-chart"></svg>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, watch, onUnmounted } from 'vue'
import * as d3 from 'd3'

interface ChartData {
  month: string
  value: number
}

interface PieData {
  label: string
  value: number
}

const barChartRef = ref<SVGElement | null>(null)
const lineChartRef = ref<SVGElement | null>(null)
const pieChartRef = ref<SVGElement | null>(null)

const barData = ref<ChartData[]>([
  { month: '1월', value: 40 },
  { month: '2월', value: 20 },
  { month: '3월', value: 12 },
  { month: '4월', value: 39 },
  { month: '5월', value: 10 },
  { month: '6월', value: 40 }
])

const lineData = ref<ChartData[]>([
  { month: '1월', value: 150 },
  { month: '2월', value: 200 },
  { month: '3월', value: 180 },
  { month: '4월', value: 250 },
  { month: '5월', value: 220 },
  { month: '6월', value: 300 }
])

const pieData = ref<PieData[]>([
  { label: '현대', value: 30 },
  { label: '기아', value: 25 },
  { label: 'BMW', value: 15 },
  { label: '벤츠', value: 20 },
  { label: '아우디', value: 10 }
])

const renderBarChart = () => {
  if (!barChartRef.value) return

  // Remove existing tooltips before creating new ones
  d3.selectAll('.chart-tooltip').remove()

  // 컨테이너 크기 가져오기
  const container = d3.select(barChartRef.value.parentElement as HTMLElement)
  const containerWidth = parseInt(container.style('width'), 10) || 300
  const containerHeight = parseInt(container.style('height'), 10) || 400

  // SVG 크기 설정
  const margin = { top: 20, right: 20, bottom: 30, left: 40 }
  const width = containerWidth - margin.left - margin.right
  const height = containerHeight - margin.top - margin.bottom - 40 // 제목 공간 확보

  // 기존 차트 제거
  d3.select(barChartRef.value).selectAll('*').remove()

  const svg = d3.select(barChartRef.value)
    .attr('width', width + margin.left + margin.right)
    .attr('height', height + margin.top + margin.bottom)

  const g = svg.append('g')
    .attr('transform', `translate(${margin.left},${margin.top})`)

  // 스케일 설정
  const x = d3.scaleBand()
    .range([0, width])
    .padding(0.2)
    .domain(barData.value.map(d => d.month))

  const y = d3.scaleLinear()
    .range([height, 0])
    .domain([0, d3.max(barData.value, d => d.value) || 0])

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
    .data(barData.value)
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

const renderLineChart = () => {
  if (!lineChartRef.value) return

  // Remove existing tooltips before creating new ones
  d3.selectAll('.chart-tooltip').remove()

  // 컨테이너 크기 가져오기
  const container = d3.select(lineChartRef.value.parentElement as HTMLElement)
  const containerWidth = parseInt(container.style('width'), 10) || 300
  const containerHeight = parseInt(container.style('height'), 10) || 400

  // SVG 크기 설정
  const margin = { top: 20, right: 20, bottom: 30, left: 60 }
  const width = containerWidth - margin.left - margin.right
  const height = containerHeight - margin.top - margin.bottom - 40

  // 기존 차트 제거
  d3.select(lineChartRef.value).selectAll('*').remove()

  const svg = d3.select(lineChartRef.value)
    .attr('width', width + margin.left + margin.right)
    .attr('height', height + margin.top + margin.bottom)

  const g = svg.append('g')
    .attr('transform', `translate(${margin.left},${margin.top})`)

  // 스케일 설정
  const x = d3.scaleBand()
    .range([0, width])
    .padding(0.2)
    .domain(lineData.value.map(d => d.month))

  const y = d3.scaleLinear()
    .range([height, 0])
    .domain([0, d3.max(lineData.value, d => d.value) || 0])

  // 라인 생성기
  const line = d3.line<ChartData>()
    .x(d => (x(d.month) || 0) + x.bandwidth() / 2)
    .y(d => y(d.value))
    .curve(d3.curveMonotoneX)

  // 툴팁 생성
  const tooltip = d3.select('body')
    .append('div')
    .attr('class', 'chart-tooltip')
    .style('opacity', 0)
    .style('position', 'absolute')
    .style('pointer-events', 'none')

  // 그리드 라인 추가
  g.append('g')
    .attr('class', 'grid')
    .call(d3.axisLeft(y)
      .tickSize(-width)
      .tickFormat(() => '')
    )
    .style('stroke-dasharray', '3,3')
    .style('stroke-opacity', 0.2)

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
    .call(d3.axisLeft(y).tickFormat(d => `${d}만원`))
    .selectAll('text')
    .style('font-size', '12px')
    .style('font-family', "'Inter', sans-serif")

  // 라인 그리기
  g.append('path')
    .datum(lineData.value)
    .attr('class', 'line')
    .attr('fill', 'none')
    .attr('stroke', '#10B981')
    .attr('stroke-width', 2)
    .attr('d', line)

  // 포인트 그리기
  g.selectAll('.dot')
    .data(lineData.value)
    .enter()
    .append('circle')
    .attr('class', 'dot')
    .attr('cx', d => (x(d.month) || 0) + x.bandwidth() / 2)
    .attr('cy', d => y(d.value))
    .attr('r', 4)
    .attr('fill', '#10B981')
    .on('mouseover', (event, d) => {
      tooltip.transition()
        .duration(200)
        .style('opacity', 1)
      tooltip.html(`
        <div class="tooltip-content">
          <div class="font-medium">${d.month}</div>
          <div class="text-sm">수익: ${d.value}만원</div>
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

const renderPieChart = () => {
  if (!pieChartRef.value) return

  // Remove existing tooltips before creating new ones
  d3.selectAll('.chart-tooltip').remove()

  // 컨테이너 크기 가져오기
  const container = d3.select(pieChartRef.value.parentElement as HTMLElement)
  const containerWidth = parseInt(container.style('width'), 10) || 300
  const containerHeight = parseInt(container.style('height'), 10) || 400

  // SVG 크기 설정
  const margin = { top: 40, right: 40, bottom: 40, left: 40 }
  const width = containerWidth - margin.left - margin.right
  const height = containerHeight - margin.top - margin.bottom - 40
  // 파이 차트 크기를 전체의 80%로 조정
  const radius = Math.min(width, height) * 0.4

  // 기존 차트 제거
  d3.select(pieChartRef.value).selectAll('*').remove()

  const svg = d3.select(pieChartRef.value)
    .attr('width', width + margin.left + margin.right)
    .attr('height', height + margin.top + margin.bottom)
    .append('g')
    .attr('transform', `translate(${width / 2 + margin.left},${height / 2 + margin.top})`)

  // 색상 스케일
  const color = d3.scaleOrdinal<string>()
    .domain(pieData.value.map(d => d.label))
    .range(['#3B82F6', '#10B981', '#F59E0B', '#EF4444', '#8B5CF6'])

  // 파이 생성기
  const pie = d3.pie<PieData>()
    .value(d => d.value)
    .sort(null)

  const arc = d3.arc<d3.PieArcDatum<PieData>>()
    .innerRadius(0)
    .outerRadius(radius)

  // 레이블을 위한 더 작은 아크
  const labelArc = d3.arc<d3.PieArcDatum<PieData>>()
    .innerRadius(radius * 0.8)
    .outerRadius(radius * 0.8)

  // 툴팁 생성
  const tooltip = d3.select('body')
    .append('div')
    .attr('class', 'chart-tooltip')
    .style('opacity', 0)
    .style('position', 'absolute')
    .style('pointer-events', 'none')

  // 파이 조각 그리기
  const arcs = svg.selectAll('.arc')
    .data(pie(pieData.value))
    .enter()
    .append('g')
    .attr('class', 'arc')

  arcs.append('path')
    .attr('d', arc)
    .attr('fill', d => color(d.data.label))
    .attr('stroke', 'white')
    .style('stroke-width', '2px')
    .on('mouseover', (event, d) => {
      tooltip.transition()
        .duration(200)
        .style('opacity', 1)
      tooltip.html(`
        <div class="tooltip-content">
          <div class="font-medium">${d.data.label}</div>
          <div class="text-sm">판매 비율: ${Math.round(d.data.value / d3.sum(pieData.value, d => d.value) * 100)}%</div>
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

  // 레이블 추가
  arcs.append('text')
    .attr('transform', d => `translate(${labelArc.centroid(d)})`)
    .attr('dy', '.35em')
    .style('text-anchor', 'middle')
    .style('fill', 'white')
    .style('font-size', '12px')
    .style('font-family', "'Inter', sans-serif")
    .text(d => `${Math.round(d.data.value / d3.sum(pieData.value, d => d.value) * 100)}%`)
}

// 리사이즈 핸들러
const handleResize = () => {
  renderBarChart()
  renderLineChart()
  renderPieChart()
}

// 컴포넌트 마운트 시 차트 렌더링 및 리사이즈 이벤트 리스너 추가
onMounted(() => {
  renderBarChart()
  renderLineChart()
  renderPieChart()
  window.addEventListener('resize', handleResize)
})

// 컴포넌트 언마운트 시 리사이즈 이벤트 리스너 제거
onUnmounted(() => {
  window.removeEventListener('resize', handleResize)
})

// 데이터 변경 시 차트 다시 렌더링
watch([barData, lineData, pieData], () => {
  renderBarChart()
  renderLineChart()
  renderPieChart()
}, { deep: true })
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
  @apply bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-4 sm:p-6;
  height: 400px;
}

.chart-title {
  @apply text-lg font-semibold text-gray-900 dark:text-white mb-4;
}

.d3-chart {
  @apply w-full h-full;
}

/* D3 차트 요소 스타일링 */
:deep(.bar) {
  @apply transition-all duration-300 ease-in-out;
}

:deep(.bar:hover) {
  @apply opacity-80;
}

:deep(.line) {
  @apply transition-all duration-300 ease-in-out;
}

:deep(.dot) {
  @apply transition-all duration-300 ease-in-out;
}

:deep(.dot:hover) {
  @apply opacity-80;
  r: 6;
}

:deep(.arc path) {
  @apply transition-all duration-300 ease-in-out;
}

:deep(.arc:hover path) {
  @apply opacity-80;
}

/* 축과 그리드 스타일링 */
:deep(.x-axis path),
:deep(.y-axis path),
:deep(.x-axis line),
:deep(.y-axis line) {
  @apply stroke-gray-300 dark:stroke-gray-600;
}

:deep(.x-axis text),
:deep(.y-axis text) {
  @apply fill-gray-600 dark:fill-gray-400;
}

/* 툴팁 스타일링 */
:global(.chart-tooltip) {
  @apply bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 p-2;
  z-index: 10;
}

:global(.tooltip-content) {
  @apply text-gray-900 dark:text-white;
}

/* 다크모드 그리드 라인 */
.dark :deep(.grid line) {
  @apply stroke-gray-600;
}

/* 모바일 최적화 */
@media (max-width: 640px) {
  .charts-grid {
    gap: 1rem;
  }
  
  .chart-container {
    height: 300px;
  }

  .chart-title {
    @apply text-base;
  }

  :deep(.x-axis text),
  :deep(.y-axis text) {
    font-size: 10px;
  }
}
</style>