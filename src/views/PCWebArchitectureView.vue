<!-- 모바일 웹 아키텍처 뷰 -->
<template>
  <div class="architecture-container">
    <h2 class="text-2xl font-bold mb-4 text-gray-800 dark:text-white">PC 웹 아키텍처</h2>
    
    <!-- SVG 다이어그램 -->
    <div class="svg-container bg-white dark:bg-gray-900 p-4 rounded-lg shadow-lg overflow-auto">
      <svg viewBox="0 0 800 600" xmlns="http://www.w3.org/2000/svg">
        <!-- 배경 -->
        <rect width="800" height="600" fill="#f8fafc" rx="10" ry="10"/>
        
        <!-- 제목 -->
        <text x="400" y="40" font-size="24" font-weight="bold" text-anchor="middle" fill="#0f172a">PC 웹 소프트웨어 구성도 (Vue.js + TypeScript + TailwindCSS)</text>
        
        <!-- 클라이언트 측 프레임워크 -->
        <rect x="50" y="80" width="700" height="450" fill="#e2e8f0" rx="10" ry="10" stroke="#64748b" stroke-width="2"/>
        <text x="400" y="100" font-size="18" font-weight="bold" text-anchor="middle" fill="#334155">클라이언트 측 애플리케이션</text>
        
        <!-- MVVM 아키텍처 -->
        <rect x="75" y="120" width="650" height="370" fill="#f1f5f9" rx="8" ry="8" stroke="#94a3b8" stroke-width="1"/>
        <text x="400" y="140" font-size="16" font-weight="bold" text-anchor="middle" fill="#475569">MVVM 아키텍처</text>
        
        <!-- Vue.js 애플리케이션 -->
        <rect x="100" y="160" width="600" height="300" fill="#ffffff" rx="6" ry="6" stroke="#cbd5e1" stroke-width="1"/>
        
        <!-- 모델 섹션 -->
        <rect x="120" y="180" width="170" height="260" fill="#dbeafe" rx="5" ry="5" stroke="#93c5fd" stroke-width="1"/>
        <text x="205" y="200" font-size="14" font-weight="bold" text-anchor="middle" fill="#1e40af">모델 (Model)</text>
        <rect x="130" y="215" width="150" height="30" fill="#ffffff" rx="3" ry="3" stroke="#93c5fd" stroke-width="1"/>
        <text x="205" y="235" font-size="12" text-anchor="middle" fill="#1e3a8a">API 클라이언트</text>
        <rect x="130" y="255" width="150" height="30" fill="#ffffff" rx="3" ry="3" stroke="#93c5fd" stroke-width="1"/>
        <text x="205" y="275" font-size="12" text-anchor="middle" fill="#1e3a8a">데이터 인터페이스</text>
        <rect x="130" y="295" width="150" height="30" fill="#ffffff" rx="3" ry="3" stroke="#93c5fd" stroke-width="1"/>
        <text x="205" y="315" font-size="12" text-anchor="middle" fill="#1e3a8a">상태 관리 (Pinia)</text>
        <rect x="130" y="335" width="150" height="70" fill="#ffffff" rx="3" ry="3" stroke="#93c5fd" stroke-width="1"/>
        <text x="205" y="355" font-size="12" text-anchor="middle" fill="#1e3a8a">유틸리티</text>
        <text x="205" y="375" font-size="10" text-anchor="middle" fill="#1e3a8a">- 파일 업로드 서비스</text>
        <text x="205" y="395" font-size="10" text-anchor="middle" fill="#1e3a8a">- 테이블 데이터 처리</text>
        
        <!-- 뷰모델 섹션 -->
        <rect x="315" y="180" width="170" height="260" fill="#fae8ff" rx="5" ry="5" stroke="#d8b4fe" stroke-width="1"/>
        <text x="400" y="200" font-size="14" font-weight="bold" text-anchor="middle" fill="#7e22ce">뷰모델 (ViewModel)</text>
        <rect x="325" y="215" width="150" height="30" fill="#ffffff" rx="3" ry="3" stroke="#d8b4fe" stroke-width="1"/>
        <text x="400" y="235" font-size="12" text-anchor="middle" fill="#581c87">컴포저블 (Composables)</text>
        <rect x="325" y="255" width="150" height="30" fill="#ffffff" rx="3" ry="3" stroke="#d8b4fe" stroke-width="1"/>
        <text x="400" y="275" font-size="12" text-anchor="middle" fill="#581c87">반응형 참조 (Refs)</text>
        <rect x="325" y="295" width="150" height="30" fill="#ffffff" rx="3" ry="3" stroke="#d8b4fe" stroke-width="1"/>
        <text x="400" y="315" font-size="12" text-anchor="middle" fill="#581c87">계산된 속성</text>
        <rect x="325" y="335" width="150" height="70" fill="#ffffff" rx="3" ry="3" stroke="#d8b4fe" stroke-width="1"/>
        <text x="400" y="355" font-size="12" text-anchor="middle" fill="#581c87">이벤트 처리</text>
        <text x="400" y="375" font-size="10" text-anchor="middle" fill="#581c87">- 테이블 상호작용</text>
        <text x="400" y="395" font-size="10" text-anchor="middle" fill="#581c87">- 파일 업로드 처리</text>
        
        <!-- 뷰 섹션 -->
        <rect x="510" y="180" width="170" height="260" fill="#dcfce7" rx="5" ry="5" stroke="#86efac" stroke-width="1"/>
        <text x="595" y="200" font-size="14" font-weight="bold" text-anchor="middle" fill="#166534">뷰 (View)</text>
        <rect x="520" y="215" width="150" height="30" fill="#ffffff" rx="3" ry="3" stroke="#86efac" stroke-width="1"/>
        <text x="595" y="235" font-size="12" text-anchor="middle" fill="#14532d">Vue 컴포넌트</text>
        <rect x="520" y="255" width="150" height="30" fill="#ffffff" rx="3" ry="3" stroke="#86efac" stroke-width="1"/>
        <text x="595" y="275" font-size="12" text-anchor="middle" fill="#14532d">TailwindCSS 스타일</text>
        <rect x="520" y="295" width="150" height="75" fill="#ffffff" rx="3" ry="3" stroke="#86efac" stroke-width="1"/>
        <text x="595" y="315" font-size="12" text-anchor="middle" fill="#14532d">반응형 UI 컴포넌트</text>
        <text x="595" y="335" font-size="10" text-anchor="middle" fill="#14532d">- 가변 레이아웃</text>
        <text x="595" y="355" font-size="10" text-anchor="middle" fill="#14532d">- 사용자 정의 테이블</text>
        <rect x="520" y="380" width="150" height="30" fill="#ffffff" rx="3" ry="3" stroke="#86efac" stroke-width="1"/>
        <text x="595" y="400" font-size="12" text-anchor="middle" fill="#14532d">파일 업로드 UI</text>
        
        <!-- 서비스 및 통합 -->
        <rect x="100" y="470" width="600" height="60" fill="#fff7ed" rx="5" ry="5" stroke="#fdba74" stroke-width="1"/>
        <text x="400" y="490" font-size="14" font-weight="bold" text-anchor="middle" fill="#9a3412">서비스 및 통합</text>
        
        <!-- 서비스/통합 아이콘 -->
        <rect x="150" y="500" width="100" height="20" fill="#ffffff" rx="3" ry="3" stroke="#fdba74" stroke-width="1"/>
        <text x="200" y="515" font-size="12" text-anchor="middle" fill="#9a3412">API 서비스</text>
        
        <rect x="280" y="500" width="100" height="20" fill="#ffffff" rx="3" ry="3" stroke="#fdba74" stroke-width="1"/>
        <text x="330" y="515" font-size="12" text-anchor="middle" fill="#9a3412">라우터 (Vue Router)</text>
        
        <rect x="410" y="500" width="100" height="20" fill="#ffffff" rx="3" ry="3" stroke="#fdba74" stroke-width="1"/>
        <text x="460" y="515" font-size="12" text-anchor="middle" fill="#9a3412">Google Analytics</text>
        
        <rect x="540" y="500" width="100" height="20" fill="#ffffff" rx="3" ry="3" stroke="#fdba74" stroke-width="1"/>
        <text x="590" y="515" font-size="12" text-anchor="middle" fill="#9a3412">파일 업로드 서비스</text>
        
        <!-- 연결선 -->
        <line x1="205" y1="440" x2="400" y2="470" stroke="#94a3b8" stroke-width="1.5" stroke-dasharray="3,3"/>
        <line x1="400" y1="440" x2="400" y2="470" stroke="#94a3b8" stroke-width="1.5" stroke-dasharray="3,3"/>
        <line x1="595" y1="440" x2="400" y2="470" stroke="#94a3b8" stroke-width="1.5" stroke-dasharray="3,3"/>
        
        <!-- MVVM 데이터 바인딩 화살표 -->
        <line x1="290" y1="310" x2="315" y2="310" stroke="#4338ca" stroke-width="1.5"/>
        <polygon points="310,306 320,310 310,314" fill="#4338ca"/>
        
        <line x1="485" y1="310" x2="510" y2="310" stroke="#4338ca" stroke-width="1.5"/>
        <polygon points="505,306 515,310 505,314" fill="#4338ca"/>
        
        <!-- 양방향 화살표 -->
        <line x1="290" y1="330" x2="315" y2="330" stroke="#4338ca" stroke-width="1.5"/>
        <polygon points="310,326 320,330 310,334" fill="#4338ca"/>
        
        <line x1="315" y1="350" x2="290" y2="350" stroke="#4338ca" stroke-width="1.5"/>
        <polygon points="295,346 285,350 295,354" fill="#4338ca"/>
        
        <line x1="485" y1="330" x2="510" y2="330" stroke="#4338ca" stroke-width="1.5"/>
        <polygon points="505,326 515,330 505,334" fill="#4338ca"/>
        
        <line x1="510" y1="350" x2="485" y2="350" stroke="#4338ca" stroke-width="1.5"/>
        <polygon points="490,346 480,350 490,354" fill="#4338ca"/>
        
        <!-- TypeScript 표시 -->
        <rect x="650" y="100" width="80" height="25" fill="#3178c6" rx="4" ry="4"/>
        <text x="690" y="117" font-size="12" font-weight="bold" text-anchor="middle" fill="#ffffff">TypeScript</text>
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