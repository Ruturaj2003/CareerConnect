import { render, screen } from '@testing-library/vue';
import TheSubNav from '@/components/navigation/TheSubNav.vue';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

describe('TheSubNav', () => {
  const renderTheSubNav = (routeName) => {
    render(TheSubNav, {
      global: {
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
  };
  describe('When user is on jobs page', () => {
    it('displays job count', () => {
      const routeName = 'JobResults';
      renderTheSubNav(routeName);
      const jobCount = screen.getByText('1653');
      expect(jobCount).toBeInTheDocument();
    });
  });
  describe("When user isn't on jobs page", () => {
    it('does NOT display job Count', () => {
      const routeName = 'Home';
      renderTheSubNav(routeName);
      const jobCount = screen.queryByText('1653');
      expect(jobCount).not.toBeInTheDocument();
    });
  });
});
