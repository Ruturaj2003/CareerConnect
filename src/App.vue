<!-- Kebab Case main-nav main-task-bar for template -->
<template>
  <main-nav />
  <the-hero></the-hero>
</template>

<script>
import MainNav from './components/navigation/MainNav.vue';
import TheHero from '@/components/jobSearch/TheHero.vue';
export default {
  name: 'App',
  components: {
    // By ES6 We can just use MainNav instead of MainNav: MainNav, since it will just find it itself.
    MainNav,
    TheHero
  }
};
</script>
