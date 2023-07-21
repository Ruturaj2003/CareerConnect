<!-- Find Me :
import HeaderContainer from '@/components/shared/HeaderContainer.vue'
-->

<template>
  <div class="w-full border-b border-solid border-brand-gray-2">
    <div class="mx-auto my-16 text-center">
      <slot name="title">DOTEX </slot>
      <slot name="subtitle">DOTA</slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HeaderContainer'
};
</script>
