<template>
  <div class="p-40 flex justify-center z-1">
    <div class="fixed top-0 flex w-[75vw] mx-auto gap-4 p-4 rounded-2xl text-white border-1
      shadow-2xl backdrop-blur-lg font-bold m-12 z-10">
      <div class="justify-between flex w-full">

        <div class="flex items-center">


          <AppLink
            v-for="link in navLinks"
            :key="link.name"
            :name="link.name"
            :aria-label="link.title"
            class="px-3 py-2"
           :class="link.class"
          >
            <i v-if="link.icon" :class="link.icon" class="mr-1"></i>
            {{ link.title }}
          </AppLink>

        </div>

        <div class="bg-primaryActive p-2 rounded-2xl right-0">
          <span>Area Klien</span>
        </div>

      </div>
    </div>
  </div>
</template>


<script setup lang="ts">
import { computed } from 'vue'
import AppLink from '../components/AppLink.vue'
import type { RouteParams } from 'vue-router'
import type { AppRouteNames } from 'src/router'
interface NavLink {
  name: AppRouteNames
  params?: Partial<RouteParams>
  title: string
  icon?: string
  display: 'all' | 'anonym' | 'authorized'
}

const allNavLinks = computed<NavLink[]>(() => [
  {
    name: 'home',
    title: 'Mejantara',
    display: 'anonym',
    class: 'font-extrabold text-lg',
  },
  {
    name: 'harga',
    title: 'Harga',
    display: 'anonym',
  },
  {
    name: 'testimoni',
    title: 'Testimoni',
    display: 'anonym',
  },
  {
    name: 'faq',
    title: 'Faq',
    display: 'anonym'
  },

])


const navLinks = computed(() => allNavLinks.value.filter(
  (link) => link.display === 'all' || link.display === 'anonym'
))
</script>
