<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useI18n } from 'vue-i18n'

const { t, locale } = useI18n()

const isVisible = ref(false)
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

const contactInfo = {
  address: "Sahid Dhali Super Market, Square Masterbari, Bhaluka, Mymensingh, Bangladesh",
  phone: "01765970502",
  email: "energyhubbdltd@gmail.com",
  website: "ehbbd.com"
}

const services = [
  { icon: 'gas-pump', key: 'lpg' },
  { icon: 'fuel', key: 'cng' },
  { icon: 'truck', key: 'diesel' },
  { icon: 'wrench', key: 'prs' }
]
</script>

<template>
  <div id="contact" ref="sectionRef" class="container relative mx-auto max-w-[1300px] lg:max-w-[1005px] xl:max-w-[1160px] min-[1300px]:max-w-[1256px] 2xl:max-w-[1300px] my-8 md:my-32 2xl:my-32 px-4 md:px-8 lg:px-0">
    <div
        class="absolute -top-[58px] md:-top-[160px] left-1/2 -translate-x-1/2 border-2 border-green-500 bg-white px-6 py-3 text-[18px] md:text-[24px] shadow-lg shadow-black/40 rounded-lg font-bold z-10 hover:shadow-xl hover:shadow-green-500/30 transition-all duration-300">
      {{ $t('nav.contactUs') }}
    </div>

    <!-- Main Content -->
    <div class="pt-8 md:pt-16">
      <!-- Header Section -->
      <div class="text-center mb-12 lg:mb-16">
        <h2 class="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-6 leading-tight">
          {{ $t('contact.title') }}
        </h2>
        <p class="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
          {{ $t('contact.subtitle') }}
        </p>
        <div class="w-24 h-1 bg-gradient-to-r from-green-500 to-blue-500 mx-auto mt-6 rounded-full"></div>
      </div>

      <!-- Main Contact Section -->
      <div class="grid lg:grid-cols-1 gap-12 lg:gap-16 items-start justify-center">
        <!-- Contact Information - Expanded to full width -->
        <div class="space-y-8 max-w-4xl mx-auto">
          <!-- Company Info Card -->
          <div class="bg-gradient-to-br from-gray-50 to-white rounded-2xl shadow-xl border border-gray-200 p-8 hover:shadow-2xl transition-all duration-300">
            <div class="flex items-center gap-4 mb-6">
              <div class="w-16 h-16 bg-gradient-to-r from-green-500 to-blue-600 rounded-full flex items-center justify-center">
                <svg class="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
              </div>
              <div>
                <h3 class="text-2xl font-bold text-gray-800">{{ $t('contact.company.name') }}</h3>
                <p class="text-green-600 font-semibold">{{ $t('contact.company.tagline') }}</p>
              </div>
            </div>

            <div class="space-y-4">
              <div class="bg-blue-50 rounded-lg p-4">
                <h4 class="font-semibold text-gray-800 mb-2">{{ $t('contact.businessTypeLabel') }}</h4>
                <p class="text-gray-600 text-sm leading-relaxed">{{ $t('contact.company.businessType') }}</p>
              </div>
            </div>
          </div>

          <!-- Contact Details Grid -->
          <div class="grid md:grid-cols-2 gap-6">
            <!-- Address -->
            <div class="bg-white rounded-xl shadow-lg border border-gray-200 p-6 hover:shadow-xl transition-all duration-300 group">
              <div class="flex items-start gap-4">
                <div class="w-12 h-12 bg-gradient-to-r from-red-500 to-pink-500 rounded-full flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                  <svg class="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                  </svg>
                </div>
                <div class="flex-1">
                  <h4 class="font-semibold text-gray-800 mb-2">{{ $t('contact.details.address.title') }}</h4>
                  <p class="text-gray-600 leading-relaxed">{{ locale === 'bn' ? $t('contact.details.address.value') : contactInfo.address }}</p>
                  <a href="https://maps.google.com/?q=Sahid+Dhali+Super+Market,+Square+Masterbari,+Bhaluka,+Mymensingh,+Bangladesh"
                     target="_blank"
                     class="inline-flex items-center mt-3 text-green-600 hover:text-green-700 font-medium transition-colors duration-200">
                    <svg class="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                    </svg>
                    {{ $t('contact.details.address.mapLink') }}
                  </a>
                </div>
              </div>
            </div>

            <!-- Phone -->
            <div class="bg-white rounded-xl shadow-lg border border-gray-200 p-6 hover:shadow-xl transition-all duration-300 group">
              <div class="flex items-center gap-4">
                <div class="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <svg class="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                  </svg>
                </div>
                <div>
                  <h4 class="font-semibold text-gray-800 mb-1">{{ $t('contact.details.phone.title') }}</h4>
                  <a :href="`tel:${contactInfo.phone}`" class="text-green-600 hover:text-green-700 font-medium transition-colors duration-200 block mb-1">
                    {{ contactInfo.phone }}
                  </a>
                  <p class="text-sm text-gray-500">{{ $t('contact.details.phone.description') }}</p>
                </div>
              </div>
            </div>

            <!-- Email -->
            <div class="bg-white rounded-xl shadow-lg border border-gray-200 p-6 hover:shadow-xl transition-all duration-300 group">
              <div class="flex items-center gap-4">
                <div class="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <svg class="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                  </svg>
                </div>
                <div>
                  <h4 class="font-semibold text-gray-800 mb-1">{{ $t('contact.details.email.title') }}</h4>
                  <a :href="`mailto:${contactInfo.email}`" class="text-blue-600 hover:text-blue-700 font-medium transition-colors duration-200 break-all block mb-1">
                    {{ contactInfo.email }}
                  </a>
                  <p class="text-sm text-gray-500">{{ $t('contact.details.email.description') }}</p>
                </div>
              </div>
            </div>

            <!-- Website -->
            <div class="bg-white rounded-xl shadow-lg border border-gray-200 p-6 hover:shadow-xl transition-all duration-300 group">
              <div class="flex items-center gap-4">
                <div class="w-12 h-12 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <svg class="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.94-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
                  </svg>
                </div>
                <div>
                  <h4 class="font-semibold text-gray-800 mb-1">{{ $t('contact.details.website.title') }}</h4>
                  <a :href="`https://${contactInfo.website}`" target="_blank" class="text-purple-600 hover:text-purple-700 font-medium transition-colors duration-200 flex items-center gap-2 mb-1">
                    {{ contactInfo.website }}
                    <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 19H5V5h7V3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z"/>
                    </svg>
                  </a>
                  <p class="text-sm text-gray-500">{{ $t('contact.details.website.description') }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Services Grid -->
      <div class="mt-16 lg:mt-20">
        <div class="text-center mb-12">
          <h3 class="text-2xl md:text-3xl font-bold text-gray-800 mb-4">{{ $t('contact.services.title') }}</h3>
          <p class="text-gray-600 max-w-2xl mx-auto">{{ $t('contact.services.subtitle') }}</p>
        </div>

        <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div
              v-for="(service, index) in services"
              :key="index"
              class="bg-white rounded-xl shadow-lg border border-gray-200 p-6 text-center hover:shadow-xl hover:scale-105 transition-all duration-300 group"
          >
            <div class="w-16 h-16 bg-gradient-to-r from-green-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
              <svg class="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path v-if="service.icon === 'gas-pump'" d="M3 3h10v10H3V3zm12 2h4v2h-4V5zm0 4h4v2h-4V9zm0 4h4v2h-4v-2zM5 19h14v2H5v-2z"/>
                <path v-else-if="service.icon === 'fuel'" d="M19.77 7.23l.01-.01-3.72-3.72L15 4.56l2.11 2.11c-.94.36-1.61 1.26-1.61 2.33 0 1.38 1.12 2.5 2.5 2.5.36 0 .69-.08 1-.21v7.21c0 .55-.45 1-1 1s-1-.45-1-1V14c0-1.1-.9-2-2-2h-1V5c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2v-3h1v5c0 1.66 1.34 3 3 3s3-1.34 3-3V9c0-.69-.28-1.32-.73-1.77z"/>
                <path v-else-if="service.icon === 'truck'" d="M20 8h-3V4H3c-1.1 0-2 .9-2 2v11h2c0 1.66 1.34 3 3 3s3-1.34 3-3h6c0 1.66 1.34 3 3 3s3-1.34 3-3h2v-5l-3-4zM6 18.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm13.5-9l1.96 2.5H17V9.5h2.5zm-1.5 9c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z"/>
                <path v-else d="M22.7 19l-9.1-9.1c.9-2.3.4-5-1.5-6.9-2-2-5-2.4-7.4-1.3L9 6 6 9 1.6 4.7C.4 7.1.9 10.1 2.9 12.1c1.9 1.9 4.6 2.4 6.9 1.5l9.1 9.1c.4.4 1 .4 1.4 0l2.3-2.3c.5-.4.5-1.1.1-1.4z"/>
              </svg>
            </div>
            <h4 class="font-bold text-gray-800 mb-2">{{ $t(`contact.services.items.${service.key}.title`) }}</h4>
            <p class="text-gray-600 text-sm">{{ $t(`contact.services.items.${service.key}.description`) }}</p>
          </div>
        </div>
      </div>

      <!-- Call to Action -->
      <div class="mt-16 text-center bg-gradient-to-r from-green-50 to-blue-50 rounded-2xl p-8 border border-green-200">
        <h3 class="text-2xl font-bold text-gray-800 mb-4">{{ $t('contact.cta.title') }}</h3>
        <p class="text-gray-600 mb-6 max-w-2xl mx-auto">
          {{ $t('contact.cta.subtitle') }}
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <a :href="`tel:${contactInfo.phone}`" class="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 hover:scale-105">
            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
            </svg>
            {{ $t('contact.cta.callNow') }}
          </a>
          <a :href="`mailto:${contactInfo.email}`" class="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 hover:scale-105">
            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
            </svg>
            {{ $t('contact.cta.emailUs') }}
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* Custom animations */
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

.container > div {
  animation: fadeInUp 0.8s ease-out;
}

/* Hover animations */
.group:hover .group-hover\:scale-110 {
  transform: scale(1.1);
}

.hover\:scale-\[1\.02\]:hover {
  transform: scale(1.02);
}

.hover\:scale-105:hover {
  transform: scale(1.05);
}

/* Custom gradient backgrounds */
.bg-gradient-to-br {
  background-image: linear-gradient(to bottom right, var(--tw-gradient-stops));
}

/* Typography shadows */
h2, h3, h4 {
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);
}

/* Button hover effects */
button:hover, a:hover {
  transform: translateY(-1px);
}

/* Card shadows */
.shadow-xl {
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
}

.hover\:shadow-2xl:hover {
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .grid.md\:grid-cols-2 {
    gap: 1rem;
  }

  .text-3xl.md\:text-4xl.lg\:text-5xl {
    font-size: 2rem;
  }
}
</style>