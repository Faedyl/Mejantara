<template>
  <div class="relative border-1  bg-primaryDark/10 backdrop-blur-lg text-white flex flex-col rounded-2xl sm:rounded-3xl md:rounded-4xl p-4 sm:p-6 md:p-8 lg:p-10 xl:p-12 gap-4 sm:gap-6 md:gap-8 mx-4 sm:mx-6 md:mx-8 lg:mx-12 xl:mx-20">

    <div class="flex flex-col lg:flex-row justify-between w-full items-start lg:items-center gap-4 lg:gap-0">
      <span class="text-left font-bold text-base sm:text-lg md:text-xl lg:text-2xl max-w-full lg:max-w-md">
        {{ currentCategory.description }}
      </span>

      <div class="flex gap-1.5 sm:gap-2 border-1 p-1.5 sm:p-2 rounded-xl sm:rounded-2xl w-full lg:w-auto">
        <div class="flex-1">
          <button
            @click="handleCategoryClick('web')"
            :class="activeCategory === 'web' ? 'bg-primaryActive' : 'border-1'"
            class="rounded-xl sm:rounded-2xl transition-colors w-full"
          >
            <div class="py-2 px-3 sm:px-4 md:px-6 lg:px-8 font-bold text-sm sm:text-base">Web</div>
          </button>
        </div>
        <div class="flex-1">
          <button
            @click="handleCategoryClick('vpn')"
            :class="activeCategory === 'vpn' ? 'bg-primaryActive' : 'border-1'"
            class="rounded-xl sm:rounded-2xl transition-colors w-full"
          >
            <div class="py-2 px-3 sm:px-4 md:px-6 lg:px-8 font-bold text-sm sm:text-base">VPN</div>
          </button>
        </div>
        <div class="flex-1">
          <button
            @click="handleCategoryClick('storage')"
            :class="activeCategory === 'storage' ? 'bg-primaryActive' : 'border-1'"
            class="rounded-xl sm:rounded-2xl transition-colors w-full"
          >
            <div class="py-2 px-3 sm:px-4 md:px-6 lg:px-8 font-bold text-sm sm:text-base">STORAGE</div>
          </button>
        </div>
      </div>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-6 md:gap-8 w-full">

      <div
        v-for="(plan, index) in currentCategory.plans"
        :key="index"
        class="flex flex-col rounded-2xl sm:rounded-3xl lg:rounded-[3rem] border border-white/50 overflow-hidden bg-primary w-full"
      >

        <div class="p-5 sm:p-6 md:p-7 lg:p-8 flex flex-col flex-1">
          <div class="flex justify-end">
            <span class="px-5 sm:px-7 md:px-8 lg:px-10 py-2 sm:py-2.5 md:py-3 rounded-full font-extrabold text-lg sm:text-xl md:text-2xl bg-primarySecond text-primary">
              {{ plan.name }}
            </span>
          </div>

          <div class="text-white flex flex-col gap-2 sm:gap-2.5 md:gap-3 font-bold text-sm sm:text-base md:text-lg text-left mt-4 sm:mt-5 md:mt-6">
            <span v-for="(feature, idx) in plan.features" :key="idx">{{ feature }}</span>
          </div>

          <div class="text-white text-left mt-8 sm:mt-10 md:mt-12 lg:mt-auto flex flex-wrap items-baseline gap-1">
            <span class="text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight font-extrabold">{{ plan.price }}</span>
            <span class="text-base sm:text-lg md:text-xl lg:text-2xl font-bold whitespace-nowrap">.000/bln</span>
          </div>
        </div>

        <div class="border-t border-white/30 mx-5 sm:mx-6 md:mx-7 lg:mx-8"></div>

        <div class="p-5 sm:p-6 md:p-7 lg:p-8">
          <button class="w-full rounded-full py-3 sm:py-4 md:py-5 font-extrabold text-base sm:text-lg md:text-xl lg:text-2xl transition-transform hover:scale-105 bg-primarySecond text-primary">
            Pilih {{ plan.name }}
          </button>
        </div>

      </div>

    </div>

    <GimmickSlider ref="sliderRef" :positions="3" position="bottom-right" />
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import GimmickSlider from './GimmickSlider.vue'

const activeCategory = ref('web')
const sliderRef = ref(null)

const categoryMap = { web: 0, vpn: 1, storage: 2 }

const handleCategoryClick = (category) => {
  activeCategory.value = category
  if (sliderRef.value) {
    sliderRef.value.setPosition(categoryMap[category])
  }
}

const categories = {
  web: {
    description: 'Pilih paket hosting web terbaik untuk website Anda dengan performa optimal',
    plans: [
      {
        name: 'STARTER',
        features: ['2 GB Storage', '1 Domain Gratis', '20 Email Domain', 'Support Cpanel'],
        price: '50'
      },
      {
        name: 'BISNIS',
        features: ['5 GB Storage', '3 Domain Gratis', '50 Email Domain', 'Support Cpanel', 'SSL Gratis'],
        price: '150'
      },
      {
        name: 'PRO',
        features: ['10 GB Storage', '5 Domain Gratis', 'Unlimited Email', 'Support Cpanel', 'SSL Gratis', 'Backup Harian'],
        price: '250'
      }
    ]
  },
  vpn: {
    description: 'Lindungi privasi dan keamanan online Anda dengan layanan VPN berkecepatan tinggi',
    plans: [
      {
        name: 'BASIC',
        features: ['5 Device', '100 GB Bandwidth', 'Server Indonesia', 'Enkripsi AES-256'],
        price: '75'
      },
      {
        name: 'PREMIUM',
        features: ['10 Device', '500 GB Bandwidth', 'Server Global', 'Enkripsi AES-256', 'No Logs Policy'],
        price: '175'
      },
      {
        name: 'ULTIMATE',
        features: ['Unlimited Device', 'Unlimited Bandwidth', 'Server Global', 'Enkripsi AES-256', 'No Logs Policy', 'Dedicated IP'],
        price: '300'
      }
    ]
  },
  storage: {
    description: 'Simpan dan kelola data Anda dengan aman di cloud storage yang handal',
    plans: [
      {
        name: 'LITE',
        features: ['50 GB Storage', '2 GB Upload Size', 'File Sharing', 'Sinkronisasi Otomatis'],
        price: '40'
      },
      {
        name: 'PLUS',
        features: ['200 GB Storage', '5 GB Upload Size', 'File Sharing', 'Sinkronisasi Otomatis', 'Enkripsi End-to-End'],
        price: '120'
      },
      {
        name: 'MAX',
        features: ['1 TB Storage', '10 GB Upload Size', 'File Sharing', 'Sinkronisasi Otomatis', 'Enkripsi End-to-End', 'Backup Otomatis'],
        price: '220'
      }
    ]
  }
}

const currentCategory = computed(() => categories[activeCategory.value])
</script>
