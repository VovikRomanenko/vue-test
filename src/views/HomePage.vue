<template>
  <NewsList />
</template>

<script setup lang="ts">
import { onMounted } from 'vue';

import NewsList from '@/components/news/NewsList.vue';
import { useUserStore } from '@/stores/user';

const { loadUser } = useUserStore();

onMounted(() => {
  loadUser();
});
</script>
