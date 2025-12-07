<template>

  <div class="p-4 sm:p-6 md:p-8 lg:p-10 xl:p-12 flex flex-col gap-y-6 sm:gap-y-10 md:gap-y-12">
  <div v-for="review in reviews"
      :key="review.id" class="relative mt-5 sm:mt-7 md:mt-8 ml-5 sm:ml-7 md:ml-8 w-fit max-w-[90%] sm:max-w-[85%] md:max-w-[80%] lg:max-w-[75%]">

    <div class="absolute -top-3 sm:-top-5 md:-top-6 -left-10 sm:-left-14 md:-left-16 lg:-left-20 w-12 h-12 sm:w-20 sm:h-20 md:w-24 md:h-24 bg-primarySecond rounded-lg sm:rounded-[1.5rem] md:rounded-[2rem] shadow-lg z-0"></div>

    <div class="bg-primaryDark/40 backdrop-blur-lg border border-white p-4 sm:p-5 md:p-6 rounded-lg sm:rounded-2xl text-white relative -z-10
      min-h-[100px] sm:min-h-[140px] md:min-h-[160px] w-full">

      <div class="relative z-0 pl-3 sm:pl-4 pr-2 sm:pr-4">
        <h1 class="font-bold text-sm sm:text-lg md:text-xl mb-1 sm:mb-2">{{ review.name }}</h1>
        <p class="text-xs sm:text-base md:text-lg lg:text-xl leading-relaxed">
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
    text: 'Layanan yang sangat memuaskan! Proses cepat dan hasilnya sangat sesuai dengan harapan saya.',
  },
  {
    id: 2,
    name: 'Siti Aminah',
    text: 'Saya sangat puas dengan pelayanan yang diberikan. Tim sangat profesional dan responsif terhadap kebutuhan kami.',
    color: 'bg-blue-500'
  },
  {
    id: 3,
    name: 'Joko Anwar',
    text: 'Pengalaman yang luar biasa! Harga terjangkau dengan kualitas yang tidak diragukan lagi.',
  }
];
</script>
