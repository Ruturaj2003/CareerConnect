<template>
  <main class="flex-auto bg-brand-gray-2 p-8">
    <ol>
      <job-listing v-for="job in displayedJobs" :key="job.id" :job="job"></job-listing>
    </ol>
    <div class="mx-auto mt-8">
      <div class="flex flex-nowrap">
        <p class="flex-grow text-sm">Page {{ currentPage }}</p>
        <div class="flex items-center justify-center">
          <router-link
            role="link"
            class="mx-3 text-sm font-semibold text-brand-blue-1"
            v-if="previousPage"
            :to="{
              name: 'JobResults',
              query: {
                page: previousPage
              }
            }"
          >
            Previous
          </router-link>
          <router-link
            role="link"
            class="mx-3 text-sm font-semibold text-brand-blue-1"
            v-if="nextPage"
            :to="{
              name: 'JobResults',
              query: {
                page: nextPage
              }
            }"
          >
            Next
          </router-link>
        </div>
      </div>
    </div>
  </main>
</template>

<script setup>
import { computed, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import { useJobsStore } from '@/stores/jobs';
import JobListing from '@/components/JobResults/JobListing.vue';
import usePreviousAndNextPages from '@/composables/usePreviousAndNextPages';

const jobStore = useJobsStore();
onMounted(jobStore.FETCH_JOBS);

const route = useRoute();
const currentPage = computed(() => {
  return Number.parseInt(route.query.page || '1');
});

const FILTERED_JOBS = computed(() => {
  return jobStore.FILTERED_JOBS;
});

const lastPage = computed(() => {
  return Math.ceil(FILTERED_JOBS.value.length / 10);
});

const { previousPage, nextPage } = usePreviousAndNextPages(currentPage, lastPage);

const displayedJobs = computed(() => {
  const pageNumber = currentPage.value;
  const firstJobIndex = (pageNumber - 1) * 10;
  const lastJobIndex = pageNumber * 10;

  return FILTERED_JOBS.value.slice(firstJobIndex, lastJobIndex);
});
</script>
