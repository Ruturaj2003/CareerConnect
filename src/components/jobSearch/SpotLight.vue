<template>
  <ul>
    <li v-for="spotLight in spotLights" :key="spotLight.id">
      <slot :spotlight="spotLight"></slot>
    </li>
  </ul>
</template>

<script>
import axios from 'axios';
export default {
  name: 'SoptLight',
  data() {
    return {
      spotLights: []
    };
  },
  async mounted() {
    const baseUrl = import.meta.env.VITE_APP_API_URL;
    const url = `${baseUrl}/spotLights`;
    const response = await axios.get(url);
    this.spotLights = response.data;
  }
};
</script>
