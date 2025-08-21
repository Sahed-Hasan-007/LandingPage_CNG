<script setup>
import Count from "~/components/common/Count.vue";
import AnimatedCount from "../common/AnimatedCount.vue";
import CtaButton from '../common/CtaButton.vue';
import {useI18n} from "vue-i18n";
const { locale } = useI18n();
</script>

<template>
  <div class="bg-[url('/images/support/background.svg')] inset-0">
    <div class="container pt-12 pb-16 px-4 md:px-0 xl:px-0 mx-auto max-w-[1300px] lg:max-w-[1005px] xl:max-w-[1160px] min-[1300px]:max-w-[1256px] 2xl:max-w-[1300px]">
<!--      Text Section-->
      <div class="">
        <p :class="locale === 'bn' ? 'font-HindSiliguri' : 'font-SFUIDisplay'" class="text-[36px] md:text-[48px] lg:text-[52px] xl:text-[56px] 2xl:text-[60px] font-[800] leading-[46px] md:leading-[90px] lg:leading-[80px] 2xl:leading-[90px]">
          {{ $t('Support.heading') }}
        </p>
        <p :class="locale === 'bn' ? 'font-HindSiliguri' : 'font-SFUIDisplay'" class="pt-2 md:pt-0 text-[22px] md:text-[28px] lg:text-[32px] 2xl:text-[36px] font-[700] font-['Inter'] leading-[34px] md:leading-[60px]">
          {{ $t('Support.subHeading') }}</p>
        <!--        For Web-->
        <div class="w-[70%] md:block hidden md:pt-2">
          <p :class="locale === 'bn' ? 'font-HindSiliguri tracking-[1px]' : 'font-SFUIDisplay tracking-[1px]'" class="text-[16px] md:text-[18px] lg:text-[20px] xl:text-[22px] 2xl:text-[22px] font-[300]  leading-[24px] md:leading-[30px]">
            {{ $t('Support.text') }}
          </p>
        </div>
        <!--        For Mobile-->
        <p :class="locale === 'bn' ? 'font-HindSiliguri' : 'font-SFUIDisplay'"
            class="block md:hidden mt-4 md:mt-8 lg:mt-4 text-[16px] md:text-[24px] lg:text-[24px] font-[300] tracking-[2px] leading-[24px] md:leading-[34px]">
          {{ $t('Support.description') }} {{ $t('Support.description12') }}
          {{ $t('Support.description13') }} {{ $t('Support.description14') }}
        </p>
      </div>
<!--      Main Section-->
<!--      For Web-->
      <div class="relative   max-sm:hidden justify justify-center ">
        <div class="flex ml-10 mt-48 lg:mt-96 xl:mt-[400px] 2xl:mt-[400px]">
          <div class="relative ">
            <div class="w-[140%] h-[140%] relative">
              <img src="/images/support/step1.svg" alt="technical setup">
              <h1 :class="locale === 'bn' ? 'font-HindSiliguri' : ''"
                  class="text-white font-bold font-['Inter'] ml-[43%] lg:ml-[38%] mt-[-17%] lg:mt-[-20%] text-[40px] sm:text-[20px] md:text-[30px] lg:text-[30px] xl:text-[60px] 2xl:text-[80px]">
                1</h1>
              <div class="absolute inset-0 flex flex-col lg:mt-[4%] md:mt-[0%] ">
                <div data-aos="fade-down" data-aos-duration="800">
                  <p :class="locale === 'bn' ? 'font-HindSiliguri' : ''"
                     class="md:text-[30px] lg:text-[34px] xl:text-[38px] 2xl:text-[44px] leading-[24px] xl:leading-[44px] 2xl:leading-[50px] font-['Inter'] font-bold">
                    Technical <br> Setup </p>
                </div>
              </div>
              <div class="absolute inset-0 flex flex-col mt-[30%] max-md:mt-[26%] lg:mt-[34%] lg:mx-[20px] font-inter ">
                <p
                    :class="locale === 'bn' ? 'font-HindSiliguri' : ''"
                    class="mr-[56%] text-[14px] lg:text-[10px] xl:text-[16px] 2xl:text-[16px] md:text-[10px] max-sm:text-sm italic  text-white mt-3 ml-2  leading-[24px] 2xl:leading-[30px] font-[500] font-['Inter']">
                  {{ $t('Support.selection1') }}
                </p>
              </div>
            </div>
          </div>
          <div class="relative">
            <div class="w-[140%] h-[140%] -ml-[9%] -mt-[40%] relative">
              <img src="/images/support/step1.svg" alt="content strategy">
              <h1 :class="locale === 'bn' ? 'font-HindSiliguri' : ''"
                  class="text-white font-bold font-['Inter'] ml-[44%] lg:ml-[38%] mt-[-15%] lg:mt-[-20%] text-[40px] sm:text-[20px] md:text-[30px] lg:text-[30px] xl:text-[60px] 2xl:text-[80px]">
                2</h1>
              <div class="absolute inset-0 flex flex-col lg:mt-[4%] md:mt-[0%] ">
                <div data-aos="fade-down" data-aos-duration="800">
                  <p :class="locale === 'bn' ? 'font-HindSiliguri' : ''"
                     class="md:text-[30px] lg:text-[34px] xl:text-[38px] 2xl:text-[44px] leading-[24px] xl:leading-[44px] 2xl:leading-[50px] font-['Inter'] font-bold">
                    Content<br> Strategy </p>
                </div>
              </div>
              <div class="absolute inset-0 flex flex-col mt-[30%] max-md:mt-[26%] lg:mt-[34%] lg:mx-[20px] font-inter">
                <p
                    :class="locale === 'bn' ? 'font-HindSiliguri' : ''"
                    class="mr-[56%] text-[14px] lg:text-[10px] xl:text-[16px] 2xl:text-[16px] md:text-[10px] max-sm:text-sm italic  text-white mt-3 ml-2  leading-[24px] 2xl:leading-[30px] font-[500] font-['Inter']">
                  {{ $t('Support.section2') }}
                </p>
              </div>
            </div>
          </div>
          <div class="relative">
            <div class="w-[140%] h-[140%] -ml-[18%] -mt-[80%] relative">
              <img src="/images/support/step1.svg" alt="marketing and sales">
              <h1 :class="locale === 'bn' ? 'font-HindSiliguri' : ''"
                  class="text-white font-bold font-['Inter'] ml-[44%] lg:ml-[38%] mt-[-13%] lg:mt-[-20%] text-[40px] sm:text-[20px] md:text-[30px] lg:text-[30px] xl:text-[60px] 2xl:text-[80px]">
                3</h1>
              <div class="absolute inset-0 flex flex-col lg:mt-[4%] md:mt-[0%] ">
                <div data-aos="fade-down" data-aos-duration="800">
                  <p :class="locale === 'bn' ? 'font-HindSiliguri' : ''"
                     class="md:text-[30px] lg:text-[34px] xl:text-[38px] 2xl:text-[44px] leading-[24px] xl:leading-[44px] 2xl:leading-[50px] font-['Inter'] font-bold">
                    Marketing <br> and Sales </p>
                </div>
              </div>
              <div class="absolute inset-0 flex flex-col mt-[30%] max-md:mt-[26%] lg:mt-[34%] lg:mx-[20px] font-inter">
                <p
                    :class="locale === 'bn' ? 'font-HindSiliguri' : ''"
                    class=" mr-[56%] text-[14px] lg:text-[10px] xl:text-[16px] 2xl:text-[16px] md:text-[10px] max-sm:text-sm italic  text-white mt-3 ml-2  leading-[24px] 2xl:leading-[30px] font-[500] font-['Inter']">
                  {{ $t('Support.section3') }}
                </p>
              </div>
            </div>
          </div>

          <div class="relative">
            <div class="w-[140%] h-[120%] -ml-[54%] -mt-[152%] relative  ">
              <img src="/images/support/step4.svg" alt=" scaling">
              <h1 :class="locale === 'bn' ? 'font-HindSiliguri' : ''"
                  class="text-white font-bold font-['Inter'] ml-[85%] lg:ml-[74%]  mt-[-24%] lg:mt-[-38%] text-[40px] sm:text-[20px] md:text-[30px] lg:text-[30px] xl:text-[60px] 2xl:text-[80px]">
                4</h1>
              <div class="absolute inset-0 flex flex-col mt-[-50%] ">
                <div data-aos="fade-down" data-aos-duration="800">
                  <p :class="locale === 'bn' ? 'font-HindSiliguri' : ''"
                     class="md:text-[30px] lg:text-[34px] xl:text-[38px] 2xl:text-[44px] leading-[24px] xl:leading-[44px] 2xl:leading-[50px] font-['Inter'] font-bold">
                    Scaling and <br> Automation </p>
                </div>
              </div>
              <div class="absolute inset-0 flex flex-col p-2 lg:mt-[20px] lg:mx-[30px] font-inter ">
                <p :class="locale === 'bn' ? 'font-HindSiliguri' : ''"
                    class="text-[14px] lg:text-[10px] xl:text-[16px] 2xl:text-[16px] md:text-[10px] max-sm:text-sm italic  text-white leading-[24px] 2xl:leading-[30px] font-[500]  font-['Inter']">
                  {{ $t('Support.section4') }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

<!--      For Mobile-->
      <div class="sm:hidden flex flex-col justify-center mt-4 md:mt-0">
<!--        Part 1-->
        <div v-for="(item, i) in $tm('supportForMobile.data')" class="pb-4">
          <div class="relative md:h-[440px]">
            <div class="absolute inset-0 bg-[url('/images/journey/bg.svg')] bg-cover bg-center rounded-[6px]"></div>
            <div class="relative md:mt-8 bg-[#042A72D1]/60 h-full p-4 rounded-[6px]">
              <p :class="locale === 'bn' ? 'font-HindSiliguri' : ''"
                 class="text-[26px] md:text-[34px] font-[800] 2xl:text-[44px] leading-[40px] 2xl:leading-[50px] font-['Inter'] text-white">
                {{ item.heading }} </p>
              <p :class="locale === 'bn' ? 'font-HindSiliguri' : ''" class="pt-2 text-[14px] italic  text-white font-[500] font-['Inter'] leading-[24px] 2xl:leading-[50px]">
                {{ item.text }}
              </p>
              <p :class="locale === 'bn' ? 'font-HindSiliguri' : ''" class="mb-[-8%] mt-[-10%] text-[56px] text-right text-white font-[800] font-['Inter']">{{ item.count }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>

</style>