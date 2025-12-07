<template>
  <div class="flex flex-col gap-8 px-4 pt-24 sm:px-12 sm:py-8 md:px-24 md:py-10 lg:px-30 lg:py-12">
    <Hero/>
    <Card/>
    <Description v-if="!hideDescription"/>
  </div>
</template>

<script setup lang="ts">
import Hero from '../components/TestimoniHero.vue'
import Description from '../components/TestimoniDescription.vue'
import Card from '../components/TestimoniCard.vue'

defineProps({
  hideDescription: {
    type: Boolean,
    default: false
  }
})
</script>
