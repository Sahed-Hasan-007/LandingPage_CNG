<script setup>
import { ref, onMounted, nextTick } from 'vue'
import { useI18n } from 'vue-i18n'

const { locale } = useI18n()

const isVisible = ref(false)
const activeService = ref(0)
const sectionRef = ref(null)

// Animation and interaction logic
onMounted(() => {
  const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            isVisible.value = true
          }
        })
      },
      { threshold: 0.1 }
  )

  if (sectionRef.value) {
    observer.observe(sectionRef.value)
  }
})

</script>

<template>
  <div id="speech" ref="sectionRef" class="bg-black">
    <div class="container relative mx-auto max-w-[1300px] lg:max-w-[1005px] xl:max-w-[1160px] min-[1300px]:max-w-[1256px] 2xl:max-w-[1300px] mt-4 pb-16 lg:mt-8 lg:pb-24 px-4 md:px-8 lg:px-0">

      <!-- Section Title on Border -->
      <div class="absolute -top-7 md:-top-8 left-1/2 -translate-x-1/2 border-2 border-green-500 bg-white px-6 py-3 text-[18px] md:text-[24px] shadow-lg shadow-white/50 rounded-lg font-bold z-10">
        {{ $t('nav.ourSpeech') }}
      </div>

      <!-- Main Content -->
      <div class="pt-12 md:pt-16">
        <!-- Header Section -->
        <div class="text-center mb-12 lg:mb-16">
          <div class="inline-flex items-center gap-3 mb-6">
            <!-- Quote Icon -->
            <div class="w-12 h-12 bg-gradient-to-r from-green-500 to-blue-500 rounded-full flex items-center justify-center">
              <svg class="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z"/>
              </svg>
            </div>
          </div>

          <h2 class="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight">
            {{ $t('speech.title') }}
          </h2>

          <div class="w-24 h-1 bg-gradient-to-r from-green-500 to-blue-500 mx-auto rounded-full"></div>
        </div>

        <!-- Speech Content -->
        <div class="">
          <!-- MD Profile Card -->
          <div class="bg-gradient-to-r from-white/95 to-gray-50/95 backdrop-blur-sm rounded-2xl shadow-2xl border border-white/20 p-8 lg:p-12 mb-8 hover:shadow-3xl transition-all duration-500">

            <!-- Profile Header -->
            <div class="flex flex-col lg:flex-row items-center lg:items-start gap-8 mb-10">
              <!-- Profile Image Placeholder -->
              <div class="flex-shrink-0">
                <div class="w-32 h-32 lg:w-40 lg:h-40 bg-gradient-to-br from-green-500 to-blue-600 rounded-full flex items-center justify-center shadow-xl">
                  <div class="w-28 h-28 lg:w-36 lg:h-36 bg-white rounded-full flex items-center justify-center">
                    <svg class="w-16 h-16 lg:w-20 lg:h-20 text-gray-600" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                    </svg>
                  </div>
                </div>
              </div>

              <!-- Profile Info -->
              <div class="text-center lg:text-left flex-1">
                <h3 class="text-2xl lg:text-3xl font-bold text-gray-800 mb-3">
                  Managing Director
                </h3>
                <p class="text-lg text-gray-600 mb-4 font-medium">
                  Energy Hub Bangladesh
                </p>
                <div class="flex flex-wrap gap-3 justify-center lg:justify-start">
                  <span class="px-4 py-2 bg-green-100 text-green-800 rounded-full text-sm font-medium">Leadership</span>
                  <span class="px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">Energy Expert</span>
                  <span class="px-4 py-2 bg-purple-100 text-purple-800 rounded-full text-sm font-medium">Visionary</span>
                </div>
              </div>
            </div>

            <!-- Speech Content -->
            <div class="relative">
              <!-- Opening Quote Mark -->
              <div class="absolute -top-4 -left-4 w-12 h-12 bg-gradient-to-br from-green-500 to-blue-500 rounded-full flex items-center justify-center opacity-20">
                <svg class="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z"/>
                </svg>
              </div>

              <div class="space-y-6">
                <div class="transform transition-all duration-700 delay-75">
                  <p class="text-xl lg:text-2xl font-semibold text-green-800 mb-8">
                    {{ $t('speech.content1') }}
                  </p>
                  <p class="text-gray-700 leading-relaxed text-lg lg:text-xl mb-8">
                    {{ $t('speech.content2') }}
                  </p>
                  <p class="text-gray-700 leading-relaxed text-lg lg:text-xl mb-8">
                    {{ $t('speech.content3') }}
                  </p>
                  <p class="text-gray-700 leading-relaxed text-lg lg:text-xl mb-8">
                    {{ $t('speech.content4') }}
                  </p>
                  <p class="text-gray-700 leading-relaxed text-lg lg:text-xl mb-8">
                    {{ $t('speech.content5') }}
                  </p>
                  <p class="text-xl lg:text-2xl font-bold text-gray-800 text-center mt-8">
                    {{ $t('speech.content6') }}
                  </p>
                </div>
              </div>

              <!-- Closing Quote Mark -->
              <div class="absolute -bottom-4 -right-4 w-12 h-12 bg-gradient-to-br from-green-500 to-blue-500 rounded-full flex items-center justify-center opacity-20 rotate-180">
                <svg class="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z"/>
                </svg>
              </div>
            </div>
          </div>

          <!-- Key Highlights Section -->
          <div class="grid md:grid-cols-3 gap-6 mt-12">
            <div class="bg-gradient-to-br from-green-500/10 to-green-600/10 backdrop-blur-sm rounded-xl border border-green-500/20 p-6 text-center hover:shadow-lg hover:shadow-green-500/20 transition-all duration-300">
              <div class="w-16 h-16 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg class="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
              </div>
              <h4 class="text-lg font-bold text-white mb-2">{{ $t('speech.sec1-heading') }}</h4>
              <p class="text-gray-300 text-sm">{{ $t('speech.sec1-title') }}</p>
            </div>

            <div class="bg-gradient-to-br from-blue-500/10 to-blue-600/10 backdrop-blur-sm rounded-xl border border-blue-500/20 p-6 text-center hover:shadow-lg hover:shadow-blue-500/20 transition-all duration-300">
              <div class="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg class="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                </svg>
              </div>
              <h4 class="text-lg font-bold text-white mb-2">{{ $t('speech.sec2-heading') }}</h4>
              <p class="text-gray-300 text-sm">{{ $t('speech.sec2-title') }}</p>
            </div>

            <div class="bg-gradient-to-br from-purple-500/10 to-purple-600/10 backdrop-blur-sm rounded-xl border border-purple-500/20 p-6 text-center hover:shadow-lg hover:shadow-purple-500/20 transition-all duration-300">
              <div class="w-16 h-16 bg-gradient-to-r from-purple-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg class="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2l.09.02c.8.11 1.49.65 1.91 1.32L16.5 8H20c1.1 0 2 .9 2 2v10c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V10c0-1.1.9-2 2-2h3.5L10 3.34c.42-.67 1.11-1.21 1.91-1.32L12 2m0 2.5L9.5 8h5L12 4.5z"/>
                </svg>
              </div>
              <h4 class="text-lg font-bold text-white mb-2">{{ $t('speech.sec3-heading') }}</h4>
              <p class="text-gray-300 text-sm">{{ $t('speech.sec3-title') }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* Custom gradient animations */
@keyframes float {
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-10px); }
}

.hover\:shadow-3xl:hover {
  box-shadow: 0 35px 60px -12px rgba(0, 0, 0, 0.25);
}

/* Smooth scrolling animations */
.container > div {
  animation: fadeInUp 0.8s ease-out;
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Interactive hover effects */
.bg-gradient-to-r:hover {
  transform: translateY(-2px);
}

/* Typography enhancements */
h2, h3, h4 {
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

/* Custom scrollbar for long content */
::-webkit-scrollbar {
  width: 8px;
}

::-webkit-scrollbar-track {
  background: rgba(255, 255, 255, 0.1);
  border-radius: 4px;
}

::-webkit-scrollbar-thumb {
  background: linear-gradient(to bottom, #10b981, #3b82f6);
  border-radius: 4px;
}

::-webkit-scrollbar-thumb:hover {
  background: linear-gradient(to bottom, #059669, #2563eb);
}
</style>