<template>

  <div class="p-12 px-75 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-x-16 gap-y-12">
  <div v-for="review in reviews"
      :key="review.id" class="relative mt-8 ml-8 max-w-max">

    <div class="absolute -top-6 -left-20 w-24 h-24 bg-primarySecond rounded-[2rem] shadow-lg z-10"></div>

    <div class="bg-primaryDark border border-white/10 p-6 rounded-2xl text-white relative z-0
      min-h-[160px]">

      <div class="relative z-10">
        <h1 class="font-bold text-xl ">{{ review.name }}</h1>
        <p class="text-xl">
            {{ review.text }}
        </p>
      </div>

    </div>
  </div>

  </div>

</template>

<script setup lang="ts">

const reviews = [
  {
    id: 1,
    name: 'Budi Tabudi',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.',
  },
  {
    id: 2,
    name: 'Siti Aminah',
    text: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    color: 'bg-blue-500' // Example of overriding color
  },
  {
    id: 3,
    name: 'Joko Anwar',
    text: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
  }
];
</script>
