<template>

  <div class="flex flex-col gap-12 pt-24 sm:px-12 sm:py-3 md:px-24 md:py-6 lg:px-30 lg:py-12">
    <Overview />
    <Harga :hideDescription="true" />
    <Testimoni :hideDescription="true" />
    <Faq :hideDescription="true" />
  </div>
</template>

<script setup lang="ts">

import Overview from '../components/HomeOverview.vue'
import Harga from '../pages/Harga.vue'
import Testimoni from '../pages/Testimoni.vue'
import Faq from '../pages/Faq.vue'
</script>
