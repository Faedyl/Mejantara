<template>
  <button 
    @click="handleVisit" 
    class="bg-primaryActive hover:bg-primaryDark text-white px-4 py-1 rounded-lg text-sm font-semibold transition"
  >
    Visit
  </button>
</template>

<script setup>
const props = defineProps({
  projectId: {
    type: String,
    required: true
  },
  url: {
    type: String,
    default: ''
  }
})

const handleVisit = () => {
  if (props.url) {
    window.open(props.url, '_blank')
  } else {
    console.log(`Visiting project: ${props.projectId}`)
    // Fallback: navigate to project detail page or external URL
    window.open(`https://project-${props.projectId}.example.com`, '_blank')
  }
}
</script>
