<script setup lang="ts">
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import 'swiper/css/effect-coverflow';
import { Keyboard, Pagination, Autoplay, Navigation, EffectCoverflow } from "swiper";
import { ref, watch, defineProps } from 'vue';
import {useI18n} from "vue-i18n";

const { locale } = useI18n();
const modules = [Keyboard, Navigation, Pagination, EffectCoverflow, Autoplay];

const prev = ref<HTMLButtonElement | null>(null);
const next = ref<HTMLButtonElement | null>(null);
const activeSlideIndex = ref<number>(0);
const totalSlides = ref<number>(0);

const items = [
  { name: "E-commerce Seller Summit", url: '/images/otaWork/ota1.png' },
  { name: "Live Webinar", url: '/images/otaWork/ota2.png' },
  { name: " 3rd Gold Meetup", url: '/images/otaWork/ota3.png' },
  { name: "E-commerce Seller Summit", url: '/images/otaWork/ota1.png' },
  { name: "Live Webinar", url: '/images/otaWork/ota2.png' },
  { name: " 3rd Gold Meetup", url: '/images/otaWork/ota3.png' },
  { name: "E-commerce Seller Summit", url: '/images/otaWork/ota1.png' },
  { name: "Live Webinar", url: '/images/otaWork/ota2.png' },
  { name: " 3rd Gold Meetup", url: '/images/otaWork/ota3.png' },
]

const handPrev = () => {
  if (prev.value) {
    prev.value.click();
  }
};

const handNext = () => {
  if (next.value) {
    next.value.click();
  }
};

const onSlideChange = (event: any) => {
  activeSlideIndex.value = event.activeIndex;
  totalSlides.value = event.slides.length;

  const slides = event.slides;
  slides.forEach((slide: HTMLElement, index: number) => {
    const headingElement = slide.querySelector("h1");
    if (index === event.activeIndex && headingElement) {
      headingElement.classList.add("opacity-90");
    } else if (headingElement) {
      headingElement.classList.remove("opacity-10");
    }
  });
};

watch(activeSlideIndex, () => {
  const prevButton = prev.value;
  const nextButton = next.value;

  if (prevButton) {
    prevButton.disabled = activeSlideIndex.value === 0;
  }

  if (nextButton) {
    nextButton.disabled = activeSlideIndex.value === totalSlides.value - 1;
  }
});
</script>

<template>
  <div id="solution" class="container mx-auto max-w-[1300px] lg:max-w-[1005px] xl:max-w-[1160px] min-[1300px]:max-w-[1256px] 2xl:max-w-[1300px] my-8 md:my-32 2xl:my-32 px-4 md:px-8 lg:px-0">
    <div class="max-w-full mx-auto">
      <div class="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 items-center lg:gap-16">
        <div class="flex flex-col items-center">
          <swiper :effect="'coverflow'" :grabCursor="true" :centeredSlides="true" :slidesPerView="'auto'"
            @slideChange="onSlideChange" :navigation="{ nextEl: '.custom-next', prevEl: '.custom-prev' }" :loop="true"
            :autoplay="{ delay: 3000, disableOnInteraction: false }" :breakpoints="{
              640: { slidesPerView: 1.5, spaceBetween: 10 },
              768: { slidesPerView: 2, spaceBetween: 10 },
              1024: { slidesPerView: 2, spaceBetween: 10 }
            }" :coverflowEffect="{
              rotate: 50,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows: true
            }" :modules="modules" class="mySwiper">
            <swiper-slide v-for="(item, i) in items" :key="i" class="relative group">
              <div class="w-full md:h-[400px] lg:h-[320px] xl:h-[400px] flex justify-center items-center">
                <img :src="item.url" class="w-full h-full rounded-lg" alt="image" />
              </div>
              <h1
                class="absolute bottom-0 left-0 right-0 text-center bg-[#0E3467] text-white text-xl p-3 rounded-b-lg ">
                {{ item.name }}
              </h1>
            </swiper-slide>
          </swiper>

          <div class="flex gap-4 mt-8 items-center justify-center md:flex lg:hidden w-[87px] h-[53px]">
            <button ref="prev" @click="handPrev"
              class="custom-prev opacity-100 hover:bg-[#EE8122] hover:text-white px-4 pt-2 rounded-full transition duration-700 ease-in-out"
              :class="{ 'bg-[#EE8122] text-white': activeSlideIndex.value === 0 }"
              :disabled="activeSlideIndex.value === 0">
              <Icon name="ph:arrow-left" size="24" />
            </button>

            <button ref="next" @click="handNext"
              class="custom-next opacity-100 hover:bg-[#EE8122] hover:text-white px-4 pt-2 rounded-full transition duration-700 ease-in-out"
              :class="{ 'bg-[#EE8122] text-white': activeSlideIndex.value === totalSlides.value - 1 }"
              :disabled="activeSlideIndex.value === totalSlides.value - 1">
              <Icon name="ph:arrow-left" size="24" class="rotate-180" />
            </button>
          </div>
        </div>
        <div class="space-y-4 md:space-y-6 lg:space-y-4 py-2 md:px-4 lg:px-4">
          <h2 :class="locale === 'bn' ? 'font-HindSiliguri' : 'font-SFUIDisplay'"
              class="lg:text-[58.61px] md:text-[50px] text-[40px] md:text-center lg:text-left font-[800] mb-4 lg:!leading-[63.71px]">
            {{ $t('otaWork.heading') }}
          </h2>
          <p :class="locale === 'bn' ? 'font-HindSiliguri' : 'font-SFUIDisplay'"
              class="mt-4 text-[16px] md:text-[18px] lg:text-[16px] font-light leading-[24.75px]">
            {{ $t('otaWork.subHeading') }}
          </p>
          <div class="grid grid-cols-[35px_auto] gap-5 items-center leading-[24.75px]">
            <div data-aos="fade-up" data-aos-duration="800">
              <img src="/images/otaWork/icon1.png"
                   class="w-[35px] h-[35px] rounded-full object-cover" alt="image" />
            </div>
            <div data-aos="fade-up" data-aos-duration="800">
              <p :class="locale === 'bn' ? 'font-HindSiliguri' : 'font-SFUIDisplay'"
                 class="text-[16px] md:text-[18px] lg:text-[16px] font-semibold">
                {{ $t('otaWork.textOneHeading') }}<span class="font-light"> {{ $t('otaWork.textOne') }}</span>
              </p>
            </div>
          </div>
          <div class="grid grid-cols-[35px_auto] gap-5 items-center leading-[24.75px]">
            <div data-aos="fade-up" data-aos-duration="800">
              <img src="/images/otaWork/icon2.png"
                   class="shrink-0 w-[35px] h-[35px] rounded-full object-cover" alt="image" />
            </div>
            <div data-aos="fade-up" data-aos-duration="800">
              <p :class="locale === 'bn' ? 'font-HindSiliguri' : 'font-SFUIDisplay'"
                 class="text-[16px] md:text-[18px] lg:text-[16px] font-semibold">
                {{ $t('otaWork.textTwoHeading') }}<span class="font-light"> {{ $t('otaWork.textTwo') }}</span> </p>
            </div>
          </div>

          <div class="grid grid-cols-[35px_auto] gap-5 items-center leading-[24.75px]">
            <div data-aos="fade-up" data-aos-duration="800">
              <img src="/images/otaWork/icon3.png"
                   class="shrink-0 w-[35px] h-[35px] rounded-full object-cover" alt="image" />
            </div>
            <div data-aos="fade-up" data-aos-duration="800">
              <p :class="locale === 'bn' ? 'font-HindSiliguri' : 'font-SFUIDisplay'"
                 class="text-[16px] md:text-[18px] lg:text-[16px] font-semibold">
                {{ $t('otaWork.textThreeHeading') }}<span class="font-light"> {{ $t('otaWork.textThree') }}</span> </p>
            </div>
          </div>

          <!--Slider Button for Desktop-->
          <div class="flex gap-4 items-center hidden md:hidden lg:flex sm:flex">
            <button @click="handPrev"
              class="hover:bg-[#EE8122] hover:text-white px-4 pt-2 rounded-full transition duration-700 ease-in-out">
              <Icon name="ph:arrow-left" size="24" />
            </button>
            <button @click="handNext"
              class="hover:bg-[#EE8122] hover:text-white px-4 pt-2 rounded-full transition duration-700 ease-in-out">
              <Icon name="ph:arrow-left" size="24" class="rotate-180" />
            </button>
          </div>

        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>