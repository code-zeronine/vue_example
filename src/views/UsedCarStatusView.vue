<template>
  <div class="max-w-2xl mx-auto px-4 pb-20">
    <div class="flex items-center justify-between mb-6">
      <h1 class="text-2xl font-bold text-gray-900 dark:text-white">중고차 현황</h1>
      <div class="text-sm text-gray-500 dark:text-gray-400">
        총 <span class="font-semibold text-primary-600">{{ totalResults }}</span>건
      </div>
    </div>

    <!-- 검색 필터 영역 -->
    <div class="mb-6 space-y-2">
      <!-- 필터 헤더 -->
      <button 
        @click="isFilterOpen = !isFilterOpen"
        class="w-full flex items-center justify-between p-4 bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 transition-all duration-200 hover:border-primary-500 dark:hover:border-primary-500"
      >
        <div class="flex items-center space-x-3">
          <div class="relative">
            <svg class="w-5 h-5 text-primary-600 dark:text-primary-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
            </svg>
            <span v-if="activeFiltersCount > 0" 
              class="absolute -top-1 -right-1 w-4 h-4 bg-primary-600 text-white text-xs flex items-center justify-center rounded-full">
              {{ activeFiltersCount }}
            </span>
          </div>
          <span class="font-medium text-gray-700 dark:text-gray-300">검색 필터</span>
          <div v-if="activeFiltersCount > 0" class="flex items-center space-x-2">
            <span class="px-2 py-1 text-xs rounded-full bg-primary-100 text-primary-700 dark:bg-primary-900 dark:text-primary-300">
              {{ activeFiltersCount }}개의 필터 적용중
            </span>
          </div>
        </div>
        <svg 
          class="w-5 h-5 text-gray-500 transition-transform duration-200"
          :class="{ 'rotate-180': isFilterOpen }"
          fill="none" 
          viewBox="0 0 24 24" 
          stroke="currentColor"
        >
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      <!-- 필터 상세 -->
      <div v-show="isFilterOpen" 
        class="transition-all duration-200 overflow-hidden"
        :class="{ 'opacity-100 max-h-[2000px]': isFilterOpen, 'opacity-0 max-h-0': !isFilterOpen }"
      >
        <!-- 기간 선택 -->
        <div class="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-4 mb-2">
          <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-4">
            <label class="text-sm font-medium text-gray-700 dark:text-gray-300">조회 기간</label>
            <div class="flex flex-wrap gap-2">
              <button 
                v-for="period in quickPeriods" 
                :key="period.days"
                @click="setQuickPeriod(period.days)"
                class="px-4 py-2 text-sm rounded-full transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
                :class="isSelectedPeriod(period.days) ? 
                  'bg-primary-600 text-white hover:bg-primary-700' : 
                  'bg-gray-100 text-gray-700 hover:bg-gray-200 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600'"
              >
                {{ period.label }}
              </button>
            </div>
          </div>
          <div class="flex flex-col sm:flex-row gap-3">
            <div class="flex-1 relative">
              <input 
                type="date" 
                v-model="searchParams.startDate"
                class="w-full px-4 py-2 text-sm rounded-lg border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white focus:ring-primary-500 focus:border-primary-500"
              >
              <label class="absolute -top-2 left-2 text-xs text-gray-500 dark:text-gray-400 bg-white dark:bg-gray-800 px-1">
                시작일
              </label>
            </div>
            <div class="flex items-center justify-center">
              <span class="text-gray-500 dark:text-gray-400">~</span>
            </div>
            <div class="flex-1 relative">
              <input 
                type="date" 
                v-model="searchParams.endDate"
                class="w-full px-4 py-2 text-sm rounded-lg border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white focus:ring-primary-500 focus:border-primary-500"
              >
              <label class="absolute -top-2 left-2 text-xs text-gray-500 dark:text-gray-400 bg-white dark:bg-gray-800 px-1">
                종료일
              </label>
            </div>
          </div>
        </div>

        <!-- 차량 정보 -->
        <div class="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-4 mb-2">
          <h3 class="text-sm font-medium text-gray-700 dark:text-gray-300 mb-4">차량 정보</h3>
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div class="relative">
              <select 
                v-model="searchParams.manufacturer"
                class="w-full px-4 py-2 text-sm rounded-lg border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white focus:ring-primary-500 focus:border-primary-500 appearance-none"
              >
                <option value="">제조사 전체</option>
                <option v-for="mfr in manufacturers" :key="mfr" :value="mfr">{{ mfr }}</option>
              </select>
              <div class="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                <svg class="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </div>
            <div class="relative">
              <select 
                v-model="searchParams.model"
                class="w-full px-4 py-2 text-sm rounded-lg border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white focus:ring-primary-500 focus:border-primary-500 appearance-none"
                :disabled="!searchParams.manufacturer"
              >
                <option value="">모델 전체</option>
                <option v-for="model in filteredModels" :key="model" :value="model">{{ model }}</option>
              </select>
              <div class="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                <svg class="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </div>
            <div class="relative">
              <select 
                v-model="searchParams.detailModel"
                class="w-full px-4 py-2 text-sm rounded-lg border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white focus:ring-primary-500 focus:border-primary-500 appearance-none"
              >
                <option value="">상세 모델 전체</option>
                <option v-for="model in detailModels" :key="model" :value="model">{{ model }}</option>
              </select>
              <div class="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                <svg class="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </div>
            <div class="relative">
              <select 
                v-model="searchParams.year"
                class="w-full px-4 py-2 text-sm rounded-lg border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white focus:ring-primary-500 focus:border-primary-500 appearance-none"
              >
                <option value="">연식 전체</option>
                <option v-for="year in years" :key="year" :value="year">{{ year }}년</option>
              </select>
              <div class="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                <svg class="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </div>
          </div>
        </div>

        <!-- 상태 및 기타 정보 -->
        <div class="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-4">
          <h3 class="text-sm font-medium text-gray-700 dark:text-gray-300 mb-4">상태 및 기타 정보</h3>
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
            <div class="relative">
              <select 
                v-model="searchParams.visibility"
                class="w-full px-4 py-2 text-sm rounded-lg border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white focus:ring-primary-500 focus:border-primary-500 appearance-none"
              >
                <option value="all">공개 여부 전체</option>
                <option value="public">공개</option>
                <option value="private">비공개</option>
              </select>
              <div class="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                <svg class="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </div>
            <div class="relative">
              <select 
                v-model="searchParams.status"
                class="w-full px-4 py-2 text-sm rounded-lg border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white focus:ring-primary-500 focus:border-primary-500 appearance-none"
              >
                <option value="all">물건종 상태 전체</option>
                <option value="waiting">대기중</option>
                <option value="selling">판매중</option>
                <option value="completed">판매완료</option>
              </select>
              <div class="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                <svg class="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </div>
          </div>
          <div class="relative">
            <input 
              type="text" 
              v-model="searchParams.vinNumber"
              placeholder="차대번호 또는 이어폼번호를 입력하세요"
              class="w-full px-4 py-2 text-sm rounded-lg border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white focus:ring-primary-500 focus:border-primary-500"
            >
            <div class="absolute inset-y-0 right-0 flex items-center px-2">
              <svg class="w-4 h-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- 검색 결과 -->
    <div class="space-y-4" ref="resultsContainer">
      <div v-for="car in displayedResults" :key="car.id" 
        class="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-4 hover:border-primary-500 dark:hover:border-primary-500 transition-colors duration-200"
      >
        <div class="flex gap-4">
          <!-- 차량 이미지 -->
          <div class="relative w-32 h-32 flex-shrink-0">
            <img 
              :src="car.imageUrl" 
              :alt="`${car.manufacturer} ${car.model}`"
              class="w-full h-full object-cover rounded-lg cursor-pointer hover:opacity-90 transition-opacity duration-200"
              @click="openImageModal(car)"
            >
          </div>

          <!-- 차량 정보 -->
          <div class="flex-1">
            <div class="flex items-start justify-between">
              <div>
                <h3 class="text-lg font-medium text-gray-900 dark:text-white">
                  {{ car.manufacturer }} {{ car.model }}
                </h3>
                <p class="text-sm text-gray-500 dark:text-gray-400">
                  {{ car.year }}년식 · {{ car.detailModel }}
                </p>
              </div>
              <span class="px-3 py-1 text-sm rounded-full" 
                :class="{
                  'bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300': car.status === 'waiting',
                  'bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300': car.status === 'selling',
                  'bg-gray-100 text-gray-700 dark:bg-gray-900 dark:text-gray-300': car.status === 'completed'
                }"
              >
                {{ getStatusLabel(car.status) }}
              </span>
            </div>
            <div class="mt-4 flex items-center justify-between text-sm">
              <div class="text-gray-500 dark:text-gray-400">
                차대번호: {{ car.vinNumber }}
              </div>
              <div class="flex items-center space-x-2">
                <span class="text-gray-500 dark:text-gray-400">
                  {{ car.visibility === 'private' ? '비공개' : '공개' }}
                </span>
                <button class="text-primary-600 hover:text-primary-700 dark:text-primary-400 dark:hover:text-primary-300">
                  상세보기
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <!-- 로딩 인디케이터 -->
      <div v-if="isLoading" class="flex justify-center py-4">
        <div class="animate-spin rounded-full h-8 w-8 border-b-2 border-primary-600"></div>
      </div>
    </div>

    <!-- 이미지 모달 -->
    <div v-if="selectedCar" 
      class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-75"
      @click="closeImageModal"
    >
      <div class="relative max-w-4xl w-full" @click.stop>
        <button 
          class="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors duration-200"
          @click="closeImageModal"
        >
          <svg class="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        <div class="bg-white dark:bg-gray-800 rounded-lg overflow-hidden">
          <img 
            :src="selectedCar.imageUrl" 
            :alt="`${selectedCar.manufacturer} ${selectedCar.model}`"
            class="w-full h-auto"
          >
          <div class="p-4">
            <h3 class="text-xl font-medium text-gray-900 dark:text-white">
              {{ selectedCar.manufacturer }} {{ selectedCar.model }}
            </h3>
            <p class="mt-1 text-gray-500 dark:text-gray-400">
              {{ selectedCar.year }}년식 · {{ selectedCar.detailModel }}
            </p>
          </div>
        </div>
      </div>
    </div>

    <!-- 하단 고정 버튼 -->
    <div class="fixed bottom-0 left-0 right-0 p-4 bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700">
      <div class="max-w-2xl mx-auto flex space-x-3">
        <button 
          @click="resetSearch" 
          class="flex-1 px-4 py-2 text-sm font-medium rounded-md border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-200"
        >
          필터 초기화
        </button>
        <button 
          @click="search" 
          class="flex-1 px-4 py-2 text-sm font-medium rounded-md text-white bg-primary-600 hover:bg-primary-700 dark:bg-primary-700 dark:hover:bg-primary-800 transition-colors duration-200"
        >
          검색하기
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted, watch } from 'vue'

interface SearchParams {
  startDate: string;
  endDate: string;
  visibility: string;
  manufacturer: string;
  model: string;
  detailModel: string;
  year: string;
  vinNumber: string;
  status: string;
}

interface Car {
  id: string;
  manufacturer: string;
  model: string;
  detailModel: string;
  year: number;
  vinNumber: string;
  status: 'waiting' | 'selling' | 'completed';
  visibility: 'public' | 'private';
  imageUrl: string;
}

const isFilterOpen = ref(true)
const totalResults = ref(0)

const searchParams = ref<SearchParams>({
  startDate: '',
  endDate: '',
  visibility: 'all',
  manufacturer: '',
  model: '',
  detailModel: '',
  year: '',
  vinNumber: '',
  status: 'all'
})

const quickPeriods = [
  { days: 7, label: '1주일' },
  { days: 15, label: '15일' },
  { days: 30, label: '1개월' }
]

const manufacturers = ['현대', '기아', '제네시스', 'BMW', '벤츠', '아우디']
const modelsByManufacturer = {
  '현대': ['아반떼', '소나타', '그랜저', '투싼', '싼타페'],
  '기아': ['K3', 'K5', 'K8', '스포티지', '쏘렌토'],
  '제네시스': ['G70', 'G80', 'G90', 'GV70', 'GV80'],
  'BMW': ['3시리즈', '5시리즈', '7시리즈', 'X3', 'X5'],
  '벤츠': ['A클래스', 'C클래스', 'E클래스', 'S클래스', 'GLC'],
  '아우디': ['A4', 'A6', 'A8', 'Q5', 'Q7']
}

const filteredModels = computed(() => {
  if (!searchParams.value.manufacturer) return []
  return modelsByManufacturer[searchParams.value.manufacturer as keyof typeof modelsByManufacturer] || []
})

const detailModels = ['N라인', '하이브리드', '디젤', '가솔린']
const years = Array.from({ length: 10 }, (_, i) => new Date().getFullYear() - i)

const selectedCar = ref<Car | null>(null)

// 원본 데이터와 필터링된 결과를 분리
const allCars = ref<Car[]>([
  {
    id: '1',
    manufacturer: '현대',
    model: '아반떼',
    detailModel: 'N라인',
    year: 2023,
    vinNumber: 'KMHXX00XXXX000001',
    status: 'selling',
    visibility: 'public',
    imageUrl: 'https://www.hyundai.com/contents/repn-car/key-visual/homepage/pc/avante_hybrid_25my_kv_w.jpg'
  },
  {
    id: '2',
    manufacturer: '기아',
    model: 'K5',
    detailModel: '하이브리드',
    year: 2022,
    vinNumber: 'KNHXX00XXXX000002',
    status: 'waiting',
    visibility: 'private',
    imageUrl: 'https://pds.joongang.co.kr/news/component/htmlphoto_mmdata/202207/18/30dc5463-a999-4f37-a9f4-9b4cfd5be14f.jpg'
  },
  {
    id: '3',
    manufacturer: '현대',
    model: '소나타',
    detailModel: '하이브리드',
    year: 2023,
    vinNumber: 'KMHXX00XXXX000003',
    status: 'selling',
    visibility: 'public',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/9/9b/0_Hyundai_Sonata_%28DN8%29_fl_1.jpg'
  },
  {
    id: '4',
    manufacturer: '기아',
    model: 'K8',
    detailModel: '가솔린',
    year: 2023,
    vinNumber: 'KNHXX00XXXX000004',
    status: 'completed',
    visibility: 'public',
    imageUrl: 'https://i.namu.wiki/i/8c7V9l_cz29zw5xJEwsNoL5rlu6pRLLksbj3W4igfazjOoa83aleKSDw_K6elTBDuvSyaOODzeAQXC83Fw6MigvfrQ_Y6f3dWB9Gy5Pq8S48cBpnNE1sIRXDbO220uxHRJz0L8mr6bocflQ_QuGTQg.webp'
  },
  {
    id: '5',
    manufacturer: '제네시스',
    model: 'G80',
    detailModel: '디젤',
    year: 2022,
    vinNumber: 'KMHXX00XXXX000005',
    status: 'selling',
    visibility: 'private',
    imageUrl: 'https://jmagazine.joins.com/_data/photo/2020/04/thumb_3698936108_gHdfGr42_1.jpg'
  },
  {
    id: '6',
    manufacturer: 'BMW',
    model: '5시리즈',
    detailModel: '가솔린',
    year: 2023,
    vinNumber: 'WBAXX00XXXX000006',
    status: 'waiting',
    visibility: 'public',
    imageUrl: 'https://www.motoya.co.kr/news/photo/202405/40394_238558_2239.jpg'
  },
  {
    id: '7',
    manufacturer: '벤츠',
    model: 'E클래스',
    detailModel: '디젤',
    year: 2022,
    vinNumber: 'WDDXX00XXXX000007',
    status: 'selling',
    visibility: 'public',
    imageUrl: 'https://cdn.autoherald.co.kr/news/photo/201909/35892_59446_1013.jpg'
  },
  {
    id: '8',
    manufacturer: '아우디',
    model: 'A6',
    detailModel: '가솔린',
    year: 2023,
    vinNumber: 'WAUXX00XXXX000008',
    status: 'waiting',
    visibility: 'private',
    imageUrl: 'https://i.namu.wiki/i/2N7Zz6C_8LFtpgR9sVmdDpvL220Ncr7QpyFUOKpqoapBtZAH37st-f40b109cQbEMRyyusDPLWRcbzaawxkUFsgd91LWWV1No8aGovQ8r_CdCoZfsWEggtGbouv11ITghbqUP0Xuqg4TlGIrVLFXzg.webp'
  },
  {
    id: '9',
    manufacturer: '현대',
    model: '그랜저',
    detailModel: '하이브리드',
    year: 2023,
    vinNumber: 'KMHXX00XXXX000009',
    status: 'selling',
    visibility: 'public',
    imageUrl: 'https://i.namu.wiki/i/iQYWwHzu5StjyyYVX3WKXTayDWN8qYxvGvkEL8ir6zL2RxVoMVHNkQz3jMBZSj3DdxTU3eiq2p43YKrgUbIfjZj4ME789wf--qw8B1ruWSLRiocxOeBMRGeuRBIE3MPgWXM6wbC26XndJLzuApBc_w.webp'
  },
  {
    id: '10',
    manufacturer: '기아',
    model: '쏘렌토',
    detailModel: '디젤',
    year: 2022,
    vinNumber: 'KNHXX00XXXX000010',
    status: 'completed',
    visibility: 'public',
    imageUrl: 'http://img.danawa.com/cp_images/service/33/5416626/7f3e32d8.jpg'
  }
])

const searchResults = ref<Car[]>([])

// 현재 페이지에 표시할 결과
const displayedResults = computed(() => {
  return searchResults.value.slice(0, currentPage.value * pageSize)
})

const pageSize = 5
const currentPage = ref(1)
const isLoading = ref(false)
const resultsContainer = ref<HTMLElement | null>(null)

const activeFiltersCount = computed(() => {
  return Object.values(searchParams.value).filter(value => value && value !== 'all').length
})

const setQuickPeriod = (days: number) => {
  const end = new Date()
  const start = new Date()
  start.setDate(start.getDate() - days)
  
  searchParams.value.endDate = end.toISOString().split('T')[0]
  searchParams.value.startDate = start.toISOString().split('T')[0]
}

const isSelectedPeriod = (days: number): boolean => {
  if (!searchParams.value.startDate || !searchParams.value.endDate) return false
  
  const start = new Date(searchParams.value.startDate)
  const end = new Date(searchParams.value.endDate)
  const diff = Math.round((end.getTime() - start.getTime()) / (1000 * 60 * 60 * 24))
  
  return diff === days
}

const getStatusLabel = (status: string): string => {
  const labels: Record<string, string> = {
    'waiting': '대기중',
    'selling': '판매중',
    'completed': '판매완료'
  }
  return labels[status] || status
}

// 스크롤 이벤트 핸들러
const handleScroll = async () => {
  if (!resultsContainer.value) return

  const container = resultsContainer.value
  const bottomOfWindow = Math.ceil(window.innerHeight + window.scrollY)
  const bottomOfContent = container.offsetTop + container.offsetHeight

  if (bottomOfWindow >= bottomOfContent - 100) { // 하단에서 100px 전에 로드 시작
    if (!isLoading.value && displayedResults.value.length < searchResults.value.length) {
      await loadMore()
    }
  }
}

// 추가 결과 로드
const loadMore = async () => {
  if (isLoading.value) return

  isLoading.value = true
  
  // 실제 API 호출을 시뮬레이션하기 위한 지연
  await new Promise(resolve => setTimeout(resolve, 1000))
  
  currentPage.value++
  isLoading.value = false
}

// 검색 초기화
const resetSearch = () => {
  searchParams.value = {
    startDate: '',
    endDate: '',
    visibility: 'all',
    manufacturer: '',
    model: '',
    detailModel: '',
    year: '',
    vinNumber: '',
    status: 'all'
  }
  currentPage.value = 1
  searchResults.value = [...allCars.value]
  totalResults.value = searchResults.value.length
}

// 검색 실행
const search = () => {
  currentPage.value = 1 // 페이지 초기화
  isLoading.value = true

  // 검색 조건에 따라 결과 필터링
  const filteredResults = allCars.value.filter(car => {
    // 날짜 범위 체크
    if (searchParams.value.startDate && searchParams.value.endDate) {
      const carDate = new Date(car.year, 0, 1)
      const startDate = new Date(searchParams.value.startDate)
      const endDate = new Date(searchParams.value.endDate)
      
      // 연도만 비교하도록 수정
      if (car.year < startDate.getFullYear() || car.year > endDate.getFullYear()) {
        return false
      }
    }

    // 제조사 체크
    if (searchParams.value.manufacturer && car.manufacturer !== searchParams.value.manufacturer) {
      return false
    }

    // 모델 체크
    if (searchParams.value.model && car.model !== searchParams.value.model) {
      return false
    }

    // 상세모델 체크
    if (searchParams.value.detailModel && car.detailModel !== searchParams.value.detailModel) {
      return false
    }

    // 연식 체크
    if (searchParams.value.year && car.year !== parseInt(searchParams.value.year)) {
      return false
    }

    // 차대번호 체크
    if (searchParams.value.vinNumber && !car.vinNumber.toLowerCase().includes(searchParams.value.vinNumber.toLowerCase())) {
      return false
    }

    // 공개 여부 체크
    if (searchParams.value.visibility !== 'all' && car.visibility !== searchParams.value.visibility) {
      return false
    }

    // 상태 체크
    if (searchParams.value.status !== 'all' && car.status !== searchParams.value.status) {
      return false
    }

    return true
  })

  // 검색 결과 업데이트
  searchResults.value = filteredResults
  totalResults.value = filteredResults.length

  // 로딩 상태 해제
  setTimeout(() => {
    isLoading.value = false
  }, 500)
}

const openImageModal = (car: Car) => {
  selectedCar.value = car
  document.body.style.overflow = 'hidden' // 배경 스크롤 방지
}

const closeImageModal = () => {
  selectedCar.value = null
  document.body.style.overflow = '' // 배경 스크롤 복원
}

// 스크롤 이벤트 리스너 등록/해제
onMounted(() => {
  setQuickPeriod(7)
  resetSearch() // 초기 데이터 설정을 resetSearch로 통일
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
  document.body.style.overflow = ''
})

// 검색 조건이 변경될 때마다 페이지 리셋
watch(searchParams, () => {
  currentPage.value = 1
}, { deep: true })
</script>

<style scoped>
.modal-enter-active,
.modal-leave-active {
  transition: opacity 0.3s ease;
}

.modal-enter-from,
.modal-leave-to {
  opacity: 0;
}

@keyframes spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

.animate-spin {
  animation: spin 1s linear infinite;
}
</style> 