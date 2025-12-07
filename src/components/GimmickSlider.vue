<template>
  <div
    class="absolute bg-primaryDark/60 backdrop-blur-lg rounded-full p-1 border border-white shadow-lg flex items-center w-20 h-8 sm:w-24 sm:h-10 cursor-pointer"
    :class="positionClass"
    @click="moveSlider"
  >
    <div
      class="h-6 w-6 sm:h-8 sm:w-8 bg-primarySecond rounded-full shadow-md transition-all duration-300 ease-in-out"
      :style="{ marginLeft: sliderPosition }"
    ></div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';

const props = defineProps({
  positions: {
    type: Number,
    default: 3
  },
  position: {
    type: String,
    default: 'bottom-left',
    validator: (value: string) => ['bottom-left', 'bottom-right', 'top-left', 'top-right'].includes(value)
  }
});

const positionClass = computed(() => {
  const positions: Record<string, string> = {
    'bottom-left': '-bottom-3 sm:-bottom-3 left-0',
    'bottom-right': '-bottom-3 sm:-bottom-3 right-0',
    'top-left': '-top-3 sm:-top-3 left-0',
    'top-right': '-top-3 sm:-top-3 right-0'
  }
  return positions[props.position]
});

const currentPosition = ref(0);

const sliderPosition = computed(() => {
  const maxPosition = props.positions - 1;
  const step = 100 / props.positions;
  return `${currentPosition.value * step}%`;
});

const moveSlider = () => {
  currentPosition.value = (currentPosition.value + 1) % props.positions;
};

const setPosition = (position: number) => {
  if (position >= 0 && position < props.positions) {
    currentPosition.value = position;
  }
};

defineExpose({
  setPosition,
  currentPosition
});
</script>
