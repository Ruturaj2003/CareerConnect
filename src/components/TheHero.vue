<template>
  <main>
    <section class="flex h-screen flex-col bg-violet-200 pb-20 pt-20">
      <div class="grid grid-cols-12">
        <div class="col-span-1 col-start-1 border-2 border-zinc-900">1 Col</div>
        <div class="col-span-5 col-start-2 border border-red-900">
          <the-headline></the-headline>
        </div>
        <div class="col-span-5 col-start-7 border border-red-900">5 col</div>
        <div class="col-span-1 col-start-12 border-2 border-zinc-900">1 Col</div>
      </div>
    </section>
  </main>
</template>

<script>
import TheHeadline from '@/components/TheHeadline.vue';
export default {
  name: 'TheHero',
  components: { TheHeadline }
};
</script>
