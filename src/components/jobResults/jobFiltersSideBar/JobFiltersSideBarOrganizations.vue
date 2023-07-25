<!-- Find Me  = "import JobFiltersSideBarOrganizations from '@/components/jobResults/jobFiltersSideBar/JobFiltersSideBarOrganizations.vue';" -->

<template>
  <collapsible-accordion header="Organization">
    <div class="mt-3">
      <fieldset>
        <ul class="flex flex-wrap">
          <li v-for="organiztion in UNIQUE_ORGANIZATIONS" :key="organiztion" class="h-8 w-1/2">
            <input
              :id="organiztion"
              v-model="selectedOrganization"
              :value="organiztion"
              type="checkbox"
              class="mr-3"
              @change="selectOrganization"
            />
            <label :for="organiztion">{{ organiztion }}</label>
          </li>
        </ul>
      </fieldset>
    </div>
  </collapsible-accordion>
</template>

<script>
import { mapState } from 'pinia';
import { useJobsStore, UNIQUE_ORGANIZATIONS } from '@/stores/jobs';
import CollapsibleAccordion from '@/components/shared/CollapsibleAccordion.vue';
export default {
  name: 'JobFiltersSideBarOrganizations',
  data() {
    return {
      selectedOrganization: []
    };
  },

  components: {
    CollapsibleAccordion
  },
  methods: {
    selectOrganization() {}
  },
  computed: {
    ...mapState(useJobsStore, [UNIQUE_ORGANIZATIONS])
  }
};
</script>
