<!-- 소프트웨어 구성도 뷰 -->
<template>
  <div class="architecture-container">
    <h2 class="text-2xl font-bold mb-4 text-gray-800 dark:text-white">모바일 앱 구성도</h2>
    
    <!-- SVG 다이어그램 -->
    <div class="svg-container bg-white dark:bg-gray-800 p-4 rounded-lg shadow-lg overflow-auto">
      <svg viewBox="0 0 800 600" xmlns="http://www.w3.org/2000/svg">
        <!-- 배경 및 제목 -->
        <rect width="800" height="600" fill="#f5f5f5"/>
        <text x="400" y="30" font-family="Arial" font-size="24" font-weight="bold" text-anchor="middle">Flutter 기반 모바일 앱 소프트웨어 구성도</text>
        
        <!-- 모바일 앱 외부 프레임 -->
        <rect x="50" y="70" width="700" height="480" rx="20" ry="20" fill="#e1e1e1" stroke="#333" stroke-width="2"/>
        
        <!-- Flutter 관련 컴포넌트 (상단) -->
        <rect x="70" y="90" width="660" height="140" rx="10" ry="10" fill="#54c5f8" fill-opacity="0.2" stroke="#54c5f8" stroke-width="2"/>
        <text x="400" y="110" font-family="Arial" font-size="16" font-weight="bold" text-anchor="middle" fill="#333">Flutter Native Layer</text>
        
        <!-- Flutter 관련 세부 컴포넌트 -->
        <rect x="90" y="125" width="160" height="90" rx="8" ry="8" fill="white" stroke="#54c5f8" stroke-width="1.5"/>
        <text x="170" y="145" font-family="Arial" font-size="14" font-weight="bold" text-anchor="middle">Flutter UI</text>
        <text x="170" y="165" font-family="Arial" font-size="12" text-anchor="middle">네이티브 화면</text>
        <text x="170" y="185" font-family="Arial" font-size="12" text-anchor="middle">로그인/인증 UI</text>
        <text x="170" y="205" font-family="Arial" font-size="12" text-anchor="middle">푸시 알림 UI</text>
        
        <rect x="270" y="125" width="160" height="90" rx="8" ry="8" fill="white" stroke="#54c5f8" stroke-width="1.5"/>
        <text x="350" y="145" font-family="Arial" font-size="14" font-weight="bold" text-anchor="middle">Provider</text>
        <text x="350" y="165" font-family="Arial" font-size="12" text-anchor="middle">상태 관리</text>
        <text x="350" y="185" font-family="Arial" font-size="12" text-anchor="middle">UI 및 비즈니스 로직</text>
        <text x="350" y="205" font-family="Arial" font-size="12" text-anchor="middle">데이터 바인딩</text>
        
        <rect x="450" y="125" width="260" height="90" rx="8" ry="8" fill="white" stroke="#54c5f8" stroke-width="1.5"/>
        <text x="580" y="145" font-family="Arial" font-size="14" font-weight="bold" text-anchor="middle">Flutter 플러그인</text>
        <text x="580" y="165" font-family="Arial" font-size="12" text-anchor="middle">웹뷰 컨트롤러</text>
        <text x="580" y="185" font-family="Arial" font-size="12" text-anchor="middle">FIDO2 클라이언트</text>
        <text x="580" y="205" font-family="Arial" font-size="12" text-anchor="middle">Firebase Messaging (푸시)</text>
        
        <!-- 웹뷰 레이어 (중앙) -->
        <rect x="70" y="240" width="660" height="140" rx="10" ry="10" fill="#4caf50" fill-opacity="0.2" stroke="#4caf50" stroke-width="2"/>
        <text x="400" y="260" font-family="Arial" font-size="16" font-weight="bold" text-anchor="middle" fill="#333">WebView Layer</text>
        
        <!-- 웹뷰 관련 세부 컴포넌트 -->
        <rect x="90" y="275" width="320" height="90" rx="8" ry="8" fill="white" stroke="#4caf50" stroke-width="1.5"/>
        <text x="250" y="295" font-family="Arial" font-size="14" font-weight="bold" text-anchor="middle">웹뷰 콘텐츠</text>
        <text x="250" y="315" font-family="Arial" font-size="12" text-anchor="middle">주요 비즈니스 로직</text>
        <text x="250" y="335" font-family="Arial" font-size="12" text-anchor="middle">HTML/CSS/JS 기반 UI</text>
        <text x="250" y="355" font-family="Arial" font-size="12" text-anchor="middle">API 통신</text>
        
        <rect x="430" y="275" width="280" height="90" rx="8" ry="8" fill="white" stroke="#4caf50" stroke-width="1.5"/>
        <text x="570" y="295" font-family="Arial" font-size="14" font-weight="bold" text-anchor="middle">JavaScript Bridge</text>
        <text x="570" y="315" font-family="Arial" font-size="12" text-anchor="middle">네이티브 ↔ 웹뷰 통신</text>
        <text x="570" y="335" font-family="Arial" font-size="12" text-anchor="middle">네이티브 기능 접근</text>
        <text x="570" y="355" font-family="Arial" font-size="12" text-anchor="middle">이벤트 핸들링</text>
        
        <!-- 서비스 레이어 (하단) -->
        <rect x="70" y="390" width="660" height="140" rx="10" ry="10" fill="#ff9800" fill-opacity="0.2" stroke="#ff9800" stroke-width="2"/>
        <text x="400" y="410" font-family="Arial" font-size="16" font-weight="bold" text-anchor="middle" fill="#333">Services Layer</text>
        
        <!-- 서비스 관련 세부 컴포넌트 -->
        <rect x="90" y="425" width="200" height="90" rx="8" ry="8" fill="white" stroke="#ff9800" stroke-width="1.5"/>
        <text x="190" y="445" font-family="Arial" font-size="14" font-weight="bold" text-anchor="middle">Authentication</text>
        <text x="190" y="465" font-family="Arial" font-size="12" text-anchor="middle">FIDO2 (WebAuthn)</text>
        <text x="190" y="485" font-family="Arial" font-size="12" text-anchor="middle">생체인증</text>
        <text x="190" y="505" font-family="Arial" font-size="12" text-anchor="middle">MFA 2차 인증</text>
        
        <rect x="310" y="425" width="200" height="90" rx="8" ry="8" fill="white" stroke="#ff9800" stroke-width="1.5"/>
        <text x="410" y="445" font-family="Arial" font-size="14" font-weight="bold" text-anchor="middle">Push Notification</text>
        <text x="410" y="465" font-family="Arial" font-size="12" text-anchor="middle">Firebase Cloud Messaging</text>
        <text x="410" y="485" font-family="Arial" font-size="12" text-anchor="middle">토큰 관리</text>
        <text x="410" y="505" font-family="Arial" font-size="12" text-anchor="middle">알림 처리</text>
        
        <rect x="530" y="425" width="200" height="90" rx="8" ry="8" fill="white" stroke="#ff9800" stroke-width="1.5"/>
        <text x="630" y="445" font-family="Arial" font-size="14" font-weight="bold" text-anchor="middle">Analytics</text>
        <text x="630" y="465" font-family="Arial" font-size="12" text-anchor="middle">Google Analytics</text>
        <text x="630" y="485" font-family="Arial" font-size="12" text-anchor="middle">사용자 행동 추적</text>
        <text x="630" y="505" font-family="Arial" font-size="12" text-anchor="middle">성능 모니터링</text>
        
        <!-- 데이터 흐름 화살표 -->
        <!-- Flutter -> WebView -->
        <path d="M400 230 L400 240" stroke="#333" stroke-width="2" marker-end="url(#arrowhead)"/>
        <!-- WebView -> Services -->
        <path d="M400 380 L400 390" stroke="#333" stroke-width="2" marker-end="url(#arrowhead)"/>
        
        <!-- 화살표 마커 정의 -->
        <defs>
          <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
            <polygon points="0 0, 10 3.5, 0 7" fill="#333"/>
          </marker>
        </defs>
        
        <!-- 외부 서비스 통신 -->
        <rect x="270" y="560" width="260" height="30" rx="5" ry="5" fill="#9e9e9e" fill-opacity="0.3" stroke="#9e9e9e" stroke-width="1.5"/>
        <text x="400" y="580" font-family="Arial" font-size="12" font-weight="bold" text-anchor="middle">백엔드 서버 API / 클라우드 서비스</text>
        
        <path d="M400 530 L400 560" stroke="#333" stroke-width="2" marker-end="url(#arrowhead)"/>
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

.diagram-background {
  @apply fill-gray-50 dark:fill-gray-900;
}

.device-frame {
  @apply fill-white dark:fill-gray-800 stroke-gray-400 dark:stroke-gray-500;
  stroke-width: 3;
}

.device-screen {
  @apply fill-blue-50 dark:fill-blue-900/30 stroke-gray-300 dark:stroke-gray-600;
}

.device-button {
  @apply fill-gray-200 dark:fill-gray-700 stroke-gray-300 dark:stroke-gray-600;
}

.server-frame {
  @apply fill-white dark:fill-gray-800 stroke-gray-400 dark:stroke-gray-500;
  stroke-width: 2;
}

.primary-component {
  @apply fill-blue-500 dark:fill-blue-600 stroke-blue-600 dark:stroke-blue-500;
  stroke-width: 1;
}

.secondary-component {
  @apply fill-white dark:fill-gray-800 stroke-gray-300 dark:stroke-gray-600;
  stroke-width: 1;
}

.webview-content {
  @apply fill-blue-50 dark:fill-blue-900/20 stroke-blue-200 dark:stroke-blue-800;
  stroke-width: 1;
}

.feature-component {
  stroke-width: 1;
}

.feature-component.state {
  @apply fill-purple-500 dark:fill-purple-600 stroke-purple-600 dark:stroke-purple-500;
}

.feature-component.router {
  @apply fill-green-500 dark:fill-green-600 stroke-green-600 dark:stroke-green-500;
}

.analytics-component {
  @apply fill-red-500 dark:fill-red-600 stroke-red-600 dark:stroke-red-500;
  stroke-width: 1;
}

.component-title {
  @apply fill-white dark:fill-white;
  font-family: 'Inter', sans-serif;
  font-size: 16px;
  font-weight: 600;
  text-anchor: middle;
}

.component-text {
  @apply fill-gray-700 dark:fill-gray-300;
  font-family: 'Inter', sans-serif;
  font-size: 14px;
  text-anchor: middle;
}

.feature-text {
  @apply fill-white dark:fill-white;
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
         focus:ring-opacity-50 transition-colors duration-200;
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
    @apply opacity-90 cursor-pointer;
    transition: opacity 0.2s ease-in-out;
  }
}
</style> 