
<template>
  <div class="relative w-full max-w mx-auto mt-10 px-75 ">

    <div class="bg-primaryDark rounded-3xl p-6 pb-12 shadow-2xl border border-white/10">

      <div class="space-y-4">
        <div
          v-for="item in faqItems"
          :key="item.id"
          class="border border-white/20 rounded-3xl overflow-hidden transition-all duration-300"
          :class="activeId === item.id ? 'bg-white/10 border-white/40' : 'hover:bg-white/5'"
        >

          <button
            @click="toggleItem(item.id)"
            class="w-full flex items-center justify-between px-6 py-4 text-white font-medium text-left"
          >
            <span>{{ item.text }}</span>

            <ArrowLeftIcon
              class="w-5 h-5 transition-transform duration-300"
              :class="activeId === item.id ? '-rotate-90 opacity-100' : 'rotate-0 opacity-70'"
            />
          </button>

          <div
            v-show="activeId === item.id"
            class="px-6 pb-4 text-white/80 text-sm leading-relaxed"
          >
            {{ item.description }}
          </div>

        </div>
      </div>

    </div>

    <div class="absolute -bottom-3 -right-3 bg-[#3b0764] rounded-full p-1 border border-white/10 shadow-lg flex items-center w-24 h-10">
      <div class="h-8 w-8 bg-[#e8b5fd] rounded-full shadow-md ml-0.5"></div>
    </div>

  </div>
</template>


<script setup lang="ts">
import { ref } from 'vue';
import { ArrowLeftIcon } from 'lucide-vue-next';


const activeId = ref<number | null>(null);


const toggleItem = (id: number) => {

  activeId.value = activeId.value === id ? null : id;
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
