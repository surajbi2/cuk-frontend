
<template>
  <div class="md:m-10 rounded-xl flex items-center justify-center p-5 md:p-8">
    <div class="w-full max-w-4xl space-y-6 px-2 mx-2">
      <!-- Header -->
      <div class="flex items-center justify-between pb-4 border-b border-gray-200">
        <div class="flex items-center gap-3">
          <svg class="w-7 h-7 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"/>
          </svg>
          <h2 class="text-2xl font-semibold text-gray-900">Meeting Reports</h2>
        </div>
        <RouterLink 
          to="/m-o-m"
          class="flex items-center gap-2 px-4 py-2 text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 rounded-lg transition-colors"
        >
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"/>
          </svg>
          Upload Report
        </RouterLink>
      </div>

      <!-- Loading & Error States -->
      <div v-if="loading" class="space-y-4 animate-pulse">
        <div v-for="i in 3" :key="i" class="h-16 bg-gray-100 rounded-lg"></div>
      </div>
      <div v-else-if="errorMessage" class="p-6 text-center text-red-600 bg-red-50 rounded-lg">
        {{ errorMessage }}
      </div>

      <!-- Reports List -->
      <ul v-else class="divide-y divide-gray-100 ">
        <li 
          v-for="report in reports" 
          :key="report.id" 
          class="py-4 px-2 hover:bg-gray-50 transition-colors"
        >
          <div class="flex items-center justify-between">
            <div class="space-y-1">
              <h3 class="font-bold text-gray-900">{{ report.title }}</h3>
              <div class="flex items-center gap-2 text-md text-gray-500">
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/>
                </svg>
                <span>{{ formatDate(report.date) }}</span>
              </div>
            </div>

            <div class="flex items-center gap-2">
              <a
                :href="API_PATH ? `${API_PATH}/api/mom/download/${report.id}` : '#'"
                class="p-4 text-indigo-500 hover:text-white rounded-lg hover:bg-blue-500"
                title="Download"
                @click="handleDownload(report.id)"
              >
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"/>
                </svg>
              </a>

              <button 
                v-if="isAdmin"
                @click="deleteReport(report.id)"
                class="p-4 text-gray-500 hover:text-white rounded-lg hover:bg-red-500"
                title="Delete"
              >
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"/>
                </svg>
              </button>
            </div>
          </div>
        </li>
      </ul>

      <!-- Empty State -->
      <div v-if="!loading && !reports.length" class="p-8 text-center text-gray-500">
        <div class="mb-4">
          <svg class="w-12 h-12 mx-auto text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
          </svg>
        </div>
        <p class="text-gray-600">No reports available</p>
      </div>
    </div>
  </div>
</template>
  
  <script>
  import { API_PATH } from '../path/apiPath';
  import axios from 'axios';
  import { RouterLink } from 'vue-router';
  export default {
    data() {
  return {
    API_PATH,
    reports: [],
    loading: true,
    errorMessage: '',
    isAdmin: false,
  };
},

  
methods: {
  async fetchReports() {
    try {
      const response = await axios.get(`${API_PATH}/api/mom/reports`);
      this.reports = response.data
    } catch (error) {
      console.error('❌ Error fetching reports:', error);
      this.errorMessage = 'Failed to load reports.';
    } finally {
      this.loading = false;
    }
  },
  async handleDownload(noticeId) {
  if (!API_PATH) {
    alert("API Path is not set properly!");
    return;
  }
  const downloadUrl = `${API_PATH}/api/mom/download/${noticeId}`;
  window.location.href = downloadUrl;
},
  async deleteReport(id) {
    if (!confirm('Are you sure you want to delete this file?')) return;

    try {
      await axios.delete(`${API_PATH}/api/mom/reports/${id}`);
      this.reports = this.reports.filter(report => report.id !== id);
    } catch (error) {
      console.error('❌ Error deleting report:', error);
      alert('Failed to delete the file.');
    }
  },

  formatDate(dateString) {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  },
},

mounted() {
  const role = sessionStorage.getItem('userRole'); // Get role from localStorage
  this.isAdmin = role && role.trim().toLowerCase() === 'admin'; // Ensure proper comparison
  console.log("Admin status:", this.isAdmin); // Debugging
  this.fetchReports();
}


  };
  </script>
  
  <style scoped>
  /* Smooth transitions */
  button, a {
    transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
  }
  
  /* Responsive adjustments */
  @media (max-width: 768px) {
    .md\:p-8 {
      padding: 1.5rem;
    }
    
    .text-2xl {
      font-size: 1.25rem;
    }
    
    .flex.items-center.justify-between {
      flex-direction: column;
      align-items: stretch;
      gap: 1rem;
    }
  }
  </style>
  