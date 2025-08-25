<script setup>
import { ref, onMounted, nextTick } from 'vue'
import { useI18n } from 'vue-i18n'

const { t, locale } = useI18n()

const isVisible = ref(false)
const activeService = ref(0)
const sectionRef = ref(null)

const services = computed(() => [
  {
    id: 1,
    title: t('services.id1.title'),
    subtitle: t('services.id1.subtitle'),
    description: t('services.id1.description'),
    features: [
      t('services.id1.features.feature1'),
      t('services.id1.features.feature2'),
      t('services.id1.features.feature3'),
      t('services.id1.features.feature4')
    ],
    image: '/images/ourServices/service1.jpg',
    icon: 'home',
    color: 'from-blue-500 to-cyan-500'
  },
  {
    id: 2,
    title: t('services.id2.title'),
    subtitle: t('services.id2.subtitle'),
    description: t('services.id2.description'),
    features: [
      t('services.id2.features.feature1'),
      t('services.id2.features.feature2'),
      t('services.id2.features.feature3'),
      t('services.id2.features.feature4')
    ],
    image: '/images/ourServices/service2.jpg',
    icon: 'fuel',
    color: 'from-green-500 to-emerald-500'
  },
  {
    id: 3,
    title: t('services.id3.title'),
    subtitle: t('services.id3.subtitle'),
    description: t('services.id3.description'),
    features: [
      t('services.id3.features.feature1'),
      t('services.id3.features.feature2'),
      t('services.id3.features.feature3'),
      t('services.id3.features.feature4')
    ],
    image: '/images/ourServices/service3.jpg',
    icon: 'building',
    color: 'from-purple-500 to-pink-500'
  },
  {
    id: 4,
    title: t('services.id4.title'),
    subtitle: t('services.id4.subtitle'),
    description: t('services.id4.description'),
    features: [
      t('services.id4.features.feature1'),
      t('services.id4.features.feature2'),
      t('services.id4.features.feature3'),
      t('services.id4.features.feature4')
    ],
    image: '/images/ourServices/service4.jpg',
    icon: 'phone',
    color: 'from-red-500 to-orange-500'
  },
  {
    id: 5,
    title: t('services.id5.title'),
    subtitle: t('services.id5.subtitle'),
    description: t('services.id5.description'),
    features: [
      t('services.id5.features.feature1'),
      t('services.id5.features.feature2'),
      t('services.id5.features.feature3'),
      t('services.id5.features.feature4')
    ],
    image: '/images/ourServices/service5.jpg',
    icon: 'shield',
    color: 'from-yellow-500 to-amber-500'
  },
  {
    id: 6,
    title: t('services.id6.title'),
    subtitle: t('services.id6.subtitle'),
    description: t('services.id6.description'),
    features: [
      t('services.id6.features.feature1'),
      t('services.id6.features.feature2'),
      t('services.id6.features.feature3'),
      t('services.id6.features.feature4')
    ],
    image: '/images/ourServices/service6.jpg',
    icon: 'smartphone',
    color: 'from-indigo-500 to-blue-500'
  }
])

const getAos = (index) => {
  const animations = ['fade-right', 'fade-down', 'fade-left']
  return animations[index % animations.length] // cycle animations
}

const getIconPath = (iconName) => {
  const icons = {
    home: 'M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6',
    fuel: 'M19.428 15.428l-7.071-7.071a1 1 0 00-1.414 0L4.572 14.428a1 1 0 000 1.414l7.071 7.071a1 1 0 001.414 0l6.371-6.371a1 1 0 000-1.414z',
    building: 'M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4',
    phone: 'M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z',
    shield: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z',
    smartphone: 'M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z'
  }
  return icons[iconName] || icons.home
}

onMounted(async () => {
  await nextTick()
  
  const observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        isVisible.value = true
      } else {
        isVisible.value = false
      }
    },
    { threshold: 0.2, rootMargin: '-50px' }
  )

  if (sectionRef.value) {
    observer.observe(sectionRef.value)
  }

  // Auto-rotate services
  setInterval(() => {
    activeService.value = (activeService.value + 1) % services.length
  }, 5000)
})
</script>

<template>
  <div id="service" ref="sectionRef" class="bg-black">
    <div class="container relative mx-auto max-w-[1300px] lg:max-w-[1005px] xl:max-w-[1160px] min-[1300px]:max-w-[1256px] 2xl:max-w-[1300px] mt-4 pb-16 lg:mt-8 lg:pb-24 px-4 md:px-8 lg:px-0"">
      
      <!-- Section Title on Border -->
      <div class="absolute -top-7 md:-top-8 left-1/2 -translate-x-1/2 border-2 border-green-500 bg-white px-6 py-3 text-[18px] md:text-[24px] shadow-lg shadow-white/50 rounded-lg font-bold z-10">
        {{ $t('nav.ourService') }}
      </div>

      <!-- Main Content -->
      <div class="pt-16">
        
        <!-- Hero Text -->
        <div 
          class="text-center mb-8 lg:mb-16"
          :class="{ 'animate-fade-in-up': isVisible }"
        >
          <h2 class="text-2xl lg:text-4xl font-bold text-white mb-3 lg:mb-6">
            {{ t('services.heading1') }}<br />
            <span class="bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
              {{ t('services.heading2') }}
            </span>
          </h2>
          <p class="text-gray-300 text-sm lg:text-lg max-w-3xl mx-auto leading-relaxed">
            {{ t('services.title') }}
          </p>
        </div>

        <!-- Services Grid -->
        <div class="grid lg:grid-cols-2 xl:grid-cols-3 gap-8 mb-16">
          <div
            v-for="(service, index) in services"
            :key="service.id"
            class="p-6 rounded-2xl shadow-lg bg-white dark:bg-gray-900"
            :data-aos="getAos(index)"
            data-aos-duration="1000"
          >
            <!-- Service Image -->
            <div class="relative h-48 overflow-hidden">
              <img 
                :src="service.image" 
                :alt="service.title"
                class="w-full h-full object-contain transition-transform duration-700 group-hover:scale-110"
              />
              <div :class="`absolute inset-0 bg-gradient-to-t ${service.color} opacity-50 group-hover:opacity-70 transition-opacity duration-300`"></div>
              
              <!-- Service Icon -->
              <div class="absolute top-4 left-4 p-3 bg-white/90 backdrop-blur-sm rounded-xl shadow-lg">
                <svg class="w-6 h-6 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" :d="getIconPath(service.icon)"/>
                </svg>
              </div>
            </div>

            <!-- Service Content -->
            <div class="p-6 space-y-4">
              <div>
                <h3 class="text-xl font-bold text-white group-hover:text-green-400 transition-colors duration-300">
                  {{ service.title }}
                </h3>
                <p class="text-sm text-green-400 font-medium">{{ service.subtitle }}</p>
              </div>
              
              <p class="text-gray-300 text-sm leading-relaxed">
                {{ service.description }}
              </p>

              <!-- Features -->
              <div class="grid grid-cols-2 gap-2">
                <div 
                  v-for="feature in service.features" 
                  :key="feature"
                  class="flex items-center space-x-2 text-xs text-gray-400"
                >
                  <div class="w-1.5 h-1.5 bg-green-400 rounded-full"></div>
                  <span>{{ feature }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
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

@keyframes slideInUp {
  from {
    opacity: 0;
    transform: translateY(50px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fade-in-up {
  animation: fadeInUp 0.8s ease-out forwards;
}

.animate-slide-in-up {
  animation: slideInUp 0.6s ease-out forwards;
}

/* Reset animations when not visible */
.animate-fade-in-up:not(.animate-fade-in-up),
.animate-slide-in-up:not(.animate-slide-in-up) {
  opacity: 0;
}

/* Smooth transitions */
.transition-all {
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
}

/* Custom gradient text */
.bg-clip-text {
  -webkit-background-clip: text;
  background-clip: text;
}

/* Glassmorphism effect */
.backdrop-blur-sm {
  backdrop-filter: blur(4px);
}

/* Hover animations */
.group:hover .group-hover\:scale-105 {
  transform: scale(1.05);
}

.group:hover .group-hover\:scale-110 {
  transform: scale(1.10);
}

/* Button hover effects */
button:hover {
  transform: translateY(-2px);
}

/* Mobile responsiveness */
@media (max-width: 768px) {
  .grid.lg\\:grid-cols-2 {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
  
  .text-3xl.lg\\:text-4xl {
    font-size: 2rem;
    line-height: 2.5rem;
  }
  
  .text-2xl.lg\\:text-3xl {
    font-size: 1.75rem;
    line-height: 2.25rem;
  }
}

/* Glow effects for dark theme */
.hover\:shadow-green-500\/25:hover {
  box-shadow: 0 25px 50px -12px rgba(34, 197, 94, 0.25);
}

.hover\:shadow-green-500\/20:hover {
  box-shadow: 0 25px 50px -12px rgba(34, 197, 94, 0.2);
}
</style>