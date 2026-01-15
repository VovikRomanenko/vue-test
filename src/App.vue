<template>
  <AppHeader />
  <main class="app_main">
    <RouterView #default="{ Component, route }">
      <Transition
        name="fade"
        mode="out-in"
      >
        <component
          :is="Component"
          :key="route.fullPath"
        />
      </Transition>
    </RouterView>
  </main>
  <AppFooter />
</template>

<script setup lang="ts">
import AppFooter from '@/components/layout/AppFooter.vue';
import AppHeader from '@/components/layout/header/AppHeader.vue';
</script>
