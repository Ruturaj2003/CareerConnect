<template>
  <div class="font-bold text-yellow-800">Job Page for {{ currentJobId }}</div>
</template>

<script>
export default {
  name: 'JobView',
  computed: {
    currentJobId() {
      return this.$route.params.id;
    }
  }
};
</script>
