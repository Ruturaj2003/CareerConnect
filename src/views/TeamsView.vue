<template>
  <header-container>
    <template #title>
      <h1 class="w-full text-4xl font-normal">Teams</h1>
    </template>

    <template v-slot:subtitle>
      <h2 class="my-4 w-full text-base font-light">Its AWSOME!! working here, Why not JOIN! US</h2>
    </template>
  </header-container>
</template>

<script lang="ts" setup>
import HeaderContainer from '@/components/shared/HeaderContainer.vue';
</script>
