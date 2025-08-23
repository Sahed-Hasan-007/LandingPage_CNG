<script setup>
import AnimatedCount from "~/components/common/AnimatedCount.vue";
import Count from "~/components/common/Count.vue";
import {useI18n} from "vue-i18n";
import CtaButtonTwo from "~/components/common/CtaButtonTwo.vue";
import CtaButtonThree from "~/components/common/CtaButtonThree.vue";
const {activateSection} = useSectionCall();
const scrollToSection = (id) => {
  activateSection.value = null;
  activateSection.value = id;
};

const { locale } = useI18n();
</script>

<template>
  <div id="home" class="relative w-full h-[700px] md:h-[950px] lg:h-[900px] xl:h-100vh 2xl:h-100vh  overflow-hidden">
    <!-- Background Video -->
    <video autoplay muted loop class="absolute top-0 left-0 w-full h-full object-cover">
      <source src="/video/fuelTank2.mp4" type="video/mp4"/>
      Your browser does not support the video tag.
    </video>
    <!-- Text Overlay -->
    <div>
      <div
          class="absolute inset-0 flex flex-col items-center justify-center bg-[#0B316E]/20 text-white text-center px-4 md:px-0 md:pt-20 lg:pt-8 xl:pt-0 2xl:pt-20">

        <!--        Text Section-->
        <div class="container mx-auto max-w-[1300px] lg:max-w-[1005px] xl:max-w-[1160px] min-[1300px]:max-w-[1256px] 2xl:max-w-[1300px]">
          <div :class="locale === 'bn' ? 'font-HindSiliguri' : 'font-SFUIDisplay'" class="pt-8 md:pt-4 md:px-[200px] text-[36px] md:text-[48px] lg:text-[54px] 2xl:text-[60px] font-[800] leading-[50px] md:leading-[80px]">
            {{ $t('hero.heading') }}
          </div>
          <div :class="locale === 'bn' ? 'font-HindSiliguri' : 'font-SFUIDisplay'" class="text-[18px] md:text-[20px] lg:text-[22px] 2xl:text-[24px] font-[500] pt-4 md:pt-4">
            {{ $t('hero.subHeading') }}
          </div>
        </div>
        <!--      Counter Section-->
        <div class="py-10 md:py-8 leading-none counter-section flex  lg:gap-x-14 md:mx-5 gap-x-2 justify-center items-center">
          <Count
              :target="15"
              imgSrc="/images/hero/isolationMode.svg"
              label1="Silver"
              label2="Members"
              suffix="K+"
              width="w-24 lg:w-52 2xl:w-64"
              height="2xl:h-64"
              textSize="text-xs lg:text-[32px] 2xl:text-[42px]"
              :step="1"
          />
          <Count
              :target="1000"
              imgSrc="/images/hero/isolationMode2.svg"
              label1="Successful"
              label2="Businesses"
              suffix=""
              width="w-32 lg:w-64 2xl:w-80"
              height="h-80"
              textSize="text-xl lg:text-[42px] 2xl:text-[62px]"
              :step="100"
          />
          <Count
              :target="200"
              imgSrc="/images/hero/isolationMode.svg"
              label1="Success"
              label2="Stories"
              suffix="+"
              width="w-24 lg:w-52 2xl:w-64"
              height="h-64"
              textSize="text-xs lg:text-[32px] 2xl:text-[42px]"
              :step="1"
          />
        </div>
        <!--      Call to Action Button-->
        <div class="pt-0 md:pt-8">
          <CtaButtonThree  text="Join The Academy"
                           link="https://onlinetechacademy.com.bd/s/new-sm/?fbclid=IwY2xjawIf0n5leHRuA2FlbQIxMAABHYcqQ5Amz0-9HFfcgBrEV4Gh7OF2P3e9iNgPgUBpISZe5fYiH3rlxSH5OQ_aem_jXmkJyXusCuLEEHbU2Csqw"/>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>