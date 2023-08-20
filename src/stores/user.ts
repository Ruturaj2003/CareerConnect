import { defineStore } from 'pinia';
import { ref } from 'vue';
export const ADD_SELECTED_ORGANIZATIONS = 'ADD_SELECTED_ORGANIZATIONS';
export const ADD_SELECTED_JOB_TYPES = 'ADD_SELECTED_JOB_TYPES';
export const ADD_SELECTED_DEGREES = 'ADD_SELECTED_DEGREES';
export const CLEAR_USER_JOB_FILTER_SELECTIONS = 'CLEAR_USER_JOB_FILTER_SELECTIONS';

export const useUserStore = defineStore('user', () => {
  const isLoggedIn = ref(false);
  const selectedDegrees = ref<string[]>([]);
  const selectedJobTypes = ref<string[]>([]);
  const selectedOrganizations = ref<string[]>([]);

  const LOGIN_USER = () => {
    isLoggedIn.value = true;
  };

  const ADD_SELECTED_ORGANIZATIONS = (organizations: string[]) => {
    selectedOrganizations.value = organizations;
  };

  const ADD_SELECTED_DEGREES = (degrees: string[]) => {
    selectedDegrees.value = degrees;
  };

  const ADD_SELECTED_JOB_TYPES = (jobTypes: string[]) => {
    selectedJobTypes.value = jobTypes;
  };

  const CLEAR_USER_JOB_FILTER_SELECTIONS = () => {
    selectedDegrees.value = [];
    selectedJobTypes.value = [];
    selectedOrganizations.value = [];
  };

  return {
    isLoggedIn,
    selectedDegrees,
    selectedJobTypes,
    selectedOrganizations,
    LOGIN_USER,
    ADD_SELECTED_DEGREES,
    ADD_SELECTED_JOB_TYPES,
    ADD_SELECTED_ORGANIZATIONS,
    CLEAR_USER_JOB_FILTER_SELECTIONS
  };
});

// export const useUserStore = defineStore('user', {
//   state: (): UserState => ({
//     isLoggedIn: false,
//     selectedOrganizations: [],
//     selectedJobTypes: [],
//     selectedDegrees: []
//   }),
//   actions: {
//     loginUser() {
//       this.isLoggedIn = true;
//     },
//     [ADD_SELECTED_ORGANIZATIONS](organizations: string[]) {
//       this.selectedOrganizations = organizations;
//     },
//     [ADD_SELECTED_JOB_TYPES](jobTypes: string[]) {
//       this.selectedJobTypes = jobTypes;
//     },
//     [ADD_SELECTED_DEGREES](degrees: string[]) {
//       this.selectedDegrees = degrees;
//     },
//     [CLEAR_USER_JOB_FILTER_SELECTIONS]() {
//       this.selectedDegrees = [];
//       this.selectedJobTypes = [];
//       this.selectedOrganizations = [];
//     }
//   }
// });
