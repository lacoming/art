<template>
    <div class="page-container">
      <div v-if="albomy" class="album-section">
        
        <!-- LEFT: Album Cover -->
        <div class="album-cover-wrapper">
          <NuxtImg :src="coverUrl" class="album-cover" />
        </div>

        <!-- RIGHT: Album Info -->
        <div class="album-info">
          <div class="album-header">
            <h1>{{ albomy.title }}</h1>
            <div class="about">
              <BlogRichText v-if="albomy.description" :blocks="albomy.description"/>
            </div>
          </div>

          <!-- Tracks List -->
          <div v-if="tracks.length" class="tracks-section">
            <div class="tracks-list">
              <div 
                class="track" 
                v-for="(t, i) in tracks" 
                :key="i"
                :class="{ 'track-active': isCurrentTrack(i) }"
                @click="handleTrackClick(i)"
              >
                <div class="track-number">
                  <span v-if="!isCurrentTrack(i) || !isPlaying">{{ String(i + 1).padStart(2, '0') }}</span>
                </div>
                <div class="track-info">
                  <div class="track-title">{{ t.name }}</div>
                </div>
                <div class="track-duration">{{ formatDuration(t.duration) }}</div>
              </div>
            </div>
          </div>
        </div>

      </div>

      <div v-else class="not-found">
        <h1>Запрашиваемая вами страница не найдена</h1>
      </div>

      <!-- Audio Player -->
      <AudioPlayer />
    </div>
</template>

<script setup lang="ts">
  import { useAudioPlayer } from '~/composables/useAudioPlayer'
  import type { Track } from '~/composables/useAudioPlayer'

  definePageMeta({ layout: 'default' })

  const { find } = useStrapi()
  const route = useRoute()
  const slug = route.params.slug as string

  const { data: albomiesResponse } = await useAsyncData('albomies-all', () =>
    find('albomies', {
      populate: ['cover', 'music']
    })
  )

  const albomy = computed<any>(() => {
    const albums: any[] = albomiesResponse.value?.data ?? []
    const foundAlbum = albums.find((item: any) => {
      const albumSlug = item.slug || item.attributes?.slug
      return albumSlug === slug
    })
    
    if (!foundAlbum) return null
    return {
      id: foundAlbum.id,
      ...(foundAlbum.attributes || foundAlbum)
    } as any
  })

  const coverUrl = computed(() => {
    const cover: any = (albomy.value as any)?.cover
    const url = cover?.url || cover?.data?.attributes?.url
    return url ? useStrapiMedia(url) : '/back3.png'
  })

  const tracks = computed<Track[]>(() => {
    const music: any[] = ((albomy.value as any)?.music) || []
    return music
      .map((m: any) => {
        const file = m?.url ? m : m?.data?.attributes
        if (!file?.url) return null
        return {
          name: file.name || file.alternativeText || 'Без названия',
          url: useStrapiMedia(file.url),
          duration: file.duration || undefined,
          albumTitle: albomy.value?.title,
          albumCover: coverUrl.value
        } as Track
      })
      .filter((x): x is Track => Boolean(x))
  })

  const formatDuration = (seconds?: number) => {
    if (!seconds) return '--:--'
    const mins = Math.floor(seconds / 60)
    const secs = Math.floor(seconds % 60)
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`
  }

  // Audio Player Integration
  const { 
    setPlaylist, 
    playTrack, 
    currentTrack, 
    currentTrackIndex,
    isPlaying 
  } = useAudioPlayer()

  // Set playlist when tracks are loaded
  watch(tracks, (newTracks) => {
    if (newTracks.length > 0) {
      setPlaylist(newTracks, albomy.value?.title, coverUrl.value)
    }
  }, { immediate: true })

  const handleTrackClick = (index: number) => {
    const track = tracks.value[index]
    if (track) {
      playTrack(track, index)
    }
  }

  const isCurrentTrack = (index: number) => {
    return currentTrackIndex.value === index && currentTrack.value !== null
  }
</script>

<style scoped>
  .page-container {
    width: 100%;
    padding: 10% 5% 120px 5%; /* Added bottom padding for audio player */
  }

  .album-section {
    display: flex;
    gap: 60px;
    max-width: 1200px;
    margin: 0 auto;
    align-items: flex-start;
  }

  .album-cover-wrapper {
    flex: 0 0 auto;
    width: 580px;
    height: 580px;
  }

  .album-cover {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }

  .album-info {
    flex: 1;
    min-width: 0;
  }


  h1 {
    font-family: "IFKica";
    font-size: 32px;
    font-weight: 300;
    color: #FE5907;
    margin: 0 0 24px 0;
  }

  .about {
    font-family: 'NeueMachina';
    font-size: 16px;
    font-weight: 400;
    color: #FFFFC5;
    line-height: 24px;
    letter-spacing: 0.08em;
    text-transform: uppercase;
  }

  h2 {
    font-family: 'NeueMachina';
    font-size: 16px;
    font-weight: 400;
    color: #FFFFC5;
    line-height: 24px;
    letter-spacing: 0.05em;
    margin: 0 0 24px 0;
    text-transform: uppercase;
  }

  .tracks-section {
    margin-top: 0px;
  }

  .tracks-list {
    display: flex;
    flex-direction: column;
    gap: 16px;
  }

  .track {
    display: flex;
    align-items: center;
    gap: 16px;
    border-bottom: 1px solid rgba(255, 255, 197, 0.1);
    cursor: pointer;
    transition: all 0.3s ease;
    border-radius: 8px;
    margin-bottom: 4px;
  }

  .track:hover {
    background: rgba(254, 89, 7, 0.05);
    border-bottom-color: rgba(254, 89, 7, 0.2);
    transform: translateX(4px);
  }

  .track-active {
    background: rgba(254, 89, 7, 0.1);
    border-bottom-color: rgba(254, 89, 7, 0.3);
  }

  .track-active .track-number,
  .track-active .track-title,
  .track-active .track-duration {
    color: #FE5907;
  }

  .track-number {
    font-family: 'IFKica';
    font-size: 32px;
    font-weight: 400;
    color: #FE5907;
    min-width: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: color 0.3s ease;
  }

  .playing-icon {
    color: #FE5907;
  }

  .track-info {
    flex: 1;
    min-width: 0;
  }

  .track-title {
    font-family: 'Helvetica';
    font-size: 14px;
    font-weight: 400;
    color: #FFFFC5;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    transition: color 0.3s ease;
  }

  .track-duration {
    font-family: 'NeueMachina';
    font-size: 14px;
    color: #FFFFC5;
    min-width: 50px;
    text-align: right;
    transition: color 0.3s ease;
  }

  .not-found {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 60vh;
  }

  .not-found h1 {
    font-size: 32px;
    color: #FE5907;
  }

  @media (max-width: 768px) {
    .album-section {
      flex-direction: column;
      gap: 30px;
    }

    .album-cover-wrapper {
      width: 100%;
      height: auto;
      aspect-ratio: 1;
    }

    h1 {
      font-size: 32px;
    }

    .album-section {
      padding: 0;
    }
  }
</style>