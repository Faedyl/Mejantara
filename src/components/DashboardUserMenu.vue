<template>
  <div class="relative">
    <div class="flex items-center gap-2 cursor-pointer" @click="toggleMenu">
      <span class="font-semibold text-primarySecond">{{ userName }}</span>
      <div class="w-1 h-4 bg-primaryActive rounded-full"></div>
    </div>
    <div v-if="showMenu" class="absolute right-0 mt-2 w-48 bg-primaryDark border border-white/20 rounded-lg shadow-lg overflow-hidden z-50">
      <button @click="goToWebsite" class="w-full text-left px-4 py-3 hover:bg-primaryActive/30 transition flex items-center gap-2">
        <Home :size="18" />
        <span>Keluar</span>
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { Home } from 'lucide-vue-next'

defineProps({
  userName: {
    type: String,
    default: 'User'
  }
})

const router = useRouter()
const showMenu = ref(false)

const toggleMenu = () => {
  showMenu.value = !showMenu.value
}

const goToWebsite = () => {
  router.push('/')
  showMenu.value = false
}
</script>
