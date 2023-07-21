import { render, screen } from '@testing-library/vue';
import HeaderContainer from '@/components/shared/HeaderContainer.vue';

describe('Header Container', () => {
  it('allows parent container to provide title content', () => {
    render(HeaderContainer, {
      slots: {
        title: '<h2>DOTAED</h2>'
      }
    });

    expect(screen.getByText('DOTAED')).toBeInTheDocument();
  });

  it('allows parent container to provide sub-title content', () => {
    render(HeaderContainer, {
      slots: {
        subtitle: '<h2>DOTEXR</h2>'
      }
    });

    expect(screen.getByText('DOTEXR')).toBeInTheDocument();
  });
});
