<template>
  <nav
      :class="`navbar fixed ${navbarPos} z-70 min-w-full flex justify-center max-h-[80px] items-center min-h-[80px] transition-all duration-300`"
  >
    <div
        :class="`${
        isMenuOpen ? 'rounded-none' : 'rounded-2xl border border-white'
      } transition-all duration-400 flex justify-between items-center backdrop-blur-xl bg-white/90 dark:bg-slate-900/90 border-2 dark:border-slate-700/50 mx-auto max-w-[1300px] lg:max-w-[1005px] xl:max-w-[1160px] min-[1300px]:max-w-[1256px] 2xl:max-w-[1300px] w-[100%] lg:w-[100%] xl:w-[100%] 2xl:w-[100%] shadow-lg shadow-slate-200/20 dark:shadow-slate-900/20 py-5 px-6`"
    >
      <div class="w-1/6 min-w-44 cursor-pointer">
        <nuxt-link>
          <p class="text-[20px] font-[700] flex items-center">
            <span class="px-3 py-1.5 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-xl mr-2 text-sm font-bold shadow-lg">XYZ</span>
            <span class="text-slate-800 dark:text-slate-200">CNG</span>
          </p>
        </nuxt-link>
      </div>

      <div class="menus flex gap-10 px-5">
        <div :class="locale === 'bn' ? 'font-HindSiliguri' : 'font-SFUIDisplay'"
             class="hidden min-[800px]:flex gap-2 items-center">
          <button v-for="section in sections" :key="section.id" @click="scrollToSection(section.id, section.link)"
                  :class="isActive === section.id ? activeClass : inActive">{{ section.label }}
          </button>
        </div>

        <div class="hidden min-[1100px]:flex items-center space-x-4">
          <LanguageSelector/>
        </div>
      </div>

      <button @click="toggleMenu" class="lg:hidden text-slate-700 dark:text-slate-300 hover:text-blue-600 focus:outline-none transition-colors duration-200">
        <Icon :name="isMenuOpen ? 'gridicons:cross' : 'ph:list-bold'" class="font-bold" size="28"/>
      </button>
    </div>
  </nav>

  <transition name="slide">
    <div v-if="isMenuOpen"
         class="navslide lg:hidden bg-white/95 dark:bg-slate-900/95 backdrop-blur-xl border-r border-slate-200 dark:border-slate-700 rounded-r-2xl w-full sm:w-80 z-40 fixed h-screen top-[70px] left-0 right-0 sm:right-9 flex flex-col py-6 md:pt-14 shadow-2xl">
      <div class="min-[800px]:hidden flex flex-col gap-3 px-6">
        <button v-for="section in sections" :key="section.id" @click="scrollToSection(section.id, section.link)"
                :class="isActive === section.id ? mobileActiveClass : mobileInActive">{{ section.label }}
        </button>
      </div>
      <div class="lg:hidden flex flex-col gap-6 p-6 h-full items-start">
        <LanguageSelector @selectLang="toggleMenu"/>
        <button :class="locale === 'bn' ? 'font-HindSiliguri' : 'font-SFUIDisplay'" @click="scrollToSection('contact')"
                class="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 w-40 text-white px-6 py-3 rounded-xl font-medium transition-all duration-200 whitespace-nowrap shadow-lg hover:shadow-xl transform hover:scale-105">
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

const inActive = "nav-link px-4 py-2.5 font-medium rounded-xl text-slate-700 dark:text-slate-300 hover:text-blue-600 hover:bg-blue-50 dark:hover:bg-blue-900/20 whitespace-nowrap transition-all duration-200 cursor-pointer";
const activeClass = "px-4 py-2.5 bg-gradient-to-r from-blue-600 to-blue-700 font-medium text-white rounded-xl hover:from-blue-700 hover:to-blue-800 whitespace-nowrap shadow-lg transform scale-105 transition-all duration-200";

const mobileInActive = "nav-link px-4 py-3 font-medium rounded-xl text-slate-700 dark:text-slate-300 hover:text-blue-600 hover:bg-blue-50 dark:hover:bg-blue-900/20 whitespace-nowrap transition-all duration-200 cursor-pointer w-full text-left";
const mobileActiveClass = "px-4 py-3 bg-gradient-to-r from-blue-600 to-blue-700 font-medium text-white rounded-xl whitespace-nowrap shadow-lg w-full text-left";

const isMenuOpen = ref(false);
let isScrolling = false;

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
  const scrollY = window.scrollY;
  const threshold = 50; // Adjust this value to control when the margin should disappear
  
  if (scrollY > threshold) {
    // When scrolled past threshold, remove margin and stick to top
    navbarPos.value = 'top-0';
  } else {
    // When at top, maintain the initial margin
    navbarPos.value = 'top-0 md:top-10';
  }
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
});

watch(isHome, (newVal) => {
  if (!newVal) {
    if (observer) {
      observer.disconnect();
    }
    isActive.value = ""; // Reset active class
  }
  else {
    observerApi();
  }
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
  if (observer) {
    observer.disconnect();
  }
});
</script>

<style scoped>
.slide-enter-active, .slide-leave-active {
  transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.slide-enter, .slide-leave-to {
  transform: translateX(100%);
}

.nav-link:hover {
  transform: translateY(-1px);
}

/* Dark mode support */
@media (prefers-color-scheme: dark) {
  .navbar {
    color-scheme: dark;
  }
}
</style>