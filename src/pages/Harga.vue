<template>
  <div class="flex flex-col gap-50 px-4  sm:px-6 md:px-8 lg:px-12 py-3 md:py-6 lg:py-12">
    <Hero/>
    <Card/>
    <Description v-if="!hideDescription"/>
  </div>
</template>

<script setup lang="ts">
import Hero from '../components/HargaHero.vue'
import Description from '../components/HargaDescription.vue'
import Card from '../components/HargaCard.vue'

defineProps({
  hideDescription: {
    type: Boolean,
    default: false
  }
})
</script>
