<template>
  <div class="flex w-full flex-nowrap">
    <job-filters-side-bar></job-filters-side-bar>
    <job-listings></job-listings>
  </div>
</template>

<script>
import JobFiltersSideBar from '@/components/jobResults/jobFiltersSideBar/JobFiltersSideBar.vue';
import JobListings from '@/components/jobResults/JobListings.vue';
export default {
  name: 'JobResultsView',
  components: {
    JobFiltersSideBar,
    JobListings
  }
};
</script>
