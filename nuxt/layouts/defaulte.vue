<template>
  <div class="min-h-screen">
    <header style="padding:16px; border-bottom:1px solid #eee">
      <NuxtLink to="/" style="margin-right:16px">Главная</NuxtLink>
      <NuxtLink to="/albums">Альбомы</NuxtLink>
    </header>

    <main style="padding:24px 16px; max-width:960px; margin:0 auto">
      <NuxtPage />
    </main>

    <footer style="padding:16px; border-top:1px solid #eee; text-align:center">
      © MyBand
    </footer>
  </div>
</template>
