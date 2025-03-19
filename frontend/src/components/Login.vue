<template>
  <div class="flex py-4 justify-center bg-gray-50 px-4">
    <form class="auth-form" @submit.prevent="handleLogin">
      <!-- Header -->
      <div class="form-header">
        <h1 class="text-3xl font-bold">Welcome Back</h1>
        <p class="mt-2 text-gray-300">Sign in to continue to access IQAC Portal</p>
      </div>

      <!-- Content -->
      <div class="form-content">
        <!-- Email Input -->
        <div class="input-group">
          <label class="input-label">Email Address</label>
          <div class="input-container">
            <svg class="input-icon" viewBox="0 0 24 24">
              <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 14H4V8l8 5 8-5v10zm-8-7L4 6h16l-8 5z"/>
            </svg>
            <input 
              v-model="email"
              type="email"
              placeholder="name@university.edu"
              class="input-field"
              required
            />
          </div>
        </div>

        <!-- Password Input -->
        <div class="input-group">
          <label class="input-label">Password</label>
          <div class="input-container">
            <svg class="input-icon" viewBox="0 0 24 24">
              <path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2z"/>
            </svg>
            <input 
              v-model="password"
              type="password"
              placeholder="••••••••"
              class="input-field"
              required
            />
          </div>
        </div>

        <!-- Submit Button -->
        <button type="submit" class="submit-button group">
  Sign In
  <svg class="w-5 h-5 ml-2 opacity-0 group-hover:opacity-100 transition-all duration-300" 
       fill="none" 
       stroke="currentColor" 
       viewBox="0 0 24 24">
    <path stroke-linecap="round" 
          stroke-linejoin="round" 
          stroke-width="2" 
          d="M17 8l4 4m0 0l-4 4m4-4H3"/>
  </svg>
</button>

        <!-- Error Message -->
        <div v-if="error" class="error-message">
          <svg class="error-icon" viewBox="0 0 24 24">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"/>
          </svg>
          <span>{{ error }}</span>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
  import { API_PATH } from '../path/apiPath.js';
export default {
  data() {
    return {
      email: '',
      password: '',
      error: ''
    };
  },
  methods: {
    async handleLogin() {
      try {
        const response = await fetch(`${API_PATH}/api/auth/login`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ email: this.email, password: this.password })
        });

        const data = await response.json();
        if (response.ok) {
          sessionStorage.setItem('userToken', data.token);
          sessionStorage.setItem('userRole', data.role);
          window.location.href = '/upload';
        } else {
          this.error = data.error || 'Login failed';
        }
      } catch (err) {
        this.error = 'An error occurred during login';
        console.error('Login error:', err);
      }
    }
  }
};
</script>

<style scoped>
.auth-form {
  @apply w-full max-w-md bg-white rounded-2xl shadow-xl overflow-hidden
         backdrop-blur-sm border border-gray-100;
}

.form-header {
  @apply bg-gradient-to-r from-indigo-600 to-indigo-500 text-white
         px-8 py-10 text-center;
}

.form-content {
  @apply px-8 py-8 space-y-6;
}

.input-group {
  @apply space-y-2;
}

.input-label {
  @apply text-sm font-medium text-gray-700;
}

.input-container {
  @apply relative flex items-center rounded-lg border border-gray-200
         bg-gray-50 hover:bg-white transition-colors duration-200
         focus-within:border-indigo-500 focus-within:ring-2 focus-within:ring-indigo-100;
}

.input-icon {
  @apply w-6 h-6 text-gray-400 ml-4;
}

.input-field {
  @apply w-full px-4 py-3 bg-transparent text-gray-700
         placeholder-gray-400 focus:outline-none;
}

.submit-button {
  @apply w-full flex items-center justify-center px-6 py-4 bg-gradient-to-r from-indigo-600 to-indigo-500
         text-white font-semibold rounded-lg shadow-md hover:shadow-lg
         transform transition-all duration-300 hover:scale-[1.02]
         hover:from-indigo-700 hover:to-indigo-600;
}

.error-message {
  @apply flex items-center px-4 py-3 bg-red-50 text-red-700 rounded-lg
         border border-red-100 text-sm;
}

.error-icon {
  @apply w-5 h-5 mr-2 shrink-0;
}
</style>