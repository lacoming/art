<template>
  <Transition name="player-slide">
    <div v-if="currentTrack" class="audio-player">
      <div class="player-content">
        <!-- Album Cover -->
        <div class="player-album-cover">
          <NuxtImg 
            v-if="currentTrack.albumCover" 
            :src="currentTrack.albumCover" 
            class="cover-image"
          />
          <div v-else class="cover-placeholder"></div>
        </div>

        <!-- Track Info -->
        <div class="player-track-info">
          <div class="track-name">{{ currentTrack.name }}</div>
          <div v-if="currentTrack.albumTitle" class="album-name">{{ currentTrack.albumTitle }}</div>
        </div>

        <!-- Controls -->
        <div class="player-controls">
          <button @click="previousTrack" class="control-btn">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M19 20L9 12L19 4V20Z" fill="currentColor"/>
              <path d="M9 20L9 4" stroke="currentColor" stroke-width="2"/>
            </svg>
          </button>

          <button @click="handleTogglePlay" class="control-btn play-btn">
            <svg v-if="!isPlaying" width="32" height="32" viewBox="0 0 24 24" fill="none">
              <path d="M8 5V19L19 12L8 5Z" fill="currentColor"/>
            </svg>
            <svg v-else width="32" height="32" viewBox="0 0 24 24" fill="none">
              <rect x="6" y="4" width="4" height="16" fill="currentColor"/>
              <rect x="14" y="4" width="4" height="16" fill="currentColor"/>
            </svg>
          </button>

          <button @click="nextTrack" class="control-btn">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M5 4L15 12L5 20V4Z" fill="currentColor"/>
              <path d="M15 4L15 20" stroke="currentColor" stroke-width="2"/>
            </svg>
          </button>

          <button @click="toggleShuffle" class="control-btn" :class="{ active: isShuffled }">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M16 3H21V8M4 20L21 3M21 16V21H16M15 15L21 21M4 4L9 9" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </button>
        </div>

        <!-- Time and Progress -->
        <div class="player-progress">
          <span class="time-current">{{ formatTime(currentTime) }}</span>
          
          <div class="progress-bar-container" @click="handleProgressClick">
            <div class="progress-bar">
              <div class="progress-fill" :style="{ width: progressPercent + '%' }"></div>
              <div class="progress-handle" :style="{ left: progressPercent + '%' }"></div>
            </div>
            <!-- Waveform visualization -->
            <div class="waveform">
              <div 
                v-for="i in 60" 
                :key="i" 
                class="wave-bar"
                :class="{ active: (i / 60) * 100 <= progressPercent }"
                :style="{ height: getWaveHeight(i) + '%' }"
              ></div>
            </div>
          </div>

          <span class="time-duration">{{ formatTime(duration) }}</span>
        </div>

        <!-- Close Button -->
        <button @click="closePlayer" class="close-btn">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
          </svg>
        </button>
      </div>

      <!-- Hidden Audio Element -->
      <audio
        ref="audioRef"
        :src="currentTrack.url"
        @timeupdate="onTimeUpdate"
        @loadedmetadata="onLoadedMetadata"
        @ended="onEnded"
        @play="onPlay"
        @pause="onPause"
        @playing="onPlaying"
        @error="onError"
      ></audio>
    </div>
  </Transition>
</template>

<script setup lang="ts">
import { ref, computed, watch, onMounted, nextTick } from 'vue'
import { useAudioPlayer } from '~/composables/useAudioPlayer'

const {
  currentTrack,
  isPlaying,
  currentTime,
  duration,
  play,
  togglePlay,
  nextTrack,
  previousTrack,
  seek,
  setAudioElement,
  updateTime,
  updateDuration,
  closePlayer
} = useAudioPlayer()

const audioRef = ref<HTMLAudioElement | null>(null)
const isShuffled = ref(false)

const progressPercent = computed(() => {
  if (!duration.value) return 0
  return (currentTime.value / duration.value) * 100
})

const formatTime = (seconds: number) => {
  if (!seconds || isNaN(seconds)) return '00:00'
  const mins = Math.floor(seconds / 60)
  const secs = Math.floor(seconds % 60)
  return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`
}

const onTimeUpdate = () => {
  if (audioRef.value) {
    updateTime(audioRef.value.currentTime)
  }
}

const onLoadedMetadata = () => {
  if (audioRef.value) {
    updateDuration(audioRef.value.duration)
  }
}

const onEnded = () => {
  nextTrack()
}

const onPlay = () => {
  isPlaying.value = true
}

const onPause = () => {
  isPlaying.value = false
}

const onPlaying = () => {
  isPlaying.value = true
}

const onError = (event: Event) => {
  console.error('Audio error:', event)
  isPlaying.value = false
}

const handleTogglePlay = async () => {
  await togglePlay()
}

const handleProgressClick = (event: MouseEvent) => {
  const target = event.currentTarget as HTMLElement
  const rect = target.getBoundingClientRect()
  const x = event.clientX - rect.left
  const percent = x / rect.width
  const newTime = percent * duration.value
  seek(newTime)
}

const toggleShuffle = () => {
  isShuffled.value = !isShuffled.value
}

// Generate random wave heights for visualization
const getWaveHeight = (index: number) => {
  // Create a pseudo-random but consistent wave pattern
  const base = 30 + Math.sin(index * 0.5) * 20
  const variation = Math.sin(index * 0.3) * 15
  return Math.max(20, Math.min(100, base + variation))
}

const playCurrentTrack = async () => {
  if (currentTrack.value && audioRef.value) {
    try {
      console.log('playCurrentTrack - Loading track:', currentTrack.value.name)
      console.log('playCurrentTrack - audioRef:', audioRef.value)
      audioRef.value.load()
      console.log('playCurrentTrack - Calling play() from composable...')
      await play()
      console.log('playCurrentTrack - Track should be playing now')
    } catch (error) {
      console.error('playCurrentTrack - Failed:', error)
      console.log('Autoplay blocked. Click play button to start.')
    }
  } else {
    console.error('playCurrentTrack - Missing:', { 
      hasTrack: !!currentTrack.value, 
      hasAudioRef: !!audioRef.value 
    })
  }
}

// Watch for track changes and auto-play
watch(currentTrack, async (newTrack, oldTrack) => {
  if (newTrack && audioRef.value) {
    // Если трек изменился, загружаем и воспроизводим новый
    if (!oldTrack || newTrack.url !== oldTrack.url) {
      await playCurrentTrack()
    }
  }
})

onMounted(async () => {
  console.log('onMounted called')
  console.log('audioRef.value:', audioRef.value)
  console.log('currentTrack.value:', currentTrack.value)
  
  await nextTick()
  
  if (audioRef.value) {
    console.log('Setting audio element...')
    setAudioElement(audioRef.value)
    
    // Если трек уже был установлен до монтирования, запускаем воспроизведение
    if (currentTrack.value) {
      console.log('Track already set on mount, starting playback...')
      console.log('Track URL:', currentTrack.value.url)
      await nextTick()
      await playCurrentTrack()
    }
  } else {
    console.error('audioRef.value is null after nextTick!')
  }
})
</script>

<style scoped>
.audio-player {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  background: linear-gradient(180deg, rgba(20, 20, 20, 0.95) 0%, rgba(10, 10, 10, 0.98) 100%);
  backdrop-filter: blur(20px);
  border-top: 1px solid rgba(254, 89, 7, 0.2);
  z-index: 1000;
  padding: 20px 40px;
}

.player-content {
  max-width: 1400px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  gap: 24px;
  position: relative;
}

.player-album-cover {
  width: 60px;
  height: 60px;
  flex-shrink: 0;
  border-radius: 4px;
  overflow: hidden;
  background: rgba(254, 89, 7, 0.1);
}

.cover-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.cover-placeholder {
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg, #FE5907 0%, #FF8A3D 100%);
}

.player-track-info {
  min-width: 200px;
  flex-shrink: 0;
}

.track-name {
  font-family: 'Helvetica', sans-serif;
  font-size: 14px;
  font-weight: 500;
  color: #FFFFC5;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  margin-bottom: 4px;
}

.album-name {
  font-family: 'NeueMachina', sans-serif;
  font-size: 12px;
  color: rgba(255, 255, 197, 0.6);
  letter-spacing: 0.05em;
  text-transform: uppercase;
}

.player-controls {
  display: flex;
  align-items: center;
  gap: 16px;
  flex-shrink: 0;
}

.control-btn {
  background: none;
  border: none;
  color: #FFFFC5;
  cursor: pointer;
  padding: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
  border-radius: 50%;
}

.control-btn:hover {
  color: #FE5907;
  background: rgba(254, 89, 7, 0.1);
  transform: scale(1.1);
}

.control-btn.active {
  color: #FE5907;
}

.play-btn {
  background: #FE5907;
  color: #000;
  width: 48px;
  height: 48px;
  border-radius: 50%;
}

.play-btn:hover {
  background: #FF7A2E;
  transform: scale(1.05);
}

.player-progress {
  flex: 1;
  display: flex;
  align-items: center;
  gap: 16px;
  min-width: 0;
}

.time-current,
.time-duration {
  font-family: 'NeueMachina', sans-serif;
  font-size: 12px;
  color: #FFFFC5;
  min-width: 45px;
  text-align: center;
}

.progress-bar-container {
  flex: 1;
  height: 40px;
  position: relative;
  cursor: pointer;
  display: flex;
  align-items: center;
}

.progress-bar {
  position: absolute;
  top: 50%;
  left: 0;
  right: 0;
  height: 4px;
  background: rgba(255, 255, 197, 0.1);
  border-radius: 2px;
  transform: translateY(-50%);
  z-index: 2;
}

.progress-fill {
  height: 100%;
  background: #FE5907;
  border-radius: 2px;
  transition: width 0.1s linear;
}

.progress-handle {
  position: absolute;
  top: 50%;
  width: 12px;
  height: 12px;
  background: #FE5907;
  border-radius: 50%;
  transform: translate(-50%, -50%);
  box-shadow: 0 0 8px rgba(254, 89, 7, 0.5);
  transition: left 0.1s linear;
}

.waveform {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 2px;
  z-index: 1;
  pointer-events: none;
}

.wave-bar {
  flex: 1;
  background: rgba(255, 255, 197, 0.2);
  border-radius: 2px;
  transition: all 0.3s ease;
  min-width: 2px;
}

.wave-bar.active {
  background: rgba(254, 89, 7, 0.6);
}

.close-btn {
  background: none;
  border: none;
  color: rgba(255, 255, 197, 0.6);
  cursor: pointer;
  padding: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
  border-radius: 50%;
  flex-shrink: 0;
}

.close-btn:hover {
  color: #FE5907;
  background: rgba(254, 89, 7, 0.1);
}

/* Animations */
.player-slide-enter-active,
.player-slide-leave-active {
  transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}

.player-slide-enter-from,
.player-slide-leave-to {
  transform: translateY(100%);
}

/* Responsive */
@media (max-width: 768px) {
  .audio-player {
    padding: 16px 20px;
  }

  .player-content {
    gap: 12px;
  }

  .player-album-cover {
    width: 48px;
    height: 48px;
  }

  .player-track-info {
    min-width: 120px;
  }

  .track-name {
    font-size: 12px;
  }

  .album-name {
    font-size: 10px;
  }

  .player-controls {
    gap: 8px;
  }

  .control-btn {
    padding: 4px;
  }

  .play-btn {
    width: 40px;
    height: 40px;
  }

  .waveform {
    gap: 1px;
  }
}
</style>

