<script setup lang="ts">
import Swal from 'sweetalert2';
import {useI18n} from "vue-i18n";

const { locale } = useI18n();
const company = [
  { name: "About Us", link: "", id:"empower" },
  { name: "Career", link: "", id:"" },
  { name: "Contact Us", link: "", id:"contact" },
  { name: "Privacy Policy", link: "/privacy-policy", id:"" },
  { name: "Terms & Conditions", link: "/terms-and-condition", id:"" },
]
const social = [
  { name: "Facebook", link: "https://www.facebook.com/onlinetechacademy" },
  { name: "LinkedIn", link: "https://www.linkedin.com/company/online-tech-academy" },
  { name: "Facebook Group", link: "https://www.facebook.com/groups/digitalbizclub" },
  // { name: "Twitter", link: "/" },
  { name: "Youtube", link: "https://www.youtube.com/@mojtahidulislam9095" },
]
const currentYear = new Date().getFullYear();

const formData = ref({ email: '' });
const handleNewsletter = () => {
  formData.value.email = '';
  Swal.fire({
    icon: 'success',
    title: 'Email sent successfully!',
    text: 'Thank you for subscribing.',
    confirmButtonText: 'Okay',
  });
}

const {activateSection} = useSectionCall();

const scrollToSection = (id) => {
  activateSection.value = null;
  activateSection.value = id;
};

</script>

<template>
  <div>
    <div class="container mx-auto max-w-[1300px] lg:max-w-[950px] xl:max-w-[1160px] min-[1300px]:max-w-[1256px] 2xl:max-w-[1300px] mt-16 mb-8 md:mt-20 md:mb-20  px-4 md:px-8 lg:px-1 xl:px-0">
      <div class="grid md:grid-cols-2 gap-8 md:gap-12 lg:gap-20">
        <div>
        
          <div :class="locale === 'bn' ? 'font-HindSiliguri' : 'font-SFUIDisplay'" class="text-[16px] md:text-[18px] pt-4 font-[400] lg:pr-20">{{ $t('footerText') }}</div>
          <div class="block md:hidden pt-4">
            <h1 :class="locale === 'bn' ? 'font-HindSiliguri' : 'font-SFUIDisplay'" class="text-[#042D7C] font-[700] text-[20px] md:text-[22px] md:pt-4">Address</h1>
            <div :class="locale === 'bn' ? 'font-HindSiliguri' : 'font-SFUIDisplay'" class="text-[16px] md:text-[18px] pt-4 md:pt-2 font-[400]">{{ $t('footerAddress') }}</div>
          </div>
        </div>
        <div class="grid grid-cols-2">
          <div>
            <h1 :class="locale === 'bn' ? 'font-HindSiliguri' : 'font-SFUIDisplay'" class="text-[#042D7C] font-[700] text-[20px] md:text-[22px] pt-4 pb-6 md:pb-8">Company</h1>
            <div v-for="(item, i) in company" class="pb-2">
              <div v-if="item.id">
                <nuxt-link  @click="scrollToSection(item.id)" :id="item.id" :class="locale === 'bn' ? 'font-HindSiliguri' : 'font-SFUIDisplay'"
                           class="text-[16px] md:text-[18px]  font-[500] hover:text-[#EE8122] cursor-pointer transition delay-150 duration-300 ease-in-out">{{
                    item.name }}</nuxt-link>
              </div>
              <div v-else>
                <nuxt-link :to="item.link"  :class="locale === 'bn' ? 'font-HindSiliguri' : 'font-SFUIDisplay'"
                           class="text-[16px] md:text-[18px]  font-[500] hover:text-[#EE8122] cursor-pointer transition delay-150 duration-300 ease-in-out">{{
                    item.name }}</nuxt-link>
              </div>
            </div>
          </div>
          <div>
            <h1 :class="locale === 'bn' ? 'font-HindSiliguri' : 'font-SFUIDisplay'" class="text-[#042D7C] font-[700] text-[20px] md:text-[22px] pt-4 pb-6 md:pb-8">Social Links</h1>
            <div v-for="(item, i) in social" class="pb-2">
              <nuxt-link :to="item.link" target="_blank" :class="locale === 'bn' ? 'font-HindSiliguri' : 'font-SFUIDisplay'"
                class="text-[16px] md:text-[18px]  font-[500] hover:text-[#EE8122] cursor-pointer transition delay-150 duration-300 ease-in-out">{{
                  item.name }}</nuxt-link>
            </div>
          </div>
        </div>
      </div>
      <div class="grid md:grid-cols-2 gap-12 lg:gap-20">
        <div class="hidden md:block">
          <h1 :class="locale === 'bn' ? 'font-HindSiliguri' : 'font-SFUIDisplay'" class="text-[#042D7C] font-[700] md:text-[22px] md:pt-4">Address</h1>
          <a target="_blank" href="https://www.google.com/maps/place/Online+Tech+Academy/@23.8169125,90.4187499,933m/data=!3m1!1e3!4m10!1m2!2m1!1sSAR+Bhaban,+Pragati+Sarani+Main+Road,+Dhaka+1229,+Dhaka,+Bangladesh!3m6!1s0x3755c7e53743c065:0xb447f66ea66e7d14!8m2!3d23.8168826!4d90.4211728!15sCkNTQVIgQmhhYmFuLCBQcmFnYXRpIFNhcmFuaSBNYWluIFJvYWQsIERoYWthIDEyMjksIERoYWthLCBCYW5nbGFkZXNoWkEiP3NhciBiaGFiYW4gcHJhZ2F0aSBzYXJhbmkgbWFpbiByb2FkIGRoYWthIDEyMjkgZGhha2EgYmFuZ2xhZGVzaJIBD2xlYXJuaW5nX2NlbnRlcuABAA!16s%2Fg%2F11h2g449l5!5m1!1e1?entry=ttu&g_ep=EgoyMDI1MDIyNC4wIKXMDSoASAFQAw%3D%3D">
            <div :class="locale === 'bn' ? 'font-HindSiliguri' : 'font-SFUIDisplay'" class="md:text-[18px] md:pt-2 font-[400]">{{ $t('footerAddressPartOne') }} <br> {{ $t('footerAddressPartTwo') }}</div>
          </a>
        </div>
        <div>
          <h1 :class="locale === 'bn' ? 'font-HindSiliguri' : 'font-SFUIDisplay'" class="text-[#042D7C] font-[700] text-[20px] md:text-[22px] pt-6 md:pt-4">Newsletter</h1>
          <form @submit.prevent="handleNewsletter" class="flex items-center gap-x-4 pt-4 md:pt-4">
            <div :class="locale === 'bn' ? 'font-HindSiliguri' : 'font-SFUIDisplay'" class="relative w-full md:w-[80%]">
              <!-- Email Icon -->
              <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <icon size="24" name="ph:envelope-simple-open-duotone" class="text-gray-500"></icon>
              </div>

              <!-- Input Field -->
              <input type="emsil" class="w-full bg-[#E2ECFF] h-10 rounded-md pl-10 pr-2 font-[400]"
                placeholder="Enter your email" v-model="formData.email" required />
            </div>

            <!-- Action Button -->
            <button type="submit" class="group relative w-[30%] md:w-[20%] h-10 bg-orange-500 text-white font-bold 
                hover:bg-gray-200 hover:text-orange-500 hover:text-lg
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

              Action
            </button>

          </form>
        </div>
      </div>
    </div>
    <div class="px-4 pt-12 pb-8 bg-[#042D7C] ">
    <div class="container mx-auto max-w-[1300px] lg:max-w-[950px] xl:max-w-[1160px] min-[1300px]:max-w-[1256px] 2xl:max-w-[1300px]   px-4 md:px-8 lg:px-1 xl:px-0">
      <div class="flex flex-col justify-center items-center gap-y-4 ">
        <img src="/images/logo/ssllogo.svg" alt="logo" />
        <p :class="locale === 'bn' ? 'font-HindSiliguri' : 'font-SFUIDisplay'" class="text-[14px] text-center md:text-[18px] font-[500] text-white">© {{ currentYear }} All Rights Reserved
          by <strong>Online Tech Academy</strong>.</p>
      </div>
    </div>
    </div>
  </div>
</template>

<style scoped></style>