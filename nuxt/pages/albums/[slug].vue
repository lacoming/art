<template>
  <v-container fluid class="blog-list pt-17">    
    <!-- Main Content -->
    <div class="main-content pt-15 ps-4">
      <div class="container"> 
        <div class="blog-content text-center">
          
          <v-row v-if="albomy" justify="center" class="hero-container">
            <img class="hero" src="/back3.png">
            <div class="hero-text">
              <h1>{{ albomy.title }}</h1>
            </div>
            
            <div>
              <h2>ОБ АЛЬБОМЕ</h2>
              <div class="about">
              <BlogRichText v-if="albomy.description" :blocks="albomy.description"/>
              </div>
            </div>
          </v-row>

          <v-row v-else justify="center">
            <h1>Запрашиваемая вами страница не найдена</h1>
          </v-row>

        </div>
      </div>
    </div>
  </v-container>
</template>


<script setup lang="ts">
  import type { Albomy } from '~/types/albums'

  definePageMeta({ layout: 'default' })

  const { find } = useStrapi()
  const route = useRoute()
  const slug = route.params.slug as string

  // получаем все альбомы и фильтруем по slug
  const { data: albomiesResponse } = await useAsyncData('albomies-all', () =>
    find('albomies', {
      populate: ['cover', 'music']
    })
  )

  // находим альбом по slug
  const albomy = computed(() => {
    const albums = albomiesResponse.value?.data ?? []
    
    const foundAlbum = albums.find((item: any) => {
      // Пробуем оба варианта - новый формат Strapi v5 и старый
      const albumSlug = item.slug || item.attributes?.slug
      return albumSlug === slug
    })
    
    if (!foundAlbum) return null
    return {
      id: foundAlbum.id,
      ...(foundAlbum.attributes || foundAlbum)
    } as Albomy
  })
</script>

<style>
h1 {
  font-family: 'Rostov';
  font-size: 180px;
  font-weight: 400;
  color: white;
}

h2 {
  font-family: 'Rostov';
  font-size: 52px;
  font-weight: 400;
  color: white;
  line-height: 62px;
  padding: 32px 0 0 0;
}

.about {
    font-family: 'Helvetica';
    color: white;
    font-weight: 400;
    font-size: 16px;
    justify-content: center;
    text-align: center;
    letter-spacing: 0.1em; 
  }


  .hero-container {
  position: relative;
  display: inline-block;
}

  .hero {
  width: 50%;
  height: auto;
  display: block;
  margin: 0 auto; /* Центрируем картинку */
}

.hero-text {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-60%, -50%);
  text-align: center;
  color: white;
  z-index: 2;
  width: 50%;
}
</style>