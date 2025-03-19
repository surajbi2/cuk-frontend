<template>
  <header class="bg-[#fffaff] text-black text-center pt-4 flex flex-col md:flex-row items-center">
    <img src="/logo.png" alt="" class="sm:w-40 w-14 h-auto md:pl-10">
    <div class="px-10 flex flex-col justify-center items-center md:w-[80%]">
      <p>ಕರ್ನಾಟಕ ಕೇಂದ್ರೀಯ ವಿಶ್ವವಿದ್ಯಾಲಯ | कर्नाटक केंद्रीय विश्‍वविद्यालय</p>
      <div class="flex items-center justify-center md:px-16 flex-col">
        <h1 class="text-xl md:text-3xl font-bold px-5">Central University of Karnataka</h1>
        <p>(Established by an Act of Parliament in 2009)</p>
      </div>
      <h4 class="text-xl md:text-2xl font-bold md:font-extrabold p-2">INTERNAL QUALITY ASSURANCE CELL</h4>
    </div>
    <div class="hidden absolute right-0 p-4 font-bold underline underline-offset-4 lg:flex items-center gap-8">
      <a href="http://naac.gov.in/index.php/en/">
        <img src="/naac.jpeg" alt="NAAC Logo" class="w-16">
      </a>
      <a href="https://www.ugc.gov.in/">
        <img src="/ugc.png" alt="" class="w-16">
      </a>
      <a href="https://www.aicte-india.org/">
        <img src="/aicte.jpeg" alt="" class="w-14">
      </a>
    </div>
  </header>
</template>

<script>
export default {
  name: "Header",
};
</script>

<style scoped>
/* Responsive Design */

</style>
