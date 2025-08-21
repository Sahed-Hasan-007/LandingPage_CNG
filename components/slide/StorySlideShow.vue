<template>
  <swiper
      :scrollbar="{
      hide: true,
    }"
      :loopAdditionalSlides="dataArray.length"
      :breakpoints="breakpoints"
      :centeredSlides="true"
      :navigation="{ prevEl: '.prev', nextEl: '.next' }"
      :slidesPerView="3"
      :spaceBetween="0"
      :grabCursor="true"
      :pagination="false"
      :autoplay="{
      delay: 2000,
      pauseOnMouseEnter: true,
      disableOnInteraction: false,
    }"

      :loop="true"
      :modules="modules"
      class="mySwiper"
      @swiper-init="onSwiperInit"
      @swiper="onSwiper"
      @slideChange="onSlideChange"
  >
    <swiper-slide v-for="(item, i) in dataArray" :key="i" class="rounded-md overflow-hidden">
      <div v-if="slideType === 'story'" class="rounded-md overflow-hidden">
        <div
            :id="`overlay` + i"
            class="absolute h-full w-full flex justify-center items-center cursor-pointer rounded-md overflow-hidden"
        >
          <img
              class="w-full h-full object-cover z-20 rounded"
              :src="item.overlay"
              alt="overlay"
          />
          <img
              src="/images/Empowering/play.png"
              class="absolute z-30 w-48 h-48 animate-ping"
              alt="icon"
          />
          <img
              @click="playVideo(i, item.url)"
              src="/images/Empowering/play.png"
              class="absolute z-40 w-48 h-48"
              alt="icon"
          />
        </div>

        <iframe
            :id="`iframe` + i"
            ref="youtube"
            src=""
            class="h-[330px] md:h-[450px] w-full"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
        ></iframe>
      </div>
    </swiper-slide>
  </swiper>
</template>

<script>
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "../../assets/css/style.css";

import "swiper/css/pagination";
import "swiper/css/navigation";
import { Scrollbar, Pagination, Autoplay, Navigation } from "swiper";
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
    },
    style: {
      type: String,
      default: "",
    },
  },
  mounted() {
    // Load YouTube Iframe API dynamically
    this.loadYouTubeAPI();
  },
  methods: {
    loadYouTubeAPI() {

      if (window.YT && window.YT.Player) {
        console.log("YouTube API already loaded.");
        return;
      }
      const tag = document.createElement("script");
      tag.src = "https://www.youtube.com/iframe_api";
      tag.async = true;
      tag.defer = true;
      document.head.appendChild(tag);
      window.onYouTubeIframeAPIReady = () => {
        console.log("YouTube API loaded.");
      };
    },
    initYouTubePlayer(i) {
      const iframe = document.getElementById(`iframe${i}`);
      if (iframe) {
        this.players[i] = new YT.Player(iframe, {
          events: {
            onStateChange: (event) => {
              if (event.data === YT.PlayerState.PAUSED) {
                const currentTime = this.players[i].getCurrentTime();
                setTimeout(() => {
                  const newTime = this.players[i].getCurrentTime();
                  if (currentTime === newTime) {
                    console.log("Video paused by user");
                    this.swiperInstance?.autoplay.start();
                    document.getElementById(`overlay${i}`).style.display = "flex";

                    const videoIframe = document.getElementById(`iframe${i}`);
                    const src = videoIframe.src;
                    videoIframe.src = src.replace("autoplay=1", "autoplay=0");
                  } else {
                    console.log("Video seek detected — not a real pause");
                  }
                }, 800);
              }
            },
          },
        });
      }
    },
    onSwiper(swiper) {
      this.swiperInstance = swiper;
    },

    onSwiperInit(swiper) {
      this.$emit("navigation-data", { prevEl: ".prev", nextEl: ".next" });
    },

    playVideo(i, url) {
      this.youtube[i].src = url ;
      const {setCurrentVideo} = useCurrentVideo();

      this.video_url =`${url}?enablejsapi=1&autoplay=0`;
      console.log(url)
      const videoIframe = document.getElementById(`iframe` + i);
      this.swiperInstance.slideToLoop(i,500);
      this.centerVideo = i;
      const src = videoIframe.src;
      if (this.swiperInstance) {
        this.swiperInstance.autoplay.stop();
      }
      videoIframe.src = src.replace("autoplay=0", "autoplay=1");
      setCurrentVideo(videoIframe,`overlay`+i);
      setTimeout(() => {
        this.swiperInstance.autoplay.stop();
        this.initYouTubePlayer(i);
        document.getElementById(`overlay`+i).style.display = "none";
      }, 1000);
    },
    onSlideChange() {
      if(this.centerVideo)
      {
        const videoIframe = document.getElementById(`iframe` + this.centerVideo);
        videoIframe.contentWindow.postMessage(
            '{"event":"command","func":"pauseVideo","args":""}',
            "*"
        );
        document.getElementById(`overlay`+this.centerVideo).style.display = "flex";
        this.centerVideo = null;
      }

    },
  },
  components: {
    ReviewCard,
    Swiper,
    SwiperSlide,
  },
  setup(props) {
    const autoPlayObj = ref({
      delay: 2000,
      pauseOnMouseEnter: true,
      disableOnInteraction: false,
    });
    const dataArray = ref(props.dataArray);
    const slide_type = ref(props.slideType);
    const nav = ref(props.sideNav);
    const pagination = ref(props.pagination);
    const breakpoints = ref(props.breakpoints);
    const activeIndex = ref(0);
    const swiperInstance = ref(null);
    const players = ref({});
    const centerVideo = ref(null);
    const video_url = ref(null) ;
    const youtube = ref([]) ;
    const isActive = (index) => {
      return index === activeIndex.value;
    };

    return {
      modules: [Autoplay, Pagination, Navigation, Scrollbar],
      dataArray,
      breakpoints,
      slide_type,
      nav,
      isActive,
      swiperInstance,
      players,
      centerVideo,
      video_url,
      youtube
    };
  },
};
</script>

<style scoped>
.mySwiper {
  padding-bottom: 20px;
  perspective: 1000px;
}

@media (max-width: 768px) {
  .mySwiper .swiper-slide {
    transition: transform 0.5s ease, opacity 0.5s ease;
    position: relative;
    opacity: 1;
    transform: scale(0.8) translateX(0);
    width: 100%;
  }

  .mySwiper .swiper-slide-active {
    transform: scale(1) translateX(0);
    z-index: 10;
    opacity: 1;
  }
}
</style>