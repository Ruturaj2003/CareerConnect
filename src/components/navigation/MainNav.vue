<template>
  <header :class="['w-full', 'text-sm', headerHeightClass]">
    <div class="fixed left-0 top-0 h-16 w-full bg-white">
      <div class="mx-auto flex h-full flex-nowrap border-b border-solid border-brand-gray-1 px-8">
        <router-link :to="{ name: 'Home' }" class="flex h-full items-center text-xl">
          CareerConnect
        </router-link>

        <nav class="ml-12 h-full">
          <ul class="flex h-full list-none">
            <li
              class="ml-9 h-full first:ml-0"
              v-for="menuItem in menuItems"
              v-bind:key="menuItem.text"
            >
              <router-link :to="menuItem.url" class="flex h-full items-center py-2.5">{{
                menuItem.text
              }}</router-link>
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
import { mapActions, mapState } from 'pinia';
import { useUserStore } from '@/stores/user.js';
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
      menuItems: [
        {
          text: 'Teams',
          url: '/teams'
        },
        {
          text: 'Locations',
          url: '/'
        },
        {
          text: 'Life at CareerConnect',
          url: '/'
        },
        {
          text: 'How we hire',
          url: '/'
        },
        {
          text: 'Students',
          url: '/'
        },
        {
          text: 'Jobs',
          url: '/jobs/results'
        }
      ]
    };
  },
  computed: {
    // ...mapStores(useUserStore), //userStore we have acess to.
    ...mapState(useUserStore, ['isLoggedIn']),
    headerHeightClass() {
      return {
        'h-16': !this.isLoggedIn,
        'h-32': this.isLoggedIn
      };
    }
  },
  methods: {
    ...mapActions(useUserStore, ['loginUser'])
  }
};
</script>
