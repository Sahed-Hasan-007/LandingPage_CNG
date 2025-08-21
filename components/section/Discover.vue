<script setup>
import CtaButton from "~/components/common/CtaButton.vue";
import AnimatedCount from "~/components/common/AnimatedCount.vue";
import {useI18n} from "vue-i18n";
import CtaButtonThree from "~/components/common/CtaButtonThree.vue";

const itemsOne = [
  {url: '/images/discover/image1.png'},
  {url: '/images/discover/image2.png'},
  {url: '/images/discover/image3.png'},
  {url: '/images/discover/image4.png'},
  {url: '/images/discover/image5.png'},
  {url: '/images/discover/image6.png'},
  {url: '/images/discover/image7.png'},
  {url: '/images/discover/image8.png'},
  {url: '/images/discover/image9.png'},
  {url: '/images/discover/image10.png'},
  {url: '/images/discover/image11.png'},
  {url: '/images/discover/image12.png'},
  {url: '/images/discover/image13.png'},
  {url: '/images/discover/image14.png'},
]
const itemsTwo = [
  {url: '/images/discover/image14.png'},
  {url: '/images/discover/image13.png'},
  {url: '/images/discover/image12.png'},
  {url: '/images/discover/image11.png'},
  {url: '/images/discover/image10.png'},
  {url: '/images/discover/image9.png'},
  {url: '/images/discover/image8.png'},
  {url: '/images/discover/image7.png'},
  {url: '/images/discover/image6.png'},
  {url: '/images/discover/image5.png'},
  {url: '/images/discover/image4.png'},
  {url: '/images/discover/image3.png'},
  {url: '/images/discover/image2.png'},
  {url: '/images/discover/image1.png'},
]
const {locale} = useI18n();
</script>

<template>
  <div>
    <!--    Heading Section-->
    <div class="container mx-auto max-w-[1300px] lg:max-w-[1005px] xl:max-w-[1160px] min-[1300px]:max-w-[1256px] 2xl:max-w-[1300px] my-8 md:my-12 xl:my-12 2xl:my-16 px-4 xl:px-0  md:px-8">
<!--      Text Section-->
      <div>
        <p :class="locale === 'bn' ? 'font-HindSiliguri' : 'font-SFUIDisplay'"
            class="text-center text-[36px] md:text-[48px] lg:text-[52px] xl:text-[56px] 2xl:text-[60px] font-[800] leading-[50px] md:leading-[80px] xl:leading-[70px] 2xl:leading-[80px]">
          Discover the dedicated</p>
        <div data-aos="fade-up" data-aos-duration="800">
          <p :class="locale === 'bn' ? 'font-HindSiliguri' : 'font-SFUIDisplay'"
             class="text-center text-[20px] md:text-[24px] lg:text-[26px] xl:text-[28px] 2xl:text-[30px] font-[500] pt-2 md:pt-0">
            Team behind OTA’s success</p>
        </div>
        <p :class="locale === 'bn' ? 'font-HindSiliguri' : 'font-SFUIDisplay'"
           class="pt-4 md:pt-0 text-center text-[16px] md:text-[18px] xl:text-[18px] 2xl:text-[18px] font-[400] leading-[24px] md:leading-[34px]">
          {{ $t('discover.text') }}</p>
      </div>
    </div>
    <!--    Slider Section-->
    <div>
      <div>
        <NuxtMarquee :pauseOnHover="true" :speed="50">
          <div class="marquee flex gap-x-4 md:gap-x-8 pr-4 md:pr-8">
            <div v-for="(item ,i) in itemsOne" :key="i">
              <img :src="item.url" alt="image" class="h-[120px] md:h-auto"/>
            </div>
          </div>
        </NuxtMarquee>
      </div>
      <div class="pt-4 md:pt-8">
        <NuxtMarquee :pauseOnHover="true" :speed="90">
          <div class="marquee flex gap-x-4 md:gap-x-8 pr-4 md:pr-8">
            <div v-for="(item ,i) in itemsTwo" :key="i">
              <img :src="item.url" alt="image" class="h-[120px] md:h-auto"/>
            </div>
          </div>
        </NuxtMarquee>
      </div>
    </div>
    <!--    Footer Section-->
    <div class="container mx-auto max-w-[1300px] my-8 md:my-12 xl:my-12 2xl:my-16 px-4 md:px-8 lg:px-0">
      <div>
        <p :class="locale === 'bn' ? 'font-HindSiliguri' : 'font-SFUIDisplay'"
           class="text-center text-[24px] md:text-[28px] xl:text-[32px] 2xl:text-[36px] font-[800] leading-[45px] md:leading-[80px]">
          {{ $t('discover.footerHeading') }}</p>
      </div>
      <div class="md:px-32 pt-1">
        <p :class="locale === 'bn' ? 'font-HindSiliguri' : 'font-SFUIDisplay'"
           class="text-center text-[16px] md:text-[18px] xl:text-[18px] 2xl:text-[18px] font-[400] font-['Inter'] leading-[24px] md:leading-[30px]">
          {{ $t('discover.footerText') }}</p>
      </div>
      <div data-aos="flip-down" data-aos-duration="800">
        <div class="flex justify-center mt-12 md:mt-8 ">
          <CtaButtonThree text="Join the Academy" sub-text="Explore Our Programs"
                          link="https://onlinetechacademy.com.bd/s/new-sm/?fbclid=IwY2xjawIf0n5leHRuA2FlbQIxMAABHYcqQ5Amz0-9HFfcgBrEV4Gh7OF2P3e9iNgPgUBpISZe5fYiH3rlxSH5OQ_aem_jXmkJyXusCuLEEHbU2Csqw"/>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>