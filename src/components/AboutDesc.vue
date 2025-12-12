<template>
  <div class="relative flex flex-col items-center justify-center mx-4 sm:mx-6 md:mx-8 lg:mx-12 xl:mx-20 py-12 overflow-hidden">

    <div class="absolute inset-0 overflow-hidden pointer-events-none">
      <div class="absolute top-1/4 left-1/2 -translate-x-1/2 w-80 h-80 md:w-[500px] md:h-[500px] bg-cyan-500/15 rounded-full blur-[500px] animate-pulse"></div>
      <div class="absolute bottom-1/4 right-1/4 w-64 h-64 md:w-80 md:h-80 bg-amber-100/20 rounded-full blur-[500px] animate-pulse" style="animation-delay: 1s;"></div>
    </div>

    <div class="relative z-10 text-center max-w-5xl">

      <div class="border border-white/20 bg-primaryDark/40 backdrop-blur-lg p-5 sm:p-7 md:p-10 rounded-2xl sm:rounded-3xl max-w-4xl mx-auto">
        <p class="text-gray-200 text-lg sm:text-xl md:text-2xl leading-relaxed mb-4">
          Punya pertanyaan? Kami punya jawabannya
        </p>
        <p class="text-gray-300 text-base sm:text-lg md:text-xl leading-relaxed">
          Temukan jawaban untuk pertanyaan yang paling sering diajukan seputar layanan
          <span class="text-amber-100 font-semibold">Mejantara</span>.
          Dari <span class="text-white font-semibold">cara memulai</span>,
          <span class="text-white font-semibold">fitur teknis</span>, hingga
          <span class="text-white font-semibold">kebijakan billing</span> -
          semua informasi yang Anda butuhkan ada di sini. Masih belum menemukan jawaban yang Anda cari?
          Tim support kami siap membantu Anda <span class="text-amber-100 font-semibold">24/7</span>.
        </p>

        <div class="flex flex-wrap justify-center gap-3 mt-8">
          <div class="bg-white/5 px-4 py-2 rounded-lg border border-white/10">
            <p class="text-gray-300 text-sm">🚀 Getting Started</p>
          </div>
          <div class="bg-white/5 px-4 py-2 rounded-lg border border-white/10">
            <p class="text-gray-300 text-sm">💳 Billing & Payment</p>
          </div>
          <div class="bg-white/5 px-4 py-2 rounded-lg border border-white/10">
            <p class="text-gray-300 text-sm">🔧 Technical Support</p>
          </div>
          <div class="bg-white/5 px-4 py-2 rounded-lg border border-white/10">
            <p class="text-gray-300 text-sm">🔒 Security & Privacy</p>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>
