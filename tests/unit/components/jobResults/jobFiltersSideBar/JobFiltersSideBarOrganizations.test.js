import { render, screen } from '@testing-library/vue';
import userEvent from '@testing-library/user-event';
import { createTestingPinia } from '@pinia/testing';

import JobFiltersSidebarOrganizations from '@/components/jobResults/JobFiltersSidebar/JobFiltersSidebarOrganizations.vue';
import { useJobsStore } from '@/stores/jobs';
import { useUserStore } from '@/stores/user';
import { useRouter } from 'vue-router';
vi.mock('vue-router');

describe('JobFiltersSidebarOrganizations', () => {
  const renderJobFiltersSidebarOrganizations = () => {
    const pinia = createTestingPinia();
    const userStore = useUserStore();
    const jobsStore = useJobsStore();

    render(JobFiltersSidebarOrganizations, {
      global: {
        plugins: [pinia],
        stubs: {
          FontAwesomeIcon: true
        }
      }
    });

    return { jobsStore, userStore };
  };

  it('renders unique list of organizations from jobs', async () => {
    const { jobsStore } = renderJobFiltersSidebarOrganizations();
    jobsStore.UNIQUE_ORGANIZATIONS = new Set(['Google', 'Amazon']);

    const button = screen.getByRole('button', { name: /organization/i });
    await userEvent.click(button);

    const organizationListItems = screen.getAllByRole('listitem');
    const organizations = organizationListItems.map((node) => node.textContent);
    expect(organizations).toEqual(['Google', 'Amazon']);
  });
  describe('When user clicks check box', () => {


    it.only('communicates that user has selected checkbox for organization', async () => {
      useRouter.mockReturnValue({ push: vi.fn() })
      const { jobsStore, userStore } = renderJobFiltersSidebarOrganizations();
      jobsStore.UNIQUE_ORGANIZATIONS = new Set(['Google', 'Amazon']);

      const button = screen.getByRole('button', { name: /organization/i });
      await userEvent.click(button);

      const googleCheckbox = screen.getByRole('checkbox', {
        name: /google/i
      });
      await userEvent.click(googleCheckbox);

      expect(userStore.ADD_SELECTED_ORGANIZATIONS).toHaveBeenCalledWith(['Google']);
    });

    it('naviagtes user to see fresh batch of filteerd jobs', async () => {
      const push = vi.fn();
      useRouter.mockReturnValue({ push });
      const { jobsStore } = renderJobFiltersSidebarOrganizations();
      jobsStore.UNIQUE_ORGANIZATIONS = new Set(['Google']);

      const button = screen.getByRole('button', { name: /organization/i });
      await userEvent.click(button);

      const googleCheckbox = screen.getByRole('checkbox', {
        name: /google/i
      });
      await userEvent.click(googleCheckbox);

      expect(push).toHaveBeenCalledWith({ name: 'JobResults' });
    });
  });
});
