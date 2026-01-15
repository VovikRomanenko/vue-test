<template>
  <header class="header">
    <div class="header__container">
      <RouterLink
        class="header-logo"
        to="/"
      >
        <img
          class="header-logo__img"
          src="@/assets/img/logo.png"
          alt="Test Logo"
        >
      </RouterLink>
      <HeaderProfile />
    </div>
  </header>
</template>

<script setup lang="ts">
import HeaderProfile from '@/components/layout/header/HeaderProfile.vue';
</script>

