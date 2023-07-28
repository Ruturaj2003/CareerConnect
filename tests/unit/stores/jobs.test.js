import { createPinia, setActivePinia } from 'pinia';
import axios from 'axios';
import { useJobsStore } from '@/stores/jobs';

import { useUserStore } from '@/stores/user';

vi.mock('axios');

describe('state', () => {
  beforeEach(() => {
    setActivePinia(createPinia());
  });

  it('stores job listings', () => {
    const store = useJobsStore();
    expect(store.jobs).toEqual([]);
  });
});

describe('actions', () => {
  beforeEach(() => {
    setActivePinia(createPinia());
  });

  describe('FETCH_JOBS', () => {
    it('makes API request and stores received jobs', async () => {
      axios.get.mockResolvedValue({ data: ['Job 1', 'Job 2'] });
      const store = useJobsStore();
      await store.FETCH_JOBS();
      expect(store.jobs).toEqual(['Job 1', 'Job 2']);
    });
  });
});

describe('getters', () => {
  beforeEach(() => {
    setActivePinia(createPinia());
  });

  describe('UNIQUE_ORGANIZATIONS', () => {
    it('finds unique organizations from list of jobs', () => {
      const store = useJobsStore();
      store.jobs = [
        { organization: 'Google' },
        { organization: 'Amazon' },
        { organization: 'Google' }
      ];

      const result = store.UNIQUE_ORGANIZATIONS;

      expect(result).toEqual(new Set(['Google', 'Amazon']));
    });

    describe('UNIQUE_JOB_TYPES', () => {
      it('finds unique job types from list of jobs', () => {
        const store = useJobsStore();
        store.jobs = [{ jobType: 'Full-time' }, { jobType: 'Intern' }, { jobType: 'Full-time' }];
        const result = store.UNIQUE_JOB_TYPES;
        expect(result).toEqual(new Set(['Full-time', 'Intern']));
      });
    });

    describe('FILTERED_JOBS_BY_JOB_TYPES', () => {
      it('Identifes jobs that are associated with the given jobtypes', () => {
        const jobsStore = useJobsStore();
        jobsStore.jobs = [
          { jobType: 'Intern' },
          { jobType: 'Full-time' },
          { jobType: 'Part-time' }
        ];

        const userStore = useUserStore();
        userStore.selectedJobTypes = ['Intern', 'Part-time'];

        const result = jobsStore.FILTERED_JOBS_BY_JOB_TYPES;
        expect(result).toEqual([{ jobType: 'Intern' }, { jobType: 'Part-time' }]);
      });
    });

    describe("When the user hasn't selected any jobTypes", () =>
      it('Returns all jobs', () => {
        const jobsStore = useJobsStore();
        jobsStore.jobs = [
          { jobType: 'Intern' },
          { jobType: 'Full-time' },
          { jobType: 'Part-time' }
        ];

        const userStore = useUserStore();
        userStore.selectedOrganizations = [];

        const result = jobsStore.FILTERED_JOBS_BY_ORGANIZATIONS;
        expect(result).toEqual([
          { jobType: 'Intern' },
          { jobType: 'Full-time' },
          { jobType: 'Part-time' }
        ]);
      }));

    describe('FILTERED_JOBS_BY_ORGANIZATIONS', () => {
      it('Identifes jobs that are associated with the given organizations', () => {
        const jobsStore = useJobsStore();
        jobsStore.jobs = [
          { organization: 'Google' },
          { organization: 'Amazon' },
          { organization: 'Microsoft' }
        ];

        const userStore = useUserStore();
        userStore.selectedOrganizations = ['Google', 'Amazon'];

        const result = jobsStore.FILTERED_JOBS_BY_ORGANIZATIONS;
        expect(result).toEqual([{ organization: 'Google' }, { organization: 'Amazon' }]);
      });
    });

    describe("When the user hasn't selected any organizatiob", () =>
      it('Returns all jobs', () => {
        const jobsStore = useJobsStore();
        jobsStore.jobs = [
          { organization: 'Google' },
          { organization: 'Amazon' },
          { organization: 'Microsoft' }
        ];

        const userStore = useUserStore();
        userStore.selectedOrganizations = [];

        const result = jobsStore.FILTERED_JOBS_BY_ORGANIZATIONS;
        expect(result).toEqual([
          { organization: 'Google' },
          { organization: 'Amazon' },
          { organization: 'Microsoft' }
        ]);
      }));
  });
});
