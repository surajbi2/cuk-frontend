<template>
  <div class="container mx-auto px-4 py-8">
    <div class="max-w-6xl mx-auto bg-white rounded-xl shadow-sm border border-gray-100">
      <!-- Header -->
      <div class="px-6 py-4 border-b border-gray-100">
        <div class="flex items-center justify-between">
          <h2 class="text-3xl font-semibold text-gray-900 flex items-center gap-2">
            <svg class="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"/>
            </svg>
            Notices
          </h2>
          
          <div class="flex items-center gap-3">
            <button 
              @click="handleUploadClick"
              class="flex items-center gap-2 px-4 py-2 text-md font-medium text-indigo-600 hover:bg-indigo-500 hover:text-white rounded-lg transition-colors"
            >
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"/>
              </svg>
              Upload Notice
            </button>

            <button 
  v-if="userRole === 'admin'"
  @click="showPending = !showPending"
  class="flex items-center gap-2 px-4 py-2 text-md font-medium text-gray-800 hover:bg-black hover:text-white rounded-lg transition-colors"
>
  <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
  </svg>
  {{ showPending ? "Show Approved" : "Show Pending" }}
</button>

          </div>
        </div>
      </div>

      <!-- Notices List -->
      <div class="divide-y divide-gray-100">
        <div 
          v-for="notice in notices" 
          :key="notice.id" 
          class="p-6 hover:bg-gray-50 transition-colors"
        >
          <div class="flex items-center justify-between gap-4">
            <div class="flex-1">
              <h3 class="font-bold text-xl text-gray-900 mb-1">{{ notice.title }}</h3>
              <div class="flex items-center gap-4 text-sm text-gray-500">
                <div class="flex items-center gap-1.5">
                  <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/>
                  </svg>
                  {{ formatDate(notice.event_date) }}
                </div>
                <div class="flex items-center gap-1.5">
                  <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
                  </svg>
                  {{ formatDate(notice.uploaded_at) }}
                </div>
              </div>
            </div>

            <div class="flex items-center gap-2">
              <a
                :href="`${API_PATH}/api/files/notices/download/` + notice.id"
                class="p-4 text-indigo-500 hover:text-white rounded-lg hover:bg-blue-600  transition-colors"
                title="Download"
              >
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"/>
                </svg>
              </a>

              <div v-if="userRole === 'admin'" class="flex items-center gap-2">
                <template v-if="showPending">
                  <button
                    @click="updateNoticeStatus(notice.id, 'approve')"
                    class="p-4 text-green-600 hover:bg-green-600 hover:text-white  rounded-lg transition-colors"
                    title="Approve"
                  >
                    <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
                    </svg>
                  </button>
                  <button
                    @click="updateNoticeStatus(notice.id, 'reject')"
                    class="p-4 text-red-600 hover:bg-red-600 hover:text-white rounded-lg transition-colors"
                    title="Reject"
                  >
                    <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
                    </svg>
                  </button>
                </template>
                <button
                  @click="deleteNotice(notice.id)"
                  class="p-4 text-gray-500 hover:text-white hover:bg-red-600 rounded-lg transition-colors"
                  title="Delete"
                >
                  <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"/>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Empty State -->
      <div v-if="!notices.length" class="p-12 text-center text-gray-500">
        <div class="mb-4">
          <svg class="w-12 h-12 mx-auto text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
          </svg>
        </div>
        <p class="text-gray-600">No notices available</p>
      </div>
    </div>
  </div>
</template>

<script>
import { API_PATH } from '../path/apiPath';

export default {
  data() {
    return {
      notices: [],
      userRole: "",
      showPending: false, // Admin can toggle between pending and approved notices
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
    },

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
},

async fetchNotices() {
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
button, a {
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