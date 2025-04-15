<!-- 소프트웨어 구성도 뷰 -->
<template>
  <div class="architecture-container">
    <h2 class="text-2xl font-bold mb-4 text-gray-800 dark:text-white">소프트웨어 구성도</h2>
    
    <!-- SVG 다이어그램 -->
    <div class="svg-container bg-white dark:bg-gray-800 p-4 rounded-lg shadow-lg overflow-auto">
      <svg viewBox="0 0 800 600" xmlns="http://www.w3.org/2000/svg">
        <!-- 배경 -->
        <rect width="800" height="600" fill="#f8f9fa" />
        
        <!-- 모바일 디바이스 프레임 -->
        <rect x="50" y="50" width="300" height="500" rx="20" fill="#ffffff" stroke="#333333" stroke-width="3" />
        <rect x="70" y="100" width="260" height="390" rx="5" fill="#f0f5ff" stroke="#dddddd" stroke-width="1" />
        <circle cx="200" cy="520" r="20" fill="#eeeeee" stroke="#dddddd" stroke-width="1" />
        
        <!-- 백엔드 서버 및 클라우드 서비스 -->
        <rect x="450" y="50" width="300" height="500" rx="10" fill="#ffffff" stroke="#333333" stroke-width="2" />
        
        <!-- 앱 구성 요소 (모바일 내부) -->
        <rect x="90" y="130" width="220" height="60" rx="5" fill="#4285f4" stroke="#2a75f3" stroke-width="1" />
        <text x="200" y="165" font-family="Arial" font-size="16" text-anchor="middle" fill="white">Flutter 앱 (네이티브 컨테이너)</text>
        
        <rect x="90" y="220" width="220" height="170" rx="5" fill="#ffffff" stroke="#dddddd" stroke-width="1" />
        <text x="200" y="245" font-family="Arial" font-size="16" text-anchor="middle" fill="#333333">WebView</text>
        <rect x="110" y="260" width="180" height="110" rx="3" fill="#e8f0fe" stroke="#bbcef9" stroke-width="1" />
        <text x="200" y="300" font-family="Arial" font-size="14" text-anchor="middle" fill="#666666">웹 컨텐츠</text>
        <text x="200" y="320" font-family="Arial" font-size="12" text-anchor="middle" fill="#666666">(대부분의 UI 구현)</text>
        
        <rect x="90" y="420" width="105" height="50" rx="5" fill="#fbbc05" stroke="#e8a800" stroke-width="1" />
        <text x="142" y="450" font-family="Arial" font-size="12" text-anchor="middle" fill="white">FIDO 2차 인증</text>
        
        <rect x="205" y="420" width="105" height="50" rx="5" fill="#34a853" stroke="#2d8746" stroke-width="1" />
        <text x="257" y="450" font-family="Arial" font-size="12" text-anchor="middle" fill="white">Push 알림</text>
        
        <!-- 백엔드 구성 요소 -->
        <rect x="470" y="80" width="260" height="60" rx="5" fill="#4285f4" stroke="#2a75f3" stroke-width="1" />
        <text x="600" y="115" font-family="Arial" font-size="16" text-anchor="middle" fill="white">백엔드 서버</text>
        
        <rect x="470" y="160" width="260" height="50" rx="5" fill="#ffffff" stroke="#dddddd" stroke-width="1" />
        <text x="600" y="190" font-family="Arial" font-size="14" text-anchor="middle" fill="#333333">API 서비스</text>
        
        <rect x="470" y="230" width="260" height="50" rx="5" fill="#ffffff" stroke="#dddddd" stroke-width="1" />
        <text x="600" y="260" font-family="Arial" font-size="14" text-anchor="middle" fill="#333333">웹 서비스 (WebView 컨텐츠)</text>
        
        <rect x="470" y="300" width="260" height="50" rx="5" fill="#ffffff" stroke="#dddddd" stroke-width="1" />
        <text x="600" y="330" font-family="Arial" font-size="14" text-anchor="middle" fill="#333333">인증 서비스 (FIDO)</text>
        
        <rect x="470" y="370" width="260" height="50" rx="5" fill="#ffffff" stroke="#dddddd" stroke-width="1" />
        <text x="600" y="400" font-family="Arial" font-size="14" text-anchor="middle" fill="#333333">푸시 알림 서비스</text>
        
        <rect x="470" y="440" width="260" height="50" rx="5" fill="#ea4335" stroke="#d33426" stroke-width="1" />
        <text x="600" y="470" font-family="Arial" font-size="14" text-anchor="middle" fill="white">Google Analytics</text>
        
        <!-- 연결선 -->
        <!-- Flutter와 백엔드 연결 -->
        <line x1="310" y1="160" x2="470" y2="160" stroke="#333333" stroke-width="2" stroke-dasharray="5,5" />
        <polygon points="460,155 470,160 460,165" fill="#333333" />
        
        <!-- WebView와 웹 서비스 연결 -->
        <line x1="310" y1="255" x2="470" y2="255" stroke="#333333" stroke-width="2" stroke-dasharray="5,5" />
        <polygon points="460,250 470,255 460,260" fill="#333333" />
        
        <!-- FIDO와 인증 서비스 연결 -->
        <line x1="195" y1="445" x2="470" y2="325" stroke="#333333" stroke-width="2" stroke-dasharray="5,5" />
        <polygon points="462,327 470,325 464,333" fill="#333333" />
        
        <!-- Push 알림과 푸시 서비스 연결 -->
        <line x1="310" y1="445" x2="470" y2="395" stroke="#333333" stroke-width="2" stroke-dasharray="5,5" />
        <polygon points="462,392 470,395 462,398" fill="#333333" />
        
        <!-- Analytics 연결 -->
        <line x1="200" y1="390" x2="470" y2="465" stroke="#333333" stroke-width="2" stroke-dasharray="5,5" />
        <polygon points="462,461 470,465 462,469" fill="#333333" />
        
        <!-- 범례 -->
        <rect x="50" y="560" width="15" height="15" fill="#4285f4" />
        <text x="75" y="573" font-family="Arial" font-size="12" fill="#333333">Flutter 네이티브</text>
        
        <rect x="200" y="560" width="15" height="15" fill="#e8f0fe" />
        <text x="225" y="573" font-family="Arial" font-size="12" fill="#333333">WebView 컨텐츠</text>
        
        <rect x="350" y="560" width="15" height="15" fill="#fbbc05" />
        <text x="375" y="573" font-family="Arial" font-size="12" fill="#333333">FIDO 인증</text>
        
        <rect x="475" y="560" width="15" height="15" fill="#34a853" />
        <text x="500" y="573" font-family="Arial" font-size="12" fill="#333333">푸시 알림</text>
        
        <rect x="600" y="560" width="15" height="15" fill="#ea4335" />
        <text x="625" y="573" font-family="Arial" font-size="12" fill="#333333">Google Analytics</text>
      </svg>
    </div>

    <!-- 모바일 최적화를 위한 줌 컨트롤 -->
    <div class="zoom-controls fixed bottom-4 right-4 flex gap-2">
      <button
        class="p-2 bg-blue-500 text-white rounded-full shadow-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
        @click="zoomIn"
      >
        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
        </svg>
      </button>
      <button
        class="p-2 bg-blue-500 text-white rounded-full shadow-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
        @click="zoomOut"
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

.layer {
  @apply fill-gray-100 dark:fill-gray-700 stroke-gray-300 dark:stroke-gray-600;
  stroke-width: 2;
}

.frontend-layer {
  @apply fill-blue-50 dark:fill-blue-900/30;
}

.backend-layer {
  @apply fill-green-50 dark:fill-green-900/30;
}

.database-layer {
  @apply fill-purple-50 dark:fill-purple-900/30;
}

.component {
  @apply fill-white dark:fill-gray-800 stroke-gray-400 dark:stroke-gray-500;
  stroke-width: 1.5;
}

.layer-title {
  @apply fill-gray-700 dark:fill-gray-300 text-lg font-semibold;
  text-anchor: middle;
  dominant-baseline: middle;
}

.component-text {
  @apply fill-gray-600 dark:fill-gray-400 text-sm;
  text-anchor: middle;
  dominant-baseline: middle;
}

.connection-line {
  @apply stroke-gray-400 dark:stroke-gray-500;
  stroke-width: 2;
  fill: none;
  marker-end: url(#arrowhead);
}

/* 모바일 최적화 */
@media (max-width: 640px) {
  .architecture-container {
    @apply p-2;
  }

  .svg-container {
    @apply h-[calc(100vh-8rem)];
  }

  .layer-title {
    @apply text-base;
  }

  .component-text {
    @apply text-xs;
  }
}
</style> 