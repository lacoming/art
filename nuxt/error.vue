<template>
    <NuxtLayout>
      <div class="error-page">
        <img class="hero" src="/error.png">
        <div >
          <h1 class="error-text">Page not found</h1>
        </div>
        <div class="error-content">     
          <v-btn class="error-btn" @click="handleError">
            На главную страницу
          </v-btn>
        </div>
      </div>
    </NuxtLayout>
  </template>
  
<script setup lang="ts">
import type { NuxtError } from 'nuxt/app'

const props = defineProps<{
  error: NuxtError
}>()

const handleError = () => clearError({ redirect: '/' })
</script>
  
<style scoped>
.error-page {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-end;
    min-height: 100vh;
    width: 100%;
    text-align: center;
    padding: 2rem;
    overflow: hidden;
}

.error-content {
    position: relative;
    z-index: 1;
    border: 2px solid #FE5907;
    width: 380px;
    padding: 4px;
}

.hero {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    z-index: 0;    
}

.error-btn {
    position: relative;
    z-index: 1;
    background-color: transparent;
    color: #FE5907;
    font-family: 'NeueMachina';
    font-weight: 800;
    font-size: 18px;
    letter-spacing: 0.03em;
    
}

.error-text {
    position: relative;
    z-index: 1;
    font-family: 'IFKica';
    font-weight: 300;
    font-size: 52px;
    letter-spacing: 0.05em;
    color: #FE5907;
    padding-bottom: 24px;
    text-transform: uppercase;
}
</style>