<template>
  <div class="container mx-auto px-4 py-8">
    <div class="grid md:grid-cols-2 gap-6">
      <div class="w-full">
        <Upload />
      </div>
      <div class="w-full">
        <MomUpload />
      </div>
    </div>
  </div>
</template>

<script>
import Upload from './Upload.vue';
import MomUpload from './MomUpload.vue';

export default {
  components: {
    Upload,
    MomUpload
  }
};
</script>

<style scoped>
/* Responsive adjustments */
@media (max-width: 768px) {
  .container {
    padding-top: 1rem;
    padding-bottom: 1rem;
  }
}
</style>
