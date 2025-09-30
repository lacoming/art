<template>
    <v-navigation-drawer
      :model-value="isOpen"
      @update:model-value="$emit('update:isOpen', $event)"
      location="right"
      temporary
      overlay
      :overlay-opacity="0.6"
      class="custom-drawer"
    >
      <div class="drawer-close-btn">
        <v-btn
          icon
          @click="$emit('update:isOpen', false)"
          class="close-btn-no-style"
          :ripple="false"
        >
          <v-icon color="black">mdi-close</v-icon>
        </v-btn>
      </div>
  
      <div class="drawer-links-wrap">
        <a
          v-for="(link, idx) in drawerLinks"
          :key="link.title + idx"
          class="header-link drawer-link"
          :href="link.href"
        >
          {{ link.title }}
        </a>
      </div>
  
      <div class="drawer-bottom-btn-wrap">
        <v-btn class="drawer-lk-btn">Личный кабинет</v-btn>
      </div>
    </v-navigation-drawer>
  </template>
  
  <script setup lang="ts">
  import { computed } from "vue";
  import { useDisplay } from "vuetify";
  
  // Props
  interface Props {
    isOpen: boolean;
  }
  
  defineProps<Props>();
  
  // Emits
  defineEmits<{
    "update:isOpen": [value: boolean];
  }>();
  
  // Use Vuetify's display utility for breakpoint detection
  const { lgAndUp } = useDisplay();
  
  // Navigation links based on screen size
  const drawerLinks = computed(() => {
    if (lgAndUp.value) {
      return [
        { title: "Книга ЦФА", href: "#" },
        { title: "База знаний", href: "#" },
        { title: "FAQ", href: "#" },
        { title: "Карьера", href: "#" },
        { title: "Блог", href: "/blog" },
        { title: "Обратная связь", href: "#" },
      ];
    } else {
      return [
        { title: "Выпуски активов", href: "#" },
        { title: "Как купить ЦФА", href: "#" },
        { title: "Эмитентам", href: "#" },
        { title: "Новости", href: "#" },
        { title: "Книга ЦФА", href: "#" },
        { title: "База знаний", href: "#" },
        { title: "FAQ", href: "#" },
        { title: "Карьера", href: "#" },
        { title: "Блог", href: "/blog" },
        { title: "Обратная связь", href: "#" },
      ];
    }
  });
  </script>
  
  <style scoped>
  .custom-drawer {
    z-index: 2000 !important;
    top: 0 !important;
    height: 100% !important;
  }
  
  .drawer-close-btn {
    position: absolute;
    top: 8px;
    right: 8px;
    z-index: 2101;
    pointer-events: auto;
  }
  
  .close-btn-no-style {
    box-shadow: none !important;
    border: none !important;
    background: transparent !important;
    outline: none !important;
    min-width: 0 !important;
    width: 40px;
    height: 40px;
    padding: 0;
  }
  
  .close-btn-no-style:hover,
  .close-btn-no-style:focus,
  .close-btn-no-style:active {
    background: transparent !important;
    box-shadow: none !important;
    border: none !important;
  }
  
  :deep(.v-navigation-drawer__scrim) {
    z-index: 1900 !important;
  }
  
  .drawer-links-wrap {
    display: flex;
    flex-direction: column;
    gap: 15px;
    margin-top: 48px;
    padding: 0 32px 80px 32px;
  }
  
  .drawer-link {
    font-family: "Gilroy", Arial, sans-serif;
    font-size: 18px;
    font-weight: 500;
    color: #0d0d28;
    text-decoration: none;
    text-transform: none;
    transition: color 0.2s;
    padding: 0;
  }
  
  .drawer-link:visited {
    color: #0d0d28;
  }
  
  .drawer-link:hover {
    color: #ff6725;
  }
  
  .drawer-bottom-btn-wrap {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 24px;
    display: flex;
    justify-content: center;
    padding: 0 24px;
  }
  
  .drawer-lk-btn {
    background: #ff6725 !important;
    color: #fff !important;
    font-weight: 700;
    font-size: 14px;
    border-radius: 12px !important;
    width: 160px;
    box-shadow: none !important;
    min-height: 45px;
    height: 45px;
    text-transform: none;
    letter-spacing: normal;
    transition: none !important;
  }
  
  .drawer-lk-btn:hover,
  .drawer-lk-btn:focus,
  .drawer-lk-btn:active {
    background: #ff6725 !important;
    color: #fff !important;
    box-shadow: none !important;
  }
  </style>
  