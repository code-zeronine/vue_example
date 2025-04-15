<!-- 모바일 웹 아키텍처 뷰 -->
<template>
  <div class="architecture-container">
    <h2 class="text-2xl font-bold mb-4 text-gray-800 dark:text-white">모바일 웹 아키텍처</h2>
    
    <!-- SVG 다이어그램 -->
    <div class="svg-container bg-white dark:bg-gray-800 p-4 rounded-lg shadow-lg overflow-auto">
      <svg viewBox="0 0 800 600" class="architecture-svg">
        <!-- 화살표 마커 정의 -->
        <defs>
          <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
            <polygon points="0 0, 10 3.5, 0 7" class="arrow-head" />
          </marker>
        </defs>

        <!-- 제목 -->
        <text x="400" y="40" class="diagram-title">모바일 웹 아키텍처 (MVVM 패턴)</text>

        <!-- 프론트엔드 레이어 -->
        <g class="layer frontend">
          <rect x="60" y="80" width="680" height="300" class="layer-box frontend-layer" />
          <text x="70" y="100" class="layer-label">프론트엔드 레이어</text>

          <!-- MVVM 컴포넌트 -->
          <g class="mvvm-components">
            <!-- Model -->
            <rect x="100" y="140" width="180" height="120" class="component-box" />
            <text x="190" y="160" class="component-title">Model</text>
            <text x="190" y="190" class="component-text">TypeScript 클래스</text>
            <text x="190" y="220" class="component-text">데이터 모델 및 인터페이스</text>
            <text x="190" y="250" class="component-text">API 서비스</text>

            <!-- ViewModel -->
            <rect x="310" y="140" width="180" height="120" class="component-box" />
            <text x="400" y="160" class="component-title">ViewModel</text>
            <text x="400" y="190" class="component-text">Vue Composition API</text>
            <text x="400" y="220" class="component-text">상태 관리(Pinia)</text>
            <text x="400" y="250" class="component-text">비즈니스 로직</text>

            <!-- View -->
            <rect x="520" y="140" width="180" height="120" class="component-box" />
            <text x="610" y="160" class="component-title">View</text>
            <text x="610" y="190" class="component-text">Vue 컴포넌트</text>
            <text x="610" y="220" class="component-text">TailwindCSS</text>
            <text x="610" y="250" class="component-text">Chart.js</text>
          </g>

          <!-- UI 컴포넌트 -->
          <rect x="150" y="290" width="500" height="70" class="feature-box" />
          <text x="400" y="315" class="component-title">UI 컴포넌트</text>
          <text x="400" y="340" class="component-text">반응형 | 모바일 최적화 | 다크모드 | 접근성</text>
        </g>

        <!-- 백엔드 레이어 -->
        <g class="layer backend">
          <rect x="60" y="400" width="680" height="150" class="layer-box backend-layer" />
          <text x="70" y="420" class="layer-label">백엔드 레이어</text>

          <!-- 백엔드 컴포넌트 -->
          <g class="backend-components">
            <!-- 분석 -->
            <rect x="100" y="440" width="180" height="90" class="component-box" />
            <text x="190" y="460" class="component-title">분석 및 모니터링</text>
            <text x="190" y="485" class="component-text">Google Analytics</text>
            <text x="190" y="510" class="component-text">사용자 행동 추적</text>

            <!-- API -->
            <rect x="310" y="440" width="180" height="90" class="component-box" />
            <text x="400" y="460" class="component-title">백엔드 API</text>
            <text x="400" y="485" class="component-text">RESTful API</text>
            <text x="400" y="510" class="component-text">데이터 처리</text>

            <!-- DB -->
            <rect x="520" y="440" width="180" height="90" class="component-box" />
            <text x="610" y="460" class="component-title">데이터베이스</text>
            <text x="610" y="485" class="component-text">사용자 데이터</text>
            <text x="610" y="510" class="component-text">캐싱 및 저장</text>
          </g>
        </g>

        <!-- 연결선 -->
        <g class="connections">
          <!-- MVVM 연결 -->
          <path d="M 280 200 L 310 200" class="connection-line" />
          <path d="M 490 200 L 520 200" class="connection-line" />
          <path d="M 520 190 L 490 190" class="connection-line" />
          
          <!-- 컴포넌트 연결 -->
          <path d="M 400 260 L 400 290" class="connection-line" />
          
          <!-- 백엔드 연결 -->
          <path d="M 190 360 L 190 440" class="connection-line" />
          <path d="M 400 360 L 400 440" class="connection-line" />
          <path d="M 610 360 L 610 440" class="connection-line" />
          <path d="M 280 485 L 310 485" class="connection-line" />
          <path d="M 490 485 L 520 485" class="connection-line" />
        </g>
      </svg>
    </div>

    <!-- 줌 컨트롤 -->
    <div class="zoom-controls">
      <button
        class="zoom-button"
        @click="zoomIn"
        aria-label="확대"
      >
        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
        </svg>
      </button>
      <button
        class="zoom-button"
        @click="zoomOut"
        aria-label="축소"
      >
        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 12H4" />
        </svg>
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const currentScale = ref(1)
const minScale = 0.5
const maxScale = 2
const scaleStep = 0.1

const zoomIn = () => {
  if (currentScale.value < maxScale) {
    currentScale.value += scaleStep
    updateSvgScale()
  }
}

const zoomOut = () => {
  if (currentScale.value > minScale) {
    currentScale.value -= scaleStep
    updateSvgScale()
  }
}

const updateSvgScale = () => {
  const svg = document.querySelector('.architecture-svg') as SVGElement
  if (svg) {
    svg.style.transform = `scale(${currentScale.value})`
  }
}
</script>

<style scoped>
.architecture-container {
  @apply p-4 w-full h-full overflow-hidden;
}

.svg-container {
  @apply w-full h-[calc(100vh-12rem)] relative;
  touch-action: manipulation;
}

.architecture-svg {
  @apply transition-transform duration-200 ease-in-out;
  transform-origin: center center;
}

.diagram-title {
  @apply fill-gray-800 dark:fill-gray-200;
  font-family: 'Inter', sans-serif;
  font-size: 24px;
  font-weight: bold;
  text-anchor: middle;
}

.layer-box {
  @apply fill-gray-50 dark:fill-gray-800 stroke-gray-300 dark:stroke-gray-600;
  stroke-width: 1;
  stroke-dasharray: 5,5;
  opacity: 0.7;
}

.frontend-layer {
  @apply fill-blue-50/50 dark:fill-blue-900/20;
}

.backend-layer {
  @apply fill-green-50/50 dark:fill-green-900/20;
}

.component-box {
  @apply fill-white dark:fill-gray-800 stroke-blue-500 dark:stroke-blue-400;
  stroke-width: 1.5;
}

.feature-box {
  @apply fill-white dark:fill-gray-800 stroke-green-500 dark:stroke-green-400;
  stroke-width: 1.5;
}

.layer-label {
  @apply fill-gray-600 dark:fill-gray-400;
  font-family: 'Inter', sans-serif;
  font-size: 14px;
}

.component-title {
  @apply fill-gray-800 dark:fill-gray-200;
  font-family: 'Inter', sans-serif;
  font-size: 16px;
  font-weight: 600;
  text-anchor: middle;
}

.component-text {
  @apply fill-gray-600 dark:fill-gray-400;
  font-family: 'Inter', sans-serif;
  font-size: 14px;
  text-anchor: middle;
}

.connection-line {
  @apply stroke-blue-500 dark:stroke-blue-400;
  stroke-width: 2;
  fill: none;
  marker-end: url(#arrowhead);
}

.arrow-head {
  @apply fill-blue-500 dark:fill-blue-400;
}

.zoom-controls {
  @apply fixed bottom-4 right-4 flex gap-2;
}

.zoom-button {
  @apply p-2 bg-blue-500 text-white rounded-full shadow-lg 
         hover:bg-blue-600 focus:outline-none focus:ring-2 
         focus:ring-blue-500 focus:ring-opacity-50
         dark:bg-blue-600 dark:hover:bg-blue-700;
}

/* 모바일 최적화 */
@media (max-width: 640px) {
  .architecture-container {
    @apply p-2;
  }

  .svg-container {
    @apply h-[calc(100vh-8rem)];
  }

  .diagram-title {
    font-size: 18px;
  }

  .component-title {
    font-size: 14px;
  }

  .component-text {
    font-size: 12px;
  }

  .layer-label {
    font-size: 12px;
  }
}
</style>