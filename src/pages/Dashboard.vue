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
      class="md:hidden fixed inset-0 bg-black/50 z-30"
    ></div>

    <main class="flex-1 flex flex-col relative overflow-y-auto">

      <div class="absolute top-0 left-0 w-full h-96 bg-gradient-to-br from-primaryDark via-primaryActive to-primary -z-10"></div>

      <DashboardHeader @toggle-sidebar="toggleSidebar" />

      <div class="p-4 sm:p-6 lg:p-8 space-y-6 sm:space-y-8 max-w-7xl mx-auto w-full">

        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">

          <DashboardCard class="flex-col !items-start gap-4">
            <div>
              <p class="text-xs text-primarySecond uppercase font-bold tracking-wider mb-1">Terakhir Dilihat</p>
              <div class="flex items-center gap-2">
                <TrendingUp :size="24" />
                <span class="text-lg font-semibold">Statistik</span>
              </div>
              <div class="w-full h-0.5 bg-white/20 mt-2"></div>
            </div>
          </DashboardCard>

          <DashboardCard>
            <div class="flex items-center justify-between w-full">
              <div>
                <span class="text-5xl font-bold block">10</span>
                <span class="text-sm text-primarySecond">10 of 50</span>
              </div>
              <div class="p-4 bg-primaryDark/50 rounded-xl border border-white">
                <Settings :size="40" />
              </div>
            </div>
          </DashboardCard>

          <DashboardCard>
            <div class="flex items-center justify-between w-full">
              <div class="p-3 sm:p-4 rounded-full border border-white">
                <DollarSign :size="32" class="sm:w-10 sm:h-10" />
              </div>
              <div class="text-right">
                <span class="text-3xl sm:text-4xl lg:text-5xl font-bold block">500<span class="text-lg sm:text-xl text-primarySecond">.000</span></span>
              </div>
            </div>
          </DashboardCard>
        </div>

        <div class="flex justify-center sm:justify-end">
          <DashboardSearch v-model="searchQuery" />
        </div>

        <div class="border border-white rounded-2xl sm:rounded-3xl p-4 sm:p-6 bg-primaryDark/40 backdrop-blur-lg">
          <DashboardProgress
            v-for="project in filteredProjects"
            :key="project.id"
            :id="project.id"
            :title="project.title"
            :percent="project.percent"
            :days="project.days"
            :url="project.url"
            :editRoute="project.editRoute"
          />
          <div v-if="filteredProjects.length === 0" class="text-center py-8 text-primarySecond">
            No projects found matching "{{ searchQuery }}"
          </div>
        </div>

      </div>
    </main>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { Settings, DollarSign, TrendingUp } from 'lucide-vue-next'
import DashboardSidebar from '../components/DashboardSidebar.vue'
import DashboardCard from '../components/DashboardCard.vue'
import DashboardProgress from '../components/DashboardProgress.vue'
import DashboardHeader from '../components/DashboardHeader.vue'
import DashboardSearch from '../components/DashboardSearch.vue'

const projects = ref([])
const searchQuery = ref('')
const isSidebarOpen = ref(false)

const toggleSidebar = () => {
  isSidebarOpen.value = !isSidebarOpen.value
}

const closeSidebar = () => {
  isSidebarOpen.value = false
}

const filteredProjects = computed(() => {
  if (!searchQuery.value.trim()) {
    return projects.value
  }

  const query = searchQuery.value.toLowerCase()
  return projects.value.filter(project => {
    return project.title.toLowerCase().includes(query) ||
           project.id.toLowerCase().includes(query) ||
           project.url.toLowerCase().includes(query)
  })
})

onMounted(async () => {
  try {
    // Check localStorage first (for persisted changes)
    const stored = localStorage.getItem('mockup-projects')
    let projectsData = {}

    if (stored) {
      projectsData = JSON.parse(stored)
    } else {
      // Load from JSON file
      const response = await fetch('/mockup-projects.json')
      projectsData = await response.json()
    }

    // Convert object to array format
    projects.value = Object.entries(projectsData).map(([id, data]) => ({
      id,
      ...data,
      editRoute: `/dashboard/edit/${id}`
    }))
  } catch (error) {
    console.error('Error loading projects:', error)
  }
})
</script>


