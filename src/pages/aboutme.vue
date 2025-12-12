<template>
  <aboutMe/>

  <div class='grid grid-flow-col grid-rows-3 gap- gap-0 sm: grid-rows-1 md:grid-rows-2 gap-0'>
  <cardFaq/>
  <aboutDesc/>
  <aboutDesc/>
  <aboutDesc/>
  </div>

</template>


<script setup lang="ts">

import aboutMe from '../components/about-meinfo.vue'
import cardFaq from '../components/aboutFaq.vue'
import aboutDesc from '../components/AboutDesc.vue'
</script>

