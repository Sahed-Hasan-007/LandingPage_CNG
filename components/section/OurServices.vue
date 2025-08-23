<script setup>
import { ref, onMounted, nextTick } from 'vue'
import { useI18n } from 'vue-i18n'

const { locale } = useI18n()

const isVisible = ref(false)
const activeService = ref(0)
const sectionRef = ref(null)

const services = [
  {
    id: 1,
    title: 'Home LPG Delivery',
    subtitle: 'Direct to Your Doorstep',
    description: 'Safe and reliable LPG cylinder delivery service across Bangladesh. We ensure timely delivery with proper safety protocols and genuine products.',
    features: ['24/7 Delivery', 'Safety Certified', 'Genuine Products', 'Quick Response'],
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    icon: 'home',
    color: 'from-blue-500 to-cyan-500'
  },
  {
    id: 2,
    title: 'Fuel Station Services',
    subtitle: 'Modern Fuel Solutions',
    description: 'State-of-the-art fuel stations providing premium petrol, diesel, and octane with advanced dispensing technology and quality assurance.',
    features: ['Premium Quality', 'Digital Payment', 'Quick Service', 'Clean Facilities'],
    image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    icon: 'fuel',
    color: 'from-green-500 to-emerald-500'
  },
  {
    id: 3,
    title: 'Commercial Supply',
    subtitle: 'Bulk Fuel Solutions',
    description: 'Comprehensive fuel and LPG supply solutions for industries, restaurants, and commercial establishments with flexible payment terms.',
    features: ['Bulk Orders', 'Flexible Terms', 'Dedicated Support', 'Contract Options'],
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    icon: 'building',
    color: 'from-purple-500 to-pink-500'
  },
  {
    id: 4,
    title: 'Emergency Services',
    subtitle: '24/7 Emergency Support',
    description: 'Round-the-clock emergency fuel and LPG delivery services for urgent requirements with rapid response teams across major cities.',
    features: ['24/7 Available', 'Rapid Response', 'Emergency Hotline', 'Priority Service'],
    image: 'https://images.unsplash.com/photo-1621905252507-b35492cc74b4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    icon: 'phone',
    color: 'from-red-500 to-orange-500'
  },
  {
    id: 5,
    title: 'Maintenance & Safety',
    subtitle: 'Equipment Care Services',
    description: 'Professional maintenance and safety inspection services for LPG equipment, pipelines, and storage systems to ensure optimal performance.',
    features: ['Regular Inspection', 'Safety Checks', 'Equipment Care', 'Certified Technicians'],
    image: 'https://images.unsplash.com/photo-1621905501492-2a20ac2e0f81?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    icon: 'shield',
    color: 'from-yellow-500 to-amber-500'
  },
  {
    id: 6,
    title: 'Digital Services',
    subtitle: 'Smart Energy Solutions',
    description: 'Modern digital platform for easy ordering, tracking, and payment with mobile app support and online customer portal.',
    features: ['Mobile App', 'Online Ordering', 'Real-time Tracking', 'Digital Payments'],
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    icon: 'smartphone',
    color: 'from-indigo-500 to-blue-500'
  }
]

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
  <div id="aboutus" ref="sectionRef" class="bg-black">
    <div class="container relative mx-auto max-w-[1300px] lg:max-w-[1005px] xl:max-w-[1160px] min-[1300px]:max-w-[1256px] 2xl:max-w-[1300px] mt-4 mb-8 lg:mt-8 lg:mb-24 px-4 md:px-8 lg:px-0">
      
      <!-- Section Title on Border -->
      <div class="absolute -top-8 left-1/2 -translate-x-1/2 border-2 border-green-500 bg-white px-6 py-3 text-[24px] shadow-lg shadow-white/50 rounded-lg font-bold z-10">
        Our Services
      </div>

      <!-- Main Content -->
      <div class="pt-16">
        
        <!-- Hero Text -->
        <div 
          class="text-center mb-16"
          :class="{ 'animate-fade-in-up': isVisible }"
        >
          <h2 class="text-3xl lg:text-4xl font-bold text-white mb-6">
            Comprehensive Energy Solutions for
            <span class="bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
              Modern Bangladesh
            </span>
          </h2>
          <p class="text-gray-300 text-lg max-w-3xl mx-auto leading-relaxed">
            From residential LPG delivery to commercial fuel solutions, we provide reliable, safe, and efficient energy services across Bangladesh with cutting-edge technology and exceptional customer care.
          </p>
        </div>

        <!-- Services Grid -->
        <div class="grid lg:grid-cols-2 xl:grid-cols-3 gap-8 mb-16">
          <div 
            v-for="(service, index) in services" 
            :key="service.id"
            class="group relative bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl overflow-hidden border border-gray-700 hover:border-green-500/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-green-500/20"
            :class="{ 'animate-slide-in-up': isVisible }"
            :style="{ animationDelay: `${index * 0.15}s` }"
          >
            <!-- Service Image -->
            <div class="relative h-48 overflow-hidden">
              <img 
                :src="service.image" 
                :alt="service.title"
                class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div :class="`absolute inset-0 bg-gradient-to-t ${service.color} opacity-70 group-hover:opacity-80 transition-opacity duration-300`"></div>
              
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

              <!-- CTA Button -->
              <button class="w-full mt-4 bg-gradient-to-r from-green-500 to-blue-500 text-white py-2 px-4 rounded-lg font-semibold text-sm hover:from-green-600 hover:to-blue-600 transition-all duration-300 transform hover:translate-y-[-2px] hover:shadow-lg">
                Learn More
              </button>
            </div>
          </div>
        </div>

        <!-- Featured Service Spotlight -->
        <div 
          class="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 rounded-3xl p-8 lg:p-12 border border-gray-700"
          :class="{ 'animate-fade-in-up': isVisible }"
          style="animation-delay: 1s"
        >
          <div class="grid lg:grid-cols-2 gap-12 items-center">
            
            <!-- Left Content -->
            <div class="space-y-6">
              <div class="inline-flex items-center space-x-2 bg-green-500/20 text-green-400 px-4 py-2 rounded-full text-sm font-medium">
                <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"/>
                </svg>
                <span>Most Popular Service</span>
              </div>
              
              <h3 class="text-2xl lg:text-3xl font-bold text-white">
                24/7 Emergency LPG Delivery
              </h3>
              
              <p class="text-gray-300 text-lg leading-relaxed">
                Never run out of cooking gas again! Our emergency delivery service ensures you get LPG cylinders delivered to your doorstep within 30 minutes of your call, anywhere in Dhaka and major cities.
              </p>
              
              <div class="grid grid-cols-2 gap-4 text-center">
                <div class="bg-gray-800 rounded-xl p-4 border border-gray-700">
                  <div class="text-2xl font-bold text-green-400">30min</div>
                  <div class="text-xs text-gray-400">Average Delivery</div>
                </div>
                <div class="bg-gray-800 rounded-xl p-4 border border-gray-700">
                  <div class="text-2xl font-bold text-blue-400">24/7</div>
                  <div class="text-xs text-gray-400">Available Always</div>
                </div>
              </div>
              
              <div class="flex flex-col sm:flex-row gap-4">
                <button class="bg-gradient-to-r from-green-500 to-emerald-500 text-white px-6 py-3 rounded-xl font-semibold hover:from-green-600 hover:to-emerald-600 transition-all duration-300 shadow-lg hover:shadow-green-500/25">
                  Order Now: +880-XXXX-XXXX
                </button>
                <button class="border-2 border-green-500 text-green-400 px-6 py-3 rounded-xl font-semibold hover:bg-green-500 hover:text-white transition-all duration-300">
                  Download App
                </button>
              </div>
            </div>

            <!-- Right Image -->
            <div class="relative">
              <div class="relative overflow-hidden rounded-2xl shadow-2xl group">
                <img 
                  src="https://images.unsplash.com/photo-1621905252472-e4c3ba0fe2c0?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" 
                  alt="Emergency LPG delivery service" 
                  class="w-full h-80 object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div class="absolute inset-0 bg-gradient-to-t from-green-600/50 to-transparent"></div>
              </div>
              
              <!-- Floating Stats -->
              <div class="absolute -bottom-6 -left-6 bg-white rounded-xl p-4 shadow-2xl">
                <div class="text-2xl font-bold text-gray-900">5000+</div>
                <div class="text-xs text-gray-600">Deliveries/Month</div>
              </div>
              
              <div class="absolute -top-6 -right-6 bg-gradient-to-r from-green-500 to-blue-500 text-white rounded-xl p-4 shadow-2xl">
                <div class="text-2xl font-bold">4.9★</div>
                <div class="text-xs opacity-90">Customer Rating</div>
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