<template>
  <div class="flex w-96 flex-col border-r border-solid border-brand-gray-1 bg-white p-4">
    <section class="pb-5">
      <div class="flex justify-between">
        <h3 class="my-4 text-base font-semibold">What do you want to do</h3>
        <div class="flex items-center text-sm">
          <action-button text="Clear Filters" type="secondary"></action-button>
        </div>
      </div>

      <job-filters-side-bar-checkbox-group
        header="Job Types"
        :unique-values="UNIQUE_JOB_TYPES"
        :action="userStore.ADD_SELECTED_JOB_TYPES"
      ></job-filters-side-bar-checkbox-group>
      <job-filters-side-bar-checkbox-group
        header="Organizations"
        :unique-values="UNIQUE_JOB_ORGANIZATIONS"
        :action="userStore.ADD_SELECTED_ORGANIZATIONS"
      ></job-filters-side-bar-checkbox-group>
    </section>
  </div>
</template>

<script lang="ts" setup>
import { computed } from 'vue';
import ActionButton from '@/components/shared/ActionButton.vue';

import JobFiltersSideBarCheckboxGroup from '@/components/jobResults/jobFiltersSideBar/JobFiltersSideBarCheckboxGroup.vue';
import { useJobsStore } from '@/stores/jobs';
import { useUserStore } from '@/stores/user';

const jobStore = useJobsStore();
const userStore = useUserStore();

const UNIQUE_JOB_TYPES = computed(() => {
  return jobStore.UNIQUE_JOB_TYPES;
});

const UNIQUE_JOB_ORGANIZATIONS = computed(() => {
  return jobStore.UNIQUE_ORGANIZATIONS;
});
</script>
