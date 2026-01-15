<template>
  <article class="news-article__card">
    <RouterLink
      class="news-article__link"
      :to="`/news/${newsArticle.id}`" 
    >
      <img
        class="news-article__image"
        :src="articleImages[newsArticle.image]"
        :alt="newsArticle.title"
      >

      <h2 class="news-article__title">
        {{ newsArticle.title }}
      </h2>
      <p class="news-article__description">
        {{ newsArticle.shortDescription }}
      </p>
      <footer class="news-article__footer">
        <img
          src="@/assets/img/icons/calendar-icon.svg"
          alt="calendar icon"
        >
        <time
          class="news-article__date"
        >
          {{ newsArticle.publicationDate }}
        </time>

        <span>|</span>

        <p class="news-article__author">
          written by {{ newsArticle.author }}
        </p>
      </footer>
    </RouterLink>
  </article>
</template>

<script setup lang="ts">
import img1 from '@/assets/img/news/article-1-min.png';
import img2 from '@/assets/img/news/article-2-min.png';
import img3 from '@/assets/img/news/article-3-min.png';
import img4 from '@/assets/img/news/article-4-min.png';
import img5 from '@/assets/img/news/article-5-min.png';
import img6 from '@/assets/img/news/article-6-min.png';
import type { NewsArticle } from '@/types/news.ts';
  
defineProps<{
  newsArticle: NewsArticle
}>();

// Only for the test assignment; in real cases we receive the image URL.
const articleImages: Record<string, string> = {
  'article-1-min.png': img1,
  'article-2-min.png': img2,
  'article-3-min.png': img3,
  'article-4-min.png': img4,
  'article-5-min.png': img5,
  'article-6-min.png': img6,
};
</script>

