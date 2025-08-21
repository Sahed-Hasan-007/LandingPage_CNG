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
</script>

<template>
  <div>
    <a href="https://onlinetechacademy.com.bd/s/new-sm/?fbclid=IwY2xjawIf0n5leHRuA2FlbQIxMAABHYcqQ5Amz0-9HFfcgBrEV4Gh7OF2P3e9iNgPgUBpISZe5fYiH3rlxSH5OQ_aem_jXmkJyXusCuLEEHbU2Csqw" target="_blank">
      <div class="bg-[#063d83] hover:bg-[#466da2] text-center pt-2 pb-3 md:pt-3 md:pb-4 px-10 shadow  rounded-full cursor-pointer transition duration-400 delay-200 ease-in-out text-white">
        <p class="text-[16px] md:text-[22px] lg:text-[22px] 2xl:text-[22px] font-['Inter] font-[600]">Join the Academy</p>
      </div>
    </a>
  </div>
</template>

<style scoped>
.shadow {
  box-shadow: inset 0 6px 2px #466da2;
  border: 2px solid #C7DFFF;
}
</style>