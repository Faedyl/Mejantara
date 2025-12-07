<template>
  <header class="flex justify-between items-center px-4 sm:px-8 py-4 sm:py-6 border-b border-white">
    <div class="flex items-center gap-2 sm:gap-4">
      <button
        @click="$emit('toggle-sidebar')"
        class="md:hidden p-2 hover:bg-white/10 rounded-lg transition-colors"
        aria-label="Toggle menu"
      >
        <Menu :size="24" />
      </button>
      <button
        v-if="showBackButton"
        @click="$emit('back')"
        class="p-2 hover:bg-white/10 rounded-lg transition"
      >
        <ArrowLeft :size="24" />
      </button>
      <h1 class="text-lg sm:text-2xl font-bold tracking-wide">{{ title }}</h1>
    </div>
    <DashboardUserMenu :userName="userName" />
  </header>
</template>

<script setup>
import { Menu, ArrowLeft } from 'lucide-vue-next'
import DashboardUserMenu from './DashboardUserMenu.vue'

defineProps({
  title: {
    type: String,
    default: 'Mejantara'
  },
  userName: {
    type: String,
    default: 'Faedyl'
  },
  showBackButton: {
    type: Boolean,
    default: false
  }
})

defineEmits(['toggle-sidebar', 'back'])
</script>
