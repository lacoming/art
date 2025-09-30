<template>
    <v-app-bar
      :class="['app-header', computedTheme]"
      :style="headerStyle"
      height="64.8"
      app
    >
      <v-container style="max-width: 1200px; margin: 0 auto">
        <v-row align="center" justify="center" no-gutters>
          <v-spacer />
          <v-col class="d-flex align-center justify-center">
            <nav v-if="$vuetify.display.lgAndUp" class="header-links">
              <a
                v-for="link in headerLinks"
                :key="link.title"
                class="header-link"
                :href="link.href"
              >
                {{ link.title }}
              </a>
            </nav>
            <v-btn icon class="ml-2" @click="$emit('toggle-drawer')">
              <v-icon>mdi-menu</v-icon>
            </v-btn>
          </v-col>
        </v-row>
      </v-container>
    </v-app-bar>
  </template>
  
  <script setup lang="ts">
  import { ref, computed, onMounted, onUnmounted } from "vue";
  
  const headerOpacity = ref(0);
  const isClient = ref(false);
  
  const computedTheme = 'black';
  
  const handleScroll = () => {
    if (!isClient.value) return;
    const scrollY = window.scrollY;
    headerOpacity.value = Math.min(scrollY / 100, 1);
  };
  
  onMounted(() => {
    isClient.value = true;
    handleScroll();
    window.addEventListener("scroll", handleScroll);
  });
  
  onUnmounted(() => {
    if (isClient.value) {
      window.removeEventListener("scroll", handleScroll);
    }
  });
  
  
  
  const headerStyle = computed(() => {
    if (!isClient.value) {
      return {
        "--header-opacity": "0",
        boxShadow: "none",
      };
    }
  
    return {
      "--header-opacity": headerOpacity.value.toString(),
      boxShadow: headerOpacity.value > 0 ? "0 2px 4px rgba(0,0,0,0.1)" : "none",
      willChange: "transform",
    };
  });
  
  const headerLinks = [
    { title: "Главная", href: "#" },
    { title: "Альбомы", href: "#" },
    { title: "Концерты", href: "#" },
  ];
  
  // Emits
  defineEmits<{
    "toggle-drawer": [];
  }>();
  </script>
  
  <style scoped>
  .app-header.black {
    background-color: #171717;
    color: rgb(0, 0, 0);
  }
  
  .header-links {
    display: flex;
    gap: 46px;
    align-items: center;
    margin: 0 auto;
  }
  
  .header-link {
    font-size: 16px;
    font-weight: 600;
    text-decoration: none;
    text-transform: none;
    transition: color 0.2s ease-in-out;
  }
  
  .app-header.black .header-link {
    color: rgb(255, 255, 255);
  }
  .app-header.black .header-link:hover {
    color: #888888;
  }
  
  .app-header.black .lk-btn {
    color: white !important;
    border-color: white !important;
  }
  .app-header.black .lk-btn:hover {
    background-color: rgb(0, 0, 0) !important;
    color: black !important;
    border-color: white !important;
  }
  </style>
  