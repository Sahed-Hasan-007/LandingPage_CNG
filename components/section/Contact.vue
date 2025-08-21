<script setup lang="ts">
import {ref} from 'vue';
import emailjs from '@emailjs/browser';
import AnimatedCount from "~/components/common/AnimatedCount.vue";
import Swal from 'sweetalert2';
import {useI18n} from "vue-i18n";

const {locale} = useI18n();

const formRef = ref<null>(null);

const sendEmail = () => {
  if (formRef.value) {
    emailjs
        .sendForm('service_tib11tw', 'template_bkavvk2', formRef.value, {
          publicKey: 'GjFU8_AGyYtnNHsiL',
        })
        .then(
            () => {
              formRef.value.reset();
              Swal.fire({
                title: "Your Information has been sent successfully!",
                icon: "success",
                showClass: {
                  popup: `
                animate__animated
                animate__fadeInUp
                animate__faster
                `
                },
                hideClass: {
                  popup: `
                animate__animated
                animate__fadeOutDown
                animate__faster
              `
                }
              });
            },
            (error) => {
              Swal.fire({
                title: "Oops! Something went wrong.",
                text: `Error: ${error.text}`,
                icon: "error",
                showClass: {
                  popup: `
                animate__animated
                animate__fadeInUp
                animate__faster
                `
                },
                hideClass: {
                  popup: `
                animate__animated
                animate__fadeOutDown
                animate__faster
              `
                }
              });
            }
        );
  }
};
</script>

<template>
  <div id="contact"
       class="container mx-auto max-w-[1300px] lg:max-w-[1005px] xl:max-w-[1160px] min-[1300px]:max-w-[1256px] 2xl:max-w-[1300px] mt-16 mb-8 md:mt-20 md:mb-20 lg:px-1 xl:px-0.6 bg-[#EFF4F8] rounded-md">
    <div class="grid md:grid-cols-2 items-center">
      <div class="text-center py-8 md:py-12 md:px-8">
        <div :class="locale === 'bn' ? 'font-HindSiliguri' : 'font-SFUIDisplay'"
             class="text-[44px] md:text-[44px] lg:text-[54px] min-[1300px]:text-[60px]  font-[800]">Get in Touch
        </div>
        <div class="pt-2 md:pt-4">
          <div data-aos="fade-down" data-aos-duration="800">
            <div class="flex justify-center">
              <AnimatedCount :style="`bg-[#F4C534]`"/>
            </div>
          </div>
          <div data-aos="fade-up" data-aos-duration="800" >
            <div class="pt-4">
              <p :class="locale === 'bn' ? 'font-HindSiliguri' : 'font-SFUIDisplay'"
                 class="text-[20px] md:text-[22px] lg:text-[22px] x:text-[24px] 2xl:text-[28px] font-[700]">Enrolled Members</p>
              <p :class="locale === 'bn' ? 'font-HindSiliguri' : 'font-SFUIDisplay'"
                 class="text-[16px] md:text-[20px] font-[300] tracking-[1px]">Trusted by Thousands of Entrepreneurs</p>
            </div>
          </div>
        </div>
        <div :class="locale === 'bn' ? 'font-HindSiliguri' : ''"
             class="text-[18px] md:text-[22px] font-[400] px-4 md:px-0 pt-6 md:pt-8 font-['Inter']">
          {{ $t('contactText') }}
        </div>
      </div>
      <div class="pt-4 pb-8 md:pt-12 md:pb-8">
        <div class="relative mx-4 md:mx-8 py-12 px-6">
          <!-- Background Image with Overlay -->
          <div class="absolute inset-0 bg-[#3067b7] rounded-lg bg-cover bg-center">
            <div class="absolute inset-0 rounded-lg bg-blue-700/80"></div>
          </div>

          <!-- Content -->
          <div class="relative">
            <h2 :class="locale === 'bn' ? 'font-HindSiliguri' : 'font-SFUIDisplay'"
                class="text-2xl md:text-[32px] font-[800] text-center text-white md:mt-6 mb-8 leading-[34px] md:leading-[44px]">
              Take the First Step - <br/> Join OTA Today!
            </h2>
            <form ref="formRef" @submit.prevent="sendEmail" class="space-y-4">
              <!-- Name Input -->
              <input name="user_name" type="text" placeholder="Name" required
                     class="w-full h-12 px-4 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-300"/>
              <!-- Email Input -->
              <input name="user_email" type="email" placeholder="Email" required
                     class="w-full h-12 px-4 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-300"/>
              <!-- Phone Input -->
              <input name="user_phone" type="tel" placeholder="Phone" required
                     class="w-full h-12 px-4 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-300"/>
              <!-- Submit Button -->
              <button :class="locale === 'bn' ? 'font-HindSiliguri' : 'font-SFUIDisplay'" type="submit" class="group relative w-full h-12 bg-orange-500 text-white font-bold
                hover:bg-gray-200 hover:text-orange-500 hover:text-xl
                focus:outline-none active:bg-orange-500 active:text-white
                transition-all duration-300 ease-in-out 
                before:absolute before:inset-0 before:rounded-md 
                before:shadow-[inset_0_4px_12px_rgba(255,120,40,0.6)] 
                before:opacity-0 hover:before:opacity-100">

                <!-- Border Animation -->
                <span
                    class="ease absolute left-0 top-0 h-0 w-0 border-t-4 border-orange-400 transition-all duration-500 group-hover:w-full"></span>
                <span
                    class="ease absolute right-0 top-0 h-0 w-0 border-r-4 border-orange-400 transition-all duration-500 group-hover:h-full"></span>
                <span
                    class="ease absolute bottom-0 right-0 h-0 w-0 border-b-4 border-orange-400 transition-all duration-500 group-hover:w-full"></span>
                <span
                    class="ease absolute bottom-0 left-0 h-0 w-0 border-l-4 border-orange-400 transition-all duration-500 group-hover:h-full"></span>

                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
