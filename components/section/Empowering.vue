<script setup>
import CtaButton from '../common/CtaButton.vue';
import {useI18n} from "vue-i18n";
import CtaButtonThree from "~/components/common/CtaButtonThree.vue";

const {loadYouTubeAPI, playVideo} = useYouTubePlayer();

const {locale} = useI18n();
const iframeUrl = 'https://www.youtube.com/embed/YBJcn6P1RaA?si=WIg4lsM37Rda_ewq&autoplay=0&enablejsapi=1';

const youtube = ref('') ;
const playVideoHandler = () => {
  youtube.value.src = iframeUrl ;
  playVideo("videoIframe", "videoOverlay" );
};
onMounted(() => {
  loadYouTubeAPI();
});
</script>

<template>
  <div id="empower"
       class="container mx-auto max-w-[1300px] lg:max-w-[1005px] xl:max-w-[1160px] min-[1300px]:max-w-[1256px] 2xl:max-w-[1300px] mt-4 mb-8 lg:mt-8 lg:mb-8 2xl:mt-16 2xl:mb-16 px-4 md:px-8 lg:px-0">
    <div class="grid md:grid-cols-2 md:gap-8">
      <div>
        <h1 :class="locale === 'bn' ? 'font-HindSiliguri' : 'font-SFUIDisplay'"
            class="text-[32px] sm:text-[34px] md:text-[38px] lg:text-[42px] xl:text-[52px] 2xl:text-[60px] font-[800]">
          Empowering</h1>
        <h1 :class="locale === 'bn' ? 'font-HindSiliguri' : 'font-SFUIDisplay'"
            class="text-[56px] sm:text-[60px] md:text-[64px] lg:text-[70px] xl:text-[80px] 2xl:text-[100px] font-[800] leading-[60px] md:leading-[100px]">
          Individuals
        </h1>
        <div class="flex items-center gap-4 mt-2 md:mt-0">
          <div data-aos="fade-up" data-aos-duration="800">
            <p :class="locale === 'bn' ? 'font-HindSiliguri' : 'font-SFUIDisplay'"
               class="text-[22px] sm:text-[24px] md:text-[32px] lg:text-[36px] xl:text-[36px] 2xl:text-[36px] font-[200]">
              Changing Lives
            </p>
          </div>
          <div data-aos="fade-down" data-aos-duration="800">
            <div class="relative lg:w-[160px] md:w-[100px] w-[80px] flex items-center justify-center">
              <img src="/images/empoweringLive/image.png" alt="image">
              <Icon name="uiw-minus" size="24" class="absolute md:scale-x-[3.3] scale-x-[2.8]  w-1/5 text-white"/>
              <Icon name="material-symbols-light-arrow-forward-ios" size="24"
                    class="absolute lg:right-7 right-3 w-1/5 text-white"/>
            </div>
          </div>
        </div>
        <p
            class="text-[16px] md:text-[16px] lg:text-[16px] 2xl:text-[16px] font-[400] font-['Inter'] leading-[22px] md:leading-[24px] mt-8 md:mt-8 lg:mt-8 2xl:mt-12">
          {{ $t('empoweringTextOne') }}</p>
      </div>
      <div class=" md:space-y-4 lg:space-y-6 2xl:space-y-10">
        <p
            class="text-[18px] md:text-[19px] lg:text-[18px] 2xl:text-[22px] font-[500] font-['Inter'] leading-[24px] md:leading-[28px] mt-8 md:mt-4">
          {{ $t('empoweringTextTwo') }}</p>
        <div data-aos="fade-up" data-aos-duration="800">
          <p
              class="text-[16px] md:text-[17px] lg:text-[16px] 2xl:text-[18px] font-[400] font-['Inter'] leading-[22px] md:leading-[26px] mt-8 md:mt-8">
            {{ $t('empoweringTextThreePartOne') }}
            <strong>{{ $t('empoweringHighlightThreeTextOne') }}</strong>
            {{ $t('empoweringTextThreePartTwo') }}
            <strong>{{ $t('empoweringHighlightThreeTextTwo') }}</strong>
            {{ $t('empoweringTextThreePartThree') }}
            <strong>{{ $t('empoweringHighlightThreeTextThree') }}</strong>
            {{ $t('empoweringTextThreePartFour') }}
            <strong>{{ $t('empoweringHighlightThreeTextFour') }}</strong>
          </p>
        </div>
        <p
            class="text-[18px] md:text-[18px] lg:text-[18px] 2xl:text-[18px] font-[500] font-['Inter'] leading-[22px] md:leading-[26px] mt-8 md:mt-12">
          {{ $t('empoweringTextFour') }}</p>
      </div>
    </div>
    <div class="flex justify-center items-center relative mt-8 md:mt-6 lg:mt-8 2xl:mt-16 rounded-md overflow-hidden">
      <div id="videoOverlay" class="absolute h-full w-full flex justify-center items-center cursor-pointer">
        <img class="w-full h-full object-cover z-20" src="/images/Empowering/overlay.png" alt="overlay">
        <img src="/images/Empowering/play.png" class="absolute z-30 w-48 h-48 animate-ping" alt="image">
        <img @click="playVideoHandler()" src="/images/Empowering/play.png" alt="image" class="absolute z-40 w-48 h-48 ">
      </div>

      <iframe  ref="youtube" id="videoIframe"
              class="w-full md:w-[600px] lg:w-full h-[200px] md:h-[400px] lg:h-[480px] xl:h-[520px] 2xl:h-[640px] rounded-xl"
              src="" title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin" allowfullscreen>
      </iframe>
    </div>
<!--    <div class="flex justify-center mt-8 md:mt-8 lg:mt-12 2xl:mt-16">-->
<!--      <CtaButtonThree text="Join the Academy" sub-text="Explore Our Programs"-->
<!--                      link="https://onlinetechacademy.com.bd/s/new-sm/?fbclid=IwY2xjawIf0n5leHRuA2FlbQIxMAABHYcqQ5Amz0-9HFfcgBrEV4Gh7OF2P3e9iNgPgUBpISZe5fYiH3rlxSH5OQ_aem_jXmkJyXusCuLEEHbU2Csqw"/>-->
<!--    </div>-->
  </div>
</template>

<style scoped></style>