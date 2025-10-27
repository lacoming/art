<template>
  <v-app>
    <AppHeader @toggle-drawer="onToggleDrawer" />
    <v-main class="v-main-no-padding">
      <slot />
    </v-main>
    <Footer />
  </v-app>
</template>

<script setup lang="ts">
function onToggleDrawer() {
  // здесь можно открыть боковое меню, например через useDrawer()
}
</script>

<style scoped>
.v-main-no-padding {
  padding-top: 0 !important;
}
</style>