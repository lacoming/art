<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<style>
/* Убираем белые поля по краям и задаём корректную высоту корневым элементам */
html, body, #__nuxt {
  height: 100%;
}
body {
  margin: 0;
}

</style>