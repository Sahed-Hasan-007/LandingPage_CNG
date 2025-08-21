<template>
  <nav
      :class="`navbar fixed ${navbarPos} z-70 min-w-full flex justify-center max-h-[70px] items-center min-h-[70px] transition-all duration-300`"
  >
    <div
        :class="`${
        isMenuOpen ? 'rounded-none' : 'rounded-md'
      } transition-all duration-400 flex justify-between items-center bg-white mx-auto max-w-[1300px] lg:max-w-[1005px] xl:max-w-[1160px] min-[1300px]:max-w-[1256px] 2xl:max-w-[1300px] w-[100%] lg:w-[100%] xl:w-[100%] 2xl:w-[100%] shadow-md py-3 px-4`"
    >
      <div class="w-1/6 min-w-44 cursor-pointer">
        <nuxt-link>
          <img src="/images/logo/logo.png" alt="Logo"/>
        </nuxt-link>
      </div>

      <div class="menus flex gap-10 px-5">
        <div :class="locale === 'bn' ? 'font-HindSiliguri' : 'font-SFUIDisplay'"
             class="hidden min-[800px]:flex gap-3 items-center">
          <button v-for="section in sections" :key="section.id" @click="scrollToSection(section.id, section.link)"
                  :class="isActive === section.id ? activeClass : inActive">{{ section.label }}
          </button>
        </div>

        <div class="hidden min-[1100px]:flex items-center space-x-4">
          <LanguageSelector/>
          <button :class="locale === 'bn' ? 'font-HindSiliguri' : 'font-SFUIDisplay'"
                  @click="scrollToSection('contact')"
                  class="bg-[#1565ce] text-white px-4 py-2 rounded-full hover:bg-[#1565ce]/90 transition-colors whitespace-nowrap">
            Start Today
          </button>
        </div>
      </div>

      <button @click="toggleMenu" class="lg:hidden text-gray-600 focus:outline-none mt-2">
        <Icon :name="isMenuOpen ? 'gridicons:cross' : 'ph:list-bold'" class="font-bold text-black" size="30"/>
      </button>
    </div>
  </nav>

  <transition name="slide">
    <div v-if="isMenuOpen"
         class="navslide lg:hidden bg-white rounded w-full sm:w-1/3 z-40 fixed h-screen top-[70px] left-0 right-0 sm:right-9 flex flex-col py-5 md:pt-14 items-center">
      <div class="min-[800px]:hidden flex flex-col gap-5 px-5">
        <button v-for="section in sections" :key="section.id" @click="scrollToSection(section.id, section.link)"
                :class="isActive === section.id ? activeClass : inActive">{{ section.label }}
        </button>
      </div>
      <div class="lg:hidden flex flex-col gap-5 p-10 h-full items-start">
        <LanguageSelector @selectLang="toggleMenu"/>
        <button :class="locale === 'bn' ? 'font-HindSiliguri' : 'font-SFUIDisplay'" @click="scrollToSection('contact')"
                class="bg-[#1565ce] w-36 text-white px-4 py-2 rounded-full hover:bg-[#1565ce]/90 transition-colors whitespace-nowrap">
          Start Today
        </button>
      </div>
    </div>
  </transition>
</template>

<script setup>
import {ref} from "vue";
import LanguageSelector from "@/components/LanguageSelector.vue";
import {useI18n} from "vue-i18n";

const {locale} = useI18n();
const navbarPos = ref('top-0 md:top-10')
const isActive = ref("home");
let observer = null; 
const sections = ref([
  {id: "home", label: "Home",link:"/"},
  {id: "service", label: "Service", link:"/"},
  {id: "solution", label: "Solution", link:"/"},
  {id: "team", label: "Team", link:"/"},
  {id: "contact", label: "Contact Us", link:"/"}
]);

const inActive = "nav-link px-4 py-2 font-normal rounded-full text-[#042151] whitespace-nowrap";
const activeClass = "px-4 py-2 bg-[#1565ce] font-normal text-white rounded-full hover:bg-[#1565ce]/90 whitespace-nowrap scale-105 opacity-100";
const isMenuOpen = ref(false);
let isScrolling = false;
let lastScrollY = 0;

const {$gsap} = useNuxtApp();

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};

const {activateSection} = useSectionCall();

watch(activateSection, () => {
  globalScrollToSection(activateSection.value)
}, {deep: true})

const scrollToSection = (id, link) => {
  if(!isHome.value){
    if(link) return navigateTo(link);
  }
  activateSection.value = null;
  activateSection.value = id;
};
const route = useRoute();
const isHome = computed(() => route.name === 'index');



const globalScrollToSection = (id) => {
  isScrolling = true;
  isActive.value = id;
  const section = document.getElementById(id);
  if (section) {
    $gsap.to(window, {
      duration: 2,
      scrollTo: {
        y: section,
        offsetY: 140
      },
      ease: "power2.inOut",
      onComplete: () => {
        isScrolling = false;
      },
    });
    isMenuOpen.value = false;
  }
};
const handleScroll = () => {
  if (window.scrollY - lastScrollY > 10) {
    navbarPos.value = 'md:-top-[90px]';
  } else if (lastScrollY - window.scrollY > 2) {
    navbarPos.value = 'top-0 md:top-10';
  }
  lastScrollY = window.scrollY;
};

const observerApi = ()=>{
  observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (isScrolling) return;
          if (entry.isIntersecting) {
            isActive.value = entry.target.id;
          }
        });
      },
      {rootMargin: "-150px 0px 0px 0px"} // 150px from the top
  );
  sections.value.forEach((section) => {
    const element = document.getElementById(section.id);
    if (element) {
      observer.observe(element);
    }
  });
}
onMounted(() => {
  observerApi();
  window.addEventListener('popstate', (event) => {
    event.preventDefault();
    globalScrollToSection('home');
  });
  window.addEventListener("scroll", handleScroll);
  lastScrollY = window.scrollY;
});

watch(isHome, (newVal) => {
  
  if (!newVal) {
    if (observer) {
    observer.disconnect();
  }
    isActive.value = ""; // Reset active class
  }
  else {
    observerApi() ;
  }
});


</script>

<style scoped>
.slide-enter-active, .slide-leave-active {
  transition: transform 0.2s linear;
}

.slide-enter, .slide-leave-to {
  transform: translateX(100%);
}

.nav-link:hover {
  background-color: #f1f1f1;
}

</style>
