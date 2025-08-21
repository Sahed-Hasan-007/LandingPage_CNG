<script setup>
import CtaButton from "~/components/common/CtaButton.vue";
import StorySlideShow from "~/components/slide/StorySlideShow.vue";
import {useI18n} from "vue-i18n";
import CtaButtonThree from "~/components/common/CtaButtonThree.vue";

const items = [
  { url: 'https://www.youtube.com/embed/jepvbeozBdo?si=wqxlJWhPVOhEIFMT&autoplay=0&enablejsapi=1', overlay: '/images/story/story1.png' },
  { url: 'https://www.youtube.com/embed/9ZgbYbXVWb4?si=kZz_ui67Sfm_xqW6&autoplay=0&enablejsapi=1', overlay: '/images/story/story2.png' },
  { url: 'https://www.youtube.com/embed/ygAcvvqS1v8?si=yAgAELdqfgoGYx9R&autoplay=0&enablejsapi=1', overlay: '/images/story/story3.png' },
  { url: 'https://www.youtube.com/embed/hU6-cJs-ydE?si=73CFJDCmkRh5fNYX&autoplay=0&enablejsapi=1', overlay: '/images/story/story4.png' },
  { url: 'https://www.youtube.com/embed/CLdGcwmLisk?si=EH0rlREMOWIZ5XLA&autoplay=0&enablejsapi=1', overlay: '/images/story/story5.png' },
  { url: 'https://www.youtube.com/embed/IFsRY-Q0O_k?si=letit8WFxwnQnuMw&autoplay=0&enablejsapi=1', overlay: '/images/story/story6.png' },
  { url: 'https://www.youtube.com/embed/jepvbeozBdo?si=wqxlJWhPVOhEIFMT&autoplay=0&enablejsapi=1', overlay: '/images/story/story1.png' },
  { url: 'https://www.youtube.com/embed/9ZgbYbXVWb4?si=kZz_ui67Sfm_xqW6&autoplay=0&enablejsapi=1', overlay: '/images/story/story2.png' },
  { url: 'https://www.youtube.com/embed/ygAcvvqS1v8?si=yAgAELdqfgoGYx9R&autoplay=0&enablejsapi=1', overlay: '/images/story/story3.png' },
  { url: 'https://www.youtube.com/embed/hU6-cJs-ydE?si=73CFJDCmkRh5fNYX&autoplay=0&enablejsapi=1', overlay: '/images/story/story4.png' },
  { url: 'https://www.youtube.com/embed/CLdGcwmLisk?si=EH0rlREMOWIZ5XLA&autoplay=0&enablejsapi=1', overlay: '/images/story/story5.png' },
  { url: 'https://www.youtube.com/embed/IFsRY-Q0O_k?si=letit8WFxwnQnuMw&autoplay=0&enablejsapi=1', overlay: '/images/story/story6.png' },
];


const { locale } = useI18n();

const breakpoints = {
  "@0.00": {
    slidesPerView: 1.5,
    spaceBetween: 0,
    centeredSlides: true,
  },
  "@0.75": {
    slidesPerView: 2.5,
    spaceBetween: 0,
    centeredSlides: true,
  },
  "@1.00": {
    slidesPerView: 3.5,
    spaceBetween: 0,
    centeredSlides: true,
  },
  "@1.50": {
    slidesPerView: 5,
    spaceBetween: 20,
  },
}
</script>

<template>
  <div class="my-14">
    <!--    Heading Section-->
    <div class="container mx-auto max-w-[1300px] lg:max-w-[1005px] xl:max-w-[1160px] min-[1300px]:max-w-[1256px] 2xl:max-w-[1300px] my-8 md:my-0 lg:my-8 md:mt-16 px-4 sm:px-7 md:px-0">
      <div class="grid md:grid-cols-2 px-0 md:p-8 lg:p-0 xl:p-1">
        <div>
          <p class="md:text-left text-center text-[16px] sm:text-[18px] md:text-[20px] lg:text-[20px] 2xl:text-[22px] font-[600] lending-4 md:leading-[10px]">See How We’ve Made an Impact.</p>
          <div class="pt-2 md:pt-4">
            <p :class="locale === 'bn' ? 'font-HindSiliguri' : 'font-SFUIDisplay'"
               class="md:text-left text-center text-[30px] sm:text-[40px] md:text-[44px] lg:text-[50px] xl:text-[54px] 2xl:text-[60px] font-[800]">
              {{ $t('story.headingOne') }}
            </p>
            <p :class="locale === 'bn' ? 'font-HindSiliguri' : 'font-SFUIDisplay'"
               class="md:text-left text-center text-[30px] sm:text-[40px] md:text-[44px] lg:text-[50px] xl:text-[54px] 2xl:text-[60px] font-[800] leading-8 md:leading-[40px]">
              {{ $t('story.headingTwo') }}
            </p>
          </div>
        </div>
        <div class="pt-4 md:pt-0">
          <div data-aos="fade-down" data-aos-duration="800">
            <p class="md:text-right text-center text-[16px] md:text-[16px] font-[600] lending-4 md:leading-[10px]">
              These are the faces of transformation—</p>
          </div>
          <p :class="locale === 'bn' ? 'font-HindSiliguri' : 'font-SFUIDisplay'"
              class="md:text-right text-center text-[16px] md:text-[20px] font-[300] pt-2 md:pt-10 lg:pt-8">
            {{ $t('story.description') }}
          </p>
          <div data-aos="fade-up" data-aos-duration="800">
            <div class="flex p-10 gap-2 max-md:hidden items-end justify-end">
              <button
                  class="prev px-7 py-4 rounded-full border bg-orange-400 text-white transition-colors duration-300 hover:bg-orange-400 group flex justify-center items-center ">
                <Icon name="line-md:arrow-right" size="24" class="rotate-180" />
              </button>

              <button
                  class="next px-7 py-4 rounded-full border transition-colors duration-300 group-hover:bg-orange-400 hover:bg-orange-400 hover:text-white flex justify-center items-center"
                  onmouseover="this.previousElementSibling.classList.remove('bg-orange-400', 'text-white')"
                  onmouseout="this.previousElementSibling.classList.add('bg-orange-400', 'text-white')">
                <Icon name="line-md:arrow-right" size="24" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!--Slider Section-->
    <div class="flex flex-col items-center ">
      <StorySlideShow from :data-array="items" :sideNav="false" slide-type="story" :breakpoints="breakpoints"/>
    </div>

    <!--     Button For Mobile View-->
    <div class="flex pt-2 pb-8 gap-2 md:hidden items-end justify-center">
      <button
        class="prev px-6 py-3 rounded-full border bg-orange-400 text-white transition-colors duration-300 hover:bg-orange-400 group flex justify-center items-center ">
        <Icon name="line-md:arrow-right" size="20" class="rotate-180" />
      </button>

      <button
        class="next px-6 py-3 rounded-full border transition-colors duration-300 group-hover:bg-orange-400 hover:bg-orange-400 hover:text-white flex justify-center items-center"
        onmouseover="this.previousElementSibling.classList.remove('bg-orange-400', 'text-white')"
        onmouseout="this.previousElementSibling.classList.add('bg-orange-400', 'text-white')">
        <Icon name="line-md:arrow-right" size="20" />
      </button>
    </div>
<!--    Cta Button-->
    <div data-aos="flip-up" data-aos-duration="900">
      <div class="flex justify-center mt-6 md:mt-16">
        <CtaButtonThree text="Join the Academy" sub-text="Explore Our Programs"
                        link="https://onlinetechacademy.com.bd/s/new-sm/?fbclid=IwY2xjawIf0n5leHRuA2FlbQIxMAABHYcqQ5Amz0-9HFfcgBrEV4Gh7OF2P3e9iNgPgUBpISZe5fYiH3rlxSH5OQ_aem_jXmkJyXusCuLEEHbU2Csqw"/>
      </div>
    </div>

  </div>
</template>

<style scoped></style>