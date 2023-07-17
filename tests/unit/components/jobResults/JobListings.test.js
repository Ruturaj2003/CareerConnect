import { render, screen } from '@testing-library/vue';
import { RouterLinkStub } from '@vue/test-utils';
import axios from 'axios';

import JobListings from '@/components/jobResults/JobListings.vue';

vi.mock('axios');

describe('JobListings', () => {
  const createRoute = (qpam = {}) => {
    return {
      query: {
        page: '1',
        ...qpam
      }
    };
  };

  const renderJobListings = ($route) => {
    render(JobListings, {
      global: {
        stubs: {
          RouterLink: RouterLinkStub
        },
        mocks: {
          $route
        }
      }
    });
  };

  it('fetches jobs', () => {
    axios.get.mockResolvedValue({ data: [] });
    const $route = createRoute();
    renderJobListings($route);

    expect(axios.get).toHaveBeenCalledWith('  http://localhost:3000/jobs');
  });

  it('displays max of 10 jobs', async () => {
    axios.get.mockResolvedValue({ data: Array(15).fill({}) });
    const $route = createRoute();
    renderJobListings($route);

    const jobListings = await screen.findAllByRole('listitem');
    expect(jobListings).toHaveLength(10);
  });

  describe('Whem Params exclude page numer', () => {
    it('displays page number 1', () => {
      const queryParams = {
        page: undefined
      };

      const $route = createRoute(queryParams);
      renderJobListings($route);

      expect(screen.getByText('Page 1')).toBeInTheDocument;
    });

    describe('When Params include page number', () => {
      it('displays page number', () => {
        const queryParams = {
          page: '5'
        };
        const $route = createRoute(queryParams);
        renderJobListings($route);
        expect(screen.getByText('Page 5')).toBeInTheDocument;
      });
    });

    describe('When user is on first page', () => {
      it('does not show previous page', async () => {
        axios.get.mockResolvedValue({ data: Array(15).fill({}) });
        const queryParams = {
          page: '1'
        };
        const $route = createRoute(queryParams);
        renderJobListings($route);
        await screen.findAllByRole('listitem');

        const prevLink = screen.queryByRole('link', {
          name: /previous/i
        });
        expect(prevLink).not.toBeInTheDocument();
      });

      it("shows link to next page", async () => {
        axios.get.mockResolvedValue({ data: Array(15).fill({}) });
        const queryParams = {
          page: '1'
        };
        const $route = createRoute(queryParams);
        renderJobListings($route);
        await screen.findAllByRole('listitem');

        const nextLink = screen.queryByRole('link', {
          name: /next/i
        });
        expect(nextLink).toBeInTheDocument();

      })
    });
  });
});
