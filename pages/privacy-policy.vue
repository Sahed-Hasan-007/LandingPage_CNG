<script setup lang="ts">
import {useI18n} from "vue-i18n";
const { locale } = useI18n();

definePageMeta({
  layout: "page-layout",
});
</script>
<template>
  <div class="container mx-auto lg:max-w-[940px] xl:max-w-[1170px] 2xl:max-w-[1300px] px-5 md:px-8 lg:px-0 pt-[140px] md:pt-[120px] pb-[50px] md:pb-[60px] lg:pb-[90px] lg:pt-[160px]">
    <div :class="locale === 'bn' ? 'font-HindSiliguri' : 'font-SFUIDisplay'">
      <p class="text-[24px] md:text-[28px] lg:text-[32px] text-[#0E3467] font-[800]">{{ $t('privacyPolicy.heading') }}</p>
      <p class="text-[16px] md:text-[16px] lg:text-[16px] text-black font-[300] pt-4 md:pt-6">{{ $t('privacyPolicy.textPartOne') }} <strong>{{ $t('privacyPolicy.highlightText') }}</strong> {{ $t('privacyPolicy.textPartTwo') }}</p>
    </div>
<!--    Part One-->
    <div class="mt-6 md:mt-8" :class="locale === 'bn' ? 'font-HindSiliguri' : 'font-SFUIDisplay'">
      <p class="text-[20px] md:text-[20px] lg:text-[20px] text-[#0E3467] font-[800]">{{ $t('privacyPolicy.partOneHeading') }}</p>
      <ul class="list-disc mt-4 md:mt-6 pl-4 lg:pl-5 text-[16px] md:text-[16px] lg:text-[16px] font-[300]">
        <li>{{ $t('privacyPolicy.partOneTextOne') }}</li>
        <li>{{ $t('privacyPolicy.partOneTextTwo') }}</li>
        <li>{{ $t('privacyPolicy.partOneTextThree') }}</li>
      </ul>
    </div>
<!--    Part Two-->
    <div class="mt-6 md:mt-8" :class="locale === 'bn' ? 'font-HindSiliguri' : 'font-SFUIDisplay'">
      <p class="text-[20px] md:text-[20px] lg:text-[20px] text-[#0E3467] font-[800]">{{ $t('privacyPolicy.partTwoHeading') }}</p>
      <ul class="list-disc mt-4 md:mt-6 pl-4 lg:pl-5 text-[16px] md:text-[16px] lg:text-[16px] font-[300]">
        <li>{{ $t('privacyPolicy.partTwoTextOne') }}</li>
        <li>{{ $t('privacyPolicy.partTwoTextTwo') }}</li>
        <li>{{ $t('privacyPolicy.partTwoTextThree') }}</li>
        <li>{{ $t('privacyPolicy.partTwoTextFour') }}</li>
      </ul>
    </div>
<!--    Part Three-->
    <div class="mt-6 md:mt-8" :class="locale === 'bn' ? 'font-HindSiliguri' : 'font-SFUIDisplay'">
      <p class="text-[20px] md:text-[20px] lg:text-[20px] text-[#0E3467] font-[800]">{{ $t('privacyPolicy.partThreeHeading') }}</p>
      <ul class="list-disc mt-4 md:mt-6 pl-4 lg:pl-5 text-[16px] md:text-[16px] lg:text-[16px] font-[300]">
        <li>{{ $t('privacyPolicy.partThreeTextOne') }}</li>
        <li>{{ $t('privacyPolicy.partThreeTextTwo') }}</li>
        <li>{{ $t('privacyPolicy.partThreeTextThree') }}</li>
      </ul>
    </div>
    <!--    Part Four-->
    <div class="mt-6 md:mt-8" :class="locale === 'bn' ? 'font-HindSiliguri' : 'font-SFUIDisplay'">
      <p class="text-[20px] md:text-[20px] lg:text-[20px] text-[#0E3467] font-[800]">{{ $t('privacyPolicy.partFourHeading') }}</p>
      <ul class="list-disc mt-4 md:mt-6 pl-4 lg:pl-5 text-[16px] md:text-[16px] lg:text-[16px] font-[300]">
        <li>{{ $t('privacyPolicy.partFourTextOne') }}</li>
        <li>{{ $t('privacyPolicy.partFourTextTwo') }}</li>
        <li>{{ $t('privacyPolicy.partFourTextThree') }}</li>
      </ul>
    </div>
    <!--    Part Five-->
    <div class="mt-6 md:mt-8" :class="locale === 'bn' ? 'font-HindSiliguri' : 'font-SFUIDisplay'">
      <p class="text-[20px] md:text-[20px] lg:text-[20px] text-[#0E3467] font-[800]">{{ $t('privacyPolicy.partFiveHeading') }}</p>
      <ul class="list-disc mt-4 md:mt-6 pl-4 lg:pl-5 text-[16px] md:text-[16px] lg:text-[16px] font-[300]">
        <li>{{ $t('privacyPolicy.partFiveTextOne') }}</li>
        <li>{{ $t('privacyPolicy.partFiveTextTwo') }}</li>
      </ul>
    </div>
    <!--    Part Six-->
    <div class="mt-6 md:mt-8" :class="locale === 'bn' ? 'font-HindSiliguri' : 'font-SFUIDisplay'">
      <p class="text-[20px] md:text-[20px] lg:text-[20px] text-[#0E3467] font-[800]">{{ $t('privacyPolicy.partSixHeading') }}</p>
      <ul class="list-disc mt-4 md:mt-6 pl-4 lg:pl-5 text-[16px] md:text-[16px] lg:text-[16px] font-[300]">
        <li>{{ $t('privacyPolicy.partSixTextOne') }}</li>
        <li>{{ $t('privacyPolicy.partSixTextTwo') }}</li>
        <li>{{ $t('privacyPolicy.partSixTextThree') }}</li>
      </ul>
    </div>
    <!--    Part Seven-->
    <div class="mt-6 md:mt-8" :class="locale === 'bn' ? 'font-HindSiliguri' : 'font-SFUIDisplay'">
      <p class="text-[20px] md:text-[20px] lg:text-[20px] text-[#0E3467] font-[800]">{{ $t('privacyPolicy.partSevenHeading') }}</p>
      <ul class="list-disc mt-4 md:mt-6 pl-4 lg:pl-5 text-[16px] md:text-[16px] lg:text-[16px] font-[300]">
        <li>{{ $t('privacyPolicy.partSevenTextOne') }}</li>
        <li>{{ $t('privacyPolicy.partSevenTextTwo') }}</li>
      </ul>
    </div>
    <!--    Part Eight-->
    <div class="mt-6 md:mt-8" :class="locale === 'bn' ? 'font-HindSiliguri' : 'font-SFUIDisplay'">
      <p class="text-[20px] md:text-[20px] lg:text-[20px] text-[#0E3467] font-[800]">{{ $t('privacyPolicy.partEightHeading') }}</p>
      <ul class="list-disc mt-4 md:mt-6 pl-4 lg:pl-5 text-[16px] md:text-[16px] lg:text-[16px] font-[300]">
        <li>{{ $t('privacyPolicy.partEightTextOne') }} <a class="underline">info@onlinetechacademy.com</a></li>
      </ul>
    </div>
  </div>
</template>

<style scoped>

</style>