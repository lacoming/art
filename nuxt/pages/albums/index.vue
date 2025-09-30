<template>
  <section class="container">
    <h1>Альбомы</h1>
    <ul v-if="albums">
      <li v-for="a in albums" :key="a.slug">
        <NuxtLink :to="`/albums/${a.slug}`">{{ a.title }} ({{ a.year }})</NuxtLink>
      </li>
    </ul>
  </section>
</template>

<script setup lang="ts">
  const { data: albums } = await useFetch('/api/albums')
  useHead({ title: 'Альбомы' })
</script>