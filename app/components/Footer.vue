<template>
  <footer class="mt-16 border-t border-white/8">
    <div class="relative overflow-hidden py-4 border-b border-white/8">
      <div
        class="pointer-events-none absolute inset-y-0 left-0 w-16 z-10 bg-gradient-to-r from-[rgb(6,11,26)] to-transparent"
      />
      <div
        class="pointer-events-none absolute inset-y-0 right-0 w-16 z-10 bg-gradient-to-l from-[rgb(6,11,26)] to-transparent"
      />

      <div
        class="ticker"
        @mouseenter="paused = true"
        @mouseleave="paused = false"
        :class="{ paused }"
      >
        <span v-for="(item, i) in tickerItems" :key="i" class="ticker-item">
          <span class="text-blue-400 mx-4 select-none" aria-hidden="true"
            >✦</span
          >
          <span
            class="font-pixel text-sm uppercase tracking-widest text-white/45"
            >{{ item }}</span
          >
        </span>
      </div>
    </div>

    <div
      class="flex flex-col sm:flex-row justify-between items-center gap-2 py-5 px-1"
    >
      <p class="font-pjs text-sm text-white/35">
        © {{ year }} <span class="text-white/55">Bintang Murtifandy</span>
      </p>
      <p class="font-pjs text-sm text-white/35">
        Built with
        <NuxtLink to="https://nuxt.com/" class="text-primary"
          >Nuxt 4.3.1</NuxtLink
        >
      </p>
    </div>
  </footer>
</template>

<script setup lang="ts">
const year = new Date().getFullYear();

const paused = ref(false);

const ITEMS = [
  'Website',
  'Developer',
  'Network',
  'Engineer',
  'Tech',
  'Ethusiast',
  'Student',
  'Open for Work',
  'Extrovert',
];

const tickerItems = [...ITEMS, ...ITEMS];
</script>

<style scoped>
.ticker {
  display: flex;
  width: max-content;
  animation: scroll-left 30s linear infinite;
  will-change: transform;
}

.ticker.paused {
  animation-play-state: paused;
}

.ticker-item {
  display: inline-flex;
  align-items: center;
  white-space: nowrap;
}

@keyframes scroll-left {
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(-50%);
  }
}
</style>
