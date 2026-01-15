<template>
  <!-- Need create profile page and use RouterLink-->
  <a
    class="header__profile"
    href="/#"
    aria-label="Open profile"
  >
    <p class="header__profile-name">{{ fullName }}</p>
    <img
      v-if="avatarUrl"
      class="header__profile-img"
      :src="avatarUrl"
      :alt="fullName"
    >
  </a>
</template>

<script setup lang="ts">

import { onMounted } from 'vue';

import { useUserStore } from '@/stores/user';

const { loadUser } = useUserStore();

onMounted(() => {
  loadUser();
});

import { useUserData } from '@/composables/useUserData';

//We can also use a getter in the store, but usually a user has many fields, so it’s better to use a composable.
const { fullName, avatarUrl } = useUserData();
</script>
