<script setup>
import { ref, onMounted } from 'vue';

const props = defineProps({
  style: {
    type: String,
    default: 'bg-[#324BCC] text-white',
  },
});

const count = ref(0);
const targetCount = 15;
const duration = 1000;
const intervalTime = Math.max(100, duration / targetCount);

const animateCountUp = (targetValue) => {
  let currentCount = 0;
  const interval = setInterval(() => {
    if (currentCount < targetValue) {
      currentCount++;
      count.value = currentCount;
    } else {
      clearInterval(interval);
    }
  }, intervalTime);
};

onMounted(() => {
  animateCountUp(targetCount);
});
</script>

<template>
<!--  <div>-->
<!--    <div class="flex items-center space-x-[-35px] relative">-->
<!--      <img-->
<!--          class="w-14 h-14 md:w-16 md:h-16 rounded-full border-2 transition-transform duration-300 hover:scale-110 hover:rotate-6"-->
<!--          src="/images/counter/user1.png"-->
<!--          alt="User 1"-->
<!--      />-->
<!--      <img-->

<!--          class="w-14 h-14 md:w-16 md:h-16 rounded-full border-2 transition-transform duration-300 hover:scale-110 hover:-rotate-6"-->
<!--          src="/images/counter/user2.png"-->
<!--          alt="User 2"-->
<!--      />-->
<!--      <img-->

<!--          class="w-14 h-14 md:w-16 md:h-16 rounded-full border-2 bg-transparent-[black]-->
<!--        transition-transform duration-300 hover:scale-110 hover:rotate-3"-->
<!--          src="/images/counter/user3.png"-->
<!--          alt="User 3"-->
<!--      />-->
<!--      <div-->
<!--          :class="style"-->
<!--          class="w-14 h-14 md:w-16 md:h-16 flex items-center justify-center tracking-[.05em] italic rounded-full text-[16px] md:text-[18px] font-bold"-->
<!--      >-->
<!--        +{{ (count).toLocaleString() }}K-->
<!--      </div>-->
<!--    </div>-->
<!--  </div>-->
</template>