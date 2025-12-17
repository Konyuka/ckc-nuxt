<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup>
useHead({
  titleTemplate: (titleChunk) => {
    return titleChunk ? `${titleChunk} - Beyond Commercial Kitchen` : 'Beyond Commercial Kitchen - Premier Kitchen Solutions in Kenya';
  }
})
</script>

<style>
/* Emergency fix for scroll locking */
html,
body {
  overflow-y: auto !important;
  height: auto !important;
  overflow-x: hidden;
}
</style>
