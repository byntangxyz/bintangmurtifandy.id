<template>
  <div
    class="container min-h-screen overflow-x-hidden scroll-smooth px-4 sm:px-6 md:px-16 py-2"
  >
    <BackgroundFx />
    <CustomScrollbar />
    <Header />
    <UContainer class="font-inter">
      <slot />
    </UContainer>
    <Footer />
  </div>
</template>

<script setup lang="ts"></script>

<style scoped></style>
