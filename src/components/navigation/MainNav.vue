<template>
  <header :class="['w-full', 'text-sm', headerHeightClass]">
    <div class="fixed left-0 top-0 h-16 w-full bg-white">
      <div class="mx-auto flex h-full flex-nowrap border-b border-solid border-brand-gray-1 px-8">
        <router-link :to="{ name: 'Home' }" class="flex h-full items-center text-xl">
          CareerConnect
        </router-link>

        <nav class="ml-12 h-full">
          <ul class="flex h-full list-none">
            <li class="ml-9 h-full first:ml-0" v-for="menuItem in menuItems" v-bind:key="menuItem">
              <a href="" class="flex h-full items-center py-2.5">{{ menuItem }}</a>
            </li>
          </ul>
        </nav>
        <div class="visited: ml-auto flex h-full items-center">
          <profile-image v-if="isLoggedIn"></profile-image>
          <action-button text="Sign In" v-else v-on:click="loginUser"></action-button>
        </div>
      </div>
      <the-sub-nav v-if="isLoggedIn"></the-sub-nav>
    </div>
  </header>
</template>

<script>
import ActionButton from '@/components/shared/ActionButton.vue';
import ProfileImage from './ProfileImage.vue';
import TheSubNav from './TheSubNav.vue';
export default {
  name: 'MainNav',
  components: {
    ActionButton,
    ProfileImage,
    TheSubNav
  },
  data() {
    return {
      author: 'Ruturaj Bhandari',
      menuItems: ['Teams', 'Locations', 'Life at CareerConnect', 'How we hire', 'Students', 'Jobs'],
      isLoggedIn: false
    };
  },
  computed: {
    headerHeightClass() {
      return {
        'h-16': !this.isLoggedIn,
        'h-32': this.isLoggedIn
      };
    }
  },
  methods: {
    loginUser() {
      this.isLoggedIn = true;
    }
  }
};
</script>
