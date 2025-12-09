<template>
  <div class="hover:-translate-y-1 hover:shadow-xl transition-all duration-500 ease-out bg-primaryDark/30 border border-white/20 rounded-xl sm:rounded-2xl p-4 sm:p-5 mb-3 sm:mb-4 shadow-md">
    <div class="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-3 sm:mb-4 gap-3">
      <div class="flex-1">
        <h3 class="text-white font-bold text-base sm:text-lg break-words">#{{ id }} {{ title }}</h3>
      </div>
      <div class="flex gap-2 self-end sm:self-auto">
        <DashboardVisitButton :projectId="id" :url="url" />
        <DashboardEditButton :projectId="id" :editRoute="editRoute" />
      </div>
    </div>

    <div class="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
      <div class="flex-1 h-6 sm:h-8 bg-primaryDark/50 rounded-full border border-white/10 relative overflow-hidden">
        <div
          class="h-full bg-gradient-to-r from-primarySecond via-primaryActive to-primaryDark rounded-full transition-all duration-1000 ease-out"
          :style="{ width: animatedPercent + '%' }"
        ></div>
      </div>

      <div class="px-3 sm:px-4 py-1 rounded-full border border-white/20 text-white font-bold text-xs sm:text-sm bg-primaryDark/50 text-center whitespace-nowrap transition-all duration-700 hover:scale-110">
        {{ days }}D
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import DashboardVisitButton from './DashboardVisitButton.vue'
import DashboardEditButton from './DashboardEditButton.vue'

const props = defineProps({
  id: String,
  title: String,
  percent: Number,
  days: Number,
  url: String,
  editRoute: String
})

const animatedPercent = ref(0)

onMounted(() => {
  setTimeout(() => {
    animatedPercent.value = props.percent
  }, 100)
})
</script>


