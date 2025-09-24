<template>
  <div>
    <div class="hero" :style="{ backgroundImage: 'url(/back.png)' }"></div>

    <div class="center">
      <h1>Послушай новый сингл!</h1>
      <audio class="player" controls :src="'/single.mp3'"></audio>
      <NuxtLink class="albumsBtn" to="/albums">Все альбомы →</NuxtLink>
    </div>
  </div>
</template>

<script setup lang="ts">
// Ничего не требуется: используем стандартный HTML5 audio
</script>

<style scoped>
.hero {
  width: 100%;
  height: 55vh;
  background-size: cover;
  background-position: center;
}

.center {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  padding: 24px 12px 48px;
}

.player {
  width: min(720px, 92vw);
}

.albumsBtn {
  display: inline-block;
  padding: 10px 16px;
  border: 2px solid #2c3e50;
  border-radius: 8px;
  text-decoration: none;
}

.albumsBtn:hover {
  filter: brightness(0.95);
}
</style>

