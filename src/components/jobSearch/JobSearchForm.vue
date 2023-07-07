<template>
  <!-- Overflow Hioden Added  ref-158 -->
  <form
    class="flex h-12 w-full items-center overflow-hidden rounded-3xl border border-solid border-brand-gray-3"
  >
    <font-awesome-icon :icon="['fas', 'search']" class="ml-4 mr-3"></font-awesome-icon>
    <!-- Flex 1 will let them occupy all space -->
    <div class="flex h-full flex-1 flex-nowrap text-base font-light">
      <div class="relative flex h-full flex-1 items-center pr-3">
        <label class="absolute -top-10 left-0">Role</label>
        <text-input v-model="role" placeholder="Software Engineer"></text-input>
      </div>

      <span
        class="h-ful flex items-center border-l border-r border-brand-gray-3 bg-brand-gray-2 px-3"
      >
        in
      </span>
      <div class="relative flex h-full flex-1 items-center pl-3">
        <label class="absolute -top-10 left-0">Role</label>
        <text-input v-model="location" placeholder="Las Vegas"></text-input>
      </div>
    </div>
    <action-button type="secondary" text="Search" class="rounded-r-3xl"></action-button>
  </form>
</template>

<script>
import ActionButton from '@/components/shared/ActionButton.vue';
import TextInput from '@/components/shared/TextInput.vue';
export default {
  name: 'JobSearchForm',

  components: {
    ActionButton,
    TextInput
  },
  data() {
    return {
      location: '',
      role: ''
    };
  },
  methods: {}
};
</script>
