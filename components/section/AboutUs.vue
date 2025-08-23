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
  <div id="aboutus"
     class="container relative mx-auto max-w-[1300px] lg:max-w-[1005px] xl:max-w-[1160px] min-[1300px]:max-w-[1256px] 2xl:max-w-[1300px] mt-4 mb-8 lg:mt-8 lg:mb-8 2xl:mt-16 2xl:mb-16 px-4 md:px-8 lg:px-0">
    
    <!-- Section Title on Border -->
    <div class="absolute -top-16 left-1/2 -translate-x-1/2 border border-black bg-white px-6 py-3 text-[24px] shadow-lg rounded-lg font-bold">
      About Us
    </div>

    <div class="grid md:grid-cols-2 md:gap-8 mt-8">
      <div>
        <h1 :class="locale === 'bn' ? 'font-HindSiliguri' : 'font-SFUIDisplay'"
            class="text-[32px] sm:text-[34px] md:text-[38px] lg:text-[42px] xl:text-[52px] 2xl:text-[60px] font-[800]">
          Empowering
        </h1>
        <h1 :class="locale === 'bn' ? 'font-HindSiliguri' : 'font-SFUIDisplay'"
            class="text-[56px] sm:text-[60px] md:text-[64px] lg:text-[70px] xl:text-[80px] 2xl:text-[100px] font-[800] leading-[60px] md:leading-[100px]">
          Individuals
        </h1>
      </div>
    </div>
</div>

</template>

<style scoped></style>