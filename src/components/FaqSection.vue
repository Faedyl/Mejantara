
<template>
  <div class="relative w-full max-w mx-auto mt-6 md:mt-10 px-8 sm:px-12 md:px-24 lg:px-32 xl:px-75">

    <div class="relative rounded-2xl md:rounded-3xl p-4 sm:p-5 md:p-6 pb-10 md:pb-12 shadow-2xl border border-white">

      <div class="space-y-3 md:space-y-4">
        <div
          v-for="item in faqItems"
          :key="item.id"
          class="border border-white/40 rounded-2xl md:rounded-3xl overflow-hidden transition-all duration-300"
          :class="activeId === item.id ? 'bg-white/10 border-white/60' : 'hover:bg-white/5'"
        >

          <button
            @click="toggleItem(item.id)"
            class="w-full flex items-center justify-between px-4 sm:px-5 md:px-6 py-3 md:py-4 text-white font-medium text-left text-sm sm:text-base"
          >
            <span class="pr-4">{{ item.text }}</span>

            <ArrowLeftIcon
              class="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0 transition-transform duration-300"
              :class="activeId === item.id ? '-rotate-90 opacity-100' : 'rotate-0 opacity-70'"
            />
          </button>

          <div
            v-show="activeId === item.id"
            class="px-4 sm:px-5 md:px-6 pb-3 md:pb-4 text-white/80 text-xs sm:text-sm leading-relaxed"
          >
            {{ item.description }}
          </div>

        </div>
      </div>

      <GimmickSlider ref="sliderRef" :positions="faqItems.length" position="bottom-left" />
    </div>
  </div>
</template>


<script setup lang="ts">
import { ref } from 'vue';
import { ArrowLeftIcon } from 'lucide-vue-next';
import GimmickSlider from './GimmickSlider.vue';

const activeId = ref<number | null>(null);
const sliderRef = ref<InstanceType<typeof GimmickSlider> | null>(null);

const toggleItem = (id: number) => {
  activeId.value = activeId.value === id ? null : id;

  const index = faqItems.findIndex(item => item.id === id);
  if (index !== -1 && sliderRef.value) {
    sliderRef.value.setPosition(index);
  }
};


const faqItems = [
  {
    id: 1,
    text: 'Apakah ini terpercaya?',
    description: 'Tentu saja. Kami telah beroperasi selama 5 tahun dan memiliki sertifikasi keamanan standar internasional.'
  },
  {
    id: 2,
    text: 'Bagaimana cara menggunakannya?',
    description: 'Cukup buat akun, verifikasi email Anda, dan Anda bisa langsung mulai mengakses dashboard utama.'
  },
  {
    id: 3,
    text: 'Apakah ada referral program?',
    description: 'Ya, kami menawarkan komisi 10% untuk setiap teman yang Anda undang dan melakukan transaksi pertama.'
  },
];
</script>
