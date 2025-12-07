<template>
  <div class="relative w-64">
    <input
      type="text"
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
      placeholder="Search"
      class="w-full bg-primaryDark border border-white/30 rounded-full py-2 px-4 pl-4 text-sm focus:outline-none focus:border-primaryActive placeholder-primarySecond"
    />
    <Search :size="16" class="text-primarySecond absolute right-4 top-2.5" />
  </div>
</template>

<script setup>
import { Search } from 'lucide-vue-next'

defineProps({
  modelValue: {
    type: String,
    default: ''
  }
})

defineEmits(['update:modelValue'])
</script>
