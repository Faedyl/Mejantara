<template>
  <div class="relative flex flex-col lg:flex-row items-center min-h-screen p-10 overflow-hidden
    px-75">

    <div class="absolute inset-0 overflow-hidden pointer-events-none">
      <div class="absolute top-1/4 left-1/4 w-96 h-96 bg-amber-100/30 rounded-full blur-[500px] animate-pulse"></div>
      <div class="absolute bottom-1/3 right-1/4 w-80 h-80 bg-blue-500/20 rounded-full blur-[500px] animate-pulse" style="animation-delay: 1s;"></div>
      <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1600px] h-[600px]
        bg-purple-500/15 rounded-full blur-[240px]"></div>
    </div>

    <div class="flex flex-col gap-10 max-w-2xl w-full z-10 lg:mr-auto">
      <div>
        <h1 class="text-white font-bold text-5xl md:text-7xl leading-tight w-full">
          Semuanya terkendali dengan <span class="text-amber-100">Gampang</span>
        </h1>
      </div>

      <div class="flex flex-col gap-6">
        <div class="flex gap-4 md:gap-6">
          <button
            v-for="(item, index) in features"
            :key="index"
            @click="activeIndex = index"
            class="group relative p-6 rounded-3xl border transition-all duration-300 ease-out"
            :class="[
              activeIndex === index
                ? 'border-white bg-white/10 text-white shadow-[0_0_25px_rgba(253,230,138,0.6)] scale-105'
                : 'border-white/20 text-gray-400 hover:border-white/50 hover:bg-white/5 hover:text-white'
            ]"
          >
            <component
              :is="item.icon"
              :size="32"
              class="transition-transform duration-300"
              :class="{ 'scale-110': activeIndex === index }"
            />
          </button>
        </div>

        <div class="w-full relative">
          <div
            class="border border-white/20 bg-white/5 backdrop-blur-sm p-8 rounded-3xl text-white shadow-lg transition-all duration-500"
          >
            <h3 class="text-2xl font-bold mb-3 text-amber-100">
              {{ features[activeIndex].title }}
            </h3>
            <p class="text-gray-300 leading-relaxed text-lg">
              {{ features[activeIndex].description }}
            </p>
          </div>
        </div>
      </div>
    </div>

  </div>

<img
  src="@/assets/img/mejantara-overview.png"
  class="lg:block absolute top-1/2 -translate-y-1/4 h-[80%] translate-x-[70%]
      opacity-40"
  style="-webkit-mask-image: linear-gradient(to right, black 100%, transparent 100%); mask-image:
    linear-gradient(to right, black 100%, transparent 100%);"
/>


</template>

<script setup lang="ts">
import { ref } from 'vue';
import { Server, ShieldCheck, Activity } from 'lucide-vue-next';

const activeIndex = ref(0);

const features = [
  {
    icon: Server,
    title: 'Server Terpercaya',
    description: 'Nikmati infrastruktur server yang dirancang untuk ketersediaan tinggi (High Availability). Kami menjamin uptime maksimal agar bisnis Anda tetap berjalan tanpa henti, kapanpun dan dimanapun.'
  },
  {
    icon: ShieldCheck,
    title: 'Keamanan Tingkat Tinggi',
    description: 'Data Anda adalah prioritas kami. Dengan enkripsi end-to-end dan perlindungan DDoS otomatis, sistem kami menjaga aset digital Anda tetap aman dari ancaman siber yang terus berkembang.'
  },
  {
    icon: Activity,
    title: 'Monitoring Real-time',
    description: 'Pantau performa aplikasi Anda secara langsung. Dapatkan wawasan mendalam (insight) dan notifikasi instan jika terjadi anomali, sehingga Anda bisa mengambil keputusan dengan cepat.'
  }
];
</script>


