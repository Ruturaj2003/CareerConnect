import { createPinia, setActivePinia } from 'pinia';

import { useUserStore } from '@/stores/user';

describe('state', () => {
  beforeEach(() => {
    setActivePinia(createPinia());
  });
  it('keeps tracks if user logged in', () => {
    const store = useUserStore();
    expect(store.isLoggedIn).toBe(false);
  });

  it('stores organizations that user would like to filter jobs by', () => {
    const store = useUserStore()
    expect(store.selectedOrganizations).toEqual([])

  });
});

describe('actions', () => {
  beforeEach(() => {
    setActivePinia(createPinia());
  });
  describe('loginUser', () => {
    it('logs the user in', () => {
      const store = useUserStore();
      store.loginUser();
      expect(store.isLoggedIn).toBe(true);
    });
  });
});
