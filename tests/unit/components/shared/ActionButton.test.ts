import { render, screen } from '@testing-library/vue';
import ActionButton from '@/components/shared/ActionButton.vue';

describe('Action Button', () => {
  it('renders text', () => {
    render(ActionButton, {
      props: {
        text: 'Click me',
        type: 'primary'
      }
    });
    const btn = screen.getByRole('button', {
      name: /Click me/i
    });
    expect(btn).toBeInTheDocument();
  });
  it('applies on of several styles to button', () => {
    render(ActionButton, {
      props: {
        text: 'Click me',
        type: 'primary'
      }
    });
    const btn = screen.getByRole('button', {
      name: /Click me/i
    });
    expect(btn).toHaveClass('primary');
  });
});
