<template>
  <div class="flex flex-col gap-28 pt-28 pb-24">
    <PortofolioHeader />
    <PortofolioProjects />
    <!-- <PortofolioCertificates /> -->
    <PortofolioExperience />
  </div>
</template>

<script setup lang="ts">
useSeoMeta({
  title: 'Portfolio ── Bintang Murtifandy',
  description:
    'Projects, certificates, and experience from Bintang Murtifandy — Fullstack Web Developer, DevOps, and Network Engineering student.',
  ogTitle: 'Portfolio ── Bintang Murtifandy',
  ogDescription:
    'Projects, certificates, and experience from Bintang Murtifandy — Fullstack Web Developer, DevOps, and Network Engineering student.',
  twitterTitle: 'Portfolio ── Bintang Murtifandy',
  twitterDescription:
    'Projects, certificates, and experience from Bintang Murtifandy — Fullstack Web Developer, DevOps, and Network Engineering student.',
});
</script>
