<template>
  <ul>
    <li v-for="spotLight in spotlights" :key="spotLight.id">
      <slot :spotlight="spotLight"></slot>
    </li>
  </ul>
</template>

<script lang="ts" setup>
import axios from 'axios';
import { onMounted, ref } from 'vue';

interface Spotlight {
  id: number;
  img: string;
  title: string;
  description: string;
}

const spotlights = ref<Spotlight[]>([]);

const getSpotlights = async () => {
  const baseUrl = import.meta.env.VITE_APP_API_URL;
  const url = `${baseUrl}/spotlights`;
  const response = await axios.get<Spotlight[]>(url);
  spotlights.value = response.data;
};

onMounted(getSpotlights);
</script>
