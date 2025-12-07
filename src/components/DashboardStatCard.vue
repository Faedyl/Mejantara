<template>
  <div class="w-full">
    <h3 class="text-white font-bold text-base sm:text-lg mb-2">#{{ id }} {{ title }}</h3>

    <div class="relative w-full h-40 sm:h-48 lg:h-52 bg-primaryDark/40 border border-white/30 rounded-xl sm:rounded-2xl overflow-hidden backdrop-blur-lg">

      <svg
        viewBox="0 0 500 150"
        class="w-full h-full absolute bottom-0 left-0"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient :id="'grad-' + id" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" style="stop-color:white;stop-opacity:0.1" />
            <stop offset="100%" style="stop-color:transparent;stop-opacity:0" />
          </linearGradient>
        </defs>

        <path
          :d="pathData + ' V 150 H 0 Z'"
          :fill="'url(#grad-' + id + ')'"
        />

        <path
          :d="pathData"
          fill="none"
          stroke="white"
          stroke-width="2"
          vector-effect="non-scaling-stroke"
        />

        <circle
          v-for="(point, index) in points"
          :key="index"
          :cx="point.x"
          :cy="point.y"
          r="4"
          fill="white"
          class="drop-shadow-[0_0_8px_rgba(255,255,255,0.8)]"
        />
      </svg>
    </div>
  </div>
</template>

<script setup>
defineProps({
  id: String,
  title: String,
  pathData: String,
  points: Array
})
</script>
