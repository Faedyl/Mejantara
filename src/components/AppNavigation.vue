<template>
  <div class="p-4 md:p-20 lg:p-40 flex justify-center z-50">
    <div class="fixed top-0 flex w-[95vw] sm:w-[85vw] md:w-[80vw] lg:w-[75vw] mx-auto gap-4 p-3 md:p-4 rounded-2xl text-white border border-white
      shadow-2xl bg-primaryDark/40 backdrop-blur-lg font-bold m-4 md:m-8 lg:m-12 z-50">
      <div class="justify-between flex w-full items-center">

        <div class="flex items-center gap-2">
          <AppLink name="home" aria-label="Mejantara" class="px-2 md:px-3 py-2 font-extrabold text-base md:text-lg">
            Mejantara
          </AppLink>

          <div class="hidden md:flex items-center">
            <AppLink v-for="link in navLinks.filter(l => l.name !== 'home')" :key="link.name" :name="link.name"
              :aria-label="link.title" class="px-2 lg:px-3 py-2" :class="link.class">
              <i v-if="link.icon" :class="link.icon" class="mr-1"></i>
              {{ link.title }}
            </AppLink>
          </div>

        </div>

        <AppLink name="login" aria-label="Area Klien"
          class="hidden md:block bg-primaryActive p-2 px-4 rounded-2xl right-0 cursor-pointer hover:opacity-90 transition-opacity text-sm lg:text-base text-white">
          <span>Area Klien</span>
        </AppLink>

        <button @click="toggleMenu" class="md:hidden p-2 text-white focus:outline-none" aria-label="Toggle menu">
          <Menu v-if="!isMenuOpen" :size="24" />
          <X v-else :size="24" />
        </button>

      </div>
    </div>

    <!-- Mobile Menu Dropdown -->
    <div v-if="isMenuOpen"
      class="md:hidden fixed top-20 w-[95vw] mx-auto left-0 right-0 bg-primaryDark/40 backdrop-blur-lg rounded-2xl border border-white shadow-2xl z-50 overflow-hidden"
      style="left: 50%; transform: translateX(-50%);">
      <div class="flex flex-col p-3">
        <AppLink v-for="link in navLinks.filter(l => l.name !== 'home')" :key="link.name" :name="link.name"
          :aria-label="link.title" class="px-2 py-2 text-white font-bold" :class="link.class" @click="closeMenu">
          <i v-if="link.icon" :class="link.icon" class="mr-1"></i>
          {{ link.title }}
        </AppLink>

        <AppLink name="login" aria-label="Area Klien"
          class="mt-2 bg-primaryActive p-2 px-4 rounded-2xl text-center cursor-pointer hover:opacity-90 transition-opacity text-white"
          @click="closeMenu">
          <span>Area Klien</span>
        </AppLink>
      </div>
    </div>
  </div>
</template>


<script setup lang="ts">
import { computed, ref } from 'vue'
import AppLink from '../components/AppLink.vue'
import { Menu, X } from 'lucide-vue-next'
import type { RouteParams } from 'vue-router'
import type { AppRouteNames } from '@/router'
interface NavLink {
  name: AppRouteNames
  params?: Partial<RouteParams>
  title: string
  icon?: string
  display: 'all' | 'anonym' | 'authorized'
  class?: string
}

const isMenuOpen = ref(false)

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}

const closeMenu = () => {
  isMenuOpen.value = false
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
  {
    name: 'about-me',
    title: 'About Me',
    display: 'anonym'

  }

])


const navLinks = computed(() => allNavLinks.value.filter(
  (link) => link.display === 'all' || link.display === 'anonym'
))
</script>
