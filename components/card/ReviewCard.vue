<script setup lang="ts">

import {useI18n} from "vue-i18n";

const { locale } = useI18n();
const props = defineProps({
  item: {
    type: Object,
    default: {},
  },
  index: {
    type: Number,
    default: null,
  },
});
</script>

<template>
  <div class="">
    <div class="top-0  -mt-16 md:-mt-[80px] right-0 left-0 z-10 absolute">
      <img :src="item.image" class="w-[120px] md:w-[150px] h-[120px] md:h-[150px] bg-white rounded-full mx-auto" alt="image"/>
    </div>
    <div class="relative bg-[url('/images/review/cardBg.png')] bg-cover bg-center p-0 pt-12  pb-8 md:p-8 md:pt-16 md:pb-8 rounded-md">
      <div class="h-[300px] md:h-[340px] lg:h-[345px] flex flex-col justify-between px-4">
        <div >
          <img class="" src="/images/review/comma.svg" alt="icon"/>
          <p :class="locale === 'bn' ? 'font-HindSiliguri' : 'font-SFUIDisplay'" class="text-left text-[16px] md:text-[16px] font-[300] pt-2">{{ item.content }}</p>
        </div>
        <div>
          <div>
            <p :class="locale === 'bn' ? 'font-HindSiliguri' : 'font-SFUIDisplay'" class="text-left text-[16px] md:text-[24px] font-[600] pt-2 ">{{ item.name }}</p>
          </div>
          <div class="flex pt-1">
            <icon
                v-for="star in 5"
                :key="star"
                :name="star <= item.rating ? 'ph:star-fill' : 'ph:star'"  
                class="text-yellow-500 "
                size="24"
            ></icon>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>