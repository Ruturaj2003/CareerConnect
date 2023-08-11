<template>
  <div class="font-bold text-yellow-800">Job Page for {{ currentJobId }}</div>
</template>

<script lang="ts" setup>
import { computed } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();
const currentJobId = computed(() => {
  route.params.id;
});
</script>
