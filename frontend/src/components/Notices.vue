<template>
  <div class="container mx-auto px-4 py-8">
    <div class="max-w-6xl mx-auto bg-white rounded-xl shadow-sm border border-gray-100">
      <!-- Header -->
      <div class="px-6 py-4 border-b border-gray-100">
        <div class="flex items-center justify-between">
          <h2 class="text-3xl font-semibold text-gray-900 flex items-center gap-2">
            <svg class="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
            </svg>
            Notices
          </h2>

          <div class="flex items-center gap-3">
            <button @click="handleUploadClick"
              class="flex items-center gap-2 px-4 py-2 text-md font-medium text-indigo-600 hover:bg-indigo-500 hover:text-white rounded-lg transition-colors">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4" />
              </svg>
              Upload Notice
            </button>

            <button v-if="userRole === 'admin'" @click="showPending = !showPending"
              class="flex items-center gap-2 px-4 py-2 text-md font-medium text-gray-800 hover:bg-black hover:text-white rounded-lg transition-colors">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              {{ showPending ? "Show Approved" : "Show Pending" }}
            </button>

          </div>
        </div>
      </div>      <!-- Loading State -->
      <div v-if="loading" class="p-12 text-center">
        <div class="inline-block animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-indigo-600"></div>
        <p class="mt-2 text-gray-600">Loading notices...</p>
      </div>

      <!-- Notices List -->
      <div v-else class="divide-y divide-gray-100">
        <div v-for="notice in notices" :key="notice.id" class="p-6 hover:bg-gray-50 transition-colors">
          <div class="flex items-center justify-between gap-4">
            <div class="flex-1">
              <h3 class="font-bold text-xl text-gray-900 mb-1">{{ notice.title }}</h3>
              <div class="flex flex-col gap-2 text-sm text-gray-500">
                <div class="flex items-center gap-1.5">
                  <img src="/edit_calendar.png" alt="calendar" style="color: black;">
                  <span class="font-bold">notice_date:</span> {{ formatDate(notice.event_date) }}
                </div>
                <div class="flex items-center gap-1.5">
                  <img src="/calendar_month.png" alt="calendar">
                  <span class="font-bold">uploaded_at:</span> {{ formatDate(notice.uploaded_at) }}
                </div>
              </div>
            </div>
            <div class="flex items-center gap-2">
              <!-- View Button -->
              <button 
                class="p-4 text-blue-500 hover:text-white rounded-lg hover:bg-blue-600 transition-colors"
                :class="{ 'opacity-50 cursor-not-allowed': notice.loading }"
                :disabled="notice.loading"
                title="View" 
                @click="handleView(notice.id)"
              >
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/>
                </svg>
              </button>

              <!-- Download Button -->
              <button 
                class="p-4 text-indigo-500 hover:text-white rounded-lg hover:bg-indigo-600 transition-colors"
                :class="{ 'opacity-50 cursor-not-allowed': notice.loading }"
                :disabled="notice.loading"
                title="Download" 
                @click="handleDownload(notice.id)"
              >
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"/>
                </svg>
              </button>


              <div v-if="userRole === 'admin'" class="flex items-center gap-2">
                <template v-if="showPending">
                  <button @click="updateNoticeStatus(notice.id, 'approve')"
                    class="p-4 text-green-600 hover:bg-green-600 hover:text-white  rounded-lg transition-colors"
                    title="Approve">
                    <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                    </svg>
                  </button>
                  <button @click="updateNoticeStatus(notice.id, 'reject')"
                    class="p-4 text-red-600 hover:bg-red-600 hover:text-white rounded-lg transition-colors"
                    title="Reject">
                    <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </template>
                <button @click="deleteNotice(notice.id)"
                  class="p-4 text-gray-500 hover:text-white hover:bg-red-600 rounded-lg transition-colors"
                  title="Delete">
                  <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                      d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>      <!-- Empty State -->
      <div v-if="!loading && !notices.length" class="p-12 text-center text-gray-500">
        <div class="mb-4">
          <svg class="w-12 h-12 mx-auto text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>
        <p v-if="error" class="text-red-600">{{ error }}</p>
        <p v-else class="text-gray-600">No notices available</p>
      </div>

      <!-- Loading State -->
      
    </div>
  </div>
</template>

<script>
import { API_PATH } from '../path/apiPath';

export default {
  data() {
    return {      API_PATH,
      notices: [],
      userRole: "",
      showPending: false, // Admin can toggle between pending and approved notices
      loading: true, // Loading state for notices
      error: null
    };
  },

  async created() {
    this.getUserRole();
    await this.fetchNotices();
  },

  methods: {
    getUserRole() {
      const token = sessionStorage.getItem("userToken");
      if (token) {
        try {
          const payload = JSON.parse(atob(token.split(".")[1])); // Decode JWT
          this.userRole = payload.role;
        } catch (error) {
          console.error("Error decoding token:", error);
        }
      }
    },

    handleUploadClick() {
      if (!sessionStorage.getItem("userToken")) {
        this.$router.push("/login");
      } else {
        this.$router.push("/upload");
      }  
      },    async handleView(noticeId) {
        if (!API_PATH) {
          alert("API Path is not set properly!");
          return;
        }

        try {
          let noticeIndex = this.notices.findIndex(n => n.id === noticeId);
          if (noticeIndex === -1) {
            throw new Error('Notice not found');
          }

          // Update loading state
          this.notices[noticeIndex] = { ...this.notices[noticeIndex], loading: true };

          console.log('Initiating view for notice:', this.notices[noticeIndex]);
          const viewUrl = `${API_PATH}/api/files/file/${noticeId}`;
          
          const response = await fetch(viewUrl, {
            headers: {
              'Authorization': `${sessionStorage.getItem("userToken")}`,
              'Accept': 'application/pdf'
            },
            credentials: 'include'
          });

          if (!response.ok) {
            throw new Error(response.status === 404 ? 'File not found' : 'Failed to view file');
          }

          // Get content type from response
          const contentType = response.headers.get('Content-Type');
          console.log('Content Type:', contentType);

          const blob = await response.blob();
          const fileURL = URL.createObjectURL(blob);

          // Open in new tab
          const newWindow = window.open('', '_blank');
          if (newWindow) {
            newWindow.location.href = fileURL;
          } else {
            // If popup was blocked, create an iframe
            const iframe = document.createElement('iframe');
            iframe.style.display = 'none';
            document.body.appendChild(iframe);
            iframe.src = fileURL;
          }

          // Clean up the object URL after a delay
          setTimeout(() => URL.revokeObjectURL(fileURL), 1000);        } catch (error) {
          console.error('View error:', error);
          alert(error.message || 'Failed to open file. Please try again.');
        } finally {
          // Update loading state back to false
          let noticeIndex = this.notices.findIndex(n => n.id === noticeId);
          if (noticeIndex !== -1) {
            this.notices[noticeIndex] = { ...this.notices[noticeIndex], loading: false };
          }
        }
      }
,
    async deleteNotice(noticeId) {
      if (confirm("Are you sure you want to delete this notice?")) {
        try {
          const response = await fetch(`${API_PATH}/api/files/notices/${noticeId}`, {
            method: "DELETE",
            headers: {
              Authorization: sessionStorage.getItem("userToken"),
            },
            body: JSON.stringify({ status: 0 }), // Soft delete by setting status to 0
          });

          if (response.ok) {
            this.fetchNotices();
          } else {
            console.error("Failed to delete notice.");
          }
        } catch (error) {
          console.error("Error deleting notice:", error);
        }
      }
    },    async handleDownload(noticeId) {
      if (!API_PATH) {
        alert("API Path is not set properly!");
        return;
      }

      try {
        let noticeIndex = this.notices.findIndex(n => n.id === noticeId);
        if (noticeIndex === -1) {
          throw new Error('Notice not found');
        }

        // Update loading state
        this.notices[noticeIndex] = { ...this.notices[noticeIndex], loading: true };

        console.log('Initiating download for notice:', this.notices[noticeIndex]);
        const downloadUrl = `${API_PATH}/api/files/notices/download/${noticeId}`;

        const response = await fetch(downloadUrl, {
          headers: {
            'Authorization': `${sessionStorage.getItem("userToken")}`
          },
          credentials: 'include'
        });

        if (!response.ok) {
          throw new Error(response.status === 404 ? 'File not found' : 'Download failed');
        }

        const blob = await response.blob();
        const url = window.URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.download = this.notices[noticeIndex].title + '.pdf';
        document.body.appendChild(link);
        link.click();
        link.remove();
        window.URL.revokeObjectURL(url);

      } catch (error) {
        console.error('Download error:', error);
        alert(error.message || 'Failed to download file. Please try again.');
      } finally {
        // Update loading state back to false
        let noticeIndex = this.notices.findIndex(n => n.id === noticeId);
        if (noticeIndex !== -1) {
          this.notices[noticeIndex] = { ...this.notices[noticeIndex], loading: false };
        }
      }
    },

    async fetchNotices() {
      this.loading = true;
      this.error = null;
      
      try {
        const endpoint = this.showPending
          ? `${API_PATH}/api/files/notices/pending`
          : `${API_PATH}/api/files/notices`;

        const response = await fetch(endpoint, {
          headers: { Authorization: sessionStorage.getItem("userToken") },
        });

        if (!response.ok) {
          throw new Error("Failed to fetch notices.");
        }

        this.notices = await response.json();
        console.log("Fetched Notices:", this.notices); // Debugging log
        this.loading = false;
      } catch (error) {
        console.error("Error fetching notices:", error);
      }
    },
    // Update the PUT request body
    async updateNoticeStatus(noticeId, action) {
      try {
        const response = await fetch(
          `${API_PATH}/api/files/notices/approve/${noticeId}`,
          {
            method: "PUT",
            headers: {
              "Content-Type": "application/json",
              Authorization: sessionStorage.getItem("userToken"),
            },
            body: JSON.stringify({
              action: action.toLowerCase() // Ensure lowercase
            }),
          }
        );

        const data = await response.json();

        if (!response.ok) {
          throw new Error(data.message || "Status update failed");
        }

        await this.fetchNotices();
        console.log("Status updated successfully:", data.message);

      } catch (error) {
        console.error("Update error:", error.message);
        alert(`Update failed: ${error.message}`);
      }
    },
    formatDate(dateStr) {
      const date = new Date(dateStr);
      return date.toISOString().split("T")[0];
    },
  },

  watch: {
    showPending(newVal) {
      console.log("Toggled Show Pending:", newVal);
      this.fetchNotices();
    },
  },
};
</script>

<style scoped>
.container {
  max-width: 1200px;
}

/* Smooth transitions */
button,
a {
  transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
}

/* Hover effects */
.hover\:bg-indigo-50:hover {
  background-color: rgba(238, 242, 255, 0.5);
}

/* Minimal shadow */
.rounded-xl {
  border-radius: 12px;
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .px-6 {
    padding-left: 1rem;
    padding-right: 1rem;
  }

  .flex.items-center.justify-between {
    flex-direction: column;
    align-items: stretch;
    gap: 1rem;
  }
}
</style>