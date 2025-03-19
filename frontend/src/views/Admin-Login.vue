<template>
    <div class="flex items-center justify-center min-h-screen bg-white">
      <div class="bg-gradient-to-br from-[#ccdbfd] to-[#fff] p-8 rounded-2xl shadow-2xl w-full max-w-md transform transition-all hover:scale-105">
        <h1 class="text-3xl font-bold text-center text-gray-800 mb-6">Admin Login</h1>
        <form class="space-y-6">

            <div>
            <label for="username" class="block text-sm font-medium text-gray-700">Username</label>
            <input 
              type="text" 
              id="username" 
              class="mt-1 block w-full rounded-lg border border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm p-3 transition-all"
              placeholder="Enter your username"
            />
          </div>

          <div>
            <label for="password" class="block text-sm font-medium text-gray-700">Password</label>
            <input 
              type="password" 
              id="password" 
              class="mt-1 block w-full rounded-lg border border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm p-3 transition-all"
              placeholder="Enter your password"
            />
          </div>

          <button 
            type="submit" 
            class="w-full bg-[#d8315b] hover:from-purple-600 hover:to-blue-500 text-white font-semibold py-3 px-4 rounded-lg shadow-lg transition-transform transform hover:bg-[#010325] focus:outline-none focus:ring-4 focus:ring-blue-300"
          >
            Login
          </button>
        </form>

        <div class="mt-6 text-center text-sm text-gray-500">
          <p>
            Forgot your password? 
            <a href="#" class="text-blue-600 hover:underline">Reset it here</a>.
          </p>
          <p>
            Don't have an account? 
            <a href="#" class="text-blue-600 hover:underline">Sign up now</a>.
          </p>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "AdminLogin",
  };
  </script>
  
  <style scoped>

  </style>
  