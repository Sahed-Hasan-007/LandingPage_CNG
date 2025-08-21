<script setup lang="ts">
import CtaButton from "~/components/common/CtaButton.vue";
import {useI18n} from "vue-i18n";
import CtaButtonThree from "~/components/common/CtaButtonThree.vue";

const {locale} = useI18n();

const items = [
  {
    name: "Rezaul Karim Reza",
    image: '/images/review/review1.png',
    content: "সফল ব্যবসায়ী হওয়ার জন্য প্রয়োজন সহজ ও সুন্দর গাইড লাইন। আর এই সহজ ও সুন্দর গাইড লাইন এর জন্য প্রয়োজন Online Tech Academy  . ধন্যবাদ মেন্টর Mojtahidul Islam ।",
    rating: 5
  },
  {
    name: "Gk Burhan Uddin",
    image: '/images/review/review2.png',
    content: "Online Tech Academy থেকে আমি অনলাইন বিজনেস শেখার অসাধারণ অভিজ্ঞতা অর্জন করেছি। তাদের কোর্সের কন্টেন্ট গুলো খুবই বিস্তারিত ও প্রাঞ্জলভাবে উপস্থাপন করা হয়েছে। মেন্টর ও সাপোর্ট এডমিনরা প্রতিটি ধাপে দারুণ সহযোগিতা করেছেন।",
    rating: 5
  },
  {
    name: "Sadi Chowdhury",
    image: '/images/review/review3.png',
    content: "ব্যবসা যদি কেউ শিখতে চাই, তাহলে অনলাইন টেক একাডেমী থেকে শিখা দরকার। আমি ১৭ বছরে যে ব্যবসা শিখতে পারি নাই। সেই ব্যবসা Online Tech Academy তে এসে অনেক সহজে শিখতে পেরেছি। অসংখ্য ধন্যবাদ প্রিয় মেন্টর Mojtahidul Islam - মুজতাহিদুল ইসলাম কে। দুয়া করি আল্লাহ্‌ উনাকে নেক হায়াত দান করেন, এবং আমাদের প্রিয় OTA কে আল্লাহ্‌ কবুল করেন। আমীন।",
    rating: 5
  },
  {
    name: "Rezaul Karim Reza",
    image: '/images/review/review1.png',
    content: "সফল ব্যবসায়ী হওয়ার জন্য প্রয়োজন সহজ ও সুন্দর গাইড লাইন। আর এই সহজ ও সুন্দর গাইড লাইন এর জন্য প্রয়োজন Online Tech Academy  . ধন্যবাদ মেন্টর Mojtahidul Islam ।",
    rating: 5
  },
  {
    name: "Gk Burhan Uddin",
    image: '/images/review/review2.png',
    content: "Online Tech Academy থেকে আমি অনলাইন বিজনেস শেখার অসাধারণ অভিজ্ঞতা অর্জন করেছি। তাদের কোর্সের কন্টেন্ট গুলো খুবই বিস্তারিত ও প্রাঞ্জলভাবে উপস্থাপন করা হয়েছে। মেন্টর ও সাপোর্ট এডমিনরা প্রতিটি ধাপে দারুণ সহযোগিতা করেছেন।",
    rating: 5
  },
  {
    name: "Sadi Chowdhury",
    image: '/images/review/review3.png',
    content: "ব্যবসা যদি কেউ শিখতে চাই, তাহলে অনলাইন টেক একাডেমী থেকে শিখা দরকার। আমি ১৭ বছরে যে ব্যবসা শিখতে পারি নাই। সেই ব্যবসা Online Tech Academy তে এসে অনেক সহজে শিখতে পেরেছি। অসংখ্য ধন্যবাদ প্রিয় মেন্টর Mojtahidul Islam - মুজতাহিদুল ইসলাম কে। দুয়া করি আল্লাহ্‌ উনাকে নেক হায়াত দান করেন, এবং আমাদের প্রিয় OTA কে আল্লাহ্‌ কবুল করেন। আমীন।",
    rating: 5
  },
]
</script>

<template>
  <div>
    <div class="relative">
      <!-- Background Image with Overlay -->
      <div class="absolute inset-0 bg-[url('/images/review/bg.svg')] bg-cover bg-center">
        <div class="absolute inset-0 rounded-lg"></div>
      </div>
      <!-- Content -->
      <div class="relative pt-2 pb-4 md:pt-4 md:pb-8">
        <div
            class="container mx-auto max-w-[1300px] lg:max-w-[1005px] xl:max-w-[1160px] min-[1300px]:max-w-[1256px] 2xl:max-w-[1300px] mt-12 mb-8 md:mt-0 md:mb-8 lg:px-1 xl:px-0.5 ">
          <div class="md:mt-8">
            <h2 :class="locale === 'bn' ? 'font-HindSiliguri' : 'font-SFUIDisplay'"
                class="text-[36px] md:text-[42px] lg:text-[52px] min-[1300px]:text-[60px] font-[800] leading-[40px] md:leading-[80px] text-center text-white">
              Real Stories, Real Success
            </h2>
            <div data-aos="fade-up" data-aos-duration="800">
              <p :class="locale === 'bn' ? 'font-HindSiliguri' : 'font-SFUIDisplay'"
                 class="text-center text-[16px] md:text-[22px] 2xl:text-[28px] text-white font-[400] pt-4 md:pt-0 md:px-14 sm:px-6">Join
                thousands of entrepreneurs who’ve
                transformed their lives with OTA’s guidance</p>
            </div>
          </div>
          <div class="mt-4 md:mt-12 lg:mt-12 px-4 md:px-8 lg:px-0">
            <div>
              <slide-show :data-array="items" :sideNav="false" :pagination="true" slide-type="review"
                          :style="`mt-24 mb-16 md:mt-20 md:mb-16`"/>
            </div>
          </div>
          <div class="flex justify-center mt-8 md:mt-12 ">
            <CtaButtonThree text="Join The Academy" sub-text="Explore Our Programs"
                            link="https://onlinetechacademy.com.bd/s/new-sm/?fbclid=IwY2xjawIf0n5leHRuA2FlbQIxMAABHYcqQ5Amz0-9HFfcgBrEV4Gh7OF2P3e9iNgPgUBpISZe5fYiH3rlxSH5OQ_aem_jXmkJyXusCuLEEHbU2Csqw"/>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>