<template>
  <div class="min-h-screen flex flex-col">
    <Header />
    <Navbar />   
    <main class="flex-grow">
      <router-view />
    </main>
    <Footer />
  </div>
</template>

<script>
import Header from './components/Header.vue';
import Navbar from './components/Navbar.vue';
import Footer from './components/Footer.vue';
export default {
  components: {
    Header,
    Navbar,
    Footer
  },
  data() {
    return {
      isAdmin: false,
      isUser: false
    };
  },
  methods: {
    checkUserRole() {
      const token = sessionStorage.getItem('userToken');
      if (token) {
        const user = JSON.parse(atob(token.split('.')[1]));
        this.isAdmin = user.role === 'admin';
        this.isUser = user.role === 'user';
      }
    }
  },
  mounted() {
    this.checkUserRole();
  }
};
</script>

<style>
body {
  width: 100%;
  font-family: 'Open Sans', 'Helvetica Neue', sans-serif,'Arial','Times New Roman', Times;
  margin: 0;
  padding: 0;
}
</style>
