<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<style>
/* Emergency fix for scroll locking */
html, body {
  overflow-y: auto !important;
  height: auto !important;
  overflow-x: hidden;
}
</style>
