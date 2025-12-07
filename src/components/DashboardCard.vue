<template>
  <div class="relative bg-primaryDark/40 backdrop-blur-lg border border-white/20 rounded-xl sm:rounded-2xl p-4 sm:p-5 shadow-lg flex items-center justify-between overflow-hidden group hover:border-primaryActive transition-colors duration-300">
    <div class="absolute -top-10 -right-10 w-20 h-20 bg-primaryActive rounded-full blur-3xl opacity-20 group-hover:opacity-40 transition"></div>

    <slot />
  </div>
</template>
