<template>
  <div>
    <UApp>
      <NuxtLayout>
        <NuxtPage />
      </NuxtLayout>
    </UApp>
  </div>
</template>

<script setup lang="ts">
const route = useRoute();
const config = useRuntimeConfig();

const siteName = config.public.siteName || 'Bintang Murtifandy';
const siteUrl = (
  config.public.siteUrl || 'https://bintangmurtifandy.id'
).replace(/\/$/, '');
const canonicalUrl = computed(() => `${siteUrl}${route.path}`);
const defaultTitle = 'Portofolio - Bintang Murtifandy';
const defaultDescription =
  'Official portfolio of Bintang Murtifandy, a Fullstack Developer, DevOps learner, and Network Engineering enthusiast.';
const ogImageUrl = `${siteUrl}/og_image.png`;

useHead(() => ({
  title: defaultTitle,
  link: [{ rel: 'canonical', href: canonicalUrl.value }],
  meta: [
    { name: 'robots', content: 'index,follow,max-image-preview:large' },
    { property: 'og:site_name', content: siteName },
    { property: 'og:type', content: 'website' },
    { property: 'og:locale', content: 'id_ID' },
    { property: 'og:url', content: canonicalUrl.value },
    { property: 'og:title', content: defaultTitle },
    { property: 'og:description', content: defaultDescription },
    { property: 'og:image', content: ogImageUrl },
    {
      property: 'og:image:alt',
      content: 'Preview portofolio Bintang Murtifandy',
    },
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: defaultTitle },
    { name: 'twitter:description', content: defaultDescription },
    { name: 'twitter:image', content: ogImageUrl },
  ],
  script: [
    {
      key: 'ld-json-person',
      type: 'application/ld+json',
      children: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Person',
        name: 'Bintang Murtifandy',
        url: siteUrl,
        image: `${siteUrl}/me.webp`,
        sameAs: [
          'https://github.com/byntangxyz',
          'https://www.linkedin.com/in/bintangmurtifandy/',
          'https://instagram.com/byntangxyz',
          'https://youtube.com/@byntangxyzz',
        ],
      }),
    },
    {
      key: 'ld-json-website',
      type: 'application/ld+json',
      children: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'WebSite',
        name: siteName,
        url: siteUrl,
        inLanguage: 'id-ID',
      }),
    },
  ],
}));
</script>

<style scoped></style>
