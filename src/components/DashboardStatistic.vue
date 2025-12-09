<template>
  <main class="flex-1 flex flex-col relative overflow-y-auto">

    <div class="absolute top-0 left-0 w-full h-96 bg-gradient-to-br from-primaryDark via-primaryActive to-primary -z-10"></div>

    <DashboardHeader 
      title="Mejantara" 
      userName="Faedyl"
      @toggle-sidebar="emit('toggle-sidebar')"
    />

    <div class="p-4 sm:p-6 lg:p-8">
      <div class="relative max-w-4xl mx-auto border border-white rounded-2xl sm:rounded-3xl p-4 sm:p-6 lg:p-8 bg-primaryDark/40 backdrop-blur-lg shadow-2xl">

      <div class="flex flex-col md:flex-row justify-between items-center mb-6 sm:mb-10 gap-4">
        <h2 class="text-2xl sm:text-3xl font-bold tracking-wide">Statistik</h2>

        <div class="flex items-center bg-primaryDark border border-white rounded-full p-1">
          <button
            v-for="tab in tabs"
            :key="tab"
            @click="handleTabClick(tab)"
            class="px-4 sm:px-6 py-1.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300"
            :class="activeTab === tab ? 'bg-primaryActive text-white shadow-lg' : 'text-primarySecond hover:text-white'"
          >
            {{ tab }}
          </button>
        </div>
      </div>

      <div class="flex flex-col gap-6 sm:gap-10">
        <StatCard
          v-for="chart in charts"
          :key="chart.id"
          :id="chart.id"
          :title="chart.title"
          :pathData="chart.path"
          :points="chart.points"
        />
      </div>

      <GimmickSlider ref="sliderRef" :positions="tabs.length" position="bottom-right" />
    </div>
    </div>
  </main>
</template>


<script setup>
import { ref, onMounted, computed } from 'vue'
import StatCard from './DashboardStatCard.vue'
import DashboardHeader from './DashboardHeader.vue'
import GimmickSlider from './GimmickSlider.vue'

const emit = defineEmits(['toggle-sidebar'])

const activeTab = ref('3h')
const tabs = ['3h', '1D', 'Month']
const sliderRef = ref(null)

const handleTabClick = (tab) => {
  activeTab.value = tab
  const index = tabs.indexOf(tab)
  if (index !== -1 && sliderRef.value) {
    sliderRef.value.setPosition(index)
  }
}

const statsData = ref({})

const generateChartData = (config) => {
  const { dataPoints, minVisits, maxVisits } = config
  const points = []
  const values = []

  for (let i = 0; i < dataPoints; i++) {
    const value = Math.random() * (maxVisits - minVisits) + minVisits
    values.push(value)
  }

  const maxValue = Math.max(...values)
  const minValue = Math.min(...values)
  const range = maxValue - minValue || 1

  const normalizedPoints = values.map((value, index) => ({
    x: (index / (dataPoints - 1)) * 500,
    y: 150 - ((value - minValue) / range) * 100 - 25
  }))

  let path = `M${normalizedPoints[0].x},${normalizedPoints[0].y}`

  for (let i = 0; i < normalizedPoints.length - 1; i++) {
    const current = normalizedPoints[i]
    const next = normalizedPoints[i + 1]
    const midX = (current.x + next.x) / 2

    path += ` C${midX},${current.y} ${midX},${next.y} ${next.x},${next.y}`
  }

  const pointIndices = [
    Math.floor(dataPoints * 0.25),
    Math.floor(dataPoints * 0.5),
    Math.floor(dataPoints * 0.65),
    Math.floor(dataPoints * 0.85)
  ]

  points.push(...pointIndices.map(i => normalizedPoints[i]))

  return { path, points }
}

const charts = computed(() => {
  const result = []

  for (const [id, data] of Object.entries(statsData.value)) {
    const config = data[activeTab.value]
    if (config) {
      const { path, points } = generateChartData(config)
      result.push({
        id,
        title: data.title,
        path,
        points
      })
    }
  }

  return result
})

onMounted(async () => {
  try {
    const response = await fetch('/mockup-statistics.json')
    const data = await response.json()
    statsData.value = data
  } catch (error) {
    console.error('Error loading statistics:', error)
  }
})
</script>
