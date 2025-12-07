<template>
  <div class="relative flex flex-col items-center justify-center px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20 py-12 overflow-hidden">

    <div class="absolute inset-0 overflow-hidden pointer-events-none">
      <div class="absolute top-1/4 right-1/4 w-64 h-64 md:w-96 md:h-96 bg-green-500/20 rounded-full blur-[500px] animate-pulse"></div>
      <div class="absolute bottom-1/4 left-1/4 w-72 h-72 md:w-80 md:h-80 bg-amber-100/20 rounded-full blur-[500px] animate-pulse" style="animation-delay: 1.5s;"></div>
    </div>

    <div class="relative z-10 text-center max-w-5xl">

      <div class="border border-white/20 bg-primaryDark/40 backdrop-blur-lg p-5 sm:p-7 md:p-10 rounded-2xl sm:rounded-3xl max-w-4xl mx-auto">
        <p class="text-gray-200 text-lg sm:text-xl md:text-2xl leading-relaxed mb-4">
          Investasi yang tepat untuk pertumbuhan bisnis digital Anda
        </p>
        <p class="text-gray-300 text-base sm:text-lg md:text-xl leading-relaxed">
          Pilih paket yang sesuai dengan kebutuhan bisnis Anda. Semua paket dilengkapi dengan
          <span class="text-amber-100 font-semibold">dukungan 24/7</span>,
          <span class="text-amber-100 font-semibold">garansi uptime 99.9%</span>, dan
          <span class="text-amber-100 font-semibold">tanpa biaya tersembunyi</span>.
          Nikmati fleksibilitas untuk upgrade atau downgrade kapan saja sesuai dengan perkembangan bisnis Anda.
        </p>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
          <div class="bg-white/5 p-4 rounded-xl border border-white/10">
            <div class="text-2xl mb-2">🚀</div>
            <p class="text-white font-semibold text-sm sm:text-base mb-1">Setup Instan</p>
            <p class="text-gray-400 text-xs sm:text-sm">Deploy dalam hitungan menit</p>
          </div>
          <div class="bg-white/5 p-4 rounded-xl border border-white/10">
            <div class="text-2xl mb-2">🔒</div>
            <p class="text-white font-semibold text-sm sm:text-base mb-1">SSL Gratis</p>
            <p class="text-gray-400 text-xs sm:text-sm">Keamanan untuk semua paket</p>
          </div>
          <div class="bg-white/5 p-4 rounded-xl border border-white/10">
            <div class="text-2xl mb-2">💳</div>
            <p class="text-white font-semibold text-sm sm:text-base mb-1">Bayar Fleksibel</p>
            <p class="text-gray-400 text-xs sm:text-sm">Bulanan atau tahunan</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
