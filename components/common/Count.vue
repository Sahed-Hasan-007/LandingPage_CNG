<script setup>
import {ref, onMounted} from 'vue';

const props = defineProps({
  target: {type: Number, required: true},
  step: {type: Number, default: 1},
  imgSrc: {type: String, required: true},
  label1: {type: String, required: true},
  label2: {type: String, required: true},
  suffix: {type: String, default: 'K+'},
  width: {type: String, default: 'w-64'},
  height: {type: String, default: 'h-64'},
  textSize: {type: String, default: 'text-md'}
});
const containerRef = ref(null);
const currentCount = ref(0);
const animateCounter = (target, refValue, step, duration = 3000) => {
  const stepTime = Math.abs(Math.floor(duration / (target / step)));
  let current = 0;
  const interval = setInterval(() => {
    current += step;
    if (current >= target) {
      current = target;
      clearInterval(interval);
    }
    refValue.value = current >= 1000 ? Math.floor(current / 1000) + 'K' : current;
  }, stepTime);
};
onMounted(() => {
  animateCounter(props.target, currentCount, props.step, 3000);
});
</script>
<template>
  <div class="m-0 p-0 leading-none " ref="containerRef">
    <div class="relative">
      <img :class="['max-w-full h-auto', props.width, props.height, `lg:${props.width}`, `lg:${props.height}`]"
           :src="props.imgSrc" alt="image"/>
      <div class="absolute inset-0 flex items-center justify-center text-center ">
        <div class="mx-auto ">
          <p :class="{
                      'text-[20px] lg:mb-0 md:text-[50px] font-[800] md:pb-5  min-w-[120px] md:min-w-[140px]': true,
                        [props.textSize]: true,
                        [`lg:${props.textSize}`]: true
                }">
            {{ currentCount }}{{ props.suffix }}
          </p>
          <p class=" text-xs lg:text-[24px] 2xl:text-[28px] font-[700] leading-none">
            {{ props.label1 }}<br> {{ props.label2 }}</p>
        </div>
      </div>
    </div>
  </div>
</template>