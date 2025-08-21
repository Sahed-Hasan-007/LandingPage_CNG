<script setup lang="ts">
import {useI18n} from "vue-i18n";

const { locale } = useI18n();
</script>

<template>
  <div id="team"
    class="bg-[url(/images/visionary/bg.png)] bg-no-repeat bg-cover bg-center bg-[#062e7c]/90  relative">
    <div class="bg-no-repeat bg-cover bg-center">
      <div class="grid grid-cols-1 lg:grid-cols-2 md:gap-16 lg:gap-20 mx-auto max-w-[1300px] lg:max-w-[1005px] xl:max-w-[1160px] min-[1300px]:max-w-[1256px] 2xl:max-w-[1300px] px-4 md:px-8 lg:px-0 md:py-16 py-8 lg:py-16 2xl:py-20">
        <div class="flex flex-col justify-center md:text-left">
          <div class="pb-6 md:pb-8">
            <div data-aos="fade-down" data-aos-duration="800">
              <h4 class="text-white text-[18px] md:text-[20px] xl:text-[20px] 2xl:text-[22px] font-['Inter'] font-[700]">Meet the Visionary
                Behind</h4>
            </div>
            <h2
                class="text-white text-[28px] md:text-[38px] lg:text-[40px] xl:text-[42px] 2xl:text-[44px] font-[800] leading-[50px] md:leading-[60px] xl:leading-[60px] 2xl:leading-[60px]">
              Online Tech Academy
            </h2>
          </div>
          <div class="block lg:hidden">
            <img src="/images/visionary/mainImage.png" class="rounded-md w-full h-auto" alt="Visionary" />
          </div>
          <div data-aos="fade-up" data-aos-duration="800">
            <div class="mt-6 block lg:hidden">
              <h2 class="text-white text-[28px] md:text-[56px] font-[800] italic">Mojtahidul Islam</h2>
              <h4 class="text-white text-[18px] md:text-[30px] font-[300] md:pt-4">Founder & CEO</h4>
            </div>
          </div>
          <p :class="locale === 'bn' ? 'font-HindSiliguri' : ''" class="text-white text-sm md:text-[16px] xl:text-[16px] 2xl:text-[18px] font-[300] mt-4 font-['Inter'] leading-[20px] md:leading-[25px]">
            {{ $t('visionary.textOnePartOne') }}
            <strong class="text-[#FFCC00]">{{ $t('visionary.highlightExperienceName') }}</strong>
            {{ $t('visionary.textOnePartTwo') }}
            <strong class="text-[#FFCC00]">{{ $t('visionary.highlightFreelancing') }}</strong>
            {{ $t('visionary.textOnePartThree') }}
            <strong class="text-[#FFCC00]">{{ $t('visionary.highlightDigital') }}</strong>
            {{ $t('visionary.textOnePartFour') }}
          </p>
          <p
              :class="locale === 'bn' ? 'font-HindSiliguri' : ''"
            class="text-white text-sm md:text-[16px] xl:text-[16px] 2xl:text-[18px] font-[300] mt-4 md:mt-6 font-['Inter'] leading-[20px] md:leading-[25px]">
            <strong class="text-[#FFCC00]">{{ $t('visionary.highlightYear') }}</strong>
            {{ $t('visionary.textTwoPartOne') }}
            <strong class="text-[#FFCC00]">{{ $t('visionary.highlightCompanyName') }}</strong>
            {{ $t('visionary.textTwoPartTwo') }}
            <strong class="text-[#FFCC00]">{{ $t('visionary.highlightEntrepreneurs') }}</strong>
            {{ $t('visionary.textTwoPartThree') }}
            <strong class="text-[#FFCC00]">{{ $t('visionary.highlightEntrepreneurship') }}</strong>
            {{ $t('visionary.coma') }}
          </p>
          <p
              :class="locale === 'bn' ? 'font-HindSiliguri' : ''"
            class="text-white text-sm md:text-[16px] xl:text-[16px] 2xl:text-[18px] font-[300] mt-4 md:mt-6 font-['Inter'] leading-[20px] md:leading-[25px]">
            {{ $t('visionary.textThreePartOne') }}
            <strong class="text-[#FFCC00]">{{ $t('visionary.highlightInnovative') }}</strong>
            {{ $t('visionary.textThreePartTwo') }}
          </p>
          <div data-aos="fade-down" data-aos-duration="1000">
            <div class="mt-6 md:mt-10 hidden sm:hidden lg:block">
              <h2 class="text-white text-[20px] md:text-[28px] xl:text-[28px] 2xl:text-[28px] font-[800] italic">
                Mojtahidul Islam
              </h2>
              <h4 class="text-white md:text-[18px] xl:text-[18px] 2xl:text-[18px] font-[300]">Founder & CEO</h4>
            </div>
          </div>
        </div>
        <div data-aos="fade-up" data-aos-duration="1000">
          <div class="relative justify-center items-center hidden sm:hidden lg:block">
            <img src="/images/visionary/mainImage.png" class="rounded-md w-full h-auto" alt="Visionary" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
