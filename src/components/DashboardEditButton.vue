<template>
  <button 
    @click="handleEdit" 
    class="border border-white/30 p-1 rounded-lg hover:bg-white/10 transition text-white"
  >
    <Edit :size="20" />
  </button>
</template>

<script setup>
import { Edit } from 'lucide-vue-next'
import { useRouter } from 'vue-router'

const props = defineProps({
  projectId: {
    type: String,
    required: true
  },
  editRoute: {
    type: String,
    default: ''
  }
})

const router = useRouter()

const handleEdit = () => {
  if (props.editRoute) {
    router.push(props.editRoute)
  } else {
    // Default: navigate to edit page with project ID
    router.push(`/dashboard/edit/${props.projectId}`)
  }
}
</script>
