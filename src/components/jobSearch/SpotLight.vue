<template>
  <ul>
    <li v-for="spotLight in spotLights" :key="spotLight.id">
      <slot :spotlight="spotLight"></slot>
    </li>
  </ul>
</template>

<script setup>
import axios from 'axios';
import { onMounted, ref } from 'vue';

const spotLights = ref([]);

const getSpotlights = async () => {
  const baseUrl = import.meta.env.VITE_APP_API_URL;
  const url = `${baseUrl}/spotLights`;
  const response = await axios.get(url);
  spotLights.value = response.data;
};
onMounted(getSpotlights);
</script>
