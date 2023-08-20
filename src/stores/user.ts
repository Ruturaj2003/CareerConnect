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
  const skillsSearchTerm = ref<string>('');
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

  const UPDATE_SKILLS_SEARCH_TERM = (term: string) => {
    skillsSearchTerm.value = term;
  };

  const CLEAR_USER_JOB_FILTER_SELECTIONS = () => {
    selectedDegrees.value = [];
    selectedJobTypes.value = [];
    selectedOrganizations.value = [];
    skillsSearchTerm.value = '';
  };

  return {
    isLoggedIn,
    skillsSearchTerm,
    selectedDegrees,
    selectedJobTypes,
    selectedOrganizations,
    LOGIN_USER,
    ADD_SELECTED_DEGREES,
    ADD_SELECTED_JOB_TYPES,
    ADD_SELECTED_ORGANIZATIONS,
    UPDATE_SKILLS_SEARCH_TERM,
    CLEAR_USER_JOB_FILTER_SELECTIONS
  };
});
