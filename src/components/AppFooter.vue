<template>
  <footer class="relative bg-primary-dark border-t border-white/10 ">
    <!-- Background blur effects -->
    <div class="absolute inset-0 overflow-hidden pointer-events-none opacity-30">
      <div class="absolute bottom-0 left-1/4 w-96 h-96 bg-amber-500/20 rounded-full blur-[120px]"></div>
      <div class="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/15 rounded-full blur-[120px]"></div>
    </div>

    <div class="relative max-w-7xl mx-auto px-6 lg:px-8">
      <!-- Main Footer Content -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 py-12 lg:py-16">
        <!-- Brand Section -->
        <div class="space-y-4 lg:col-span-2">
          <h2 class="text-3xl font-bold text-white">Mejantara</h2>
          <p class="text-gray-400 text-sm leading-relaxed max-w-md">
            Platform cloud computing terpercaya untuk bisnis modern. Tingkatkan infrastruktur Anda dengan teknologi terdepan.
          </p>
          <div class="flex gap-3 pt-2">
            <a href="https://github.com/faedyl" target="_blank" rel="noopener noreferrer" class="px-4 py-2 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 hover:border-amber-500/50 text-gray-400 hover:text-amber-500 text-sm transition-all duration-300">GitHub</a>
            <a href="https://linkedin.com/in/fadhil-awalia-kusuma-584338242/" target="_blank" rel="noopener noreferrer" class="px-4 py-2 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 hover:border-amber-500/50 text-gray-400 hover:text-amber-500 text-sm transition-all duration-300">LinkedIn</a>
          </div>
        </div>

        <!-- Product -->
        <div class="space-y-4">
          <h3 class="text-white font-semibold text-lg">Produk</h3>
          <ul class="space-y-3">
            <li class="text-gray-400 text-sm">Cloud Server</li>
            <li class="text-gray-400 text-sm">Object Storage</li>
            <li class="text-gray-400 text-sm">Load Balancer</li>
            <li class="text-gray-400 text-sm">Database</li>
            <li class="text-gray-400 text-sm">Monitoring</li>
          </ul>
        </div>

        <!-- Support -->
        <div class="space-y-4">
          <h3 class="text-white font-semibold text-lg">Dukungan</h3>
          <ul class="space-y-3">
            <li class="text-gray-400 text-sm">Dokumentasi</li>
            <li class="text-gray-400 text-sm">API Reference</li>
            <li class="text-gray-400 text-sm">Status System</li>
            <li class="text-gray-400 text-sm">Pusat Bantuan</li>
            <li class="text-gray-400 text-sm">Komunitas</li>
          </ul>
        </div>
      </div>

      <!-- Bottom Bar -->
      <div class="border-t border-white/10 py-6">
        <div class="text-center">
          <p class="text-gray-400 text-sm">
            © 2025 Mejantara. All Rights Reserved.
          </p>
        </div>
      </div>
    </div>
  </footer>
</template>
