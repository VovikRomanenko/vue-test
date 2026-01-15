import { defineStore } from 'pinia';

import { MOCK_NEWS } from '@/constants';
import type { NewsArticle, NewsState } from '@/types/news';

export const useNewsStore = defineStore('news', {
  state: (): NewsState => ({
    news: [],
    isLoading: false,
  }),

  getters: {
    getNews(state) {
      return state.news;
    },

    getNewsById: (state) => {
      return (id: number) => state.news.find((article) => article.id === id) ?? null;
    },
  },

  actions: {
    async loadNews() {
      this.isLoading = true;

      try {
        await new Promise((r) => setTimeout(r, 300));
        this.setNews(MOCK_NEWS);
      } finally {
        this.isLoading = false;
      }
    },
    
    setNews(news: NewsArticle[] | []) {
      this.news = news;
    },

  },
});
