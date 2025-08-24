<script setup>
import { ref, onMounted, nextTick } from 'vue'
import { useI18n } from 'vue-i18n'

const { locale } = useI18n()

const isVisible = ref(false)
const activeFeature = ref(0)
const sectionRef = ref(null)

const features = [
  {
    icon: 'truck',
    title: 'Reliable Delivery',
    description: '24/7 fuel and LPG delivery services across Bangladesh with our modern fleet'
  },
  {
    icon: 'shield',
    title: 'Safety First',
    description: 'Certified safety protocols and quality assurance for all our fuel products'
  },
  {
    icon: 'clock',
    title: 'Quick Service',
    description: 'Fast and efficient service with average delivery time under 30 minutes'
  },
  {
    icon: 'users',
    title: 'Expert Team',
    description: 'Trained professionals with years of experience in fuel and LPG services'
  }
]

const stats = [
  { number: '15+', label: 'Years Experience' },
  { number: '10K+', label: 'Happy Customers' },
  { number: '50+', label: 'Service Areas' },
  { number: '24/7', label: 'Support Available' }
]

onMounted(async () => {
  await nextTick()

  const observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        isVisible.value = true
      }
    },
    { threshold: 0.1 }
  )

  if (sectionRef.value) {
    observer.observe(sectionRef.value)
  }

  // Auto-rotate features
  setInterval(() => {
    activeFeature.value = (activeFeature.value + 1) % features.length
  }, 4000)
})

const getIconPath = (iconName) => {
  const icons = {
    truck: 'M3 3h2l.4 2H19a1 1 0 0 1 .98 1.2l-1 5A1 1 0 0 1 18 12H6.6l.4 2H17a1 1 0 1 1 0 2H5a1 1 0 0 1-.97-1.24L2.03 3H1a1 1 0 1 1 0-2h2.97zM6 16a2 2 0 1 1 0 4 2 2 0 0 1 0-4zm10 0a2 2 0 1 1 0 4 2 2 0 0 1 0-4z',
    shield: 'M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z',
    clock: 'M12 2v10l5.5 5.5-1.5 1.5L10 13V2h2z',
    users: 'M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2M8.5 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75'
  }
  return icons[iconName] || icons.truck
}
</script>

<template>
  <div id="aboutus" ref="sectionRef"
    class="container relative mx-auto max-w-[1300px] lg:max-w-[1005px] xl:max-w-[1160px] min-[1300px]:max-w-[1256px] 2xl:max-w-[1300px] mt-4 mb-16 lg:mt-8 lg:mb-24 px-4 md:px-8 lg:px-0">
    <!-- Section Title on Border -->
    <div
      class="absolute -top-11 md:-top-16 left-1/2 -translate-x-1/2 border-2 border-green-500 bg-white px-6 py-3 text-[18px] md:text-[24px] shadow-lg shadow-black/40 rounded-lg font-bold z-10">
      About Us
    </div>

    <!-- Main Content Grid -->
    <div class="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center pt-8">

      <!-- Left Content -->
      <div class="space-y-8">
        <!-- Company Overview -->
        <div data-aos="fade-right" data-aos-duration="800">
          <div class="space-y-6">
            <h2 class="text-2xl lg:text-4xl font-bold text-gray-900 leading-tight">
              Leading Fuel & LPG Services in
              <span class="text-green-600">Bangladesh</span>
            </h2>

            <div class="space-y-4 text-gray-600 text-sm lg:text-lg leading-relaxed">
              <p>
                For over 15 years, XYZ Fuel & LPG Services has been Bangladesh's trusted partner in providing reliable,
                safe, and efficient fuel solutions. From bustling Dhaka to rural communities, we ensure uninterrupted
                energy supply for homes, businesses, and industries.
              </p>
              <p>
                Our commitment to excellence, safety, and customer satisfaction has made us a household name across
                Bangladesh. We understand the critical importance of energy in daily life and business operations.
              </p>
            </div>
          </div>
        </div>

        <!-- Mission & Vision -->
        <div data-aos="fade-up" data-aos-duration="800">
          <div class="bg-green-50 border-2 border-green-500 p-4 lg:p-6 rounded-xl">
            <h3 class="text-lg font-semibold text-green-700 mb-3">Our Mission</h3>
            <p class="text-sm lg:text-lg text-green-500">
              To provide safe, reliable, and affordable fuel and LPG services while contributing to Bangladesh's energy
              security and economic growth.
            </p>
          </div>
        </div>


        <!-- Stats -->
        <div data-aos="fade-right" data-aos-duration="800" class="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div v-for="(stat, index) in stats" :key="index"
            class="text-center p-4 bg-white rounded-lg shadow-md border hover:shadow-lg transition-all duration-300">
            <div class="text-2xl lg:text-3xl font-bold text-green-600">{{ stat.number }}</div>
            <div class="text-sm text-gray-600 mt-1">{{ stat.label }}</div>
          </div>
        </div>
      </div>

      <!-- Right Content - Image and Features -->
      <div class="space-y-8">
        <!-- Hero Image -->
        <div data-aos="fade-left" data-aos-duration="800">
          <div class="relative overflow-hidden rounded-2xl shadow-2xl group">
            <img
              src="/public/images/aboutUs/header_img.jpg"
              alt="Modern fuel station in Bangladesh"
              class="w-full h-80 object-cover transition-transform duration-700 group-hover:scale-105" />
            <div class="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent">
              <div class="absolute bottom-6 left-6 text-white">
                <h4 class="text-xl font-semibold">Modern Infrastructure</h4>
                <p class="text-sm opacity-90">State-of-the-art facilities across Bangladesh</p>
              </div>
            </div>
          </div>
        </div>


        <!-- Features Grid -->
        <div data-aos="fade-down" data-aos-duration="800" class="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div v-for="(feature, index) in features" :key="index"
            class="p-6 rounded-xl border-2 transition-all duration-300 cursor-pointer" :class="{
              'border-green-500 bg-green-50 shadow-lg scale-105': activeFeature === index,
              'border-gray-200 bg-white hover:border-gray-300 hover:shadow-md': activeFeature !== index,
              'animate-fade-in-up': isVisible
            }" :style="{ animationDelay: `${index * 0.15}s` }" @click="activeFeature = index">
            <div class="flex items-start space-x-3">
              <div class="flex-shrink-0 p-2 rounded-lg transition-colors duration-300" :class="{
                'bg-green-500 text-white': activeFeature === index,
                'bg-gray-100 text-gray-600': activeFeature !== index
              }">
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    :d="getIconPath(feature.icon)" />
                </svg>
              </div>
              <div class="flex-1">
                <h4 class="font-semibold text-sm mb-2 transition-colors duration-300" :class="{
                  'text-green-700': activeFeature === index,
                  'text-gray-900': activeFeature !== index
                }">
                  {{ feature.title }}
                </h4>
                <p class="text-xs leading-relaxed transition-colors duration-300" :class="{
                  'text-green-600': activeFeature === index,
                  'text-gray-600': activeFeature !== index
                }">
                  {{ feature.description }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
@keyframes slideInLeft {
  from {
    opacity: 0;
    transform: translateX(-50px);
  }

  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes slideInRight {
  from {
    opacity: 0;
    transform: translateX(50px);
  }

  to {
    opacity: 1;
    transform: translateX(0);
  }
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

.animate-slide-in-left {
  animation: slideInLeft 0.8s ease-out forwards;
}

.animate-slide-in-right {
  animation: slideInRight 0.8s ease-out forwards;
}

.animate-fade-in-up {
  animation: fadeInUp 0.6s ease-out forwards;
}

/* Initial state for animations */
.animate-slide-in-left,
.animate-slide-in-right,
.animate-fade-in-up {
  opacity: 0;
}

/* Smooth transitions for interactive elements */
.transition-all {
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
}

/* Custom gradient background */
.bg-gradient-to-r {
  background: linear-gradient(135deg, #059669 0%, #2563eb 100%);
}

/* Hover effects */
.group:hover .group-hover\:scale-105 {
  transform: scale(1.05);
}

/* Mobile responsiveness */
@media (max-width: 768px) {
  .grid.lg\\:grid-cols-2 {
    gap: 2rem;
  }

  .text-3xl.lg\\:text-4xl {
    font-size: 2rem;
    line-height: 2.5rem;
  }
}
</style>