<template>
  <div class="border-1 text-white flex flex-col rounded-4xl p-12 gap-8 mx-75">

    <div class="flex justify-between w-full items-center">
      <span class="text-left font-bold text-2xl">
        {{ currentCategory.description }}
      </span>

      <div class="flex gap-2 border-1 p-2 rounded-2xl">
        <div class="flex-2">
          <button 
            @click="activeCategory = 'web'"
            :class="activeCategory === 'web' ? 'bg-primaryActive' : 'border-1'"
            class="rounded-2xl transition-colors"
          >
            <div class="py-2 px-8 font-bold">Web</div>
          </button>
        </div>
        <div class="flex-3">
          <button 
            @click="activeCategory = 'vpn'"
            :class="activeCategory === 'vpn' ? 'bg-primaryActive' : 'border-1'"
            class="rounded-2xl transition-colors"
          >
            <div class="py-2 px-8 font-bold">VPN</div>
          </button>
        </div>
        <div class="flex-4">
          <button 
            @click="activeCategory = 'storage'"
            :class="activeCategory === 'storage' ? 'bg-primaryActive' : 'border-1'"
            class="rounded-2xl transition-colors"
          >
            <div class="py-2 px-8 font-bold">STORAGE</div>
          </button>
        </div>
      </div>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-3 gap-8">

      <div 
        v-for="(plan, index) in currentCategory.plans" 
        :key="index"
        class="flex flex-col rounded-[3rem] border border-white/50 overflow-hidden bg-primary"
      >

        <div class="p-8 flex flex-col">
          <div class="flex justify-end">
            <span class="px-10 py-3 rounded-full font-extrabold text-2xl bg-primarySecond text-primary">
              {{ plan.name }}
            </span>
          </div>

          <div class="text-white flex flex-col gap-3 font-bold text-xl text-left mt-6">
            <span v-for="(feature, idx) in plan.features" :key="idx">{{ feature }}</span>
          </div>

          <div class="text-white text-left mt-12">
            <span class="text-[5rem] leading-none font-extrabold">{{ plan.price }}</span>
            <span class="text-3xl font-bold">.000/bln</span>
          </div>
        </div>

        <div class="border-t border-white/30 mx-8"></div>

        <div class="p-8">
          <button class="w-full rounded-full py-5 font-extrabold text-3xl transition-transform hover:scale-105 bg-primarySecond text-primary">
            Pilih {{ plan.name }}
          </button>
        </div>

      </div>

    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

const activeCategory = ref('web')

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
