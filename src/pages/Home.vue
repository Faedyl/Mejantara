<template>

  <div class="flex flex-col gap-50 py-12">
    <Overview />
    <Harga />
    <Testimoni />
    <Faq/>
  </div>
</template>

<script setup lang="ts">

import Overview from '../components/HomeOverview.vue'
import Harga from '../pages/Harga.vue'
import Testimoni from '../pages/Testimoni.vue'
import Faq from '../pages/Faq.vue'
</script>
