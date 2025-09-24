import { ref, watch } from "vue";
import { useDisplay } from "vuetify";

export function useDrawer() {
  const rightDrawerOpen = ref(false);
  const userClosedDrawer = ref(false);
  
  const { lgAndUp } = useDisplay();

  const toggleDrawer = () => {
    rightDrawerOpen.value = !rightDrawerOpen.value;
    if (!rightDrawerOpen.value) {
      userClosedDrawer.value = true;
    } else {
      userClosedDrawer.value = false; 
    }
  };


  watch(lgAndUp, (isLarge) => {
    if (import.meta.client) {
      if (!isLarge && !userClosedDrawer.value) {
        rightDrawerOpen.value = true; 
      } else if (isLarge) {
        rightDrawerOpen.value = false; 
        userClosedDrawer.value = false; 
      }
    }
  });


  watch(rightDrawerOpen, (newVal) => {
    if (import.meta.client) {
      if (newVal) {
        document.body.classList.add("no-scroll");
      } else {
        document.body.classList.remove("no-scroll");
      }
    }
  });


  const initializeDrawer = () => {
    if (import.meta.client) {
      if (!lgAndUp.value && !userClosedDrawer.value) {
        rightDrawerOpen.value = true;
      }
    }
  };

  const cleanupDrawer = () => {
    if (import.meta.client) {
      document.body.classList.remove("no-scroll");
    }
  };

  return {
    rightDrawerOpen,
    userClosedDrawer,
    toggleDrawer,
    initializeDrawer,
    cleanupDrawer
  };
}