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
    <div v-if="link">
      <a :href="link" target="_blank">
        <div class="bg-[#004cae] border-[3px] border-[#C7DFFF] hover:border-[#EE8122] hover:shadow-xl hover:shadow-[#004cae] text-center pt-2 pb-3 md:pt-3 md:pb-4 px-10 rounded-full cursor-pointer transition duration-500 delay-200 ease-in-out text-white">
          <p class="text-[16px] md:text-[22px] lg:text-[22px] 2xl:text-[22px] font-['Inter] font-[600]">{{ text }}</p>
        </div>
      </a>
    </div>
    <div v-else>
      <div @click="scrollToSection(scrollId)">
        <div class="bg-[#004cae] border-[3px] border-[#C7DFFF] hover:border-[#EE8122] hover:shadow-xl hover:shadow-[#004cae] text-center pt-2 pb-3 md:pt-3 md:pb-4 px-10 rounded-full cursor-pointer transition duration-500 delay-200 ease-in-out text-white">
          <p class="text-[16px] md:text-[22px] lg:text-[22px] 2xl:text-[22px] font-['Inter] font-[600]">{{ text }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>