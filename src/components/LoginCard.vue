<template>
  <div class="relative w-full max-w-md p-8 md:p-10 rounded-3xl border border-white/20 bg-primaryDark/40 backdrop-blur-lg shadow-[0_0_40px_rgba(139,92,246,0.15)] overflow-hidden font-sans">

    <div class="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-32 bg-purple-600/20 rounded-full blur-[50px] pointer-events-none"></div>

    <div class="flex flex-col items-center mb-10 relative z-10">
      <div class="relative">
        <!-- The Purple Highlight Pill -->
        <div class="absolute bottom-1 left-0 w-full h-3 bg-[#7c3aed] -z-10 rounded-full opacity-90 scale-x-110"></div>
        <h1 class="text-4xl font-extrabold text-white tracking-wide">Area</h1>
      </div>
      <h2 class="text-white text-lg font-semibold mt-1 tracking-wide">Mejantara</h2>
    </div>

    <form @submit.prevent="handleLogin" class="flex flex-col gap-6 relative z-10">

      <div class="flex flex-col gap-2">
        <label class="text-white text-sm font-bold tracking-wide ml-1">Username</label>
        <div class="relative group">
          <input
            v-model="form.username"
            type="text"
            class="w-full bg-[#1e112e]/60 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all duration-300"
          />
        </div>
      </div>

      <div class="flex flex-col gap-2">
        <label class="text-white text-sm font-bold tracking-wide ml-1">Password</label>
        <div class="relative group">
          <input
            v-model="form.password"
            :type="showPassword ? 'text' : 'password'"
            class="w-full bg-[#1e112e]/60 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all duration-300 pr-12"
          />

          <button
            type="button"
            @click="showPassword = !showPassword"
            class="absolute right-4 top-1/2 -translate-y-1/2 text-white/70 hover:text-white transition-colors focus:outline-none"
          >
            <Eye v-if="!showPassword" :size="20" />
            <EyeOff v-else :size="20" />
          </button>
        </div>
      </div>


      <button
        type="submit"
        class="mt-4 w-full bg-[#7000ff] hover:bg-[#6200ea] text-white font-bold py-3.5 rounded-xl transition-all duration-300 transform active:scale-[0.98] shadow-[0_0_20px_rgba(112,0,255,0.4)] hover:shadow-[0_0_30px_rgba(112,0,255,0.6)] uppercase tracking-wider"
      >
        Login
      </button>

    </form>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue';
import { useRouter } from 'vue-router';
import { Eye, EyeOff } from 'lucide-vue-next';

const router = useRouter();
const showPassword = ref(false);

const form = reactive({
  username: '',
  password: ''
});

const handleLogin = () => {
  console.log('Logging in with:', form);
  router.push('/dashboard');
};
</script>



