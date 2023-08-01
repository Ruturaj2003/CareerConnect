import { render, screen } from '@testing-library/vue';
import TheSubNav from '@/components/navigation/TheSubNav.vue';

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { createTestingPinia } from '@pinia/testing';
import { useJobsStore } from '@/stores/jobs';
import { useRoute } from 'vue-router';
vi.mock('vue-router')

describe('TheSubNav', () => {
  const renderTheSubNav = () => {

    const pinia = createTestingPinia();
    const jobStore = useJobsStore();


    render(TheSubNav, {
      global: {
        plugins: [pinia],

        stubs: {
          FontAwesomeIcon: true
        }
      }
    });
    return { jobStore }
  };
  describe('When user is on jobs page', () => {
    it('displays job count', async () => {

      useRoute.mockReturnValue({ name: 'JobResults' })


      const { jobStore } = renderTheSubNav();
      const numberOfJobs = 16;

      jobStore.FILTERED_JOBS = Array(numberOfJobs).fill({})
      const jobCount = await screen.findByText(numberOfJobs);
      expect(jobCount).toBeInTheDocument();
    });
  });
  describe("When user isn't on jobs page", () => {
    it('does NOT display job Count', () => {
      useRoute.mockReturnValue({ name: 'Home' })


      const { jobStore } = renderTheSubNav();
      const numberOfJobs = 16;
      jobStore.FILTERED_JOBS = Array(numberOfJobs).fill({})

      const jobCount = screen.queryByText(numberOfJobs);
      expect(jobCount).not.toBeInTheDocument();
    });
  });
});
