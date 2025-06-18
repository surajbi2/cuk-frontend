<template>
  <div class="w-full min-h-screen bg-gray-100 p-4 md:m-5">
    <!-- Page Heading -->
    <h1 class="text-center md:text-4xl text-xl font-bold bg-gradient-to-r from-blue-800 to-blue-600 text-white py-4 rounded-xl shadow-lg mb-8">
      IQAC Committee Members
    </h1>

    <!-- Vice Chancellor Highlight -->
    <div class="flex justify-center mb-10">
      <div class="bg-white w-full md:w-3/4 lg:w-2/3 p-6 rounded-2xl shadow-xl border-l-8 border-blue-800 hover:scale-[1.02] transition-transform duration-500">
        <div class="flex flex-col md:flex-row items-center gap-6">
          <img src="https://cuk.ac.in/Academic/Images/bsatyanarayana.jpg"
            alt="vc"
            class="w-32 h-32 md:w-40 md:h-40 rounded-full object-cover shadow-md border-4 border-blue-700" />
          <div class="text-center md:text-left">
            <h2 class="text-2xl font-bold text-blue-800">Prof. Battu Satyanarayana</h2>
            <p class="text-gray-600">Hon'ble Vice Chancellor</p>
            <p class="text-blue-600 font-semibold mt-1">Chairperson</p>
          </div>
        </div>
      </div>
    </div>

    <!-- Committee Members Grid -->
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      <div v-for="member in committeeMembers" :key="member.id"
        class="bg-white shadow-md hover:shadow-xl transition-shadow duration-300 rounded-xl p-5 flex flex-col items-center hover:scale-105 transform ">
        <img :src="member.image" :alt="member.name" class="w-28 h-28 rounded-full object-cover shadow-md border-2 border-gray-300" />
        <h2 class="text-lg font-semibold text-gray-800 mt-4 text-center">{{ member.name }}</h2>
        <p class="text-gray-600 text-sm text-center">{{ member.designation }}</p>
        <p class="text-blue-600 font-medium text-sm mt-1 text-center">{{ member.iqacRole }}</p>
      </div>
    </div>

    <!-- Official Document Section -->
    <div class="mt-10 flex justify-center">
      <div class="bg-white p-4 rounded-xl shadow-lg flex items-center justify-between w-full md:w-1/2">
        <p class="text-gray-700 font-medium">View official IQAC Committee document</p>
        <a href="https://cuk.ac.in/CUK-IQAC/pdf/IQAC%20Committee.pdf" target="_blank"
          class="bg-blue-700 hover:bg-blue-800 text-white font-bold py-2 px-6 rounded-xl transition duration-300 transform hover:scale-105">
          View
        </a>
      </div>
    </div>
  </div>
</template>

  
  <script>
  export default {
    name: "CommitteeMembers",
    data() {
      return {
        committeeMembers: [
          // { id: 1, name: "Prof. Battu Satyanarayana", designation: "Hon'ble Vice Chancellor", iqacRole: "Chairperson", image: "https://cuk.ac.in/Academic/Images/bsatyanarayana.jpg" },
          { id: 1, name: "Prof. M. Amarendra", designation: "Dept. of Electrical Engineering", iqacRole: "IQAC Convener", image: "https://cuk.ac.in/Academic/Images/Photo-Dr%20Am.jpg" },
          { id: 2, name: "Dr. Nagaraj V Dharwadkar", designation: "Dept. of Computer Science", iqacRole: "IQAC Member", image: "/deputy-director.jpg" },
          { id: 3, name: "Dr. Sandeep N", designation: "Dept. of Mathematics", iqacRole: "IQAC Member", image: "https://www.cuk.ac.in/assets/cukimg/schools/maths/Dr.N.Sandeep.jpg" },
          { id: 4, name: "Prof. Romet John", designation: "Dept. of Psychology", iqacRole: "IQAC Member", image: "https://www.cuk.ac.in/assets/cukimg/schools/psychology/John%20Sir.jpg" },
          { id: 5, name: "Prof. N. Satyanarayana", designation: "Dept. of Life Sciences", iqacRole: "IQAC Member", image: "https://cuk.ac.in/Academic/Images/Prof.%20N%20Sathyanarayana%20Life%20Sci.jpg" },
          { id: 6, name: "Prof. R.S. Hegadi", designation: "Dept. of Computer Science", iqacRole: "IQAC Member", image: "https://cuk.ac.in/Academic/Images/Dr.R.S.Hegadi.jpg" },
          { id: 7, name: "Prof. Ramana D.V.", designation: "Dept. of Chemistry", iqacRole: "IQAC Member", image: "https://cuk.ac.in/Academic/Images/Venkata%20Ramana%20Doddi.jpg" },
          { id: 8, name: "Dr. Shiva Kumar Belli", designation: "Dept. of Business Studies", iqacRole: "IQAC Member", image: "https://cuk.ac.in/Academic/Images/Dr.%20Shivkumar%20M.%20Belli.jpg" },
          { id: 9, name: "Dr. Babu N", designation: "Dept. of Geology", iqacRole: "IQAC Member", image: "https://www.cuk.ac.in/assets/cukimg/Dr.Babu%20N.jpg" },
          { id: 10, name: "Dr. Akhilesh Mishra", designation: "Dept. of Education and training", iqacRole: "IQAC Member", image: "https://cuk.ac.in/Academic/Education/images/akhilesh%20Edu.jpg" },
          { id: 11, name: "Prof. Thulasimala", designation: "Executive Council Member", iqacRole: "IQAC Member", image: "https://www.kswu.ac.in/kannada/Uploads/VC/VC-Prof.B.K.Tulasimala-Ksawuv.JPG" },
          { id: 12, name: "Dr. Kota Sai Krishna", designation: "Controller of Examination", iqacRole: "IQAC Member", image: "https://cuk.ac.in/images/Shri%20Kota%20Sai%20Krishna%20CoE.jpeg" },
          { id: 13, name: "Dr. Shaik Azaruddin", designation: "Deputy Registrar Adm. & Gov.", iqacRole: "IQAC Member", image: "https://www.cuk.ac.in/assets/images/Other%20Officers/Azhar.jpg" },
          { id: 14, name: "Dr. P.S. Shankar ", designation: "Local Society", iqacRole: "IQAC Member", image: "/images.jpg" },
          { id: 15, name: "Sri. Prakash Mankar", designation: "Industrialist", iqacRole: "IQAC Member", image: "/user.png" },
          
        ]
      };
    }
  };
  </script>
  
  <style scoped>
  /* Additional styling */
  </style>
  