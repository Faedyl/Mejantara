<template>
  <div class="relative flex flex-col items-center justify-center mx-4 sm:mx-6 md:mx-8 lg:mx-12 xl:mx-20 py-12 overflow-hidden">

    <div class="absolute inset-0 overflow-hidden pointer-events-none">
      <div class="absolute top-1/3 left-1/3 w-56 h-56 md:w-80 md:h-80 bg-blue-500/20 rounded-full blur-[500px] animate-pulse"></div>
      <div class="absolute bottom-1/3 right-1/3 w-64 h-64 md:w-96 md:h-96 bg-purple-500/20 rounded-full blur-[500px] animate-pulse" style="animation-delay: 2s;"></div>
    </div>

    <div class="relative z-10 text-center max-w-5xl">
      <div class="border border-white/20 bg-primaryDark/40 backdrop-blur-lg p-5 sm:p-7 md:p-10 rounded-2xl sm:rounded-3xl max-w-4xl mx-auto">
        <p class="text-gray-200 text-lg sm:text-xl md:text-2xl leading-relaxed mb-4">
          Kepercayaan dan kepuasan pelanggan adalah prioritas utama kami
        </p>
        <p class="text-gray-300 text-base sm:text-lg md:text-xl leading-relaxed">
          Lebih dari <span class="text-white font-bold">1000+ pelanggan</span> dari berbagai industri telah mempercayai Mejantara untuk mengembangkan dan mengelola infrastruktur digital mereka.
          Dari <span class="text-amber-100 font-semibold">startup rintisan</span> hingga <span class="text-amber-100 font-semibold">perusahaan enterprise</span>,
          dengarkan pengalaman nyata mereka dalam menggunakan layanan kami dan bagaimana Mejantara membantu mewujudkan transformasi digital bisnis mereka.
        </p>

        <div class="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
          <div class="text-center">
            <p class="text-2xl sm:text-4xl font-bold text-white mb-1">1000+</p>
            <p class="text-gray-400 text-xs sm:text-sm">Happy Clients</p>
          </div>
          <div class="text-center">
            <p class="text-2xl sm:text-4xl font-bold text-white mb-1">4.9/5</p>
            <p class="text-gray-400 text-xs sm:text-sm">Rating Average</p>
          </div>
          <div class="text-center">
            <p class="text-2xl sm:text-4xl font-bold text-white mb-1">99.9%</p>
            <p class="text-gray-400 text-xs sm:text-sm">Satisfaction</p>
          </div>
          <div class="text-center">
            <p class="text-2xl sm:text-4xl font-bold text-white mb-1">24/7</p>
            <p class="text-gray-400 text-xs sm:text-sm">Support</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
