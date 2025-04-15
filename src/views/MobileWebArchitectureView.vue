<!-- 모바일 웹 아키텍처 뷰 -->
<template>
  <div class="architecture-container">
    <h2 class="text-2xl font-bold mb-4 text-gray-800 dark:text-white">모바일 웹 아키텍처</h2>
    
    <!-- SVG 다이어그램 -->
    <div class="svg-container bg-white dark:bg-gray-900 p-4 rounded-lg shadow-lg overflow-auto">
      <svg viewBox="0 0 800 600" class="architecture-svg">
        <!-- 배경 -->
        <rect width="800" height="600" class="diagram-background" />
        
        <!-- 모바일 디바이스 프레임 -->
        <rect x="50" y="50" width="300" height="500" rx="20" class="device-frame" />
        <rect x="70" y="100" width="260" height="390" rx="5" class="device-screen" />
        <circle cx="200" cy="520" r="20" class="device-button" />
        
        <!-- 백엔드 서버 및 클라우드 서비스 -->
        <rect x="450" y="50" width="300" height="500" rx="10" class="server-frame" />
        
        <!-- 앱 구성 요소 (모바일 내부) -->
        <g class="app-components">
          <rect x="90" y="130" width="220" height="60" rx="5" class="primary-component" />
          <text x="200" y="165" class="component-title">Flutter 앱 (네이티브 컨테이너)</text>
          
          <rect x="90" y="220" width="220" height="170" rx="5" class="secondary-component" />
          <text x="200" y="245" class="component-title">WebView</text>
          <rect x="110" y="260" width="180" height="110" rx="3" class="webview-content" />
          <text x="200" y="300" class="component-text">웹 컨텐츠</text>
          <text x="200" y="320" class="component-subtext">(대부분의 UI 구현)</text>
          
          <rect x="90" y="420" width="105" height="50" rx="5" class="feature-component fido" />
          <text x="142" y="450" class="feature-text">FIDO 2차 인증</text>
          
          <rect x="205" y="420" width="105" height="50" rx="5" class="feature-component push" />
          <text x="257" y="450" class="feature-text">Push 알림</text>
        </g>
        
        <!-- 백엔드 구성 요소 -->
        <g class="backend-components">
          <rect x="470" y="80" width="260" height="60" rx="5" class="primary-component" />
          <text x="600" y="115" class="component-title">백엔드 서버</text>
          
          <rect x="470" y="160" width="260" height="50" rx="5" class="secondary-component" />
          <text x="600" y="190" class="component-text">API 서비스</text>
          
          <rect x="470" y="230" width="260" height="50" rx="5" class="secondary-component" />
          <text x="600" y="260" class="component-text">웹 서비스 (WebView 컨텐츠)</text>
          
          <rect x="470" y="300" width="260" height="50" rx="5" class="secondary-component" />
          <text x="600" y="330" class="component-text">인증 서비스 (FIDO)</text>
          
          <rect x="470" y="370" width="260" height="50" rx="5" class="secondary-component" />
          <text x="600" y="400" class="component-text">푸시 알림 서비스</text>
          
          <rect x="470" y="440" width="260" height="50" rx="5" class="analytics-component" />
          <text x="600" y="470" class="feature-text">Google Analytics</text>
        </g>
        
        <!-- 연결선 -->
        <g class="connections">
          <line x1="310" y1="160" x2="470" y2="160" class="connection-line" />
          <polygon points="460,155 470,160 460,165" class="connection-arrow" />
          
          <line x1="310" y1="255" x2="470" y2="255" class="connection-line" />
          <polygon points="460,250 470,255 460,260" class="connection-arrow" />
          
          <line x1="195" y1="445" x2="470" y2="325" class="connection-line" />
          <polygon points="462,327 470,325 464,333" class="connection-arrow" />
          
          <line x1="310" y1="445" x2="470" y2="395" class="connection-line" />
          <polygon points="462,392 470,395 462,398" class="connection-arrow" />
          
          <line x1="200" y1="390" x2="470" y2="465" class="connection-line" />
          <polygon points="462,461 470,465 462,469" class="connection-arrow" />
        </g>
        
        <!-- 범례 -->
        <g class="legend" transform="translate(50, 560)">
          <g class="legend-item">
            <rect width="15" height="15" class="primary-component" />
            <text x="25" y="13" class="legend-text">Flutter 네이티브</text>
          </g>
          
          <g class="legend-item" transform="translate(150, 0)">
            <rect width="15" height="15" class="webview-content" />
            <text x="25" y="13" class="legend-text">WebView 컨텐츠</text>
          </g>
          
          <g class="legend-item" transform="translate(300, 0)">
            <rect width="15" height="15" class="feature-component fido" />
            <text x="25" y="13" class="legend-text">FIDO 인증</text>
          </g>
          
          <g class="legend-item" transform="translate(425, 0)">
            <rect width="15" height="15" class="feature-component push" />
            <text x="25" y="13" class="legend-text">푸시 알림</text>
          </g>
          
          <g class="legend-item" transform="translate(550, 0)">
            <rect width="15" height="15" class="analytics-component" />
            <text x="25" y="13" class="legend-text">Google Analytics</text>
          </g>
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
  @apply w-full h-[calc(100vh-12rem)] relative bg-white dark:bg-gray-900 rounded-lg shadow-lg;
  touch-action: manipulation;
}

.architecture-svg {
  @apply transition-transform duration-200 ease-in-out;
  transform-origin: center center;
}

.diagram-background {
  @apply fill-gray-50 dark:fill-gray-900/95;
}

.device-frame {
  @apply fill-white dark:fill-gray-800 stroke-gray-400 dark:stroke-gray-600;
  stroke-width: 3;
}

.device-screen {
  @apply fill-blue-50 dark:fill-blue-900/40 stroke-gray-300 dark:stroke-gray-700;
}

.device-button {
  @apply fill-gray-200 dark:fill-gray-700 stroke-gray-300 dark:stroke-gray-600;
}

.server-frame {
  @apply fill-white dark:fill-gray-800 stroke-gray-400 dark:stroke-gray-600;
  stroke-width: 2;
}

.primary-component {
  @apply fill-blue-500 dark:fill-blue-600 stroke-blue-600 dark:stroke-blue-400;
  stroke-width: 1;
}

.secondary-component {
  @apply fill-white dark:fill-gray-800 stroke-gray-300 dark:stroke-gray-600;
  stroke-width: 1;
}

.webview-content {
  @apply fill-blue-50 dark:fill-blue-900/30 stroke-blue-200 dark:stroke-blue-700;
  stroke-width: 1;
}

.feature-component {
  stroke-width: 1;
}

.feature-component.fido {
  @apply fill-yellow-500 dark:fill-yellow-600/90 stroke-yellow-600 dark:stroke-yellow-400;
}

.feature-component.push {
  @apply fill-green-500 dark:fill-green-600/90 stroke-green-600 dark:stroke-green-400;
}

.analytics-component {
  @apply fill-red-500 dark:fill-red-600/90 stroke-red-600 dark:stroke-red-400;
  stroke-width: 1;
}

.component-title {
  @apply fill-white dark:fill-gray-100;
  font-family: 'Inter', sans-serif;
  font-size: 16px;
  font-weight: 600;
  text-anchor: middle;
}

.component-text {
  @apply fill-gray-700 dark:fill-gray-200;
  font-family: 'Inter', sans-serif;
  font-size: 14px;
  text-anchor: middle;
}

.component-subtext {
  @apply fill-gray-500 dark:fill-gray-400;
  font-family: 'Inter', sans-serif;
  font-size: 12px;
  text-anchor: middle;
}

.feature-text {
  @apply fill-white dark:fill-gray-100;
  font-family: 'Inter', sans-serif;
  font-size: 12px;
  text-anchor: middle;
}

.connection-line {
  @apply stroke-gray-400 dark:stroke-gray-500;
  stroke-width: 2;
  stroke-dasharray: 5,5;
}

.connection-arrow {
  @apply fill-gray-400 dark:fill-gray-500;
}

.legend-text {
  @apply fill-gray-700 dark:fill-gray-300;
  font-family: 'Inter', sans-serif;
  font-size: 12px;
}

.zoom-controls {
  @apply fixed bottom-4 right-4 flex gap-2;
}

.zoom-button {
  @apply p-2 bg-blue-500 dark:bg-blue-600 text-white rounded-full shadow-lg 
         hover:bg-blue-600 dark:hover:bg-blue-700 
         focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 
         focus:ring-opacity-50 transition-colors duration-200
         dark:shadow-blue-900/20;
}

/* 모바일 최적화 */
@media (max-width: 640px) {
  .architecture-container {
    @apply p-2;
  }

  .svg-container {
    @apply h-[calc(100vh-8rem)];
  }

  .component-title {
    font-size: 14px;
  }

  .component-text {
    font-size: 12px;
  }

  .component-subtext {
    font-size: 10px;
  }

  .feature-text {
    font-size: 10px;
  }

  .legend-text {
    font-size: 10px;
  }
}

/* 다크모드에서의 호버 효과 */
@media (hover: hover) {
  .primary-component:hover,
  .secondary-component:hover,
  .feature-component:hover {
    @apply opacity-90 cursor-pointer filter brightness-110 dark:brightness-125;
    transition: all 0.2s ease-in-out;
  }
}

/* 다크모드에서의 추가 스타일 */
:deep(.dark) {
  .svg-container {
    @apply shadow-xl shadow-gray-900/20;
  }

  .connection-line {
    @apply opacity-60;
  }

  .device-frame,
  .server-frame {
    @apply shadow-lg shadow-gray-900/10;
  }
}
</style>