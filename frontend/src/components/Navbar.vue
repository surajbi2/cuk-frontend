<template >
  <nav class="bg-[#880d1e] text-white text-center py-2 rounded-3xl mt-1 relative mx-1">
    <div class="flex justify-between items-center px-4">
      <div class="text-xl font-bold md:hidden">Menu</div>
      <div class="md:hidden">
        <button @click="toggleMenu" class="focus:outline-none">
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7"></path>
          </svg>
        </button>
      </div>
    </div>
    <ul :class="{'hidden': !isMenuOpen, 'flex': isMenuOpen}" class="flex-col md:flex-row md:flex justify-evenly mt-2 md:mt-0">
      <!-- Home -->
      <li class="relative group">
        <router-link to="/"
          class="relative hover:text-white no-underline px-4 py-1 hover:before:scale-x-50 before:scale-x-0 before:origin-center before:content-[''] before:absolute before:bottom-0 before:left-0 before:right-0 before:h-0.5 before:bg-white before:transition-transform before:duration-300 before:ease-linear">
          Home
        </router-link>
      </li>
<!-- About Us -->
<li class="relative group">
        <router-link to="/about-us"
          class="relative hover:text-white no-underline px-4 py-1 hover:before:scale-x-50 before:scale-x-0 before:origin-center before:content-[''] before:absolute before:bottom-0 before:left-0 before:right-0 before:h-0.5 before:bg-white before:transition-transform before:duration-300 before:ease-linear hover:cursor-pointer">
          About Us
        </router-link>
      </li>
      <!-- IQAC -->
      <li class="relative group">
        <a href="#"
          class="relative hover:text-white no-underline px-4 py-1 hover:before:scale-x-50 before:scale-x-0 before:origin-center before:content-[''] before:absolute before:bottom-0 before:left-0 before:right-0 before:h-0.5 before:bg-white before:transition-transform before:duration-300 before:ease-linear">
          IQAC ▼
        </a>
        <ul
          class="absolute hidden group-hover:flex flex-col bg-[#d8315b] rounded-lg shadow-lg py-2 mt-0 min-w-[15rem] text-left transition duration-300 ease-in-out z-10">
          <li>
            <router-link to="/CommitteeMembers"
              class="block relative hover:text-white no-underline px-4 py-1 hover:before:scale-x-50 before:scale-x-0 before:origin-left before:content-[''] before:absolute before:bottom-0 before:left-5 before:right-0 before:h-0.5 before:bg-white before:transition-transform before:duration-300 before:ease-linear">
              IQAC Committee
            </router-link>
          </li>
          <li>
            <router-link to="/mom-reports"
              class="block relative hover:text-white no-underline px-4 py-1 hover:before:scale-x-75 before:scale-x-0 before:origin-left before:content-[''] before:absolute before:bottom-0 before:left-5 before:right-0 before:h-0.5 before:bg-white before:transition-transform before:duration-300 before:ease-linear">
              Minutes of Meeting & Action Taken Report
            </router-link>
          </li>
          <li>
            <a href="https://cuk.ac.in/CUK-IQAC/pdf/IQAC%20Calendar%202024-25.pdf"
              class="block relative hover:text-white no-underline px-4 py-1 hover:before:scale-x-50 before:scale-x-0 before:origin-left before:content-[''] before:absolute before:bottom-0 before:left-5 before:right-0 before:h-0.5 before:bg-white before:transition-transform before:duration-300 before:ease-linear" target="_blank">
              IQAC - Academic Calendar
            </a>
          </li>
        </ul>
      </li>

      <!-- AQAR -->
      <li class="relative group">
        <a href="#"
          class="relative hover:text-white no-underline px-4 py-1 hover:before:scale-x-50 before:scale-x-0 before:origin-center before:content-[''] before:absolute before:bottom-0 before:left-0 before:right-0 before:h-0.5 before:bg-white before:transition-transform before:duration-300 before:ease-linear">
          AQAR ▼
        </a>
        <ul
          class="absolute hidden group-hover:flex flex-col bg-[#d8315b] rounded-lg shadow-lg py-2 mt-0 min-w-[10rem] text-left transition duration-300 ease-in-out z-10">
          <li>
            <a href="https://www.cuk.ac.in/NAAC2022/AQAR/AQAR%202022-2023.pdf"
              class="block relative hover:text-white no-underline px-4 py-1 hover:before:scale-x-75 before:scale-x-0 before:origin-left before:content-[''] before:absolute before:bottom-0 before:left-5 before:right-0 before:h-0.5 before:bg-white before:transition-transform before:duration-300 before:ease-linear" target="_blank">
              AQAR 2022-2023
            </a>
          </li>
          <li>
            <a href="https://www.cuk.ac.in/NAAC2022/AQAR/2021-2022.pdf"
              class="block relative hover:text-white no-underline px-4 py-1 hover:before:scale-x-75 before:scale-x-0 before:origin-left before:content-[''] before:absolute before:bottom-0 before:left-5 before:right-0 before:h-0.5 before:bg-white before:transition-transform before:duration-300 before:ease-linear" target="_blank">
              AQAR 2021-2022
            </a>
          </li>
          <li>
            <a href="https://www.cuk.ac.in/NAAC2022/AQAR/2020-21.pdf"
              class="block relative hover:text-white no-underline px-4 py-1 hover:before:scale-x-75 before:scale-x-0 before:origin-left before:content-[''] before:absolute before:bottom-0 before:left-5 before:right-0 before:h-0.5 before:bg-white before:transition-transform before:duration-300 before:ease-linear" target="_blank">
              AQAR 2020-2021
            </a>
          </li>
          <li>
            <a href="https://www.cuk.ac.in/NAAC2022/AQAR/2019-20.pdf"
              class="block relative hover:text-white no-underline px-4 py-1 hover:before:scale-x-75 before:scale-x-0 before:origin-left before:content-[''] before:absolute before:bottom-0 before:left-5 before:right-0 before:h-0.5 before:bg-white before:transition-transform before:duration-300 before:ease-linear" target="_blank">
              AQAR 2019-2020
            </a>
          </li>
          <li>
            <a href="https://www.cuk.ac.in/NAAC2022/AQAR/2018-19.pdf"
              class="block relative hover:text-white no-underline px-4 py-1 hover:before:scale-x-75 before:scale-x-0 before:origin-left before:content-[''] before:absolute before:bottom-0 before:left-5 before:right-0 before:h-0.5 before:bg-white before:transition-transform before:duration-300 before:ease-linear" target="_blank">
              AQAR 2018-2019
            </a>
          </li>
          <li>
            <a href="https://www.cuk.ac.in/NAAC2022/AQAR/2017-18.pdf"
              class="block relative hover:text-white no-underline px-4 py-1 hover:before:scale-x-75 before:scale-x-0 before:origin-left before:content-[''] before:absolute before:bottom-0 before:left-5 before:right-0 before:h-0.5 before:bg-white before:transition-transform before:duration-300 before:ease-linear" target="_blank">
              AQAR 2017-2018
            </a>
          </li>
          <li>
            <a href="https://www.cuk.ac.in/NAAC2022/AQAR/2017-18.pdf"
              class="block relative hover:text-white no-underline px-4 py-1 hover:before:scale-x-75 before:scale-x-0 before:origin-left before:content-[''] before:absolute before:bottom-0 before:left-5 before:right-0 before:h-0.5 before:bg-white before:transition-transform before:duration-300 before:ease-linear" target="_blank">
              AQAR 2016-2017
            </a>
          </li>
        </ul>
      </li>

      <!-- NAAC -->
      <li class="relative group">
        <a href="#"
          class="relative hover:text-white no-underline px-4 py-1 hover:before:scale-x-50 before:scale-x-0 before:origin-center before:content-[''] before:absolute before:bottom-0 before:left-0 before:right-0 before:h-0.5 before:bg-white before:transition-transform before:duration-300 before:ease-linear">
          NAAC ▼
        </a>
        <ul
          class="absolute hidden group-hover:flex flex-col bg-[#d8315b] rounded-lg shadow-lg py-2 mt-0 min-w-[15rem] text-left transition duration-300 ease-in-out z-10">
          <li>
            <a href="https://ssr2024.cuk.ac.in/ipms/index.html"
              class="block relative hover:text-white no-underline px-4 py-1 hover:before:scale-x-[0.4] before:scale-x-0 before:origin-left before:content-[''] before:absolute before:bottom-0 before:left-5 before:right-0 before:h-0.5 before:bg-white before:transition-transform before:duration-300 before:ease-linear" target="_blank">
              SSR - 2024
            </a>
          </li>
          <li>
            <a href="https://cuk.ac.in/CUK-IQAC/studentsaf.php"
              class="block relative hover:text-white no-underline px-4 py-1 hover:before:scale-x-75 before:scale-x-0 before:origin-left before:content-[''] before:absolute before:bottom-0 before:left-5 before:right-0 before:h-0.5 before:bg-white before:transition-transform before:duration-300 before:ease-linear" target="_blank">
              Student Satisfaction Survey
            </a>
          </li>
          <li>
            <a href="https://cuk.ac.in/CUK-IQAC/pdf/Teachers%20Satisfaction%20Survey.pdf"
              class="block relative hover:text-white no-underline px-4 py-1 hover:before:scale-x-75 before:scale-x-0 before:origin-left before:content-[''] before:absolute before:bottom-0 before:left-5 before:right-0 before:h-0.5 before:bg-white before:transition-transform before:duration-300 before:ease-linear"  target="_blank">
              Teachers Satisfaction Survey(2023-2024)
            </a>
          </li>
          <li>
            <a href="https://cuk.ac.in/CUK-IQAC/pdf/Employer%20Feedback%202032-24.pdf"
              class="block relative hover:text-white no-underline px-4 py-1 hover:before:scale-x-75 before:scale-x-0 before:origin-left before:content-[''] before:absolute before:bottom-0 before:left-5 before:right-0 before:h-0.5 before:bg-white before:transition-transform before:duration-300 before:ease-linear" target="_blank">
              Employer Feedback(2032-24)
            </a>
          </li>
          <li>
            <a href="https://cuk.ac.in/CUK-IQAC/pdf/Non-Teaching%20Diversity%20Survey.pdf"
              class="block relative hover:text-white no-underline px-4 py-1 hover:before:scale-x-75 before:scale-x-0 before:origin-left before:content-[''] before:absolute before:bottom-0 before:left-5 before:right-0 before:h-0.5 before:bg-white before:transition-transform before:duration-300 before:ease-linear" target="_blank">
              Non-Teaching Staff Diversity Survey
            </a>
          </li>
          <li>
            <a href="https://cuk.ac.in/CUK-IQAC/pdf/Non-Teaching%20Feedback%20Form%20Analysis%20Pie%20Chart.pdf"
              class="block relative hover:text-white no-underline px-4 py-1 hover:before:scale-x-75 before:scale-x-0 before:origin-left before:content-[''] before:absolute before:bottom-0 before:left-5 before:right-0 before:h-0.5 before:bg-white before:transition-transform before:duration-300 before:ease-linear" target="_blank">
              Non-Teaching Feedback(2023-2024) 
            </a>
          </li>
          <li>
            <a href="https://cuk.ac.in/CUK-IQAC/pdf/Alumni%20Feedback-2025.pdf"
              class="block relative hover:text-white no-underline px-4 py-1 hover:before:scale-x-75 before:scale-x-0 before:origin-left before:content-[''] before:absolute before:bottom-0 before:left-5 before:right-0 before:h-0.5 before:bg-white before:transition-transform before:duration-300 before:ease-linear" target="_blank">
              Alumni Feedback(2023-2024)
            </a>
          </li>
          <li>
            <a href="https://cuk.ac.in/CUK-IQAC/Policies.php"
              class="block relative hover:text-white no-underline px-4 py-1 hover:before:scale-x-[0.2] before:scale-x-0 before:origin-left before:content-[''] before:absolute before:bottom-0 before:left-5 before:right-0 before:h-0.5 before:bg-white before:transition-transform before:duration-300 before:ease-linear" target="_blank">
              Policies
            </a>
          </li>
        </ul>
      </li>

      <!-- Certificates & Reports -->
      <li class="relative group">
        <a href="#"
          class="relative hover:text-white no-underline px-4 py-1 hover:before:scale-x-50 before:scale-x-0 before:origin-center before:content-[''] before:absolute before:bottom-0 before:left-0 before:right-0 before:h-0.5 before:bg-white before:transition-transform before:duration-300 before:ease-linear" >
          Certificates & Reports ▼
        </a>
        <ul
          class="absolute hidden group-hover:flex flex-col bg-[#d8315b] rounded-lg shadow-lg py-2 mt-0 min-w-[16rem] text-left transition duration-300 ease-in-out z-10">
          <li>
            <a href="https://cuk.ac.in/CUK-IQAC/pdf/IIQA%202024.pdf"
              class="block relative hover:text-white no-underline px-4 py-1 hover:before:scale-x-[0.1] before:scale-x-0 before:origin-left before:content-[''] before:absolute before:bottom-0 before:left-5 before:right-0 before:h-0.5 before:bg-white before:transition-transform before:duration-300 before:ease-linear" target="_blank">
              IIQA
            </a>
          </li>
          <li>
            <a href="https://cuk.ac.in/CUK-IQAC/pdf/Self%20Study%20Reports.pdf"
              class="block relative hover:text-white no-underline px-4 py-1 hover:before:scale-x-50 before:scale-x-0 before:origin-left before:content-[''] before:absolute before:bottom-0 before:left-5 before:right-0 before:h-0.5 before:bg-white before:transition-transform before:duration-300 before:ease-linear" target="_blank">
              Self Study Reports
            </a>
          </li>
          <li>
            <a href="#"
              class="block relative hover:text-white no-underline px-4 py-1 hover:before:scale-x-50 before:scale-x-0 before:origin-left before:content-[''] before:absolute before:bottom-0 before:left-5 before:right-0 before:h-0.5 before:bg-white before:transition-transform before:duration-300 before:ease-linear">
              Evaluative Reports of the Departments
            </a>
          </li>
          <li>
            <a href="https://cuk.ac.in/CUK-IQAC/pdf/1st%20Cycle%20NAAC%20Certificate.pdf"
              class="block relative hover:text-white no-underline px-4 py-1 hover:before:scale-x-50 before:scale-x-0 before:origin-left before:content-[''] before:absolute before:bottom-0 before:left-5 before:right-0 before:h-0.5 before:bg-white before:transition-transform before:duration-300 before:ease-linear" target="_blank">
              1st Cycle NAAC Certificate
            </a>
          </li>
          <li>
            <a href="https://cuk.ac.in/CUK-IQAC/AISHE.php"
              class="block relative hover:text-white no-underline px-4 py-1 hover:before:scale-x-50 before:scale-x-0 before:origin-left before:content-[''] before:absolute before:bottom-0 before:left-5 before:right-0 before:h-0.5 before:bg-white before:transition-transform before:duration-300 before:ease-linear" target="_blank">
              AISHE Certificates
            </a>
          </li>
        </ul>
      </li>

      <!-- Circular/Notice -->
      <li class="relative group">
        <router-link to="/notices"
          class="relative hover:text-white no-underline px-4 py-1 hover:before:scale-x-50 before:scale-x-0 before:origin-center before:content-[''] before:absolute before:bottom-0 before:left-0 before:right-0 before:h-0.5 before:bg-white before:transition-transform before:duration-300 before:ease-linear">
          Circular/Notice
        </router-link>
      </li>
      
      <li class="relative group">
        <router-link to="/Nirf"
          class="relative hover:text-white no-underline px-4 py-1 hover:before:scale-x-50 before:scale-x-0 before:origin-center before:content-[''] before:absolute before:bottom-0 before:left-0 before:right-0 before:h-0.5 before:bg-white before:transition-transform before:duration-300 before:ease-linear">
          NIRF
        </router-link>
      </li>
      
      <!-- Gallery -->
      <li class="relative group">
        <router-link to="/Gallery"
          class="relative hover:text-white no-underline px-4 py-1 hover:before:scale-x-50 before:scale-x-0 before:origin-center before:content-[''] before:absolute before:bottom-0 before:left-0 before:right-0 before:h-0.5 before:bg-white before:transition-transform before:duration-300 before:ease-linear">
          Gallery
        </router-link>
      </li>
      <!-- Contact Us -->
      <li class="relative group">
        <router-link to="/contact-us"
          class="relative hover:text-white no-underline px-4 py-1 hover:before:scale-x-50 before:scale-x-0 before:origin-center before:content-[''] before:absolute before:bottom-0 before:left-0 before:right-0 before:h-0.5 before:bg-white before:transition-transform before:duration-300 before:ease-linear">
          Contact Us
        </router-link>
      </li>

      
    </ul>
  </nav>
</template>

<script>
import { RouterLink } from 'vue-router';

export default {
  name: "Navbar",
  data() {
    return {
      isMenuOpen: false,
    };
  },
  methods: {
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen;
    },
  },
};
</script>

<style scoped>
/* Responsive Design */
@media (max-width: 768px) {
  ul {
    display: none;
  }
  ul.flex {
    display: flex;
  }
}
</style>
