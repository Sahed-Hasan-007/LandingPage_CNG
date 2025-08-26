<script setup lang="ts">
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import 'swiper/css/effect-coverflow';
import { Keyboard, Pagination, Autoplay, Navigation, EffectCoverflow } from "swiper";
import { ref, watch, defineProps, computed } from 'vue';
import {useI18n} from "vue-i18n";

const { locale } = useI18n();
const modules = [Keyboard, Navigation, Pagination, EffectCoverflow, Autoplay];

const prev = ref<HTMLButtonElement | null>(null);
const next = ref<HTMLButtonElement | null>(null);
const activeSlideIndex = ref<number>(0);
const totalSlides = ref<number>(0);
const isTransitioning = ref<boolean>(false);

const items = [
  {
    name: "Health and Safety",
    url: '/images/sustainability/item1.jpg',
    heading: "Our Commitment to",
    title: "Health and Safety Excellence",
    description: "We prioritize the wellbeing of our customers, employees, and communities through rigorous safety protocols, regular equipment maintenance, and comprehensive training programs. Our CNG and LPG facilities meet the highest international safety standards, ensuring secure fuel dispensing and storage operations."
  },
  {
    name: "Environment",
    url: '/images/sustainability/item2.jpg',
    heading: "Protecting Our",
    title: "Environmental Future",
    description: "As a leader in clean energy solutions, we're committed to reducing carbon emissions through our CNG and LPG services. Our eco-friendly fuel alternatives help decrease air pollution, support sustainable transportation, and contribute to a greener tomorrow for future generations."
  },
  {
    name: "Human Rights",
    url: '/images/sustainability/item3.jpg',
    heading: "Upholding Universal",
    title: "Human Rights Standards",
    description: "We believe in fair employment practices, equal opportunities, and respectful treatment for all. Our commitment extends to supporting local communities, ensuring fair wages, providing safe working conditions, and promoting diversity and inclusion across all levels of our organization."
  },
  {
    name: "Ethics",
    url: '/images/sustainability/item4.jpg',
    heading: "Operating with",
    title: "Unwavering Ethics",
    description: "Transparency, integrity, and accountability guide every aspect of our business operations. We maintain honest relationships with customers, suppliers, and stakeholders while adhering to strict ethical guidelines in pricing, service delivery, and environmental responsibility."
  },
]

const currentItem = computed(() => items[activeSlideIndex.value] || items[0]);

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

// Fixed slide change handler
const onSlideChange = (event: any) => {
  isTransitioning.value = true;

  // Calculate the real index (accounting for loop mode)
  const realIndex = event.realIndex;

  // Update immediately for better synchronization
  setTimeout(() => {
    activeSlideIndex.value = realIndex;
    totalSlides.value = items.length; // Use items length instead of event.slides.length

    // Shorter transition time
    setTimeout(() => {
      isTransitioning.value = false;
    }, 50);
  }, 150);

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

// Alternative: Use transition events instead of setTimeout
const onTransitionStart = () => {
  isTransitioning.value = true;
};

const onTransitionEnd = (event: any) => {
  activeSlideIndex.value = event.realIndex;
  totalSlides.value = items.length;
  isTransitioning.value = false;
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
  <div id="sustainability" class="container relative mx-auto max-w-[1300px] lg:max-w-[1005px] xl:max-w-[1160px] min-[1300px]:max-w-[1256px] 2xl:max-w-[1300px] my-8 md:my-32 2xl:my-32 px-4 md:px-8 lg:px-0">
    <div
        class="absolute -top-[58px] md:-top-[160px] left-1/2 -translate-x-1/2 border-2 border-green-500 bg-white px-6 py-3 text-[18px] md:text-[24px] shadow-lg shadow-black/40 rounded-lg font-bold z-10">
      {{$t('nav.Sustainability')}}
    </div>
    <div class="max-w-full mx-auto">
      <div class="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 items-center gap-10 lg:gap-16">
        <div data-aos="fade-up" data-aos-duration="800" class="flex flex-col items-center">
          <swiper
              :effect="'coverflow'"
              :grabCursor="true"
              :centeredSlides="true"
              :slidesPerView="'auto'"
              @slideChange="onSlideChange"
              @transitionStart="onTransitionStart"
              @transitionEnd="onTransitionEnd"
              :navigation="{ nextEl: '.custom-next', prevEl: '.custom-prev' }"
              :loop="true"
              :autoplay="{ delay: 3000, disableOnInteraction: false }"
              :speed="600"
              :breakpoints="{
              640: { slidesPerView: 1.5, spaceBetween: 10 },
              768: { slidesPerView: 2, spaceBetween: 10 },
              1024: { slidesPerView: 2, spaceBetween: 10 }
            }"
              :coverflowEffect="{
              rotate: 50,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows: true
            }"
              :modules="modules"
              class="mySwiper">
            <swiper-slide v-for="(item, i) in items" :key="i" class="relative group">
              <div class="w-full md:h-[400px] lg:h-[320px] xl:h-[400px] flex justify-center items-center">
                <img :src="item.url" class="w-full h-full object-cover rounded-lg" alt="image" />
              </div>
              <h1
                  class="absolute bottom-0 left-0 right-0 text-center bg-[#0E3467] text-white text-xl p-3 rounded-b-lg ">
                {{ item.name }}
              </h1>
            </swiper-slide>
          </swiper>

          <div class="flex gap-4 md:mt-8 items-center justify-center">
            <!-- Prev Button -->
            <button
                ref="prev"
                @click="handPrev"
                class="custom-prev px-3 pt-2 pb-1 rounded-xl border-2 border-green-600 text-green-600
           hover:bg-green-600 hover:text-white transition-all duration-300 ease-in-out
           shadow-sm hover:shadow-lg disabled:opacity-40 disabled:cursor-not-allowed"
                :class="{ 'bg-green-600 text-white': activeSlideIndex === 0 }"
                :disabled="activeSlideIndex === 0"
            >
              <Icon name="ph:arrow-left" size="22" />
            </button>

            <!-- Next Button -->
            <button
                ref="next"
                @click="handNext"
                class="custom-next px-3 pt-2 pb-1 rounded-xl border-2 border-green-600 text-green-600
           hover:bg-green-600 hover:text-white transition-all duration-300 ease-in-out
           shadow-sm hover:shadow-lg disabled:opacity-40 disabled:cursor-not-allowed"
                :class="{ 'bg-green-600 text-white': activeSlideIndex === totalSlides - 1 }"
                :disabled="activeSlideIndex === totalSlides - 1"
            >
              <Icon name="ph:arrow-left" size="22" class="rotate-180" />
            </button>
          </div>
        </div>

        <!-- item heading, title, description -->
        <div data-aos="fade-down" data-aos-duration="800" class="py-2 md:px-4 lg:px-4 relative overflow-hidden">
          <!-- Content with slide animation -->
          <div
              class="transition-all duration-300 ease-in-out transform h-[280px] md:h-[350px]"
              :class="isTransitioning ? 'opacity-0 translate-x-16' : 'opacity-100 translate-x-0'"
          >
            <!-- Heading -->
            <div class="md:mb-2">
              <span class="text-green-600 text-[18px] md:text-[30px] font-medium tracking-wide">
                {{ currentItem.heading }}
              </span>
            </div>

            <!-- Title -->
            <h2 class="text-2xl md:text-3xl lg:text-[48px] font-bold text-[#0E3467] mb-3 md:mb-6 leading-tight">
              {{ currentItem.title }}
            </h2>

            <!-- Description -->
            <p class="text-gray-600 text-[16px] md:text-[20px] leading-relaxed">
              {{ currentItem.description }}
            </p>
          </div>

          <!-- Progress indicator - Always visible -->
          <div class="flex items-center justify-center md:mt-4 space-x-2 relative z-10">
            <span class="text-sm md:text-lg text-gray-500">
              {{ activeSlideIndex + 1 }} / {{ items.length }}
            </span>
            <div class="flex space-x-1">
              <div
                  v-for="(item, index) in items"
                  :key="index"
                  class="h-1 md:h-2 w-6 md:w-10 rounded-full transition-all duration-300"
                  :class="index === activeSlideIndex ? 'bg-green-600' : 'bg-gray-300'"
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.mySwiper {
  width: 100%;
  padding-top: 50px;
  padding-bottom: 50px;
}

.mySwiper .swiper-slide {
  background-position: center;
  background-size: cover;
  width: 300px;
  height: 400px;
}

@media (max-width: 1024px) {
  .mySwiper .swiper-slide {
    width: 250px;
    height: 350px;
  }
}

@media (max-width: 768px) {
  .mySwiper .swiper-slide {
    width: 280px;
    height: 380px;
  }
}
</style>