<template>
  <div class="relative flex flex-col lg:flex-row items-center min-h-screen pt-20 pb-4 px-4 sm:p-6 md:p-8 lg:p-10 xl:px-20 overflow-hidden">

    <div class="absolute inset-0 overflow-hidden pointer-events-none">
      <div class="absolute top-1/4 left-1/4 w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 bg-amber-100/30 rounded-full blur-[500px] animate-pulse"></div>
      <div class="absolute bottom-1/3 right-1/4 w-40 h-40 sm:w-56 sm:h-56 md:w-72 md:h-72 lg:w-80 lg:h-80 bg-blue-500/20 rounded-full blur-[500px] animate-pulse" style="animation-delay: 1s;"></div>
      <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[800px] h-[300px] sm:max-w-[1000px] sm:h-[400px] md:max-w-[1200px] md:h-[500px] lg:max-w-[1600px] lg:h-[600px] bg-purple-500/15 rounded-full blur-[240px]"></div>
    </div>

    <div class="flex flex-col gap-6 sm:gap-8 md:gap-10 max-w-2xl w-full lg:mr-auto z-20">
      <div>
        <h1 class="text-white font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl leading-tight w-full">
          Semuanya terkendali dengan <span class="text-amber-100">Gampang</span>
        </h1>
      </div>

      <div class="flex flex-col gap-4 sm:gap-5 md:gap-6">
        <div class="relative flex gap-3 sm:gap-4 md:gap-5 lg:gap-6 flex-wrap">
          <button
            v-for="(item, index) in features"
            :key="index"
            @click="handleFeatureClick(index)"
            class="group relative p-4 sm:p-5 md:p-6 rounded-2xl sm:rounded-3xl border transition-all duration-300 ease-out flex-shrink-0"
            :class="[
              activeIndex === index
                ? 'border-white bg-white/10 text-white shadow-[0_0_25px_rgba(253,230,138,0.6)] scale-105'
                : 'border-white/20 text-gray-400 hover:border-white/50 hover:bg-white/5 hover:text-white'
            ]"
          >
            <component
              :is="item.icon"
              :size="24"
              class="transition-transform duration-300 sm:w-7 sm:h-7 md:w-8 md:h-8"
              :class="{ 'scale-110': activeIndex === index }"
            />
          </button>
        </div>

        <div class="w-full relative">
          <div
            class="border border-white bg-primaryDark/40 backdrop-blur-lg p-5 sm:p-6 md:p-7 lg:p-8 rounded-2xl sm:rounded-3xl text-white shadow-lg transition-all duration-500"
          >
            <h3 class="text-lg sm:text-xl md:text-2xl font-bold mb-2 sm:mb-3 text-amber-100">
              {{ features[activeIndex]?.title }}
            </h3>
            <p class="text-gray-300 leading-relaxed text-sm sm:text-base md:text-lg">
              {{ features[activeIndex]?.description }}
            </p>
            <GimmickSlider ref="sliderRef" :positions="features.length" position="bottom-left" />
          </div>
        </div>
      </div>
    </div>

  </div>

<img
  src="@/assets/img/mejantara-overview.png"
  class="relative lg:absolute w-full lg:w-auto h-auto lg:h-[80%] xl:h-[85%] lg:top-1/2 lg:-translate-y-1/4 lg:right-0 lg:translate-x-[65%] xl:translate-x-[70%] opacity-20 sm:opacity-25 md:opacity-30 lg:opacity-40 z-10 mt-4 lg:mt-0"
  style="-webkit-mask-image: linear-gradient(to right, black 100%, transparent 100%); mask-image:
    linear-gradient(to right, black 100%, transparent 100%);"
/>


</template>

<script setup lang="ts">
import { ref } from 'vue';
import { Server, ShieldCheck, Activity } from 'lucide-vue-next';
import GimmickSlider from './GimmickSlider.vue';

const activeIndex = ref(0);
const sliderRef = ref<InstanceType<typeof GimmickSlider> | null>(null);

const handleFeatureClick = (index: number) => {
  activeIndex.value = index;
  if (sliderRef.value) {
    sliderRef.value.setPosition(index);
  }
};

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


