<template>
  <div class="survey-container">
    <div class="survey-header">
      <div class="flex items-center gap-4">
        <svg class="document-icon" viewBox="0 0 24 24" fill="white" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
          <path d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
          <path d="M12 3v6h6" class="text-blue-600"/>
        </svg>
        <h1>Student Satisfaction Survey Reports</h1>
      </div>

      <button v-if="isAdmin" @click="showUploadForm = !showUploadForm" 
              class="flex items-center gap-2 px-4 py-2 text-sm font-medium text-white bg-white/10 hover:bg-white/20 rounded-lg transition-colors">
        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"/>
        </svg>
        Upload Survey Report
      </button>
    </div>
    
    <!-- Upload Form -->
    <div v-if="isAdmin && showUploadForm" class="mb-8 bg-white p-6 rounded-xl shadow-lg">
      <h2 class="text-xl font-semibold text-gray-800 mb-4">Upload Survey Report</h2>
      <form @submit.prevent="handleUpload" class="space-y-4">
        <div>
          <label class="block text-sm font-medium text-gray-700">Title</label>
          <input v-model="uploadForm.title" type="text" required
                 class="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 text-gray-900 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"/>
        </div>
        
        <div>
          <label class="block text-sm font-medium text-gray-700">Year</label>
          <input v-model="uploadForm.year" type="text" required placeholder="YYYY-YY"
                 class="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 text-gray-900 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"/>
        </div>

        <div>
          <label class="block text-sm font-medium text-gray-700">Survey File (PDF)</label>
          <input type="file" @change="handleFileChange" accept=".pdf" required
                 class="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 text-gray-900 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"/>
        </div>

        <div class="flex justify-end gap-3">
          <button type="button" @click="showUploadForm = false"
                  class="px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 rounded-lg transition-colors">
            Cancel
          </button>
          <button type="submit" 
                  class="px-4 py-2 text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 rounded-lg transition-colors">
            Upload Report
          </button>
        </div>
      </form>
    </div>
    
    <!-- Reports Grid -->
    <div class="grid-container">  
    <a v-for="(item, index) in surveys" 
         :key="index"
         :href="item.link" 
         @click.prevent="handleDownload(item)"
         target="_blank"
         class="report-card"
         :style="`--hue: ${index * 40}`">
        <div class="card-content">
          <span class="year-badge">{{ item.type }}</span>
          <span class="report-year">{{ item.year }}</span>
          <div class="description">{{ item.description }}</div>
          <svg class="pdf-icon" viewBox="0 0 24 24">
            <path d="M14 2v6h6v12H4V2h10m2-2H2v20h20V8l-6-6z"/>
            <path d="M16 13h-3v6h-2v-6H8v-2h8v2zM11 7h2v2h-2z"/>
          </svg>
        </div>
      </a>
    </div>
  </div>
</template>

<script>
import { API_PATH } from '../path/apiPath';
import axios from 'axios';

export default {
  name: "StudentSurvey",
  data() {
    return {
      isAdmin: false,
      showUploadForm: false,
      uploadForm: {
        title: '',
        year: '',
        file: null
      },
      surveys: [
        {
          type: 'SSS',
          year: '2023-24',
          description: 'Student Satisfaction Survey',
          link: 'https://cuk.ac.in/CUK-IQAC/studentsaf.php'
        },
        {
          type: 'SSS',
          year: '2022-23',
          description: 'Student Satisfaction Survey Report',
          link: 'https://cuk.ac.in/CUK-IQAC/pdf/Student%20Satisfaction%20Survey%202022-23.pdf'
        },
        {
          type: 'SSS',
          year: '2021-22',
          description: 'Student Satisfaction Survey Analysis',
          link: 'https://cuk.ac.in/CUK-IQAC/pdf/SSS%202021-22.pdf'
        }
      ]
    };
  },
  methods: {
    async checkAdminStatus() {
      try {
        const token = sessionStorage.getItem('userToken');
        if (token) {
          console.log('Checking admin status with token:', token);
          const response = await axios.get(`${API_PATH}/api/auth/check-admin`, {
            headers: { Authorization: token }
          });
          console.log('Admin check response:', response.data);
          this.isAdmin = response.data.isAdmin;
        } else {
          console.log('No token found in session storage');
          this.isAdmin = false;
        }
      } catch (error) {
        console.error('Error checking admin status:', error.response || error);
        this.isAdmin = false;
      }
    },
    handleFileChange(event) {
      this.uploadForm.file = event.target.files[0];
    },
    async handleUpload() {
      try {
        const formData = new FormData();
        formData.append('file', this.uploadForm.file);
        formData.append('title', this.uploadForm.title);
        formData.append('year', this.uploadForm.year);
          console.log('Uploading survey with data:', {
            title: this.uploadForm.title,
            year: this.uploadForm.year,
            fileSize: this.uploadForm.file?.size
        });

        await axios.post(`${API_PATH}/api/surveys/upload`, formData, {
          headers: { 
            Authorization: sessionStorage.getItem('userToken'),
            'Content-Type': 'multipart/form-data'
          }
        });

        // Clear form and hide it
        this.uploadForm = { title: '', year: '', file: null };
        this.showUploadForm = false;
        
        // Refresh survey list
        await this.fetchSurveys();
        
      } catch (error) {
        console.error('Upload error:', error);
        alert('Failed to upload survey report. Please try again.');
      }
    },   
    async fetchSurveys() {
      try {
        console.log('Fetching surveys...');
        const response = await axios.get(`${API_PATH}/api/surveys`);
        console.log('Surveys fetched:', response.data);
        this.surveys = response.data;  // Replace instead of append
      } catch (error) {
        console.error('Error fetching surveys:', error);
      }
    },
    handleDownload(survey) {      try {
        // Handle external links (starting with http/https)
        if (survey.link.startsWith('http')) {
          window.open(survey.link, '_blank');
          return;
        }

        // For local files
        const viewUrl = `${API_PATH}${survey.link}`;
        console.log('Opening survey at:', viewUrl);
        window.open(viewUrl, '_blank');
      } catch (error) {
        console.error('Error opening file:', error);
        alert('Failed to open the survey report. Please try again.');
      }
    },
    handleView(survey) {
        try {
            console.log('Viewing survey:', survey);
            const viewUrl = `${API_PATH}/api/surveys/file/${survey.id}`;
            window.open(viewUrl, '_blank');
        } catch (error) {
            console.error('Error viewing survey:', error);
            alert('Error viewing survey. Please try again.');
        }
    }
  },
  mounted() {
    this.checkAdminStatus();
    this.fetchSurveys();
  }
};
</script>

<style scoped>
.survey-container {
  background: linear-gradient(195deg, #f8f9fc 0%, #f1f5f9 100%);
  border: 1px solid rgba(255, 255, 255, 0.3);
  border-radius: 1.5rem;
  padding: 2rem;
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.08);
  backdrop-filter: blur(12px);
  max-width: 1200px;
  margin: 2rem auto;
}

.survey-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 2.5rem;
  padding: 1.5rem;
  background: linear-gradient(45deg, #1e3a8a 0%, #2563eb 100%);
  border-radius: 1rem;
  color: white;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
}

.survey-header h1 {
  font-size: 1.75rem;
  font-weight: 600;
  letter-spacing: -0.025em;
  margin: 0;
}

.document-icon {
  width: 2.5rem;
  height: 2.5rem;
  stroke: #1e3a8a;
}

.document-icon .text-blue-600 {
  stroke: #2563eb;
}

.grid-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1.5rem;
  padding: 1rem;
}

.report-card {
  position: relative;
  background: white;
  border-radius: 1rem;
  padding: 1.5rem;
  transition: all 0.3s ease;
  border: 1px solid #e5e7eb;
  text-decoration: none;
  color: inherit;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05);
}

.report-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1);
  background: linear-gradient(135deg, 
    hsl(var(--hue), 70%, 98%) 0%, 
    hsl(var(--hue), 70%, 95%) 100%
  );
}

.card-content {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.year-badge {
  display: inline-block;
  padding: 0.25rem 0.75rem;
  background-color: #e0e7ff;
  color: #4338ca;
  border-radius: 9999px;
  font-size: 0.875rem;
  font-weight: 500;
}

.report-year {
  font-size: 1.5rem;
  font-weight: 600;
  color: #1e293b;
}

.description {
  font-size: 0.875rem;
  color: #64748b;
  line-height: 1.25rem;
}

.pdf-icon {
  width: 1.5rem;
  height: 1.5rem;
  fill: currentColor;
  opacity: 0.5;
  margin-top: 0.5rem;
}

@media (max-width: 640px) {
  .survey-container {
    margin: 1rem;
    padding: 1rem;
  }

  .survey-header {
    padding: 1rem;
  }

  .survey-header h1 {
    font-size: 1.25rem;
  }

  .grid-container {
    grid-template-columns: 1fr;
  }
}
</style>
