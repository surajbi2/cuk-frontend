<template>
  <footer class="bg-gradient-to-b from-gray-800 to-gray-900 text-gray-300 py-12 relative w-full border-t border-gray-700">
    <div class="max-w-7xl mx-auto md:px-4 px-6">
      <div class="grid grid-cols-2 md:grid-cols-3 gap-8 mb-4">
        <!-- Important Links -->
        <div class="space-y-4">
          <h3 class="text-xl font-bold text-white mb-4 relative pb-2 after:absolute after:bottom-0 after:left-0 after:w-12 after:h-0.5 after:bg-indigo-500">
            Important Links
          </h3>
          <ul class="space-y-3">
            <li v-for="(link, index) in importantLinks" :key="index" 
                class="group transform transition-all duration-300 hover:translate-x-2">
              <a :href="link.url" target="_blank" 
                 class="flex items-center gap-2 text-gray-400 hover:text-white before:content-['→'] before:font-bold before:text-transparent before:group-hover:text-indigo-400 before:transition-all before:duration-300">
                <span class="truncate">{{ link.name }}</span>
              </a>
            </li>
          </ul>
        </div>

        <!-- Explore -->
        <div class="space-y-4">
          <h3 class="text-xl font-bold text-white mb-4 relative pb-2 after:absolute after:bottom-0 after:left-0 after:w-12 after:h-0.5 after:bg-indigo-500">
            Explore
          </h3>
          <ul class="space-y-3">
            <li v-for="(link, index) in exploreLinks" :key="index" 
                class="group transform transition-all duration-300 hover:translate-x-2">
              <a :href="link.url" target="_blank" 
                 class="flex items-center gap-2 text-gray-400 hover:text-white before:content-['→'] before:font-bold before:text-transparent before:group-hover:text-indigo-400 before:transition-all before:duration-300">
                <span class="truncate">{{ link.name }}</span>
              </a>
            </li>
          </ul>
        </div>

        <!-- Social & Auth -->
        <div class="space-y-6">
          <div class="space-y-4">
            <h3 class="text-xl font-bold text-white mb-4 relative pb-2 after:absolute after:bottom-0 after:left-0 after:w-12 after:h-0.5 after:bg-indigo-500">
              Connect With Us
            </h3>
            <div class="flex space-x-4">
              <a v-for="(social, index) in socialLinks" :key="index" 
                 :href="social.url" target="_blank"
                 class="p-2.5 rounded-lg bg-gray-700 hover:bg-indigo-600 transition-all duration-300 transform hover:-translate-y-1">
                <svg class="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path :d="social.icon"/>
                </svg>
              </a>
            </div>
          </div>

          <div @click="handleAuth" 
               class="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 rounded-xl cursor-pointer transform transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-indigo-500/20">
            <span v-if="isLoggedIn" class="text-sm font-medium">🚪 Logout</span>
            <span v-else class="text-sm font-medium">🔒 Secure Login</span>
          </div>
        </div>
      </div>

      <!-- Copyright -->
      <div class="border-t border-gray-700 pt-4 text-center">
        <p class="text-sm text-gray-500 leading-relaxed">
          © 2024 All Rights Reserved. A site developed by <strong>Ramagiri Suraj Kumar </strong> | maintained by <strong>Central University of Karnataka</strong>, Aland Road, Kadaganchi Kalaburagi-585367, India
        </p>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "Footer",
  data() {
    return {
      isLoggedIn: false,
      importantLinks: [
        { name: 'UGC', url: 'https://www.ugc.gov.in/' },
        { name: 'NAAC', url: 'http://naac.gov.in/index.php/en/' },
        { name: 'AICTE', url: 'https://www.aicte-india.org/' },
        { name: 'NCERT', url: 'https://ncert.nic.in/' },
        { name: 'NMC', url: 'https://www.nmc.org.in/' }
      ],
      exploreLinks: [
        { name: 'Main Website', url: 'https://www.cuk.ac.in/' },
        { name: 'CUK Samarth', url: 'https://cuk.samarth.ac.in' }
      ],
      socialLinks: [{
        name: 'Twitter',
        url: 'https://x.com/CuKarnataka',
        icon: 'M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z'
      }]
    };
  },
  created() { this.checkAuth(); },
  methods: {
    checkAuth() { this.isLoggedIn = !!sessionStorage.getItem('userToken'); },
    handleAuth() {
      if (this.isLoggedIn) {
        sessionStorage.removeItem('userToken');
        this.$router.push('/');
      } else {
        this.$router.push('/login');
      }
      this.isLoggedIn = !this.isLoggedIn;
    }
  }
};
</script>

<style scoped>
/* Custom animations */
.before\:content-\[\'→\'\]::before {
  transition: opacity 0.3s, transform 0.3s;
  opacity: 0;
  transform: translateX(-10px);
}

.group:hover .before\:content-\[\'→\'\]::before {
  opacity: 1;
  transform: translateX(0);
}

.hover\:-translate-y-1:hover {
  transform: translateY(-4px);
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .grid-cols-3 {
    grid-template-columns: 1fr;
    gap: 2.5rem;
  }
  
  .text-xl {
    font-size: 1.125rem;
  }
}
</style>