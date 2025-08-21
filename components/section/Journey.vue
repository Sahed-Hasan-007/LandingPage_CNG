<script setup lang="ts">
import CtaButton from "~/components/common/CtaButton.vue";
import {useI18n} from "vue-i18n";

const {locale} = useI18n();
const youtube = ref();

const expandedIndexes = ref<number[]>([]);
const toggleDescription = (index: number) => {
  if (expandedIndexes.value.includes(index)) {
    expandedIndexes.value = expandedIndexes.value.filter((i) => i !== index);
  } else {
    expandedIndexes.value.push(index);
  }
};

const isExpanded = (index: number) => expandedIndexes.value.includes(index);

const {loadYouTubeAPI, playVideo} = useYouTubePlayer();

const playVideoHandler = (i: number, url: string) => {
  youtube.value[i].src = `${url}&enablejsapi=1`;
  playVideo(`jriframe` + i, `jroverlay` + i);
};

onMounted(() => {

  loadYouTubeAPI();

});
</script>

<template>
  <div class="container mx-auto max-w-[1300px] lg:max-w-[1005px] xl:max-w-[1160px] min-[1300px]:max-w-[1256px] 2xl:max-w-[1300px] px-4 md:px-0 overflow-x-hidden">
<!--    Text Section-->
    <div>
      <h2 :class="locale === 'bn' ? 'font-HindSiliguri' : 'font-SFUIDisplay'"
          class="text-[36px] md:text-[42px] lg:text-[52px] min-[1300px]:text-[60px]   font-[800] text-center text-black leading-[40px] md:leading-[50px] lg:leading-[80px]">
        {{ $t('journey.heading') }}</h2>
      <p :class="locale === 'bn' ? 'font-HindSiliguri' : 'font-SFUIDisplay'"
         class="text-center text-[16px] md:text-[30px] text-black font-[500] leading-[24px] md:leading-[34px]">
        {{ $t('journey.subHeading') }}
      </p>
      <p :class="locale === 'bn' ? 'font-HindSiliguri' : 'font-SFUIDisplay'"
         class="text-center text-[14px] md:text-[18px] text-black font-[500] leading-[24px] md:leading-[50px]">
        {{ $t('journey.text') }}
      </p>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-3 gap-8 pt-8 md:pt-0">
      <div v-for="(item, i) in $tm('journey.data')" :key="i">
        <div class="relative md:h-[440px] lg:h-[460px] 2xl:h-[460px]">
          <div class="absolute inset-0 bg-[url('/images/journey/bg.svg')] bg-cover bg-center rounded-[6px]  md:h-[440px] lg:h-[460px] 2xl:h-[460px]"></div>
          <div class="relative md:mt-8 bg-[#1565CE]/70 h-full p-4 rounded-[6px]">
            <div>
              <div class="relative">
                <div :id="`jroverlay` + i"
                     class="absolute h-full w-full flex justify-center items-center cursor-pointer">
                  <img class=" h-full w-full  object-fill z-20" :src="item.overlay" alt="overlay"/>
                  <img src="/images/Empowering/play.png" class="absolute z-30 w-48 h-48 object-fill animate-ping" alt="image"/>
                  <img @click="playVideoHandler(i, item.videoUrl)" src="/images/Empowering/play.png"
                       class="absolute z-40 w-48 h-48" alt="image"/>
                </div>
                <iframe :id="`jriframe` + i"
                        class="rounded-md h-[180px] md:h-[220px] lg:h-[210px] w-full"
                        ref="youtube"
                        src=""
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
              </div>
              <div class="md:pt-2">
                <div class="md:pr-8">
                  <p :class="locale === 'bn' ? 'font-HindSiliguri' : 'font-SFUIDisplay'"
                     class="text-[24px] md:text-[26px] lg:text-[28px] 2xl:text-[30px] text-white font-[800]">{{ item.title }}</p>
                  <p :class="locale === 'bn' ? 'font-HindSiliguri' : 'font-SFUIDisplay'"
                     class="text-[14px] md:text-[16px] text-white font-[200] pt-4 md:pt-0">
                    {{ item.description }}
                  </p>
                </div>
                <div class="relative mt-8 mb-4 md:mb-0 md:mt-16 lg:mb-0 lg:mt-8">
                  <a :href="item.link" target="_blank"
                     class="ring-1 ring-white px-6 bg-[#003A9E] hover:bg-[#EE8122] transition-all duration-500 ease-in-out rounded-[5px] py-2 text-white cursor-pointer font-['Inter'] font-[600] text-[16px] md:text-[16px] focus:outline-none">
                    More info
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>