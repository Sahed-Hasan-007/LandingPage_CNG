<script setup>
import {useI18n} from "vue-i18n";
import {ref, watch} from "vue";

const {t, tm, locale} = useI18n();

// Initialize faqs with the first item open
const faqs = ref(
    tm("faq.data").map((faq, index) => ({
      ...faq,
      isOpen: index === 0, // Open the first item by default
    }))
);

const toggleFAQ = (id) => {
  faqs.value = faqs.value.map((faq) => {
    if (faq.id === id) {
      faq.isOpen = !faq.isOpen;
    } else {
      faq.isOpen = false;
    }
    return faq;
  });
};

watch(locale, () => {
  faqs.value = tm("faq.data").map((faq, index) => ({
    ...faq,
    isOpen: index === 0, // Reinitialize with the first item open
  }));
});
</script>

<template>
  <div class="container mx-auto max-w-[1300px] lg:max-w-[1005px] xl:max-w-[1160px] min-[1300px]:max-w-[1256px] 2xl:max-w-[1300px] mt-16 mb-8 md:mt-20 md:mb-20  px-4 md:px-8 lg:px-1 xl:px-0.5">
<!--    Text Section-->
    <div>
      <h2 class="text-[40px] md:text-[44px] lg:text-[54px]  min-[1300px]:text-[60px] font-[800] text-center text-black">
        Got Questions?
      </h2>
      <div>
        <p class="text-center text-[22px] md:text-[24px] lg:text-[28px]  text-black font-[500]">We’ve Got Answers!</p>
      </div>
    </div>
<!--    Main Section-->
    <div class="py-4 md:py-8 px-0 md:px-0">
      <div v-for="faq in faqs" :key="faq.id" class="py-2">
        <!-- Question -->
        <div
            @click="toggleFAQ(faq.id)"
            class="flex justify-between items-center cursor-pointer w-full py-4 px-4 md:px-6 text-left border border-[#002564] rounded-[12px] md:rounded-[8px]"
            :class="faq.isOpen
            ? `'absolute inset-0 bg-[#003081] bg-cover bg-center'`
            : 'bg-white'"
        >
          <div class="flex items-center gap-x-6 md:gap-x-12" :class="faq.isOpen ? 'text-white' : 'text-black'">
            <div class="lg:px-4">
              <span :class="locale === 'bn' ? 'font-HindSiliguri' : ''"
                    class="text-[20px] md:text-[24px] min-[1300px]:text-[30px] italic font-['Inter'] font-[700]">0{{
                  faq.id
                }}</span>
            </div>
            <div :class="faq.isOpen ? 'lg:py-2' : ''">
              <p :class="locale === 'bn' ? 'font-HindSiliguri' : 'font-SFUIDisplay'"
                 class="text-[18px] md:text-[22px] min-[1300px]:text-[22px]  font-[700]">{{ faq.question }}</p>
              <p :class="faq.isOpen ? 'pt-3 md:pt-2 lg:pt-3 lg:pr-[260px]' : ''" v-show="faq.isOpen"
                 class="text-[16px] md:text-[18px] font-[400] font-['Inter']">
                <span :class="locale === 'bn' ? 'font-HindSiliguri' : 'font-SFUIDisplay'">{{ faq.answer }}</span>
              </p>
            </div>
          </div>
          <div :class="faq.isOpen ? 'bg-[#EE8122] rounded-full text-white px-2 py-1' : ''">
            <icon
                :name="faq.isOpen ? 'material-symbols:keyboard-arrow-down' : 'material-symbols:keyboard-arrow-down'"
                :class="faq.isOpen ? 'rotate-180' : ''"
                class="text-[22px] md:text-[28px] transform transition-transform"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.transition-all {
  transition: all 0.3s ease-in-out;
}
</style>