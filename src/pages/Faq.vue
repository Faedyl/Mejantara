<template>
  <div class="flex flex-col gap-50 pt-24 px-4 sm:px-6 md:px-8">
    <Hero/>
   <Section/>
    <Description v-if="!hideDescription"/>
  </div>
</template>

<script setup lang="ts">
import Hero from '../components/FaqHero.vue'
import Description from '../components/FaqDescription.vue'
import Section from '../components/FaqSection.vue'

defineProps({
  hideDescription: {
    type: Boolean,
    default: false
  }
})
</script>
