<template>
  <AppNavigation v-if="route.name !== 'login' && route.name !== 'dashboard' && route.name !== 'dashboardEdit' && route.name !== 'dashboardStatistic'" />
  <RouterView />
  <AppFooter v-if="route.name !== 'login' && route.name !== 'dashboard' && route.name !== 'dashboardEdit' && route.name !== 'dashboardStatistic'" />
</template>


<script setup lang="ts">
import { useRoute } from 'vue-router'
import AppNavigation from './components/AppNavigation.vue'
import AppFooter from './components/AppFooter.vue'

const route = useRoute()
</script>
