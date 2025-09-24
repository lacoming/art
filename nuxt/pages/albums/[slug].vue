<script setup lang="ts">
const route = useRoute()
const { data: album, pending, error } = await useFetch(() => `/api/albums/${route.params.slug}`)
useHead(() => ({ title: album.value ? album.value.title : 'Альбом' }))
</script>

<template>
  <section class="container">
    <p><NuxtLink to="/albums">← Назад к альбомам</NuxtLink></p>
    <div v-if="pending">Загрузка…</div>
    <div v-else-if="error">Не найдено</div>
    <div v-else>
      <h1>{{ album.title }}</h1>
      <p>Год: {{ album.year }}</p>
      <!-- Здесь потом появятся треки, обложка и т.д. -->
    </div>
  </section>
</template>
