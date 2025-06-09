<template>
  <div class="flex md:py-8 justify-center bg-gray-50 px-4 items-center">
    <form class="auth-form" @submit.prevent="handleLogin">
      <!-- Header -->
      <div class="form-header">
        <h1 class="text-3xl font-bold">Welcome Back</h1>
        <p class="mt-2 text-white">Sign in to continue to access IQAC Portal</p>
      </div>

      <!-- Content -->
      <div class="form-content">
        <!-- Email Input -->
        <div class="input-group">
          <label class="input-label">Email Address</label>
          <div class="input-container">
            <svg class="input-icon" viewBox="0 0 24 24">
              <path
                d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 14H4V8l8 5 8-5v10zm-8-7L4 6h16l-8 5z" />
            </svg>
            <input
              v-model="email"
              type="email"
              placeholder="name@cuk.ac.in"
              class="input-field pl-12"
              required
            />
          </div>
        </div>

        <!-- Password Input -->
        <div class="input-group">
          <label class="input-label">Password</label>
          <div class="input-container">
            <svg class="input-icon" viewBox="0 0 24 24">
              <path
                d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2z" />
            </svg>
            <input 
              v-model="password" 
              :type="showPassword ? 'text' : 'password'" 
              placeholder="••••••••" 
              class="input-field pl-12 pr-10" 
              required 
            />
            <button 
              type="button"
              @click="togglePassword" 
              class="password-toggle absolute right-2"
              :title="showPassword ? 'Hide password' : 'Show password'"
            >
              <svg v-if="!showPassword" class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
              <svg v-else class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" />
              </svg>
            </button>
          </div>
        </div>

        <!-- Submit Button -->
        <button type="submit" class="submit-button group">
          Sign In
          <svg class="w-5 h-5 ml-2 opacity-0 group-hover:opacity-100 transition-all duration-300" fill="none"
            stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </button>

        <!-- Error Message -->
        <div v-if="error" class="error-message">
          <svg class="error-icon" viewBox="0 0 24 24">
            <path
              d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z" />
          </svg>
          <span>{{ error }}</span>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import { useRouter } from 'vue-router';
import { API_PATH } from '../path/apiPath.js';

export default {
  setup() {
    const router = useRouter();
    return { router };
  },
  data() {
    return {
      email: '',
      password: '',
      error: '',
      showPassword: false
    };
  },
  methods: {
    togglePassword() {
      this.showPassword = !this.showPassword;
    },
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
          this.router.push('/admin-dashboard');
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
  @apply w-full max-w-md bg-white rounded-2xl shadow-xl overflow-hidden backdrop-blur-sm border border-gray-100;
}

.form-header {
  @apply bg-gradient-to-r from-indigo-600 to-indigo-500 text-white px-8 py-10 text-center;
}

.form-content {
  @apply px-8 py-8 space-y-6;
}

.input-group {
  @apply space-y-2;
}

.input-label {
  @apply text-sm font-semibold text-gray-700;
}

.input-container {
  @apply relative flex items-center rounded-lg border border-gray-200 bg-gray-50 hover:bg-white transition-colors duration-200 focus-within:border-indigo-500 focus-within:ring-2 focus-within:ring-indigo-100;
}

.input-icon {
  @apply absolute left-4 w-5 h-5 text-gray-400 pointer-events-none;
}

.input-field {
  @apply w-full py-3 bg-transparent text-gray-700 placeholder-gray-400 focus:outline-none;
}

.submit-button {
  @apply w-full flex items-center justify-center px-6 py-4 bg-gradient-to-r from-indigo-600 to-indigo-500 text-white font-semibold rounded-lg shadow-md hover:shadow-lg transform transition-all duration-300 hover:scale-[1.02] hover:from-indigo-700 hover:to-indigo-600;
}

.error-message {
  @apply flex items-center px-4 py-3 bg-red-50 text-red-700 rounded-lg border border-red-100 text-sm mt-2;
}

.error-icon {
  @apply w-5 h-5 mr-2 shrink-0;
}

.password-toggle {
  @apply p-2 text-gray-400 hover:text-indigo-600 focus:outline-none transition-colors duration-200;
}
</style>
