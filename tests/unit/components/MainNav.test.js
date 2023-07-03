import { render, screen } from '@testing-library/vue';
import MainNav from '@/components/MainNav.vue';

import userEvent from '@testing-library/user-event';

describe('Main Nav', () => {
  const renderMainNav = () => {
    render(MainNav, {
      global: {
        stubs: {
          FontAwesomeIcon: true,
        }
      },
    });
  }
  it('displays company name', () => {
    renderMainNav();
    const company = screen.getByText('CareerConnect');
    expect(company).toBeInTheDocument();
  });

  it('displays items for navigation', () => {
    renderMainNav();
    const naviMenItems = screen.getAllByRole('listitem');
    const navMenTexts = naviMenItems.map((item) => {
      return item.textContent;
    });
    expect(navMenTexts).toEqual([
      'Teams',
      'Locations',
      'Life at CareerConnect',
      'How we hire',
      'Students',
      'Jobs'
    ]);
    console.log(navMenTexts);
  });
  describe('When the user logs in', () => {
    it('displays user profile picture', async () => {
      renderMainNav();
      let profileImage = screen.queryByRole('img', {
        name: /user profile image/i
      });
      expect(profileImage).not.toBeInTheDocument();

      const logInButton = screen.getByRole('button', {
        name: /sign in/i
      });
      await userEvent.click(logInButton);

      profileImage = screen.getByRole('img', {
        name: /user profile image/i
      });
      expect(profileImage).toBeInTheDocument();
    });
  });
});
