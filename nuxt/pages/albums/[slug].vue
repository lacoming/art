<template>
  <div>
    <h1>{{ album?.attributes?.title }}</h1>
    <div v-html="album?.attributes?.description"></div>
    
    <!-- Обложка -->
    <img 
      v-if="album?.attributes?.cover?.data" 
      :src="`http://localhost:1337${album.attributes.cover.data.attributes.url}`" 
      :alt="album.attributes.title"
    />
    
    <!-- Музыка -->
    <div v-if="album?.attributes?.music?.data">
      <audio 
        v-for="track in album.attributes.music.data" 
        :key="track.id"
        controls
        :src="`http://localhost:1337${track.attributes.url}`"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
const route = useRoute()
const slug = route.params.slug as string

const { find } = useStrapi()
const { data: albumResponse } = await useAsyncData(`album-${slug}`, () =>
  find("albomy", {
    filters: { 
      slug: { $eq: slug }   // ← правильная структура фильтра
    },
    populate: '*'
  })
)

// Правильное извлечение данных с типизацией
const album = computed(() => {
  const data = albumResponse.value as any
  return data?.data?.[0] || null
})

if (!album.value) {
  throw createError({
    statusCode: 404,
    statusMessage: 'Альбом не найден'
  })
}
</script>