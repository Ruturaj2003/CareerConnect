import { render, screen } from '@testing-library/vue';
import TheSubNav from '@/components/navigation/TheSubNav.vue';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

describe('TheSubNav', () => {
  describe('When user is on jobs page', () => {
    it('displays job count', () => {
      render(TheSubNav, {
        global: {
          stubs: {
            FontAwesomeIcon: true,
          }
        },
        data() {
          return {
            onJobResultsPage: true
          };
        }
      });

      const jobCount = screen.getByText('1653');
      expect(jobCount).toBeInTheDocument();
    });
  });
  describe("When user isn't on jobs page", () => {
    it('does NOT display job Count', () => {
      render(TheSubNav, {
        global: {
          stubs: {
            FontAwesomeIcon: true,
          }
        },
        data() {
          return {
            onJobResultsPage: false
          };
        }
      });

      const jobCount = screen.queryByText('1653');
      expect(jobCount).not.toBeInTheDocument();
    });
  });
});
