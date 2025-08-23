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
    class="relative w-full h-[700px] md:h-[950px] lg:h-[900px] xl:h-100vh 2xl:h-100vh overflow-hidden"
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
        class="mx-4 md:mx-auto max-w-[1300px] lg:max-w-[1005px] xl:max-w-[1160px] min-[1300px]:max-w-[1256px] 2xl:max-w-[1300px] w-[calc(100%-16px)] sm:w-[calc(100%-32px)] lg:w-[100%] xl:w-[100%] 2xl:w-[100%] py-3 sm:py-4 md:py-5"
      >
        <div class="hero-text-container text-[80px] font-bold flex items-center justify-start">
          <p class="mr-6">FOR A SAFE</p>
          <div class="dropping-texts text-green-500">
            <div>WORLD</div>
            <div>ENVIRONMENT</div>
            <div>ALTERNATIVE</div>
            <div>EVERYONE!</div>
          </div>
        </div>
        <div class="mt-10">
          <p class="text-[36px] font-[500]">{{ $t('hero.title1') }}</p>
          <p class="text-[20px] font-[500]">{{ $t('hero.title2') }}</p>
        </div>
        <div class="flex items-center justify-center mt-20">
          <button class="btn liquid shadow-md shadow-white/70">
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
  box-shadow: 0px 60px 25px -20px rgba(0, 0, 0, 0.5);
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

/* Responsive adjustments */
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
    5%,
    20% {
      font-size: 32px;
    }
  }

  @keyframes roll2 {
    5%,
    30% {
      font-size: 32px;
    }
  }
}

@media (max-width: 480px) {
  .hero-text-container {
    font-size: 28px;
    flex-direction: column;
    align-items: center;
  }

  .hero-text-container p {
    font-size: 28px;
    margin-bottom: 8px;
  }

  .dropping-texts {
    width: 140px;
    height: 36px;
  }

  .dropping-texts > div {
    font-size: 28px;
  }

  @keyframes roll {
    5%,
    20% {
      font-size: 28px;
    }
  }

  @keyframes roll2 {
    5%,
    30% {
      font-size: 28px;
    }
  }
}

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


</style>
