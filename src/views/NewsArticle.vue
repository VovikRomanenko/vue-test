<template>
  <section class="article__container">
    TO_DO
    {{ article }}
  </section>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();

const articleId = computed(() => Number(route.params.id) ?? 0);

import { useNewsStore } from '@/stores/news';

const newsStore = useNewsStore();

const article = newsStore.getNewsById(articleId.value); 

</script>
