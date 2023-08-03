<template>
  <collapsible-accordion :header="header">
    <div class="mt-5">
      <fieldset>
        <ul class="flex flex-row flex-wrap">
          <li v-for="value in uniqueValues" :key="value" class="h-8 w-1/2">
            <input
              :id="value"
              v-model="selectedValues"
              :value="value"
              type="checkbox"
              class="mr-3"
              @change="selectValue"
            />
            <label :for="value">{{ value }}</label>
          </li>
        </ul>
      </fieldset>
    </div>
  </collapsible-accordion>
</template>

<script setup>
import { useRouter } from 'vue-router';
import { ref } from 'vue';
import CollapsibleAccordion from '@/components/shared/CollapsibleAccordion.vue';

const props = defineProps({
  header: {
    type: String,
    required: true
  },
  uniqueValues: {
    type: Set,
    required: true
  },
  action: {
    type: Function,
    required: true
  }
});

const selectedValues = ref([]);

const router = useRouter();

const selectValue = () => {
  props.action(selectedValues.value);
  router.push({ name: 'JobResults' });
};
</script>

<!-- 
  const userStore = useUserStore();
//const selectedJobTypes = ref([]);
// const jobStore = useJobsStore();
// const UNIQUE_JOB_TYPES = computed(() => {
//   return jobStore.UNIQUE_JOB_TYPES;

  userStore.ADD_SELECTED_JOB_TYPES(selectedJobTypes.value);

// }); -->
