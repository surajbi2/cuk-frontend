<template>
  <div class="sm:m-10 m-4 rounded-lg bg-gray-100 flex items-center justify-center p-4 sm:p-8 md:p-14 drop-shadow-xl">
    <div class="bg-white p-4 sm:p-6 md:p-8 rounded-lg shadow-lg w-full max-w-lg drop-shadow-xl">
      <h2 class="text-xl sm:text-2xl font-semibold text-center text-gray-800 mb-4 sm:mb-6">Upload Notice</h2>
      
      <form @submit.prevent="uploadFile" class="space-y-3 sm:space-y-4">
        <div>
          <input
            v-model="title"
            placeholder="Notice Title"
            class="w-full px-3 py-2 text-sm sm:text-base border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
            required
          />
        </div>

        <div>
          <input
            v-model="noticeDate"
            type="date"
            class="w-full px-3 py-2 text-sm sm:text-base border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
            required
          />
        </div>

        <div>
          <input
            type="file"
            @change="handleFile"
            class="w-full px-3 py-2 text-sm sm:text-base border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
            required
          />
        </div>
        
        <div class="flex justify-center mt-4 sm:mt-6">
          <button
            type="submit"
            class="buttonDownload"
          >
            Upload
          </button>
        </div>
      </form>

      <p v-if="errorMessage" class="text-red-500 text-sm mt-3 sm:mt-4">{{ errorMessage }}</p>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      title: '',
      noticeDate: '',
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

    async uploadFile() {
      if (!this.title || !this.file || !this.noticeDate) {
        this.errorMessage = 'All fields are required!';
        return;
      }
      this.errorMessage = '';

      const formData = new FormData();
      formData.append('file', this.file);
      formData.append('title', this.title);
      formData.append('eventDate', this.noticeDate);
      
      try {
        await axios.post(`${API_PATH}/api/files/upload`, formData, {
          headers: { 
            Authorization: sessionStorage.getItem('userToken'),
            'Content-Type': 'multipart/form-data'
          },
        });

        console.log('File uploaded successfully!');
        alert('File uploaded successfully!');
        // Clear form after successful upload
        this.title = '';
        this.noticeDate = '';
        this.file = null;
        
      } catch (error) {
        console.error('Upload error:', error);
        this.errorMessage = error.response?.data?.message || 'Failed to upload file. Please try again.';
      }
    },
  },
  
  mounted() {
    this.checkAdminStatus();
  }
};
</script>

<style scoped>
.buttonDownload {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 10px 24px;
  font-size: 0.875rem;
  background: linear-gradient(135deg, #6366f1 0%, #4f46e5 100%);
  color: white;
  font-family: 'Inter', sans-serif;
  font-weight: 600;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 0 4px 6px -1px rgba(79, 70, 229, 0.1), 0 2px 4px -1px rgba(79, 70, 229, 0.06);
  position: relative;
  overflow: hidden;
  gap: 6px;
}

@media (min-width: 640px) {
  .buttonDownload {
    padding: 12px 32px;
    font-size: 1rem;
    border-radius: 12px;
    gap: 8px;
  }
}

.buttonDownload:hover {
  transform: translateY(-1px);
  box-shadow: 0 10px 15px -3px rgba(79, 70, 229, 0.1), 0 4px 6px -2px rgba(79, 70, 229, 0.05);
  background: linear-gradient(135deg, #818cf8 0%, #6366f1 100%);
}

.buttonDownload:active {
  transform: translateY(1px);
  scale: 0.98;
}

.buttonDownload::before {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.15) 0%, transparent 100%);
  opacity: 0;
  transition: opacity 0.3s ease;
}

.buttonDownload:hover::before {
  opacity: 1;
}

.buttonDownload::after {
  content: '↑';
  font-size: 1.2em;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.3s ease;
}

.buttonDownload:hover::after {
  transform: translateY(-2px);
}

/* Form input enhancements */
input[type="text"], 
input[type="date"], 
input[type="file"] {
  transition: all 0.3s ease;
  border: 2px solid #e5e7eb;
}

input[type="text"]:focus, 
input[type="date"]:focus, 
input[type="file"]:focus {
  border-color: #6366f1;
  box-shadow: 0 0 0 3px rgba(99, 102, 241, 0.1);
}

input[type="file"]::-webkit-file-upload-button {
  background: #f3f4f6;
  border: 2px solid #e5e7eb;
  padding: 6px 12px;
  font-size: 0.875rem;
  border-radius: 6px;
  cursor: pointer;
  transition: all 0.2s ease;
}

@media (min-width: 640px) {
  input[type="file"]::-webkit-file-upload-button {
    padding: 8px 16px;
    font-size: 1rem;
    border-radius: 8px;
  }
}

input[type="file"]::-webkit-file-upload-button:hover {
  background: #e5e7eb;
}

/* Mobile optimizations */
@media (max-width: 480px) {
  .buttonDownload::after {
    font-size: 1em;
  }
  
  input[type="file"] {
    font-size: 0.75rem;
  }
}
</style>