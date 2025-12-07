<template>
  <aside class="w-20 flex flex-col items-center py-8 gap-6 border-r border-white bg-gradient-to-b from-primaryDark to-primary shadow-2xl relative">
    <button
      @click="$emit('close')"
      class="md:hidden p-2 hover:bg-white/10 rounded-lg transition-colors"
      aria-label="Close menu"
    >
      <X :size="24" />
    </button>

    <div
      @click="handleNavigation(goToDashboard)"
      class="p-3 rounded-xl cursor-pointer hover:scale-105 transition"
      :class="isActive('dashboard') ? 'bg-primaryDark border-2 border-white/20 shadow-[0_0_15px_rgba(111,0,255,0.4)]' : 'hover:bg-white/10'"
    >
      <Server :size="32" />
    </div>

    <div
      @click="handleNavigation(goToStatistic)"
      class="p-3 rounded-xl cursor-pointer hover:scale-105 transition"
      :class="isActive('dashboardStatistic') ? 'bg-primaryDark border-2 border-white/20 shadow-[0_0_15px_rgba(111,0,255,0.4)]' : 'hover:bg-white/10'"
    >
      <BarChart3 :size="32" />
    </div>
  </aside>
</template>

<script setup>
import { Server, BarChart3, X } from 'lucide-vue-next'
import { useRoute } from 'vue-router'
import { routerPush } from '../router'

const emit = defineEmits(['close'])

const route = useRoute()

const isActive = (routeName) => {
  return route.name === routeName
}

const handleNavigation = (navigationFn) => {
  navigationFn()
  emit('close')
}

const goToDashboard = () => {
  routerPush('dashboard')
}

const goToStatistic = () => {
  routerPush('dashboardStatistic')
}
</script>


