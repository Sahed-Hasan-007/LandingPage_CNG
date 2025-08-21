<script setup>
import {useI18n} from "vue-i18n";
import CtaButtonThree from "~/components/common/CtaButtonThree.vue";

const {locale} = useI18n();
</script>
<template>
  <div id="service"
       class="container mx-auto max-w-[1300px] lg:max-w-[1005px] xl:max-w-[1160px] min-[1300px]:max-w-[1256px] 2xl:max-w-[1300px] my-8 lg:my-8 2xl:my-16 px-4 md:px-0 xl:px-0">
<!--    Image Section-->
    <div>
      <div class="flex justify-center">
        <img src="/images/journeyToSuccess/asset1.png" alt="image" class="md:h-[230px]">
      </div>
    </div>
<!--    Text Section-->
   <div>
     <h1 :class="locale === 'bn' ? 'font-HindSiliguri' : 'font-SFUIDisplay'"
         class="text-center pt-4 md:pt-2 text-[36px] md:text-[42px] lg:text-[52px] 2xl:text-[60px] font-[800] leading-[44px] md:leading-[55px] lg:leading-[60px] 2xl:leading-[70px]">
       {{ $t('success.heading') }}
     </h1>
     <div data-aos="fade-down" data-aos-duration="900">
       <p :class="locale === 'bn' ? 'font-HindSiliguri' : ''"
          class="pt-4 md:pt-6 text-center text-[22px] md:text-[40px] lg:text-[42px] 2xl:text-[44px] font-[300] font-['Inter'] leading-[28px] md:leading-[30px]">
         {{ $t('success.subHeading') }}</p>
     </div>
     <p :class="locale === 'bn' ? 'font-HindSiliguri' : ''"
        class="pt-4 md:pt-6 text-center text-[16px] md:text-[18px] lg:text-[18px] 2xl:text-[18px] font-[300] font-['Inter'] leading-[24px] md:leading-[30px]">
       {{ $t('success.text') }}</p>
   </div>
<!--    Main Section    -->
   <div class="grid grid-cols-12 items-center gap-6 md:gap-12 pt-8 md:pt-16">
     <div class="col-span-12 md:col-span-5">
       <img src="/images/journeyToSuccess/inside.webp" alt="image">
     </div>
     <div class="col-span-12 md:col-span-7">
        <div v-for="(item, i) in $tm('success.data')" class="pb-6 md:pb-8">
<!--          For Web-->
          <div class="hidden md:block">
            <div class="grid grid-cols-12 md:gap-4 bg-[#002B64] text-white p-6 rounded-[10px]">
              <div class="col-span-10">
                <p :class="locale === 'bn' ? 'font-HindSiliguri' : 'font-SFUIDisplay'"
                   class="text-[20px] md:text-[22px] lg:text-[24px] 2xl:text-[24px] font-[700] leading-[24px] md:leading-[34px]">{{ item.title }}</p>
                <p :class="locale === 'bn' ? 'font-HindSiliguri' : 'font-SFUIDisplay'"
                   class="md:pt-2 text-[16px] md:text-[18px] lg:text-[18px] 2xl:text-[18px] font-[500] leading-[20px] md:leading-[24px]">"{{ item.description }}"</p>
              </div>
              <div class="col-span-2 flex justify-end">
                <div data-aos="fade-up" data-aos-duration="900">
                  <img :src="item.icon" alt="icon"/>
                </div>
              </div>
            </div>
          </div>
<!--          For Mobile-->
          <div class="block md:hidden">
            <div class="bg-[#002B64] text-white p-6 rounded-[10px]">
              <div class="grid grid-cols-12 items-center">
                <div class="col-span-9">
                  <p :class="locale === 'bn' ? 'font-HindSiliguri' : 'font-SFUIDisplay'"
                     class="text-[20px] md:text-[22px] lg:text-[24px] 2xl:text-[24px] font-[700] leading-[30px] md:leading-[34px]">{{ item.title }}</p>
                </div>
                <div class="col-span-3">
                  <div data-aos="fade-up" data-aos-duration="900">
                    <img :src="item.icon" alt="icon"/>
                  </div>
                </div>
              </div>
              <div class="pt-4">
                <p :class="locale === 'bn' ? 'font-HindSiliguri' : 'font-SFUIDisplay'"
                   class="md:pt-2 text-[16px] md:text-[18px] lg:text-[18px] 2xl:text-[18px] font-[500] leading-[28px] md:leading-[24px]">"{{ item.description }}"</p>
              </div>
            </div>
          </div>
        </div>
     </div>
   </div>
<!--    Cta Button-->
    <div data-aos="flip-up" data-aos-duration="900">
      <div class="flex justify-center mt-6 md:mt-20">
        <CtaButtonThree text="Join the Academy" sub-text="Explore Our Programs"
                        link="https://onlinetechacademy.com.bd/s/new-sm/?fbclid=IwY2xjawIf0n5leHRuA2FlbQIxMAABHYcqQ5Amz0-9HFfcgBrEV4Gh7OF2P3e9iNgPgUBpISZe5fYiH3rlxSH5OQ_aem_jXmkJyXusCuLEEHbU2Csqw"/>
      </div>
    </div>
  </div>
</template>
<style scoped></style>
