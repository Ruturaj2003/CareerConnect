<!-- Kebab Case main-nav main-task-bar for template -->
<template>
  <header>
    <main-nav />
  </header>
</template>

<script>
import MainNav from '@/components/MainNav.vue';

export default {
  name: 'App',
  components: {
    // By ES6 We can just use MainNav instead of MainNav: MainNav, since it will just find it itself.
    MainNav
  }
};
</script>
