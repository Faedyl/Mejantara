<template>
  <div class="flex h-screen w-full bg-primary text-white font-sans overflow-hidden">
    <DashboardSidebar 
      :class="['hidden md:flex', { '!flex': isSidebarOpen }]"
      class="md:relative absolute inset-y-0 left-0 z-40"
      @close="closeSidebar"
    />

    <div 
      v-if="isSidebarOpen" 
      @click="closeSidebar"
      class="fixed inset-0 bg-black/50 z-30 md:hidden"
    ></div>

    <DashboardStatisticContent 
      @toggle-sidebar="toggleSidebar"
    />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import DashboardSidebar from '../components/DashboardSidebar.vue'
import DashboardStatisticContent from '../components/DashboardStatistic.vue'

const isSidebarOpen = ref(false)

const toggleSidebar = () => {
  isSidebarOpen.value = !isSidebarOpen.value
}

const closeSidebar = () => {
  isSidebarOpen.value = false
}
</script>
