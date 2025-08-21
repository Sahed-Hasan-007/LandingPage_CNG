<template>
    <div class="relative text-white bg-white sm:bg-[url('/images/mentorFocus/bg.png')]">
        <div class="container mx-auto max-w-[1300px] lg:max-w-[1005px] xl:max-w-[1160px] min-[1300px]:max-w-[1256px] 2xl:max-w-[1300px] my-8 md:my-12 xl:my-12 2xl:my-16 px-5 md:px-0 md:py-8 xl:py-8 2xl:py-12">
            <div class="flex flex-col sm:flex-col md:flex-col lg:flex-row gap-8 px-0 py-10 items-center justify-center">
                <div data-aos="fade-up" data-aos-duration="800">
                  <div class="relative rounded-lg overflow-hidden ">
                    <img src="/images/mentorFocus/mentorFocus.png" alt="image">
                    <div class="absolute inset-0 flex flex-col justify-end py- ">
                      <div class="flex gap-6 sm:gap-10 items-center justify-center">
                        <p :class="locale === 'bn' ? 'font-HindSiliguri' : 'font-SFUIDisplay'" class="text-8xl sm:text-9xl font-bold italic text-white">ONE</p>
                        <p :class="locale === 'bn' ? 'font-HindSiliguri' : 'font-SFUIDisplay'" class="text-white pr-8 text-xl sm:text-3xl italic font-semibold">Mentor <br> Focus
                          <br> System</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="flex flex-col gap-y-8 justify-between">
                    <div class="flex flex-col sm:flex-row gap-6 justify-between">
                        <div data-aos="fade-down" data-aos-duration="800">
                          <div class="relative  rounded-lg overflow-hidden">
                            <img src="/images/mentorFocus/silverMembers.png" alt="image">
                            <div class="absolute inset-0 flex flex-col justify-end p-4">
                              <div class="flex flex-col gap-2 p-4 ">
                                <p :class="locale === 'bn' ? 'font-HindSiliguri' : 'font-SFUIDisplay'" class="text-6xl font-bold text-white">{{ silverMembers }}K+</p>
                                <p :class="locale === 'bn' ? 'font-HindSiliguri' : 'font-SFUIDisplay'" class="text-white text-xl ">Silver Members</p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div data-aos="fade-down" data-aos-duration="800">
                          <div class="relative  rounded-lg overflow-hidden">
                            <img src="/images/mentorFocus/successfulBusiness.png" alt="image">
                            <div class="absolute inset-0  top-0 right-0  p-4 ">
                              <div class="flex flex-col gap-2 p-4 text-right">
                                <p :class="locale === 'bn' ? 'font-HindSiliguri' : 'font-SFUIDisplay'" class="text-6xl font-bold text-white">{{ successfulBusinesses }}K+</p>
                                <p :class="locale === 'bn' ? 'font-HindSiliguri' : 'font-SFUIDisplay'" class="text-white text-xl ">Successful <br> Businesses</p>
                              </div>
                            </div>
                          </div>
                        </div>
                    </div>
                    <div data-aos="fade-up" data-aos-duration="800">
                        <div class="relative rounded-lg overflow-hidden">
                            <picture>
                                <source media="(min-width: 640px)" srcset="/images/mentorFocus/successStories-lg.png">
                                <img src="/images/mentorFocus/successStories-sm.png" class="w-full" alt="image">
                            </picture>
                            <div class="absolute inset-0 flex flex-col justify-end p-4">
                                <div class="flex flex-col gap-2 p-4">
                                    <p :class="locale === 'bn' ? 'font-HindSiliguri' : 'font-SFUIDisplay'" class="text-6xl font-bold text-white">{{ successStories }}+</p>
                                    <p :class="locale === 'bn' ? 'font-HindSiliguri' : 'font-SFUIDisplay'" class="text-white text-xl">Success Stories</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import {useI18n} from "vue-i18n";

const silverMembers = ref(0);
const successfulBusinesses = ref(0);
const successStories = ref(0);
const { locale } = useI18n();
const animateCounter = (targetValue: number, refValue: any, duration: number = 2000) => {
  const stepTime = Math.abs(Math.floor(duration / targetValue));
  let current = 0;

  const interval = setInterval(() => {
    current++;
    refValue.value = current;
    if (current >= targetValue) {
      clearInterval(interval);
    }
  }, stepTime);
};

onMounted(() => {
  animateCounter(15, silverMembers, 2000);
  animateCounter(1, successfulBusinesses, 2000);
  animateCounter(200, successStories, 2000);
});
</script>

<style lang="scss" scoped></style>