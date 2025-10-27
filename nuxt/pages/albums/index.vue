<template>
    <div>
      <div class="hero-container">

          <img class="hero" src="/back2.png">
          <h2 class="first-word"> > АРХИВ</h2>
          <h2 class="second-word"> СИГНАЛОВ...</h2>

      </div>
  
        <div id="albums" class="album-1">
           <v-container fluid>
              <v-row>
                  <v-col class="about-card" elevation="0">
                    <div class="album-title pb-4">
                      <h3>NO_FUTURE</h3>
                    </div>

                    <div class="about-text text-start pb-8">
                      НЕ ЛЮДИ. НЕ ПРОГРАММА. КОЛЛЕКТИВНЫЙ СБОЙ НА ГРАНИ ЦИФРОВОГО И АНАЛОГОВОГО. ИХ МУЗЫКА - 
                      ЭТО ЗВУК ПЕРЕГРУЗКИ, ПРОТОКОЛ СОПРОТИВЛЕНИЯ И ФИДБЭК ОТ РЕАЛЬНОСТИ, КОТОРОЙ БОЛЬШЕ НЕТ.
                    </div>
                    <div class="button">
                      <NuxtLink class="album-btn button-text"  
                        :to="albomies[0]?.slug ? `/albums/${albomies[0].slug}` : '#'"
                        :ripple="false">
                          ВСЕ ТРЕКИ
                      </NuxtLink>
                    </div>

                  </v-col>

                  <v-col elevation="0">
                    <img src="/image.png" alt="album-2">
                  </v-col >
              </v-row>
            </v-container>
        </div>

        <div id="albums" class="album-2">
           <v-container fluid>
              <v-row class>
                  <v-col class="about-card" elevation="0">
                    <div class="album-title pb-4">
                      <h3>PROTOCOL_SILENCE.ZIP</h3>
                    </div>

                    <div class="about-text text-start pb-8">
                      ПЕРВОЕ ПРОЯВЛЕНИЕ. ЗВУК ПУСТОТЫ ПОСЛЕ ОБРЫВА СВЯЗИ. БОЛЬШЕ ЭМБИДЕНТА И ДАБОВОГО ВЛИЯНИЯ.
                    </div>
                    <div class="button">
                      <NuxtLink class="album-btn button-text"  
                        :to="albomies[1]?.slug ? `/albums/${albomies[1].slug}` : '#'"
                        :ripple="false">
                          ВСЕ ТРЕКИ
                      </NuxtLink>
                    </div>
                  </v-col>

                  <v-col elevation="0">
                    <img src="/image.png"  class="album1-img" alt="album-2">
                  </v-col >
              </v-row>
            </v-container>
        </div>            
  
      </div>
  
  </template>
  
  <script setup lang="ts">
   

    definePageMeta({ layout: 'default' })
    
    const { find } = useStrapi()

    // получаем ВСЕ записи, без slug-фильтра
    const { data: albomiesResponse } = await useAsyncData('albomies-list', () =>
      find('albomies', {
        populate: ['cover', 'music'] 
      })
    )

    // TODO: Slice убрать лишние компоненты
    // Упростить логику получения данных Страпи(либо убрать маппинг, либо обосновать)

    // приводим strapi-формат к плоскому массиву
    const albomies = computed(() =>
      (albomiesResponse.value?.data ?? []).map((item: any) => ({
        id: item.id,
        ...item  // ← Просто разворачиваем весь объект
      }))
    )
  </script>
  
  <style scoped>
  h2 {
    font-family: 'IFKica';
    font-size: 180px;
    font-weight: 300;
    color: white;
    letter-spacing: -3%;
  }

  .blog-content {
  left: 0;
  top: 0;
  z-index: 1;
  width: 100%;
  height: auto;
  transform: translateZ(0);
  justify-content:space-evenly;
  padding: 20px 0 0 0;
}
  
  .hero-container {
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
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

  .first-word, .second-word{
    position: relative; 
    z-index: 1;
    color: white;
  }

  .first-word {
    text-align: left;        /* текст влево */
    align-self: flex-start;  /* блок вверх */
    margin-left: 128px;
    margin-top: 100px;       /* отступ слева 50px */
  }

  .second-word {
    text-align: left;        /* текст влево */
    align-self: center;  /* блок вверх */
    margin-left: 128px;
    margin-top: -100px; 
    margin-bottom: 80px;      /* отступ слева 50px */
  }
  
  .about-text {
    font-family: 'Helvetica';
    color: #ffffff;
    font-weight: 400;
    font-size: 16px;
    justify-content: center;
    text-align: center;
    letter-spacing: 0.1em; 
  }
  
  .button {
    display: flex;
    justify-content: start;
  }
  
  .button-text {
    font-family: 'Helvetica';
    font-weight: 700;
    font-size: 18px;
    letter-spacing: 2px;
    line-height: 24px;
    color: white;
    padding: 12px 16px 0 16px;
  }
  
  .album-btn {
    display: flex;
  
    border: 2px solid #ffffff;
    width: auto;
    height: 48px;
  }
  
  .album-1 .v-row {
    display: flex;
    justify-content: stretch;
    padding: 64px 130px 32px 130px;
  }
  
  .album-2 .v-row {
    display: flex;
    flex-direction: row-reverse;
    padding: 64px 130px 32px 130px;
  }
  
  .album1-img {
    width: 50%; 
    height: auto; 
    display: block;
  }
  
  .about-card {
    width: 750px;
    height: auto;
    background-color: transparent !important;
    margin-top: auto; 
    
  }

  .album-title {
    font-family: 'Rostov';
    font-size: 32px;
    font-weight: 400;
    color: white;
  }

  </style>
  
  