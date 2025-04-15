<!-- 소프트웨어 구성도 뷰 -->
<template>
  <div class="architecture-container">
    <h2 class="text-2xl font-bold mb-4 text-gray-800 dark:text-white">소프트웨어 구성도</h2>
    
    <!-- SVG 다이어그램 -->
    <div class="svg-container bg-white dark:bg-gray-900 p-4 rounded-lg shadow-lg overflow-auto">
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
        
        <!-- Provider 상태 관리 추가 -->
        <rect x="90" y="200" width="220" height="40" rx="5" fill="#9c27b0" stroke="#7b1fa2" stroke-width="1" />
        <text x="200" y="225" font-family="Arial" font-size="14" text-anchor="middle" fill="white">Provider 상태 관리</text>
        
        <rect x="90" y="250" width="220" height="150" rx="5" fill="#ffffff" stroke="#dddddd" stroke-width="1" />
        <text x="200" y="275" font-family="Arial" font-size="16" text-anchor="middle" fill="#333333">WebView</text>
        <rect x="110" y="290" width="180" height="90" rx="3" fill="#e8f0fe" stroke="#bbcef9" stroke-width="1" />
        <text x="200" y="330" font-family="Arial" font-size="14" text-anchor="middle" fill="#666666">웹 컨텐츠</text>
        <text x="200" y="350" font-family="Arial" font-size="12" text-anchor="middle" fill="#666666">(대부분의 UI 구현)</text>
        
        <rect x="90" y="410" width="105" height="50" rx="5" fill="#fbbc05" stroke="#e8a800" stroke-width="1" />
        <text x="142" y="440" font-family="Arial" font-size="12" text-anchor="middle" fill="white">FIDO 2차 인증</text>
        
        <rect x="205" y="410" width="105" height="50" rx="5" fill="#34a853" stroke="#2d8746" stroke-width="1" />
        <text x="257" y="440" font-family="Arial" font-size="12" text-anchor="middle" fill="white">Push 알림</text>
        
        <!-- Provider 관련 컴포넌트 -->
        <rect x="150" y="470" width="160" height="30" rx="5" fill="#f1e4f7" stroke="#9c27b0" stroke-width="1" />
        <text x="230" y="490" font-family="Arial" font-size="12" text-anchor="middle" fill="#9c27b0">상태 모델</text>
        
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
        <!-- Flutter와 Provider 연결 -->
        <line x1="200" y1="190" x2="200" y2="200" stroke="#333333" stroke-width="2" />
        <polygon points="195,195 200,200 205,195" fill="#333333" />
        
        <!-- Provider와 WebView 연결 -->
        <line x1="200" y1="240" x2="200" y2="250" stroke="#333333" stroke-width="2" />
        <polygon points="195,245 200,250 205,245" fill="#333333" />
        
        <!-- Provider와 상태 모델 연결 -->
        <line x1="200" y1="240" x2="230" y2="470" stroke="#9c27b0" stroke-width="2" stroke-dasharray="5,5" />
        <polygon points="225,463 230,470 235,465" fill="#9c27b0" />
        
        <!-- Flutter와 백엔드 연결 -->
        <line x1="310" y1="160" x2="470" y2="160" stroke="#333333" stroke-width="2" stroke-dasharray="5,5" />
        <polygon points="460,155 470,160 460,165" fill="#333333" />
        
        <!-- WebView와 웹 서비스 연결 -->
        <line x1="310" y1="270" x2="470" y2="255" stroke="#333333" stroke-width="2" stroke-dasharray="5,5" />
        <polygon points="460,250 470,255 460,260" fill="#333333" />
        
        <!-- FIDO와 인증 서비스 연결 -->
        <line x1="195" y1="435" x2="470" y2="325" stroke="#333333" stroke-width="2" stroke-dasharray="5,5" />
        <polygon points="462,327 470,325 464,333" fill="#333333" />
        
        <!-- Push 알림과 푸시 서비스 연결 -->
        <line x1="310" y1="435" x2="470" y2="395" stroke="#333333" stroke-width="2" stroke-dasharray="5,5" />
        <polygon points="462,392 470,395 462,398" fill="#333333" />
        
        <!-- Analytics 연결 -->
        <line x1="200" y1="400" x2="470" y2="465" stroke="#333333" stroke-width="2" stroke-dasharray="5,5" />
        <polygon points="462,461 470,465 462,469" fill="#333333" />
        
        <!-- 범례 -->
        <rect x="50" y="560" width="15" height="15" fill="#4285f4" />
        <text x="75" y="573" font-family="Arial" font-size="12" fill="#333333">Flutter 네이티브</text>
        
        <rect x="175" y="560" width="15" height="15" fill="#9c27b0" />
        <text x="200" y="573" font-family="Arial" font-size="12" fill="#333333">Provider 상태관리</text>
        
        <rect x="300" y="560" width="15" height="15" fill="#e8f0fe" />
        <text x="325" y="573" font-family="Arial" font-size="12" fill="#333333">WebView 컨텐츠</text>
        
        <rect x="425" y="560" width="15" height="15" fill="#fbbc05" />
        <text x="450" y="573" font-family="Arial" font-size="12" fill="#333333">FIDO 인증</text>
        
        <rect x="525" y="560" width="15" height="15" fill="#34a853" />
        <text x="550" y="573" font-family="Arial" font-size="12" fill="#333333">푸시 알림</text>
        
        <rect x="650" y="560" width="15" height="15" fill="#ea4335" />
        <text x="675" y="573" font-family="Arial" font-size="12" fill="#333333">Google Analytics</text>
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

.feature-component.state {
  @apply fill-purple-500 dark:fill-purple-600/90 stroke-purple-600 dark:stroke-purple-400;
}

.feature-component.router {
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