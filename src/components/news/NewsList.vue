<template>
  <section class="news-list">
    <div class="news-list__container">
      <h1 class="news-list__title">
        Last news
      </h1>

      <NewsCard
        v-for="article in news"
        :key="article.id"
        :news-article="article"
      />
    </div>
  </section>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { onMounted } from 'vue';

import NewsCard from '@/components/news/NewsCard.vue';
import { useNewsStore } from '@/stores/news';

const newsStore = useNewsStore();

const { getNews: news  } = storeToRefs(newsStore);

onMounted(() => {
  newsStore.loadNews();
});

</script>

