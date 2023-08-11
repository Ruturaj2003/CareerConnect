<!-- Find Me : 
  import CollapsibleAccordion from '@/components/shared/CollapsibleAccordion.vue'; 
-->
<template>
  <div class="border-b border-solid border-brand-gray-2 py-5">
    <div
      role="button"
      class="flex cursor-pointer flex-wrap items-center justify-between"
      @click="open"
    >
      <h3 class="text-base font-bold">{{ header }}</h3>
      <font-awesome-icon :icon="caretIcon"></font-awesome-icon>
    </div>
    <div v-if="isOpen" class="mt-5 w-full">
      <slot>
        <p>POPULATE ME ;D</p>
      </slot>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';

defineProps({
  header: {
    type: String,
    required: true
  }
});

const isOpen = ref(false);

const open = () => {
  isOpen.value = !isOpen.value;
};

const caretIcon = computed(() => {
  return isOpen.value ? ['fas', 'angle-up'] : ['fas', 'angle-down'];
});

// data() {
//   return {
//     isOpen: false
//   };
// },
// props: {
//   header: {
//     type: String,
//     required: true
//   }
// },
// methods: {
//   open() {
//     this.isOpen = !this.isOpen;
//   }
// },
// computed: {
//   caretIcon() {
//     return this.isOpen ? ['fas', 'angle-up'] : ['fas', 'angle-down'];
//   }
// }
</script>
