import { ref, computed } from 'vue'

export type Track = {
  name: string
  url: string
  duration?: number
  albumTitle?: string
  albumCover?: string
}

const currentTrack = ref<Track | null>(null)
const playlist = ref<Track[]>([])
const isPlaying = ref(false)
const currentTime = ref(0)
const duration = ref(0)
const audioElement = ref<HTMLAudioElement | null>(null)

export const useAudioPlayer = () => {
  const setPlaylist = (tracks: Track[], albumTitle?: string, albumCover?: string) => {
    playlist.value = tracks.map(t => ({
      ...t,
      albumTitle: albumTitle || t.albumTitle,
      albumCover: albumCover || t.albumCover
    }))
  }

  const playTrack = (track: Track, index?: number) => {
    // Если передан индекс, используем трек из плейлиста
    if (index !== undefined && playlist.value[index]) {
      currentTrack.value = playlist.value[index]
    } else {
      currentTrack.value = track
    }
    // isPlaying будет установлен в true когда аудио начнет играть (через события)
  }

  const play = async () => {
    console.log('play() called, audioElement.value:', audioElement.value)
    if (audioElement.value) {
      try {
        console.log('Calling audioElement.play()...')
        await audioElement.value.play()
        console.log('Play successful!')
        isPlaying.value = true
      } catch (error) {
        console.error('Error playing audio:', error)
        isPlaying.value = false
      }
    } else {
      console.error('audioElement.value is null in play()')
    }
  }

  const pause = () => {
    if (audioElement.value) {
      audioElement.value.pause()
      isPlaying.value = false
    }
  }

  const togglePlay = async () => {
    if (isPlaying.value) {
      pause()
    } else {
      await play()
    }
  }

  const nextTrack = () => {
    if (!currentTrack.value || playlist.value.length === 0) return
    
    const currentIndex = playlist.value.findIndex(t => t.url === currentTrack.value?.url)
    const nextIndex = (currentIndex + 1) % playlist.value.length
    playTrack(playlist.value[nextIndex], nextIndex)
  }

  const previousTrack = () => {
    if (!currentTrack.value || playlist.value.length === 0) return
    
    const currentIndex = playlist.value.findIndex(t => t.url === currentTrack.value?.url)
    const prevIndex = currentIndex === 0 ? playlist.value.length - 1 : currentIndex - 1
    playTrack(playlist.value[prevIndex], prevIndex)
  }

  const seek = (time: number) => {
    if (audioElement.value) {
      audioElement.value.currentTime = time
      currentTime.value = time
    }
  }

  const setAudioElement = (element: HTMLAudioElement) => {
    console.log('setAudioElement called with:', element)
    audioElement.value = element
    console.log('audioElement.value is now:', audioElement.value)
  }

  const updateTime = (time: number) => {
    currentTime.value = time
  }

  const updateDuration = (dur: number) => {
    duration.value = dur
  }

  const closePlayer = () => {
    pause()
    currentTrack.value = null
    currentTime.value = 0
  }

  const currentTrackIndex = computed(() => {
    if (!currentTrack.value) return -1
    return playlist.value.findIndex(t => t.url === currentTrack.value?.url)
  })

  return {
    currentTrack,
    playlist,
    isPlaying,
    currentTime,
    duration,
    currentTrackIndex,
    setPlaylist,
    playTrack,
    play,
    pause,
    togglePlay,
    nextTrack,
    previousTrack,
    seek,
    setAudioElement,
    updateTime,
    updateDuration,
    closePlayer
  }
}

