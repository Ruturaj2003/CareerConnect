<!-- Kebab Case main-nav main-task-bar for template -->
<template>
  <main-nav />
  <router-view></router-view>
</template>

<script>
import MainNav from './components/navigation/MainNav.vue';

export default {
  name: 'App',
  components: {
    // By ES6 We can just use MainNav instead of MainNav: MainNav, since it will just find it itself.
    MainNav
  }
};
</script>
