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
      <p class="text-[24px] md:text-[28px] lg:text-[32px] text-[#0E3467] font-[800]">{{ $t('termsAndCondition.heading') }}</p>
      <p class="text-[20px] md:text-[20px] lg:text-[20px] text-[#0E3467] font-[800] pt-4 md:pt-6">{{ $t('termsAndCondition.subHeading') }}</p>
      <p class="text-[16px] md:text-[16px] lg:text-[16px] text-black font-[300] pt-4 md:pt-6">{{ $t('termsAndCondition.textPartOne') }} <strong>{{ $t('termsAndCondition.highlightText') }}</strong> {{ $t('privacyPolicy.textPartTwo') }}</p>
    </div>
<!--    Part One-->
    <div class="mt-6 md:mt-8" :class="locale === 'bn' ? 'font-HindSiliguri' : 'font-SFUIDisplay'">
      <p class="text-[20px] md:text-[20px] lg:text-[20px] text-[#0E3467] font-[800]">{{ $t('termsAndCondition.partOneHeading') }}</p>
      <ul class="list-disc mt-4 md:mt-6 pl-4 lg:pl-5 text-[16px] md:text-[16px] lg:text-[16px] font-[300]">
        <li>{{ $t('termsAndCondition.partOneTextOne') }}</li>
        <li>{{ $t('termsAndCondition.partOneTextTwo') }}</li>
      </ul>
    </div>
<!--    Part Two-->
    <div class="mt-6 md:mt-8" :class="locale === 'bn' ? 'font-HindSiliguri' : 'font-SFUIDisplay'">
      <p class="text-[20px] md:text-[20px] lg:text-[20px] text-[#0E3467] font-[800]">{{ $t('termsAndCondition.partTwoHeading') }}</p>
      <p class="mt-4 md:mt-6 pl-0 lg:pl-0 text-[16px] md:text-[16px] lg:text-[16px] font-[300]">{{ $t('termsAndCondition.partTwoTextOne') }}</p>
      <ul class="list-disc mt-4 md:mt-2 pl-4 lg:pl-12 text-[16px] md:text-[16px] lg:text-[16px] font-[300]">
        <li>{{ $t('termsAndCondition.partTwoTextTwo') }}</li>
        <li>{{ $t('termsAndCondition.partTwoTextThree') }}</li>
        <li>{{ $t('termsAndCondition.partTwoTextFour') }}</li>
      </ul>
    </div>
<!--    Part Three-->
    <div class="mt-6 md:mt-8" :class="locale === 'bn' ? 'font-HindSiliguri' : 'font-SFUIDisplay'">
      <p class="text-[20px] md:text-[20px] lg:text-[20px] text-[#0E3467] font-[800]">{{ $t('termsAndCondition.partThreeHeading') }}</p>
      <ul class="list-disc mt-4 md:mt-6 pl-4 lg:pl-5 text-[16px] md:text-[16px] lg:text-[16px] font-[300]">
        <li>{{ $t('termsAndCondition.partThreeTextOne') }}</li>
        <li>{{ $t('termsAndCondition.partThreeTextTwo') }}</li>
        <li>{{ $t('termsAndCondition.partThreeTextThree') }}</li>
      </ul>
    </div>
    <!--    Part Four-->
    <div class="mt-6 md:mt-8" :class="locale === 'bn' ? 'font-HindSiliguri' : 'font-SFUIDisplay'">
      <p class="text-[20px] md:text-[20px] lg:text-[20px] text-[#0E3467] font-[800]">{{ $t('termsAndCondition.partFourHeading') }}</p>
      <ul class="list-disc mt-4 md:mt-6 pl-4 lg:pl-5 text-[16px] md:text-[16px] lg:text-[16px] font-[300]">
        <li>{{ $t('termsAndCondition.partFourTextOne') }}</li>
        <li>{{ $t('termsAndCondition.partFourTextTwo') }}</li>
      </ul>
    </div>
    <!--    Part Five-->
    <div class="mt-6 md:mt-8" :class="locale === 'bn' ? 'font-HindSiliguri' : 'font-SFUIDisplay'">
      <p class="text-[20px] md:text-[20px] lg:text-[20px] text-[#0E3467] font-[800]">{{ $t('termsAndCondition.partFiveHeading') }}</p>
      <ul class="list-disc mt-4 md:mt-6 pl-4 lg:pl-5 text-[16px] md:text-[16px] lg:text-[16px] font-[300]">
        <li>{{ $t('termsAndCondition.partFiveTextOne') }}</li>
        <li>{{ $t('termsAndCondition.partFiveTextTwo') }}</li>
        <li>{{ $t('termsAndCondition.partFiveTextThree') }}</li>
      </ul>
    </div>
    <!--    Part Six-->
    <div class="mt-6 md:mt-8" :class="locale === 'bn' ? 'font-HindSiliguri' : 'font-SFUIDisplay'">
      <p class="text-[20px] md:text-[20px] lg:text-[20px] text-[#0E3467] font-[800]">{{ $t('termsAndCondition.partSixHeading') }}</p>
      <ul class="list-disc mt-4 md:mt-6 pl-4 lg:pl-5 text-[16px] md:text-[16px] lg:text-[16px] font-[300]">
        <li>{{ $t('termsAndCondition.partSixTextOne') }}</li>
        <li>{{ $t('termsAndCondition.partSixTextTwo') }}</li>
      </ul>
    </div>
    <!--    Part Seven-->
    <div class="mt-6 md:mt-8" :class="locale === 'bn' ? 'font-HindSiliguri' : 'font-SFUIDisplay'">
      <p class="text-[20px] md:text-[20px] lg:text-[20px] text-[#0E3467] font-[800]">{{ $t('termsAndCondition.partSevenHeading') }}</p>
      <ul class="list-disc mt-4 md:mt-6 pl-4 lg:pl-5 text-[16px] md:text-[16px] lg:text-[16px] font-[300]">
        <li>{{ $t('termsAndCondition.partSevenTextOne') }}</li>
        <li>{{ $t('termsAndCondition.partSevenTextTwo') }}</li>
      </ul>
    </div>
    <!--    Part Nine-->
    <div class="mt-6 md:mt-8" :class="locale === 'bn' ? 'font-HindSiliguri' : 'font-SFUIDisplay'">
      <p class="text-[20px] md:text-[20px] lg:text-[20px] text-[#0E3467] font-[800]">{{ $t('termsAndCondition.partNineHeading') }}</p>
      <ul class="list-disc mt-4 md:mt-6 pl-4 lg:pl-5 text-[16px] md:text-[16px] lg:text-[16px] font-[300]">
        <li>{{ $t('termsAndCondition.partNineTextOne') }}</li>
        <li>{{ $t('termsAndCondition.partNineTextTwo') }}</li>
        <li v-if="$t('termsAndCondition.partNineTextThree')">{{ $t('termsAndCondition.partNineTextThree') }}</li>
      </ul>
    </div>
    <!--    Part Ten-->
    <div class="mt-6 md:mt-8" :class="locale === 'bn' ? 'font-HindSiliguri' : 'font-SFUIDisplay'">
      <p class="text-[20px] md:text-[20px] lg:text-[20px] text-[#0E3467] font-[800]">{{ $t('termsAndCondition.partTenHeading') }}</p>
      <ul class="list-disc mt-4 md:mt-6 pl-4 lg:pl-5 text-[16px] md:text-[16px] lg:text-[16px] font-[300]">
        <li>{{ $t('termsAndCondition.partNineTextOne') }}</li>
        <li>{{ $t('termsAndCondition.partNineTextTwo') }}</li>
      </ul>
    </div>
    <!--    Part Eight-->
    <div class="mt-6 md:mt-8" :class="locale === 'bn' ? 'font-HindSiliguri' : 'font-SFUIDisplay'">
      <p class="text-[20px] md:text-[20px] lg:text-[20px] text-[#0E3467] font-[800]">{{ $t('termsAndCondition.partEightHeading') }}</p>
      <ul class="list-disc mt-4 md:mt-6 pl-4 lg:pl-5 text-[16px] md:text-[16px] lg:text-[16px] font-[300]">
        <li>{{ $t('termsAndCondition.partEightTextOne') }} <a class="underline">info@onlinetechacademy.com</a></li>
      </ul>
    </div>
  </div>
</template>

<style scoped>

</style>