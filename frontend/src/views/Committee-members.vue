<template>
    <div class="w-auto min-h-screen bg-gray-100 p-4 border-slate-100 rounded-lg border-2 m-5">
      <h1 class="text-center text-3xl bg-blue-950 rounded-xl font-bold text-white p-2 my-3">IQAC Committee Members</h1>
      <div class="flex flex-col md:flex-row">
      <div class="md:w-[50%] w-[100%] my-5 bg-white p-5 rounded-xl transform hover:scale-105 flex transition-all duration-700 ease-in-out">
        <div class="vc flex md:flex-row flex-col items-center">
     
          <img src="https://cuk.ac.in/Academic/Images/bsatyanarayana.jpg" alt="vc" class="w-24 h-24 md:ml-14 md:w-32 md:h-32 rounded-full object-cover shadow-md">
          <div class="flex flex-col md:items-center items-center md:ml-32">
        
          <h2 class="md:text-xl font-semibold text-gray-800 mt-3">Prof. Battu Satyanarayana</h2>
          <p class="text-gray-600 text-sm">Hon'ble Vice Chancellor</p>
          <p class="text-blue-600 font-medium text-sm mt-1">Chairperson</p>
           </div>
   

        </div>
    
  </div>
  

    </div>
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <div v-for="member in committeeMembers" :key="member.id" 
          class="bg-white shadow-lg rounded-xl p-5 flex flex-col items-center transition-transform transform hover:scale-105">
  
          <img :src="member.image" :alt="member.name" class="w-32 h-32 rounded-full object-cover shadow-md">
  
          <h2 class="text-xl font-semibold text-gray-800 mt-3">{{ member.name }}</h2>
          <p class="text-gray-600 text-sm">{{ member.designation }}</p>
          <p class="text-blue-600 font-medium text-sm mt-1">{{ member.iqacRole }}</p>
        </div>
      </div>
      <div class="md:w-[23%] w-[100%] md:m-5 md:mx-1 my-2 bg-white p-3 rounded-xl flex ">
        <div class="w-full flex items-center justify-start">
         <p class="m-3">View official document</p>
          <a href="https://cuk.ac.in/CUK-IQAC/pdf/IQAC%20Committee.pdf" target="_blank" class="flex bg-blue-600 hover:bg-blue-800 hover:transform hover:scale-110 font-bold transition-all duration-700 ease-in-out text-white p-2 md:p-3 md:px-8 rounded-xl">view</a>
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
          { id: 2, name: "Prof. Romet John", designation: "Dept. of Psychology", iqacRole: "IQAC Member", image: "https://www.cuk.ac.in/assets/cukimg/schools/psychology/John%20Sir.jpg" },
          { id: 3, name: "Prof. N. Satyanarayana", designation: "Dept. of Life Sciences", iqacRole: "IQAC Member", image: "https://cuk.ac.in/Academic/Images/Prof.%20N%20Sathyanarayana%20Life%20Sci.jpg" },
          { id: 4, name: "Prof. R.S. Hegadi", designation: "Dept. of Computer Science", iqacRole: "IQAC Member", image: "https://cuk.ac.in/Academic/Images/Dr.R.S.Hegadi.jpg" },
          { id: 5, name: "Prof. Ramana D.V.", designation: "Dept. of Chemistry", iqacRole: "IQAC Member", image: "https://cuk.ac.in/Academic/Images/Venkata%20Ramana%20Doddi.jpg" },
          { id: 6, name: "Dr. Shiva Kumar Belli", designation: "Dept. of Business Studies", iqacRole: "IQAC Member", image: "https://cuk.ac.in/Academic/Images/Dr.%20Shivkumar%20M.%20Belli.jpg" },
          { id: 7, name: "Dr. Sandeep N", designation: "Dept. of Mathematics", iqacRole: "IQAC Member", image: "https://www.cuk.ac.in/assets/cukimg/schools/maths/Dr.N.Sandeep.jpg" },
          { id: 8, name: "Dr. Babu N", designation: "Dept. of Geology", iqacRole: "IQAC Member", image: "https://www.cuk.ac.in/assets/cukimg/Dr.Babu%20N.jpg" },
          { id: 9, name: "Dr. Akhilesh Mishra", designation: "Dept. of Education and training", iqacRole: "IQAC Member", image: "https://cuk.ac.in/Academic/Education/images/akhilesh%20Edu.jpg" },
          { id: 10, name: "Prof. Thulasimala", designation: "Executive Council Member", iqacRole: "IQAC Member", image: "https://www.kswu.ac.in/kannada/Uploads/VC/VC-Prof.B.K.Tulasimala-Ksawuv.JPG" },
          { id: 11, name: "Mr. Kota Sai Krishna", designation: "Controller of Examination", iqacRole: "IQAC Member", image: "https://cuk.ac.in/images/Shri%20Kota%20Sai%20Krishna%20CoE.jpeg" },
          { id: 12, name: "Dr. Shaik Azaruddin", designation: "Deputy Registrar Adm. & Gov.", iqacRole: "IQAC Member", image: "https://www.cuk.ac.in/assets/images/Other%20Officers/Azhar.jpg" },
          { id: 13, name: "Dr. P.S. Shankar ", designation: "Local Society", iqacRole: "IQAC Member", image: "src/assets/images.jpg" },
          { id: 14, name: "Sri. Prakash Mankar", designation: "Industrialist", iqacRole: "IQAC Member", image: "https://randomuser.me/api/portraits/men/13.jpg" },
          { id: 15, name: "Prof. Ganesh Pawar", designation: "Director IQAC Cell", iqacRole: "IQAC Member Convener", image: "https://cuk.ac.in/CUK-IQAC/img/director.jpeg" },
          
        ]
      };
    }
  };
  </script>
  
  <style scoped>
  /* Additional styling */
  </style>
  