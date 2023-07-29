import { render, screen } from '@testing-library/vue';
import TheSubNav from '@/components/navigation/TheSubNav.vue';

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { createTestingPinia } from '@pinia/testing';
import { useJobsStore } from '@/stores/jobs';

describe('TheSubNav', () => {
  const renderTheSubNav = (routeName) => {
    const pinia = createTestingPinia();
    const jobStore = useJobsStore();

    render(TheSubNav, {
      global: {
        plugins: [pinia],
        mocks: {
          $route: {
            name: routeName
          }
        },
        stubs: {
          FontAwesomeIcon: true
        }
      }
    });
    return { jobStore }
  };
  describe('When user is on jobs page', () => {
    it('displays job count', async () => {
      const routeName = 'JobResults';

      const { jobStore } = renderTheSubNav(routeName);
      const numberOfJobs = 16;

      jobStore.FILTERED_JOBS = Array(numberOfJobs).fill({})
      const jobCount = await screen.findByText(numberOfJobs);
      expect(jobCount).toBeInTheDocument();
    });
  });
  describe("When user isn't on jobs page", () => {
    it('does NOT display job Count', () => {
      const routeName = 'Home';

      const { jobStore } = renderTheSubNav(routeName);
      const numberOfJobs = 16;
      jobStore.FILTERED_JOBS = Array(numberOfJobs).fill({})

      const jobCount = screen.queryByText(numberOfJobs);
      expect(jobCount).not.toBeInTheDocument();
    });
  });
});
