<script setup lang="ts">
import CtaButton from "~/components/common/CtaButton.vue";
import {useI18n} from "vue-i18n";
import CtaButtonThree from "~/components/common/CtaButtonThree.vue";
const { locale } = useI18n();
const rowOne = [
  {
    first: "OTA Gold",
    second: "Meetup",
    image: "/images/network/image1.png",
  },
  {
    first: "OTA",
    second: "Masterminding",
    image: "/images/network/image2.png",
  },
]

const rowTwo = [
  {
    first: "OTA Mega",
    second: "Meetup",
    image: "/images/network/image3.png",
  },
  {
    first: "OTA Gold",
    second: "Meetup",
    image: "/images/network/image4.png",
  },
]

const rowThree = [
  {
    first: "Zoom Live",
    second: "Class",
    image: "/images/network/image5.png",
  },
  {
    first: "Sponsor",
    second: "Program",
    image: "/images/network/image6.png",
  },
]

const rowFour = [
  {
    first: "Local",
    second: "Meetup",
    image: "/images/network/image7.png",
  },
  {
    first: "Sponsor",
    second: "Program",
    image: "/images/network/image8.png",
  },
]

const rowFive = [
  {
    first: "Physical",
    second: "Workshop",
    image: "/images/network/image9.png",
  },
  {
    first: "Sponsor",
    second: "Program",
    image: "/images/network/image10.png",
  },
]
</script>

<template>
  <div class="container mx-auto max-w-[1300px] lg:max-w-[1005px] xl:max-w-[1160px] min-[1300px]:max-w-[1256px] 2xl:max-w-[1300px] mt-16 mb-8 md:mt-20 md:mb-20 px-4 md:px-8  xl:px-0.5">
    <div class="grid md:grid-cols-2 gap-6 lg:gap-12 items-center justify-center">
      <div class="text-center md:text-left text-[36px] md:text-[54px] 2xl:text-[60px] font-[800] leading-[50px] md:leading-[70px]">Learn, Network & <br> Grow With OTA</div>
      <div
          :class="locale === 'bn' ? 'font-HindSiliguri' : ''"
          class="text-center md:text-right text-[16px] md:text-[18px] xl:text-[18px] 2xl:text-[20px] font-[400] font-['Inter'] leading-[24px] md:leading-[30px] lg:px-8">
        {{ $t('network.subHeadingPartOne') }}
        <strong>{{ $t('network.subHeadingHighlightText') }}</strong>
        {{ $t('network.subHeadingPartTwo') }}
      </div>
    </div>
    <div class="mt-8 mb-8 lg:mt-12 lg:mb-8">
<!--      Row One-->
      <div class="grid grid-cols-12 gap-4 md:gap-4">
        <div v-for="(item ,i) in rowOne" :key="i" :class="i%2==0 ? 'col-span-12 md:col-span-8': 'col-span-12 md:col-span-4'">
          <div class="card h-full relative md:h-[340px] ">
            <div class="content h-full relative">
              <p class="hover-text">{{ item.first+" "+item.second }} </p>
              <span class="hover-bg text-[12px] py-[8px] px-[12px] md:text-[18px] md:px-[12px] md:py-[8px]"> <p class="opacity-0">{{ item.first+" "+item.second }}</p> </span>
              <img :src="item.image" alt="Example Image" class="card-image object-cover h-full w-full" />
              <p class="afterHover-text py-[2px] px-[2px] text-[12px] md:text-[24px] md:px-[12px] md:py-[8px]">{{ item.first }}<br> <strong class="highlight-text text-[22px] md:text-[30px]">{{ item.second }} </strong> </p>
            </div>
          </div>
        </div>
      </div>
<!--Row Two-->
      <div class="grid grid-cols-12 gap-4 md:gap-4 mt-4">
        <div v-for="(item ,i) in rowTwo" :key="i" :class="i%2==0 ? 'col-span-12 md:col-span-4': 'col-span-12 md:col-span-8'">
          <div class="card h-full relative  md:max-h-[320px]">
            <div class="content h-full relative">
              <p class="hover-text">{{ item.first+" "+item.second }} </p>
              <span class="hover-bg text-[12px] py-[8px] px-[12px] md:text-[18px] md:px-[12px] md:py-[8px]"> <p class="opacity-0">{{ item.first+" "+item.second }}</p> </span>
              <img :src="item.image" alt="Example Image" class="card-image object-cover h-full w-full" />
              <p class="afterHover-text py-[2px] px-[2px] text-[12px] md:text-[24px] md:px-[12px] md:py-[8px]">{{ item.first }}<br > <strong class="highlight-text text-[22px] md:text-[30px]">{{ item.second }} </strong> </p>
            </div>
          </div>
        </div>
      </div>
<!--      Row Three-->
      <div class="grid grid-cols-12 gap-4 md:gap-4 mt-4">
        <div v-for="(item ,i) in rowThree" :key="i" :class="i%2==0 ? 'col-span-12 md:col-span-8': 'col-span-12 md:col-span-4'">
          <div class="card h-full relative md:max-h-[320px]">
            <div class="content h-full relative">
              <p class="hover-text">{{ item.first+" "+item.second }} </p>
              <span class="hover-bg text-[12px] py-[8px] px-[12px] md:text-[18px] md:px-[12px] md:py-[8px]"> <p class="opacity-0">{{ item.first+" "+item.second }}</p> </span>
              <img :src="item.image" alt="Example Image" class="card-image object-cover h-full w-full" />
              <p class="afterHover-text py-[2px] px-[2px] text-[12px] md:text-[24px] md:px-[12px] md:py-[8px]">{{ item.first }}<br > <strong class="highlight-text text-[22px] md:text-[30px]">{{ item.second }} </strong> </p>
            </div>
          </div>
        </div>
      </div>
<!--      Row Four-->
      <div class="grid grid-cols-12 gap-4 md:gap-4 mt-4">
        <div v-for="(item ,i) in rowFour" :key="i" :class="i%2==0 ? 'col-span-12 md:col-span-4': 'col-span-12 md:col-span-8'">
          <div class="card h-full relative md:max-h-[320px]">
            <div class="content h-full relative">
              <p class="hover-text">{{ item.first+" "+item.second }} </p>
              <span class="hover-bg text-[12px] py-[8px] px-[12px] md:text-[18px] md:px-[12px] md:py-[8px]"> <p class="opacity-0">{{ item.first+" "+item.second }}</p> </span>
              <img :src="item.image" alt="Example Image" class="card-image object-cover h-full w-full" />
              <p class="afterHover-text py-[2px] px-[2px] text-[12px] md:text-[24px] md:px-[12px] md:py-[8px]">{{ item.first }}<br > <strong class="highlight-text text-[22px] md:text-[30px]">{{ item.second }} </strong> </p>
            </div>
          </div>
        </div>
      </div>
      <!--      Row Five-->
      <div class="grid grid-cols-12 gap-4 md:gap-4 mt-4">
        <div v-for="(item ,i) in rowFive" :key="i" :class="i%2==0 ? 'col-span-12 md:col-span-8': 'col-span-12 md:col-span-4'">
          <div class="card h-full relative md:max-h-[320px]">
            <div class="content h-full relative">
              <p class="hover-text">{{ item.first+" "+item.second }} </p>
              <span class="hover-bg text-[12px] py-[8px] px-[12px] md:text-[18px] md:px-[12px] md:py-[8px]"> <p class="opacity-0">{{ item.first+" "+item.second }}</p> </span>
              <img :src="item.image" alt="Example Image" class="card-image object-cover h-full w-full" />
              <p class="afterHover-text py-[2px] px-[2px] text-[12px] md:text-[24px] md:px-[12px] md:py-[8px]">{{ item.first }}<br > <strong class="highlight-text text-[22px] md:text-[30px]">{{ item.second }} </strong> </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="flex justify-center">
      <div :class="locale === 'bn' ? 'font-HindSiliguri' : ''"
           class="text-[16px] md:text-[16px] text-center font-[400] font-['Inter'] leading-[24px] md:leading-[28px] md:py-4 md:px-8 lg:px-10 lg:w-full">{{ $t('network.text') }}</div>
    </div>
    <div data-aos="flip-up" data-aos-duration="900">
      <div class="flex justify-center mt-12 md:mt-8">
        <CtaButtonThree text="Join the Academy" sub-text="Explore Our Programs"
                        link="https://onlinetechacademy.com.bd/s/new-sm/?fbclid=IwY2xjawIf0n5leHRuA2FlbQIxMAABHYcqQ5Amz0-9HFfcgBrEV4Gh7OF2P3e9iNgPgUBpISZe5fYiH3rlxSH5OQ_aem_jXmkJyXusCuLEEHbU2Csqw"/>
      </div>
    </div>
  </div>
</template>

<style scoped>
.card {
  position: relative;
  width: 100%;
  overflow: hidden;
  border-radius: 6px;
  transition: transform 0.3s ease;
  cursor: pointer;
}

/* Image Styling */
.card-image {
  width: 100%;
  border-radius: 6px;
}

/* Title Styling (initially in the top corner) */
.hover-text {
  position: absolute;
  top: 0;
  left: 0;
  border-radius: 6px 0 10px 0;
  padding: 8px 12px; /* Initial padding */
  color: white;
  font-size: 18px;
  font-weight: 600;
  opacity: 1;
  transform: translate(0, 0);
  transition: all 0.7s ease; /* Smooth animation for position, background, padding, and opacity */
  z-index: 2;
  white-space: nowrap;
}

.afterHover-text {
  position: absolute;
  top: 0; /* Center vertically */
  left: 0; /* Center horizontally */
  border-radius: 6px 0 10px 0;
  color: white;
  font-weight: 600;
  opacity: 0;
  text-align: center; /* Smooth animation for position, background, padding, and opacity */
  z-index: 10;
  white-space: nowrap;
  transition: all .7s ease;
}

@media screen and (max-width: 900px) {
  .hover-text {
    font-size: 12px;
  }
  
}

@media screen and (max-width: 375px) {
  .hover-text {
    font-size: 12px;
  }
}

.hover-bg {
  position: absolute;
  top: 0;
  left: 0;
  border-radius: 6px 0 10px 0;
  background: #0052C0;
  font-weight: 600;
  opacity: 1;
  transition: all .8s ease;
  z-index: 1;
}

.card:hover .hover-text {
  top: 40%;
  left: 40%;
  transform: translate(-50%, -50%);
  transition: all 0.7s ease;
  font-size: 24px; /* Increase font size when centered */
  opacity: 0;
  background: none; /* Remove background */
  padding: 0; /* Remove padding */
  text-wrap: nowrap;
}
.card:hover .hover-bg{
  transition: all 1.5s ease;
  background: #0052C0C4;
  padding: 100vh;
}

.card:hover .afterHover-text{
  top: 50%;
  left: 50%;
  opacity: 1;
  transition: all .85s ease;
  transform: translate(-50%, -50%);
}

/*  
.card::before {
  content: "";
  position: absolute;
  inset: 0;
  background: #0052C0C4;
  opacity: 0;
  transition: opacity 0.5s ease;
  z-index: 1;
  border-radius: 6px;
} */

/* Hover Effect for Overlay and Title */
/* .card:hover::before {
  opacity: 1;
} */


/* .card:hover .hover-text {
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  transition: all 0.5s ease;
  font-size: 24px; 
  opacity: 1;
} */


</style>