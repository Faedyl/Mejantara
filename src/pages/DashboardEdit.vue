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

    <main class="flex-1 flex flex-col relative overflow-y-auto">
      <div class="absolute top-0 left-0 w-full h-96 bg-gradient-to-br from-primaryDark via-primaryActive to-primary -z-10"></div>

      <header class="flex justify-between items-center px-4 sm:px-8 py-4 sm:py-6 border-b border-white/10">
        <div class="flex items-center gap-2 sm:gap-4">
          <button 
            @click="toggleSidebar"
            class="md:hidden p-2 hover:bg-white/10 rounded-lg transition-colors"
            aria-label="Toggle menu"
          >
            <Menu :size="24" />
          </button>
          <button @click="goBack" class="p-2 hover:bg-white/10 rounded-lg transition">
            <ArrowLeft :size="24" />
          </button>
          <h1 class="text-lg sm:text-2xl font-bold tracking-wide">Edit Project</h1>
        </div>
        <DashboardUserMenu userName="Faedyl" />
      </header>

      <div class="p-4 sm:p-6 lg:p-8 space-y-6 max-w-4xl mx-auto w-full">
        <div class="bg-primaryDark/40 backdrop-blur-sm border border-white/20 rounded-2xl p-4 sm:p-6 lg:p-8 shadow-lg">
          <h2 class="text-lg sm:text-xl font-bold mb-6">Project #{{ projectId }}</h2>
          
          <form @submit.prevent="handleSubmit" class="space-y-6">
            <div>
              <label class="block text-sm font-semibold mb-2 text-primarySecond">Project Title</label>
              <input
                v-model="formData.title"
                type="text"
                class="w-full bg-primaryDark border border-white/30 rounded-lg py-3 px-4 text-white focus:outline-none focus:border-primaryActive"
                placeholder="Enter project title"
              />
            </div>

            <div>
              <label class="block text-sm font-semibold mb-2 text-primarySecond">Project URL</label>
              <input
                v-model="formData.url"
                type="url"
                class="w-full bg-primaryDark border border-white/30 rounded-lg py-3 px-4 text-white focus:outline-none focus:border-primaryActive"
                placeholder="https://example.com"
              />
            </div>

            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label class="block text-sm font-semibold mb-2 text-primarySecond">Progress (%)</label>
                <input
                  v-model.number="formData.percent"
                  type="number"
                  min="0"
                  max="100"
                  class="w-full bg-primaryDark border border-white/30 rounded-lg py-3 px-4 text-white focus:outline-none focus:border-primaryActive"
                  placeholder="0-100"
                />
              </div>

              <div>
                <label class="block text-sm font-semibold mb-2 text-primarySecond">Days Remaining</label>
                <input
                  v-model.number="formData.days"
                  type="number"
                  min="0"
                  class="w-full bg-primaryDark border border-white/30 rounded-lg py-3 px-4 text-white focus:outline-none focus:border-primaryActive"
                  placeholder="Days"
                />
              </div>
            </div>

            <div class="flex flex-col sm:flex-row gap-4 pt-4">
              <button
                type="submit"
                class="flex-1 bg-primaryActive hover:bg-primaryDark text-white py-3 px-6 rounded-lg font-semibold transition"
              >
                Save Changes
              </button>
              <button
                type="button"
                @click="goBack"
                class="flex-1 border border-white/30 hover:bg-white/10 text-white py-3 px-6 rounded-lg font-semibold transition"
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
    </main>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { ArrowLeft, Menu } from 'lucide-vue-next'
import DashboardSidebar from '../components/DashboardSidebar.vue'
import DashboardUserMenu from '../components/DashboardUserMenu.vue'

const router = useRouter()
const route = useRoute()
const projectId = ref(route.params.id)
const isSidebarOpen = ref(false)

const toggleSidebar = () => {
  isSidebarOpen.value = !isSidebarOpen.value
}

const closeSidebar = () => {
  isSidebarOpen.value = false
}

const formData = ref({
  title: '',
  url: '',
  percent: 0,
  days: 0
})

const projects = ref({})

onMounted(async () => {
  try {
    const response = await fetch('/mockup-projects.json')
    projects.value = await response.json()
    
    const project = projects.value[projectId.value]
    if (project) {
      formData.value = { ...project }
    }
  } catch (error) {
    console.error('Error loading projects:', error)
  }
})

const handleSubmit = async () => {
  try {
    // Update the projects object
    projects.value[projectId.value] = { ...formData.value }
    
    // Save to localStorage as mockup persistence
    localStorage.setItem('mockup-projects', JSON.stringify(projects.value))
    
    console.log('Project saved:', projectId.value, formData.value)
    router.push('/dashboard')
  } catch (error) {
    console.error('Error saving project:', error)
  }
}

const goBack = () => {
  router.push('/dashboard')
}
</script>
