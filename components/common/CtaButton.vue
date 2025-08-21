<script setup>
import {useI18n} from "vue-i18n";

const { locale } = useI18n();

const props = defineProps({
  text: {
    type: String,
    default: 'Join Our Network',
  },
  subText: {
    type: String,
    default: 'Explore Our Programs',
  },
  scrollId: {
    type: String,
    default: 'contact',
  },
  link: {
    type: String,
    default: '',
  },
});
const { activateSection } = useSectionCall(); 
const scrollToSection = (id) => {
  activateSection.value = null; 
  activateSection.value = id;
};

const linkRedirect = (link) => {
  //click to redirect to the link and open in new tab
  window.open('link', '_blank');
}
</script>

<template>
  <div class="group relative text-white cursor-pointer transition duration-300 ease-in-out">
    <!-- Background Image -->
    <div class="absolute inset-0 bg-[url('/images/button/bg.png')] bg-cover bg-center rounded-[4px]">
      <!-- Overlay Color -->
      <div class="absolute inset-0 bg-[#0022E5]/50 rounded-[4px] transition duration-300 ease-in-out group-hover:bg-[#EE8122]/70"></div>
    </div>
    <!-- Text Content -->
    <div v-if="link">
      <a :href="link" target="_blank">
        <div class="relative text-center px-12 py-3 md:py-4 rounded-[4px]">
          <p :class="locale === 'bn' ? 'font-HindSiliguri' : 'font-SFUIDisplay'" class="text-center text-[20px] md:text-[22px] lg:text-[24px] xl:text-[26px] 2xl:text-[30px] italic font-[500]">{{ text }}</p>
          <p :class="locale === 'bn' ? 'font-HindSiliguri' : 'font-SFUIDisplay'" class="text-center text-[12px] md:text-[16px] italic font-[500]">{{ subText }}</p>
        </div>
      </a>
    </div>
    <div v-else>
      <div @click="scrollToSection(scrollId)" class="relative text-center px-12 py-3 md:py-4 rounded-[4px]">
        <p :class="locale === 'bn' ? 'font-HindSiliguri' : 'font-SFUIDisplay'" class="text-center text-[20px] md:text-[22px] lg:text-[24px] xl:text-[26px] 2xl:text-[30px] italic font-[500]">{{ text }}</p>
        <p :class="locale === 'bn' ? 'font-HindSiliguri' : 'font-SFUIDisplay'" class="text-center text-[12px] md:text-[16px] italic font-[500]">{{ subText }}</p>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>