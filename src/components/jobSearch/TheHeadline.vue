<template>
  <section class="mb-16">
    <h1 class="mb-14 text-8xl font-bold tracking-tighter">
      <span :class="actionClasses"> {{ action }}</span> <br />
      for everyone
    </h1>
    <h2 class="text-3xl font-light">Find your next job at CareerConnect.</h2>
  </section>
</template>

<script setup lang="ts">
import nextElementInList from '@/utils/nextElementInList.js';
import { ref, computed, onMounted, onBeforeUnmount } from 'vue';

const action = ref('Build');
const interval = ref<ReturnType<typeof setInterval>>();

const actionClasses = computed(() => {
  return {
    [action.value.toLowerCase()]: true
  };
});
const changeTitle = () => {
  interval.value = setInterval(() => {
    const actions = ['Build', 'Create', 'Design', 'Code'];
    action.value = nextElementInList(actions, action.value);
  }, 4000);
};

onMounted(changeTitle);
onBeforeUnmount(() => {
  clearInterval(interval.value);
});
// export default {
//   name: 'TheHeadline',
//   data() {
//     return {
//       action: 'Build',
//       interval: null
//     };
//   },
//   computed: {
//     actionClasses() {
//       return {
//         [this.action.toLowerCase()]: true
//       };
//     }
//   },
//   created() {
//     this.changeTitle();
//   },
//   beforeUnmount() {
//     clearInterval(this.interval);
//   },
//   methods: {
//     changeTitle() {
//       this.interval = setInterval(() => {
//         const actions = ['Build', 'Create', 'Design', 'Code'];

//         this.action = nextElementInList(actions, this.action);
//       }, 4000);
//     }
//   }
// };
</script>

<style scoped>
.build {
  color: #1a73e8;
}

.create {
  color: #1dd52d;
}

.design {
  color: #f2ff00;
}

.code {
  color: #ae3719;
}
</style>
