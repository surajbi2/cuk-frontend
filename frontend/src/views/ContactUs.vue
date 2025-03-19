<template>
    <div class="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div class="max-w-2xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">

        <div class="bg-gradient-to-r from-[#168aad] to-[#0081a7] p-6">
          <h1 class="text-3xl font-bold text-white text-center">Contact Us</h1>
          <p class="mt-2 text-sm text-[#f9f7f3] text-center">
            We'd love to hear from you! Reach out to us for any inquiries or feedback.
          </p>
        </div>
  
        <div class="p-6">
          <form @submit.prevent="submitForm" class="space-y-6">

            <div>
              <label for="name" class="block text-sm font-medium text-gray-700">Your Name</label>
              <input
                type="text"
                id="name"
                v-model="form.name"
                placeholder="Enter your name"
                class="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                required
              />
            </div>
  

            <div>
              <label for="email" class="block text-sm font-medium text-gray-700">Your Email</label>
              <input
                type="email"
                id="email"
                v-model="form.email"
                placeholder="Enter your email"
                class="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                required
              />
            </div>


            <div>
              <label for="subject" class="block text-sm font-medium text-gray-700">Subject</label>
              <input
                type="text"
                id="subject"
                v-model="form.subject"
                placeholder="Enter the subject"
                class="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                required
              />
            </div>
  

            <div>
              <label for="message" class="block text-sm font-medium text-gray-700">Your Message</label>
              <textarea
                id="message"
                v-model="form.message"
                rows="4"
                placeholder="Enter your message"
                class="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                required
              ></textarea>
            </div>
  

            <div class="flex items-center justify-center">
              <button
                type="submit"
                class="w-1/3 bg-[#d8315b] text-white py-2 px-4 rounded-md hover:bg-[#a41623] focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
  

        <div class="bg-gray-50 p-6 border-t border-gray-200">
          <h2 class="text-xl font-semibold text-gray-800 mb-4">Contact Information</h2>
          <div class="space-y-4">

            <div class="flex items-center">
              <span class="text-[#d8315b]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              </span>
              <p class="ml-3 text-gray-600">
                Central University of Karnataka, Kadaganchi, Aland Road, Gulbarga, Karnataka - 585367
              </p>
            </div>
  

            <div class="flex items-center">
              <span class="text-[#d8315b]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  />
                </svg>
              </span>
              <div class="ml-3 text-gray-600">
                <p class="font-medium">Prof. Ganesh Pawar</p>
                <p>Director, Internal Quality Assurance Cell (IQAC)</p>
              </div>
            </div>
  

            <div class="flex items-center">
              <span class="text-[#d8315b]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
              </span>
              <p class="ml-3 text-gray-600">+91 6360034820</p>
            </div>
  

            <div class="flex items-center">
              <span class="text-[#d8315b]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </span>
              <div class="ml-3 text-gray-600">
                <p>iqac@cuk.ac.in</p>
                <p>ganeshpawar@cuk.ac.in</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        form: {
          name: "",
          email: "",
          subject: "",
          message: "",
        },
      };
    },
    methods: {
      submitForm() {

        console.log("Form submitted:", this.form);
        alert("Thank you for contacting us! We'll get back to you soon.");
        this.form = { name: "", email: "", subject: "", message: "" }; 
      },
    },
  };
  </script>
  
  <style scoped>

  </style>