<template>
  <div class="max-w-2xl mx-auto">
    <h1 class="text-2xl font-bold text-gray-900 dark:text-white mb-6">차량 옵션 선택</h1>
    
    <div class="space-y-4">
      <!-- 외장 섹션 -->
      <div class="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 overflow-hidden">
        <button 
          @click="toggleSection('exterior')" 
          class="w-full px-4 py-3 flex justify-between items-center hover:bg-gray-50 dark:hover:bg-gray-700"
        >
          <div class="flex items-center space-x-3">
            <span class="text-lg font-medium text-gray-900 dark:text-white">외장</span>
            <span class="text-sm text-primary-600 dark:text-primary-400">{{ getSelectedCount('exterior') }} 선택됨</span>
          </div>
          <svg 
            class="w-5 h-5 text-gray-500 transition-transform duration-200"
            :class="{ 'rotate-180': openSections.exterior }"
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
          </svg>
        </button>
        <div v-show="openSections.exterior" class="border-t border-gray-200 dark:border-gray-700">
          <div class="p-4 space-y-3">
            <div v-for="(value, key) in options.exterior" :key="key" class="flex items-center justify-between">
              <label class="text-gray-700 dark:text-gray-300">{{ getOptionLabel('exterior', key) }}</label>
              <button 
                @click="toggleOption('exterior', key as keyof VehicleOptions['exterior'])"
                class="relative inline-flex h-6 w-11 items-center rounded-full transition-colors duration-200"
                :class="value ? 'bg-primary-600' : 'bg-gray-200 dark:bg-gray-700'"
              >
                <span 
                  class="inline-block h-4 w-4 transform rounded-full bg-white transition-transform duration-200"
                  :class="value ? 'translate-x-6' : 'translate-x-1'"
                />
              </button>
            </div>
          </div>
        </div>
      </div>

      <!-- 내장 섹션 -->
      <div class="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 overflow-hidden">
        <button 
          @click="toggleSection('interior')" 
          class="w-full px-4 py-3 flex justify-between items-center hover:bg-gray-50 dark:hover:bg-gray-700"
        >
          <div class="flex items-center space-x-3">
            <span class="text-lg font-medium text-gray-900 dark:text-white">내장</span>
            <span class="text-sm text-primary-600 dark:text-primary-400">{{ getSelectedCount('interior') }} 선택됨</span>
          </div>
          <svg 
            class="w-5 h-5 text-gray-500 transition-transform duration-200"
            :class="{ 'rotate-180': openSections.interior }"
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
          </svg>
        </button>
        <div v-show="openSections.interior" class="border-t border-gray-200 dark:border-gray-700">
          <div class="p-4 space-y-3">
            <div v-for="(value, key) in options.interior" :key="key" class="flex items-center justify-between">
              <label class="text-gray-700 dark:text-gray-300">{{ getOptionLabel('interior', key) }}</label>
              <button 
                @click="toggleOption('interior', key)"
                class="relative inline-flex h-6 w-11 items-center rounded-full transition-colors duration-200"
                :class="value ? 'bg-primary-600' : 'bg-gray-200 dark:bg-gray-700'"
              >
                <span 
                  class="inline-block h-4 w-4 transform rounded-full bg-white transition-transform duration-200"
                  :class="value ? 'translate-x-6' : 'translate-x-1'"
                />
              </button>
            </div>
          </div>
        </div>
      </div>

      <!-- 안전 섹션 -->
      <div class="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 overflow-hidden">
        <button 
          @click="toggleSection('safety')" 
          class="w-full px-4 py-3 flex justify-between items-center hover:bg-gray-50 dark:hover:bg-gray-700"
        >
          <div class="flex items-center space-x-3">
            <span class="text-lg font-medium text-gray-900 dark:text-white">안전</span>
            <span class="text-sm text-primary-600 dark:text-primary-400">{{ getSelectedCount('safety') }} 선택됨</span>
          </div>
          <svg 
            class="w-5 h-5 text-gray-500 transition-transform duration-200"
            :class="{ 'rotate-180': openSections.safety }"
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
          </svg>
        </button>
        <div v-show="openSections.safety" class="border-t border-gray-200 dark:border-gray-700">
          <div class="p-4 space-y-3">
            <div v-for="(value, key) in options.safety" :key="key" class="flex items-center justify-between">
              <label class="text-gray-700 dark:text-gray-300">{{ getOptionLabel('safety', key) }}</label>
              <button 
                @click="toggleOption('safety', key)"
                class="relative inline-flex h-6 w-11 items-center rounded-full transition-colors duration-200"
                :class="value ? 'bg-primary-600' : 'bg-gray-200 dark:bg-gray-700'"
              >
                <span 
                  class="inline-block h-4 w-4 transform rounded-full bg-white transition-transform duration-200"
                  :class="value ? 'translate-x-6' : 'translate-x-1'"
                />
              </button>
            </div>
          </div>
        </div>
      </div>

      <!-- 편의 섹션 -->
      <div class="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 overflow-hidden">
        <button 
          @click="toggleSection('convenience')" 
          class="w-full px-4 py-3 flex justify-between items-center hover:bg-gray-50 dark:hover:bg-gray-700"
        >
          <div class="flex items-center space-x-3">
            <span class="text-lg font-medium text-gray-900 dark:text-white">편의</span>
            <span class="text-sm text-primary-600 dark:text-primary-400">{{ getSelectedCount('convenience') }} 선택됨</span>
          </div>
          <svg 
            class="w-5 h-5 text-gray-500 transition-transform duration-200"
            :class="{ 'rotate-180': openSections.convenience }"
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
          </svg>
        </button>
        <div v-show="openSections.convenience" class="border-t border-gray-200 dark:border-gray-700">
          <div class="p-4 space-y-3">
            <div v-for="(value, key) in options.convenience" :key="key" class="flex items-center justify-between">
              <label class="text-gray-700 dark:text-gray-300">{{ getOptionLabel('convenience', key) }}</label>
              <button 
                @click="toggleOption('convenience', key)"
                class="relative inline-flex h-6 w-11 items-center rounded-full transition-colors duration-200"
                :class="value ? 'bg-primary-600' : 'bg-gray-200 dark:bg-gray-700'"
              >
                <span 
                  class="inline-block h-4 w-4 transform rounded-full bg-white transition-transform duration-200"
                  :class="value ? 'translate-x-6' : 'translate-x-1'"
                />
              </button>
            </div>
          </div>
        </div>
      </div>

      <!-- 멀티미디어 섹션 -->
      <div class="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 overflow-hidden">
        <button 
          @click="toggleSection('multimedia')" 
          class="w-full px-4 py-3 flex justify-between items-center hover:bg-gray-50 dark:hover:bg-gray-700"
        >
          <div class="flex items-center space-x-3">
            <span class="text-lg font-medium text-gray-900 dark:text-white">멀티미디어</span>
            <span class="text-sm text-primary-600 dark:text-primary-400">{{ getSelectedCount('multimedia') }} 선택됨</span>
          </div>
          <svg 
            class="w-5 h-5 text-gray-500 transition-transform duration-200"
            :class="{ 'rotate-180': openSections.multimedia }"
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
          </svg>
        </button>
        <div v-show="openSections.multimedia" class="border-t border-gray-200 dark:border-gray-700">
          <div class="p-4 space-y-3">
            <div v-for="(value, key) in options.multimedia" :key="key" class="flex items-center justify-between">
              <label class="text-gray-700 dark:text-gray-300">{{ getOptionLabel('multimedia', key) }}</label>
              <button 
                @click="toggleOption('multimedia', key)"
                class="relative inline-flex h-6 w-11 items-center rounded-full transition-colors duration-200"
                :class="value ? 'bg-primary-600' : 'bg-gray-200 dark:bg-gray-700'"
              >
                <span 
                  class="inline-block h-4 w-4 transform rounded-full bg-white transition-transform duration-200"
                  :class="value ? 'translate-x-6' : 'translate-x-1'"
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- 하단 고정 버튼 -->
    <div class="fixed bottom-0 left-0 right-0 p-4 bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700">
      <div class="max-w-2xl mx-auto flex justify-between items-center">
        <div class="text-sm text-gray-600 dark:text-gray-400">
          총 {{ getTotalSelectedCount() }}개 선택됨
        </div>
        <div class="flex space-x-3">
          <button @click="resetOptions" class="btn-secondary text-sm px-4 py-2">
            초기화
          </button>
          <button @click="saveOptions" class="btn-primary text-sm px-6 py-2">
            저장
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

interface VehicleOptions {
  exterior: {
    hood: boolean;
    hid: boolean;
    led: boolean;
  };
  interior: {
    seat: boolean;
    steering: boolean;
    dashboard: boolean;
  };
  safety: {
    abs: boolean;
    tcs: boolean;
    airbag: boolean;
  };
  convenience: {
    aircon: boolean;
    cruise: boolean;
    smartkey: boolean;
  };
  multimedia: {
    navigation: boolean;
    bluetooth: boolean;
    usb: boolean;
  };
}

interface OpenSections {
  exterior: boolean;
  interior: boolean;
  safety: boolean;
  convenience: boolean;
  multimedia: boolean;
}

const options = ref<VehicleOptions>({
  exterior: {
    hood: false,
    hid: false,
    led: false
  },
  interior: {
    seat: false,
    steering: false,
    dashboard: false
  },
  safety: {
    abs: false,
    tcs: false,
    airbag: false
  },
  convenience: {
    aircon: false,
    cruise: false,
    smartkey: false
  },
  multimedia: {
    navigation: false,
    bluetooth: false,
    usb: false
  }
})

const openSections = ref<OpenSections>({
  exterior: true,
  interior: false,
  safety: false,
  convenience: false,
  multimedia: false
})

const optionLabels: Record<keyof VehicleOptions, Record<string, string>> = {
  exterior: {
    hood: '후드',
    hid: 'HID 라이트',
    led: 'LED 라이트'
  },
  interior: {
    seat: '가죽 시트',
    steering: '열선 스티어링',
    dashboard: '디지털 대시보드'
  },
  safety: {
    abs: 'ABS',
    tcs: '트랙션 컨트롤',
    airbag: '에어백'
  },
  convenience: {
    aircon: '오토 에어컨',
    cruise: '크루즈 컨트롤',
    smartkey: '스마트키'
  },
  multimedia: {
    navigation: '내비게이션',
    bluetooth: '블루투스',
    usb: 'USB 포트'
  }
}

const toggleSection = (section: keyof OpenSections) => {
  openSections.value[section] = !openSections.value[section]
}

const toggleOption = <T extends keyof VehicleOptions>(
  category: T,
  option: keyof VehicleOptions[T]
) => {
  options.value[category][option as keyof VehicleOptions[T]] = !(options.value[category][option as keyof VehicleOptions[T]] as boolean) as VehicleOptions[T][keyof VehicleOptions[T]];
};

const getOptionLabel = (category: keyof VehicleOptions, option: string): string => {
  return optionLabels[category][option] || option
}

const getSelectedCount = (category: keyof VehicleOptions): number => {
  return Object.values(options.value[category]).filter(Boolean).length
}

const getTotalSelectedCount = (): number => {
  return Object.values(options.value).reduce((total, category) => {
    return total + Object.values(category).filter(Boolean).length
  }, 0)
}

const resetOptions = () => {
  Object.keys(options.value).forEach((category) => {
    const categoryKey = category as keyof VehicleOptions;
    Object.keys(options.value[categoryKey]).forEach((option) => {
      const optionKey = option as keyof VehicleOptions[typeof categoryKey];
      options.value[categoryKey][optionKey as keyof VehicleOptions[typeof categoryKey]] = false as VehicleOptions[typeof categoryKey][keyof VehicleOptions[typeof categoryKey]];
    });
  });
};
const saveOptions = () => {
  console.log('Selected options:', options.value)
  // 여기에 저장 로직 추가
}
</script>

