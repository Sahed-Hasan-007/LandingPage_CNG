<script setup>
import {useI18n} from "vue-i18n";

const images = [
  { url: '/images/partner/partner1.png' },
  { url: '/images/partner/partner2.png' },
  { url: '/images/partner/partner3.png' },
  { url: '/images/partner/partner4.png' },
  { url: '/images/partner/partner5.png' },
  { url: '/images/partner/partner1.png' },
  { url: '/images/partner/partner2.png' },
  { url: '/images/partner/partner3.png' },
  { url: '/images/partner/partner4.png' },
  { url: '/images/partner/partner5.png' },
]
const { locale } = useI18n();
</script>

<template>
  <div class="container mx-auto max-w-[1300px] lg:max-w-[1005px] xl:max-w-[1160px] min-[1300px]:max-w-[1256px] 2xl:max-w-[1300px] mt-16 mb-8 md:mt-20 md:mb-20  px-4 md:px-8 lg:px-1 xl:px-0.6">
    <div :class="locale === 'bn' ? 'font-HindSiliguri' : 'font-SFUIDisplay'" class="text-[#042D7C] text-center text-[24px] md:text-[40px] font-[600]">
      Trusted by Industry Leaders and Partners
    </div>
    <div class="py-8 bg-[#F6F9FD] mt-8 ring-2 ring-[#042D7C] rounded-md px-4 md:px-0">
      <NuxtMarquee :pauseOnHover="true" :speed="90">
        <div class="marquee flex gap-x-8 md:gap-x-12 pr-4 md:pr-8">
          <div v-for="(item ,i) in images" :key="i">
            <img :src="item.url" alt="image" class="h-auto"/>
          </div>
        </div>
      </NuxtMarquee>
    </div>
  </div>
</template>

<style scoped>

</style>