<script setup>
import { useI18n } from "vue-i18n";
const { activateSection } = useSectionCall();
const scrollToSection = (id) => {
  activateSection.value = null;
  activateSection.value = id;
};

const { locale } = useI18n();
</script>

<template>
  <div
    id="home"
    class="relative w-full h-[600px] md:h-[950px] lg:h-[900px] xl:h-100vh 2xl:h-100vh overflow-hidden"
  >
    <!-- Background Video -->
    <video
      autoplay
      muted
      loop
      class="absolute top-0 left-0 w-full h-full object-cover"
    >
      <source src="/video/fuelTank2.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>

    <!-- Text Overlay -->
    <div
      class="absolute inset-0 flex flex-col items-start justify-center bg-[#0B316E]/50 text-white"
    >
      <div
        class="container relative mx-auto max-w-[1300px] lg:max-w-[1005px] xl:max-w-[1160px] min-[1300px]:max-w-[1256px] 2xl:max-w-[1300px] mt-10 mb-8 lg:mt-24 lg:mb-24 px-4 md:px-8 lg:px-0"
      >
        <div class="hero-text-container text-[80px] font-bold flex items-center justify-start">
          <p class="mr-6">{{ $t('hero.heading') }}</p>
          <div class="dropping-texts text-green-500">
            <div>{{ $t('hero.heading1') }}</div>
            <div>{{ $t('hero.heading2') }}</div>
            <div>{{ $t('hero.heading3') }}</div>
            <div>{{ $t('hero.heading4') }}</div>
          </div>
        </div>
        <div class="mt-10 space-y-4">
          <p class="text-[24px] md:text-[44px] font-[500] text-center md:text-start leading-tight">{{ $t('hero.title1') }}</p>
          <p class="text-[14px] md:text-[26px] font-[500] text-center md:text-start leading-tight">{{ $t('hero.title2') }}</p>
        </div>
        <div class="flex items-center justify-center mt-20">
          <button
              class="btn liquid shadow-md shadow-white/70"
              @click="scrollToSection('service')"
          >
            <span>{{ $t('hero.button') }}</span>
          </button>
        </div>

      </div>
    </div>
  </div>
</template>

<style scoped>
@import url("https://fonts.googleapis.com/css?family=Roboto:100,300,400");

.hero-text-container {
  font-family: "Roboto", sans-serif;
  font-weight: 700;
  line-height: 1;
  align-items: center;
}

.dropping-texts {
  display: inline-block;
  width: 400px;
  text-align: left;
  height: 80px;
  position: relative;
  vertical-align: top;
  line-height: 1;
}

.dropping-texts > div {
  font-size: 0px;
  opacity: 0;
  margin-left: -30px;
  position: absolute;
  font-weight: 700;
  font-size: 80px;
  box-shadow: 0px 60px 25px -20px rgba(0, 0, 0, .5);
  white-space: nowrap;
  line-height: 1;
  top: 0;
}

.dropping-texts > div:nth-child(1) {
  animation: roll 5s linear infinite 0s;
}
.dropping-texts > div:nth-child(2) {
  animation: roll 5s linear infinite 1s;
}
.dropping-texts > div:nth-child(3) {
  animation: roll 5s linear infinite 2s;
}
.dropping-texts > div:nth-child(4) {
  animation: roll2 5s linear infinite 3s;
}

/* Desktop Animations */
@keyframes roll {
  0% {
    font-size: 0px;
    opacity: 0;
    margin-left: -30px;
    margin-top: 0px;
    transform: rotate(-25deg);
  }
  3% {
    opacity: 1;
    transform: rotate(0deg);
  }
  5% {
    font-size: 80px;
    opacity: 1;
    margin-left: 0px;
    margin-top: 0px;
  }
  20% {
    font-size: 80px;
    opacity: 1;
    margin-left: 0px;
    margin-top: 0px;
    transform: rotate(0deg);
  }
  27% {
    font-size: 0px;
    opacity: 0.5;
    margin-left: 20px;
    margin-top: 100px;
  }
  100% {
    font-size: 0px;
    opacity: 0;
    margin-left: -30px;
    margin-top: 0px;
    transform: rotate(15deg);
  }
}

@keyframes roll2 {
  0% {
    font-size: 0px;
    opacity: 0;
    margin-left: -30px;
    margin-top: 0px;
    transform: rotate(-25deg);
  }
  3% {
    opacity: 1;
    transform: rotate(0deg);
  }
  5% {
    font-size: 80px;
    opacity: 1;
    margin-left: 0px;
    margin-top: 0px;
  }
  30% {
    font-size: 80px;
    opacity: 1;
    margin-left: 0px;
    margin-top: 0px;
    transform: rotate(0deg);
  }
  37% {
    font-size: 1500px;
    opacity: 0;
    margin-left: -1000px;
    margin-top: -800px;
  }
  100% {
    font-size: 0px;
    opacity: 0;
    margin-left: -30px;
    margin-top: 0px;
    transform: rotate(15deg);
  }
}

/* ✅ Mobile Fix: Override with its own animations */
@media (max-width: 768px) {
  .hero-text-container {
    font-size: 32px;
  }

  .hero-text-container p {
    font-size: 32px;
  }

  .dropping-texts {
    width: 160px;
    height: 40px;
  }

  .dropping-texts > div {
    font-size: 32px;
  }

  @keyframes roll {
    0% {
      font-size: 0px;
      opacity: 0;
      margin-left: -20px;
      margin-top: 0px;
      transform: rotate(-25deg);
    }
    3% {
      opacity: 1;
      transform: rotate(0deg);
    }
    5% {
      font-size: 32px;
      opacity: 1;
      margin-left: 0px;
      margin-top: 0px;
    }
    20% {
      font-size: 32px;
      opacity: 1;
      margin-left: 0px;
      margin-top: 0px;
      transform: rotate(0deg);
    }
    27% {
      font-size: 0px;
      opacity: 0.5;
      margin-left: 10px;
      margin-top: 50px;
    }
    100% {
      font-size: 0px;
      opacity: 0;
      margin-left: -20px;
      margin-top: 0px;
      transform: rotate(15deg);
    }
  }

  @keyframes roll2 {
    0% {
      font-size: 0px;
      opacity: 0;
      margin-left: -20px;
      margin-top: 0px;
      transform: rotate(-25deg);
    }
    3% {
      opacity: 1;
      transform: rotate(0deg);
    }
    5% {
      font-size: 32px;
      opacity: 1;
      margin-left: 0px;
      margin-top: 0px;
    }
    30% {
      font-size: 32px;
      opacity: 1;
      margin-left: 0px;
      margin-top: 0px;
      transform: rotate(0deg);
    }
    37% {
      font-size: 600px; /* smaller explosion for mobile */
      opacity: 0;
      margin-left: -400px;
      margin-top: -300px;
    }
    100% {
      font-size: 0px;
      opacity: 0;
      margin-left: -20px;
      margin-top: 0px;
      transform: rotate(15deg);
    }
  }
}

@media (max-width: 480px) {
  .hero-text-container {
    font-size: 20px;
    flex-direction: column;
    align-items: center;
  }

  .hero-text-container p {
    font-size: 20px;
    margin-bottom: 8px;
  }

  .dropping-texts {
    width: px;
    height: 30px;
  }

  .dropping-texts > div {
    font-size: 20px;
  }
}

/* Button styling */
.btn {
  position: relative;
  padding: 1rem 2rem;
  font-size: 18px;
  font-weight: 600;
  color: white;
  background: none;
  border: 2px solid #ffffff;
  border-radius: 8px;
  cursor: pointer;
  overflow: hidden;
  transition: all 0.3s ease;
}

.liquid {
  background: linear-gradient(#ffffff 0 0) no-repeat calc(200% - var(--p, 0%))
  100% / 200% var(--p, 0.2em);
  transition: 0.3s var(--t, 0s),
  background-position 0.3s calc(0.3s - var(--t, 0s));
}

.liquid:hover {
  --p: 100%;
  --t: 0.3s;
  color: #000000;
  font-size: 18px;
  font-weight: 600;
}

/* ✅ Mobile size adjustments */
@media (max-width: 480px) {
  .btn {
    padding: 0.6rem 1.2rem; /* smaller button */
    font-size: 14px;        /* smaller text */
    border-radius: 6px;     /* slightly smaller corners */
  }

  .liquid:hover {
    font-size: 14px;        /* match mobile text size */
  }
}

</style>

