import { defineStore } from 'pinia';

import { MOCK_USER } from '@/constants';
import type { User, UserState } from '@/types/user';

export const useUserStore = defineStore('user', {
  state: (): UserState => ({
    user: null,
    isLoading: false, //TO_Do 
  }),

  actions: {
    async loadUser() {
      this.isLoading = true;

      try {
        await new Promise((r) => setTimeout(r, 300));
        this.setUser(MOCK_USER);
      } finally {
        this.isLoading = false;
      }
    },
    
    setUser(user: User | null) {
      this.user = user;
    },

  },
});
