<template>
  <v-app>
    <AppHeader @toggle-drawer="onToggleDrawer" />
    <v-main>
      <slot />
    </v-main>
  </v-app>
</template>

<script setup lang="ts">
function onToggleDrawer() {
  // здесь можно открыть боковое меню, например через useDrawer()
}
</script>