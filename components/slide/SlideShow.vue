<template>
  <swiper
      :scrollbar="{
      hide: true,
    }"
      :breakpoints="breakpoints"
      :navigation="{ prevEl: '.prev', nextEl: '.next' }"
      :slidesPerView="3"
      :spaceBetween="4"
      :grabCursor="true"
      :pagination="true"
      :autoplay="{
      delay: 3000,

      pauseOnMouseEnter: true,
      disableOnInteraction: false,

    }"
      :modules="modules"
      class="mySwiper"
      @swiper-init="onSwiperInit"
  >
    <swiper-slide v-for="(item, i) in dataArray" :key="i" :class="style">
      <div v-if="slideType === 'review'" class="flex flex-col items-center">
        <ReviewCard :index="i" :item="item"/>
      </div>
      <div v-if="slideType === 'story'">
        <iframe
            class="h-[200px] md:h-[320px] w-full"
            :src="item.url"
        ></iframe>
      </div>
    </swiper-slide>
  </swiper>
</template>
<script>
// Import Swiper Vue.js components
import {Swiper, SwiperSlide} from "swiper/vue";

// Import Swiper styles
import "swiper/css";
import "../../assets/css/style.css";

import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import {Scrollbar, Pagination, Autoplay, Navigation} from "swiper";
import ReviewCard from "~/components/card/ReviewCard.vue";

export default {
  props: {
    dataArray: {
      type: Array,
      default: [],
    },
    slideType: {
      type: String,
      default: "",
    },
    pagination: {
      type: Boolean,
      default: false,
    },
    sideNav: {
      type: Boolean,
      default: true,
    },
    breakpoints: {
      type: Object,
      default: {
        "@0.00": {
    slidesPerView: 1, // Small screens
    spaceBetween: 4,
  },
  "@0.50": {
    slidesPerView: 1, // Medium screens
    spaceBetween: 20,
  },
  "@0.75": {
    slidesPerView: 2, // Medium screens
    spaceBetween: 20,
  },
  "@1.00": {
    slidesPerView: 3, // Large screens
    spaceBetween: 80,
  },
}

    },
    style: {
      type: String,
      default: "",
    }
  },
  methods: {
    onSwiperInit(swiper) {
      // Emit the navigation data when the Swiper instance is initialized
      this.$emit('navigation-data', { prevEl: '.prev', nextEl: '.next' });
    },
  },
  components: {
    ReviewCard,
    Swiper,
    SwiperSlide,
  },
  setup(props) {
    const dataArray = ref(props.dataArray);
    const slide_type = ref(props.slideType);
    const nav = ref(props.sideNav);
    const pagination = ref(props.pagination);
    const breakpoints = ref(props.breakpoints);
    return {
      modules: [Autoplay, Pagination, Navigation, Scrollbar],
      dataArray,
      breakpoints,
      slide_type,
      nav
    };
  },
};
</script>