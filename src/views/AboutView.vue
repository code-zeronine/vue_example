<template>
  <div>
    <h1 class="text-3xl font-bold text-gray-900 dark:text-white mb-6">프로젝트 소개</h1>
    
    <div class="card prose dark:prose-invert max-w-none">
      <h2 class="text-gray-800 dark:text-gray-100">사용 기술</h2>
      
      <h3 class="text-gray-700 dark:text-gray-200">Vue.js 3</h3>
      <p class="text-gray-600 dark:text-gray-300">
        Vue.js는 사용자 인터페이스를 구축하기 위한 프로그레시브 자바스크립트 프레임워크입니다.
        다른 모놀리식 프레임워크와 달리, Vue는 점진적으로 도입할 수 있도록 처음부터 설계되었습니다.
        이 프로젝트에서는 Vue의 컴포넌트 기반 아키텍처를 활용하여 재사용 가능한 UI를 구축했습니다.
      </p>
      
      <h3 class="text-gray-700 dark:text-gray-200">Tailwind CSS</h3>
      <p class="text-gray-600 dark:text-gray-300">
        Tailwind CSS는 유틸리티 우선 CSS 프레임워크로, 마크업에서 직접 유틸리티 클래스를 구성하여 디자인을 구축할 수 있습니다.
        HTML을 떠나지 않고도 완전히 커스텀 디자인을 만들 수 있는 저수준 유틸리티 클래스를 제공합니다.
        이 프로젝트에서는 Tailwind를 사용하여 반응형 디자인과 다크 모드를 구현했습니다.
      </p>
      
      <h3 class="text-gray-700 dark:text-gray-200">Pinia</h3>
      <p class="text-gray-600 dark:text-gray-300">
        Pinia는 Vue.js의 공식 상태 관리 라이브러리입니다. Vuex에 비해 더 간단하고 직관적인 API를 제공하면서도
        다음과 같은 강력한 기능을 제공합니다:
      </p>
      
      <ul class="text-gray-600 dark:text-gray-300">
        <li>개발자 도구 지원</li>
        <li>핫 모듈 교체</li>
        <li>플러그인</li>
        <li>TypeScript 기본 지원</li>
        <li>서버 사이드 렌더링 지원</li>
      </ul>
      <p class="text-gray-600 dark:text-gray-300">
        이 프로젝트에서는 Pinia를 사용하여 전역 상태를 관리하고, 컴포넌트 간 데이터를 효율적으로 공유했습니다.
      </p>
      
      <h3 class="text-gray-700 dark:text-gray-200">Vue Router</h3>
      <p class="text-gray-600 dark:text-gray-300">
        Vue Router는 Vue.js의 공식 라우터입니다. Vue.js 코어와 깊게 통합되어
        단일 페이지 애플리케이션을 쉽게 구축할 수 있게 해줍니다.
        이 프로젝트에서는 Vue Router를 사용하여 여러 페이지 간의 탐색을 구현했습니다.
      </p>
      
      <h3 class="text-gray-700 dark:text-gray-200">Axios</h3>
      <p class="text-gray-600 dark:text-gray-300">
        Axios는 HTTP 요청을 처리하기 위한 자바스크립트 라이브러리입니다. 이 프로젝트에서는 Axios를 사용하여
        외부 API와 통신하고 데이터를 가져오는 기능을 구현했습니다.
      </p>
    </div>
  </div>
</template>