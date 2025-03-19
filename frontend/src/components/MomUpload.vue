<template>
  <div class="md:m-10 rounded-xl flex items-center justify-center p-5 md:p-8">
    <div class="bg-white p-8 rounded-xl shadow-sm border border-gray-100 w-full max-w-xl">
      <!-- Header -->
      <div class="flex flex-col items-center mb-8 space-y-2">
        <svg class="w-10 h-10 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
        </svg>
        <h2 class="text-2xl font-semibold text-gray-900">Upload Meeting Report</h2>
      </div>

      <form @submit.prevent="uploadMoM" class="space-y-6">
        <!-- Title Input -->
        <div class="space-y-1">
          <div class="flex items-center gap-3 px-4 py-2 border border-gray-200 rounded-lg focus-within:border-indigo-500 focus-within:ring-1 focus-within:ring-indigo-500">
            <svg class="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"/>
            </svg>
            <input
              v-model="title"
              placeholder="Report title"
              class="w-full bg-transparent focus:outline-none"
              required
            />
          </div>
        </div>

        <!-- Date Input -->
        <div class="space-y-1">
          <div class="flex items-center gap-3 px-4 py-2 border border-gray-200 rounded-lg focus-within:border-indigo-500 focus-within:ring-1 focus-within:ring-indigo-500">
            <svg class="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/>
            </svg>
            <input
              v-model="date"
              type="date"
              class="w-full bg-transparent focus:outline-none"
              required
            />
          </div>
        </div>

        <!-- File Input -->
        <div class="space-y-1">
          <label class="flex flex-col items-center w-full px-4 py-6 border-2 border-dashed border-gray-200 rounded-lg hover:border-indigo-400 transition-colors cursor-pointer">
            <input
              type="file"
              @change="handleFile"
              class="hidden"
              required
            />
            <svg class="w-8 h-8 text-gray-400 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"/>
            </svg>
            <span class="text-sm text-gray-600">
              {{ file ? file.name : 'Choose file...' }}
            </span>
          </label>
        </div>

        <!-- Submit Button -->
        <div class="pt-4">
          <button 
            type="submit" 
            class="w-full flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-indigo-600 to-indigo-500 text-white rounded-lg font-medium hover:from-indigo-700 hover:to-indigo-600 transition-all shadow-sm hover:shadow-md"
            v-if="isAdmin"
          >
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"/>
            </svg>
            Upload Report
          </button>
          
          <div v-else class="p-3 text-center text-red-600 bg-red-50 rounded-lg flex items-center justify-center gap-2">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"/>
            </svg>
            <span>Admin access required</span>
          </div>
        </div>

        <!-- Error Message -->
        <p v-if="errorMessage" class="text-sm text-center text-red-600 flex items-center justify-center gap-2">
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"/>
          </svg>
          {{ errorMessage }}
        </p>
      </form>
    </div>
  </div>
</template>
  
  <script>
  import axios from 'axios';
  import { RouterLink } from 'vue-router';

  export default {
    data() {
      return {
        title: '',
        date: '',
        file: null,
        errorMessage: '',
        isAdmin: false,
      };
    },
  
    methods: {
      async checkAdminStatus() {
        try {
          const token = sessionStorage.getItem('userToken');
          if (token) {
            const response = await axios.get(`${API_PATH}/api/auth/check-admin`, {
              headers: { Authorization: token }
            });
            this.isAdmin = response.data.isAdmin;
          }
        } catch (error) {
          console.error('Error checking admin status:', error);
        }
      },
  
      handleFile(event) {
        this.file = event.target.files[0];
      },
  
      async uploadMoM() {
        if (!this.title || !this.date || !this.file) {
          this.errorMessage = 'All fields are required!';
          return;
        }
        this.errorMessage = '';
  
        const formData = new FormData();
        formData.append('file', this.file);
        formData.append('title', this.title);
        formData.append('date', this.date);
  
        try {
          await axios.post(`${API_PATH}/api/mom/mom-upload`, formData, {
            headers: { Authorization: sessionStorage.getItem('userToken') },
          });
  
          alert('Minutes of Meeting uploaded successfully!');
        } catch (error) {
          console.error('Upload error:', error);
          this.errorMessage = 'Failed to upload file. Please try again.';
        }
      },
    },
    mounted() {
      this.checkAdminStatus();
    }
  };
  </script>
  
  <style scoped>
/* Smooth transitions */
button, label, input {
  transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
}

/* Custom date input arrow */
input[type="date"]::-webkit-calendar-picker-indicator {
  filter: invert(0.5);
}

/* File input hover state */
label:hover {
  border-color: #6366f1;
  background-color: rgba(238, 242, 255, 0.3);
}
</style>
