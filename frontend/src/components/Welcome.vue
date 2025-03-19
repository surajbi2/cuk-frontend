<template>
  <div class="min-h-screen bg-gray-50">
    <!-- Custom Carousel -->
    <section class="relative h-[65vh] w-[98%] mx-auto mt-4 overflow-hidden rounded-[2rem] shadow-2xl hidden md:block">
      <div class="relative h-full">
        <div 
          v-for="(image, index) in images"
          :key="index"
          class="absolute inset-0 transition-opacity duration-1000"
          :class="{ 'opacity-100': activeIndex === index, 'opacity-0': activeIndex !== index }"
        >
          <img 
            :src="image" 
            alt="Campus View"
            class="w-full h-full object-cover object-center"
          />
          <div class="absolute inset-0 bg-gradient-to-t from-gray-900/60 via-gray-900/20 to-transparent"></div>
        </div>
      </div>

      <!-- Carousel Indicators -->
      <div class="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2 z-10">
        <button 
          v-for="(_, index) in images"
          :key="index"
          @click="activeIndex = index"
          class="w-8 h-1.5 rounded-full transition-all duration-300 bg-white/30 hover:bg-white/50"
          :class="{ '!bg-white w-12': activeIndex === index }"
        />
      </div>
    </section>

    <!-- Content Section -->
    <section class="px-4 md:px-8 py-12 max-w-7xl mx-auto">
      <div class="flex flex-col lg:flex-row gap-8">
        <!-- Leadership Cards -->
        <div class="w-full lg:w-1/3 space-y-8">
          <div 
            class="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 group relative overflow-hidden"
          >
            <div class="absolute inset-0 bg-gradient-to-br from-indigo-50/50 to-white/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div class="relative flex flex-col items-center space-y-6">
              <div class="relative w-44 h-44 rounded-full overflow-hidden border-4 border-white shadow-lg">
                <img 
                  src="https://cuk.ac.in/CUK-IQAC/img/director.jpeg" 
                  alt="Director"
                  class="w-full h-full object-cover"
                />
                <div class="absolute inset-0 bg-gradient-to-t from-indigo-900/30"></div>
              </div>
              <div class="text-center space-y-2">
                <h3 class="text-2xl font-bold text-gray-900">Prof. Ganesh Pawar</h3>
                <div class="inline-flex items-center gap-2 text-indigo-600 font-medium px-4 py-1.5 rounded-full bg-indigo-50">
                  <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span>Director</span>
                </div>
              </div>
            </div>
          </div>

          <div 
            class="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 group relative overflow-hidden"
          >
            <div class="absolute inset-0 bg-gradient-to-br from-indigo-50/50 to-white/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div class="relative flex flex-col items-center space-y-6">
              <div class="relative w-44 h-44 rounded-full overflow-hidden border-4 border-white shadow-lg">
                <img 
                  src="https://cuk.ac.in/CUK-IQAC/img/deputy.jpeg" 
                  alt="Deputy Director"
                  class="w-full h-full object-cover"
                />
                <div class="absolute inset-0 bg-gradient-to-t from-indigo-900/30"></div>
              </div>
              <div class="text-center space-y-2">
                <h3 class="text-2xl font-bold text-gray-900">Dr. Venkata Ramana Doddi</h3>
                <div class="inline-flex items-center gap-2 text-indigo-600 font-medium px-4 py-1.5 rounded-full bg-indigo-50">
                  <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span>Deputy Director</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- IQAC Content -->
        <div class="w-full lg:w-2/3 bg-white rounded-2xl p-10 shadow-xl">
          <div class="max-w-3xl mx-auto">
            <h2 class="text-4xl font-bold text-gray-900 mb-8 text-center relative pb-4 after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-20 after:h-1 after:bg-indigo-600">
              About IQAC
            </h2>
            
            <div class="space-y-8">
              <div class="space-y-6 text-gray-600 leading-relaxed">
                <p class="text-lg">
                  The Central University of Karnataka established its 
                  <span class="font-semibold text-indigo-700 bg-indigo-50 px-2 py-1 rounded-lg">Internal Quality Assurance Cell (IQAC)</span> 
                  in 2013 to ensure excellence across all academic and administrative operations through systematic quality enhancement initiatives.
                </p>

                <p class="text-lg">
                  Operating under the guidance of the Hon'ble Vice Chancellor, IQAC comprises multidisciplinary experts committed to developing innovative benchmarks and implementing best practices in higher education.
                </p>
              </div>

              <div class="space-y-6">
                <h3 class="text-2xl font-bold text-gray-900">Key Focus Areas</h3>
                <div class="grid md:grid-cols-2 gap-6">
                  <div 
                    v-for="(initiative, index) in initiatives"
                    :key="index"
                    class="p-6 bg-gray-50 rounded-xl border-l-4 border-indigo-600 hover:bg-white transition-all duration-300"
                  >
                    <div class="flex items-start gap-4">
                      <div class="w-10 h-10 bg-indigo-600 text-white rounded-full flex items-center justify-center shrink-0">
                        {{ index + 1 }}
                      </div>
                      <div>
                        <h4 class="text-lg font-medium text-gray-900">{{ initiative.title }}</h4>
                        <p class="text-gray-600 mt-2 text-sm">{{ initiative.description }}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { ref } from 'vue'

export default {
  name: "Welcome",
  setup() {
    const activeIndex = ref(0)
    const images = [
      "/bg.jpg",
      "/aerial.jpg",
      "/DJI_0209.jpg",
      "/DJI_0219.jpg",
    ]

    const initiatives = [
      {
        title: "Academic Audits",
        description: "Comprehensive review of curriculum and teaching methodologies"
      },
      {
        title: "Faculty Development",
        description: "Continuous professional growth programs for staff"
      },
      {
        title: "Quality Benchmarking",
        description: "Establishing institutional performance standards"
      },
      {
        title: "Stakeholder Engagement",
        description: "Collaborative partnerships with industry and community"
      },
      {
        title: "Infrastructure Development",
        description: "Modernizing campus facilities and resources"
      },
      {
        title: "Research Enhancement",
        description: "Promoting innovative and impactful research"
      }
    ]

    // Auto-advance every 7 seconds
    setInterval(() => {
      activeIndex.value = (activeIndex.value + 1) % images.length
    }, 7000)

    return { activeIndex, images, initiatives }
  }
}
</script>

<style scoped>
/* Custom transitions */
.border-l-4 {
  transition: border-color 0.3s ease;
}

.hover\:bg-white:hover {
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05);
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .text-4xl {
    font-size: 2rem;
  }
  
  .text-2xl {
    font-size: 1.5rem;
  }
  
  .p-10 {
    padding: 1.5rem;
  }
  
  .w-44 {
    width: 160px;
    height: 160px;
  }
}

/* Smooth image transitions */
img {
  transition: opacity 0.8s cubic-bezier(0.4, 0, 0.2, 1);
}
</style>