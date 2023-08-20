<template>
  <div class="flex w-96 flex-col border-r border-solid border-brand-gray-1 bg-white p-4">
    <section class="pb-5">
      <job-filters-sidebar-prompt />
      <job-filters-side-bar-skills></job-filters-side-bar-skills>
      <collapsible-accordion header="Degrees">
        <job-filters-sidebar-degrees />
      </collapsible-accordion>

      <collapsible-accordion header="Job Types">
        <job-filters-sidebar-job-types />
      </collapsible-accordion>

      <collapsible-accordion header="Organizations">
        <job-filters-sidebar-organizations />
      </collapsible-accordion>
    </section>
  </div>
</template>

<script lang="ts" setup>
import { onMounted } from 'vue';
import { useRoute } from 'vue-router';
import { useUserStore } from '@/stores/user';
import CollapsibleAccordion from '@/components/shared/CollapsibleAccordion.vue';
//@ts-ignore
import JobFiltersSidebarDegrees from '@/components/jobResults/jobFiltersSidebar/JobFiltersSidebarDegrees.vue';
//@ts-ignore
import JobFiltersSidebarJobTypes from '@/components/jobResults/jobFiltersSidebar/JobFiltersSidebarJobTypes.vue';
//@ts-ignore
import JobFiltersSidebarOrganizations from '@/components/jobResults/jobFiltersSidebar/jobFiltersSidebarOrganizations.vue';
//@ts-ignore
import JobFiltersSidebarPrompt from '@/components/jobResults/jobFiltersSidebar/JobFiltersSidebarPrompt.vue';

import JobFiltersSideBarSkills from './JobFiltersSideBarSkills.vue';

const route = useRoute();
const userStore = useUserStore();
const parseSkillSearchTerm = () => {
  const role = (route.query.role as string) || '';
  userStore.UPDATE_SKILLS_SEARCH_TERM(role);
};
onMounted(parseSkillSearchTerm);
</script>
