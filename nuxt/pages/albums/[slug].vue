<template>
  <v-container fluid>    
    
    <div>
      <div> 
        <div class="text-center">
          
          <v-row v-if="albomy" justify="center">
            
            <div class="hero-frame">
              <NuxtImg :src="coverUrl" fit="cover" :modifiers="{ format: 'webp' }" class="hero-img" />
                <div class="hero-text">
                  <h1>{{ albomy.title }}</h1>
                </div>
            </div>
            
            <div>
              <h2>ОБ АЛЬБОМЕ</h2>
              <div class="about">
              <BlogRichText v-if="albomy.description" :blocks="albomy.description"/>
              </div>
            </div>

            <div v-if="tracks.length" class="tracks">
              <h2>ТРЕКИ</h2>
              <div class="track" v-for="(t, i) in tracks" :key="i">
                <div class="track-title">{{ t.name }}</div>
                <audio :src="t.url" controls preload="none"></audio>
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
  const albomy = computed<any>(() => {
    const albums: any[] = albomiesResponse.value?.data ?? []
    
    const foundAlbum = albums.find((item: any) => {
      // Пробуем оба варианта - новый формат Strapi v5 и старый
      const albumSlug = item.slug || item.attributes?.slug
      return albumSlug === slug
    })
    
    if (!foundAlbum) return null
    return {
      id: foundAlbum.id,
      ...(foundAlbum.attributes || foundAlbum)
    } as any
  })

  // Получаем полный URL обложки из Strapi (поддержка v5 и legacy формата)
  const coverUrl = computed(() => {
    const cover: any = (albomy.value as any)?.cover
    const url = cover?.url || cover?.data?.attributes?.url
    return url ? useStrapiMedia(url) : '/back3.png'
  })

  type Track = { name: string; url: string; mime?: string; size?: number; duration?: number }

  // Нормализуем треки из Strapi (поддержка v5 и legacy)
  const tracks = computed<Track[]>(() => {
    const music: any[] = ((albomy.value as any)?.music) || []
    return music
      .map((m: any) => {
        // v5 single media items often are objects with url; relations can be { data: {...attributes} }
        const file = m?.url ? m : m?.data?.attributes
        if (!file?.url) return null
        return {
          name: file.name || file.alternativeText || 'Без названия',
          url: useStrapiMedia(file.url),
          mime: file.mime || undefined,
          size: file.size || undefined,
          duration: file.duration || undefined,
        } as Track
      })
      .filter((x): x is Track => Boolean(x))
  })
</script>

<style scoped>
  h1 {
    font-family: 'Rostov';
    font-size: 180px;
    font-weight: 400;
    color: white;
    margin: 0;  
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
    position: absolute;
    bottom: 0;          /* прижимает к низу */
    left: 50%;          /* центр по горизонтали */
    transform: translateX(-50%); /* центрирует только по X */
    z-index: 2;  
    padding-bottom: 0;  /* Центрируем картинку */
  }

  .hero-frame { 
    position: relative; 
    width: 100%; 
    max-width: 540px; 
    max-height: 540px;
    margin: 0 auto; 
    aspect-ratio: 1/1; 
  }

  .hero-img { 
    width: 100%; 
    height: 100%; 
    object-fit: cover; 
    display: block; 
  }
  
  .hero-text {
    position: absolute;
    bottom: 0;          /* прижимает к низу */
    left: 50%;          /* центр по горизонтали */
    transform: translateX(-50%); /* центрирует только по X */
    z-index: 2;  
    padding-bottom: 0; 
  }

  .tracks {
    margin-top: 24px;
  }

  .track {
    margin: 12px auto;
    width: 50%;
    color: white;
  }

  .track-title {
    margin-bottom: 8px;
    font-family: 'Helvetica';
    letter-spacing: 0.1em;
  }
</style>