<template>
  <div>
    <div class="hero" :style="{ backgroundImage: 'url(/back.png)' }"></div>
      <div class="container">

        <div class="about center pt-16 pb-16">
          <div class="about-title">
            <h2> > РАСПОЗНАВАНИЕ ЕДИНИЦ...</h2>
          </div>
          
          <div class="about-text about-w pt-8">
            НЕ ЛЮДИ. НЕ ПРОГРАММА. КОЛЛЕКТИВНЫЙ СБОЙ НА ГРАНИ ЦИФРОВОГО И АНАЛОГОВОГО.
            ИХ МУЗЫКА - ЭТО ЗВУК ПЕРЕГРУЗКИ, ПРОТОКОЛ СОПРОТИВЛЕНИЯ И ФИДБЭК ОТ РЕАЛЬНОСТИ,
            КОТОРОЙ БОЛЬШЕ НЕТ.
          </div>

        </div>
      

        <div class="group-1">
          <v-container fluid>
            <v-card class="step-card" elevation="0">
              <div>
                <h2>[01]</h2>
              </div>
              
              <div class="about-text text-start font-weight-bold">
                ГЛАС
              </div>

              <div class="about-text text-start">
                ИСТОЧНИК ОСНОВНОГО ШУМА. ПРЕОБРАЗУЕТ БОЛЬ ДАННЫХ В ЧИСТУЮ 
                АГРЕССИЮ. ЛИЦО-МАСКА — ВИЗУАЛИЗАТОР ВОКАЛА В РЕАЛЬНОМ ВРЕМЕНИ
              </div>
            </v-card>
            </v-container>
        </div>

        <div class="group-2">
          <v-container fluid>
                        <v-card class="step-card" elevation="0">
                          <div>
                            <h2>[02]</h2>
                          </div>
                          
                          <div class="about-text text-start font-weight-bold">
                            РИФФ
                          </div>

                          <div class="about-text text-start">
                            ГЕНЕРАТОР ИСКАЖЕНИЙ. ПРЕВРАЩАЕТ АНАЛОГОВЫЙ СИГНАЛ В ЦИФРОВОЙ ХАОС. КАБЕЛЬ — ЭТО ПРОДОЛЖЕНИЕ НЕРВНОЙ СИСТЕМЫ.
                          </div>
                        </v-card>
            </v-container>

        </div>

        <div class="group-3">
          <v-container fluid>
            <v-row>
                      <v-card class="step-card" elevation="0">
                        <div>
                        <h2>[03]</h2>
                        </div>
                        
                        <div class="about-text text-start font-weight-bold">
                          БИТ
                        </div>

                        <div class="about-text text-start">
                          ХРАНИТЕЛЬ РИТМА СИСТЕМЫ. ЕГО HEARTBEAT — ЭТО МЕТРОНОМ ДЛЯ АПОКАЛИПСИСА. СОБИРАЕТ ЗВУКИ УМИРАЮЩИХ ТЕХНОЛОГИЙ.
                        </div>
                      </v-card>

                      <v-card class="step-card" elevation="0">
                        <div>
                          <h2>[04]</h2>
                        </div>
                        
                        <div class="about-text text-start font-weight-bold">
                          ШУМ
                        </div>

                        <div class="about-text text-start">
                          СОЗДАЕТ ПРОСТРАНСТВО. ЕГО ТЕРРИТОРИЯ — БЕЛЫЙ ШУМ МЕЖДУ ТРЕКАМИ. ДЕЛАЕТ ТИШИНУ НЕВЫНОСИМОЙ.
                        </div>
                      </v-card>
              </v-row>
          </v-container>

        </div>

      <div class="about-title center">
        <h2>> СИГНАЛ ОБНАРУЖЕН...</h2>
        
      </div>

      <div id="albums" class="album-1 pb-16">
        <v-container fluid>
            <v-row>
                      <v-card class="about-card" elevation="0">
                        <div class="pb-4">
                          <h2>NO_FUTURE</h2>
                        </div>

                        <div class="about-text text-start pb-8">
                          НЕ ЛЮДИ. НЕ ПРОГРАММА. КОЛЛЕКТИВНЫЙ СБОЙ НА ГРАНИ ЦИФРОВОГО И АНАЛОГОВОГО. ИХ МУЗЫКА - 
                          ЭТО ЗВУК ПЕРЕГРУЗКИ, ПРОТОКОЛ СОПРОТИВЛЕНИЯ И ФИДБЭК ОТ РЕАЛЬНОСТИ, КОТОРОЙ БОЛЬШЕ НЕТ.
                        </div>
                        <div class="button">
                            <NuxtLink class="album-btn button-text" to="/albums">
                              ВСЕ ТРЕКИ
                            </NuxtLink>
                        </div>
                      </v-card>

                      <v-card class="album-img" elevation="0">
                        <img src="/image.png" alt="album-1">
                      </v-card>
              </v-row>
          </v-container>
      </div>

      <div class="album-2">
        <v-container fluid>
            <v-row>              
              <v-card class="about-card2 pl-8" elevation="0">
                <div class="pb-4">
                  <h2>PROTOCOL_SILENCE.ZIP</h2>
                </div>

                <div class="about-text text-start pb-8">
                  ПЕРВОЕ ПРОЯВЛЕНИЕ. ЗВУК ПУСТОТЫ ПОСЛЕ ОБРЫВА СВЯЗИ. БОЛЬШЕ ЭМБИЕНТА И ДАБОВОГО ВЛИЯНИЯ.
                </div>
                <div class="button">
                    <NuxtLink class="album-btn button-text" to="/albums">
                      ВСЕ ТРЕКИ
                    </NuxtLink>
                </div>
              </v-card>

              

              <v-card class="album2-img" elevation="0">
                <img src="/image.png" alt="album-2">
              </v-card>
              </v-row>
          </v-container>
      </div>

    </div>
</div>

</template>

<script setup lang="ts">
  
    definePageMeta({
      layout: "default",
    });
    

    
</script>

<style scoped>
h2 {
  font-family: 'Rostov';
  font-size: 52px;
  font-weight: 400;
  color: white;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding-left: 16px;
  padding-right: 16px;
}

.hero {
  width: 100%;
  height: 75vh;
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


.about-text {
  font-family: 'Helvetica';
  color: #ffffff;
  font-weight: 400;
  font-size: 16px;
  justify-content: center;
  text-align: center;
  letter-spacing: 0.1em; 
}


.about-w {
  width: 700px;
}

.player {
  width: min(720px, 92vw);
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

.albums-btn:hover {
  filter: brightness(0.95);
}

/* Make the card square, right-aligned, transparent, and borderless */
.group-1 {
  display: flex;
  justify-content: start;
}
 
.group-2 .v-container {
   display: flex;
   justify-content: center;
}

.group-3 .v-row {
  display: flex;
  justify-content: space-between;
}

.album-1 .v-row {
  display: flex;
  justify-content: space-between;
}

.album-2 .v-row {
  display: flex;
  flex-direction: row-reverse;
}

.album-img {
  width: 380px;
  height: 380px;
}

.album2-img {
  width: 580px;
  height: 580px;
}

.about-card {
  width: 750px;
  height: auto;
  background-color: transparent !important;
  margin-top: auto; 
}

.about-card2 {
  width: 580px;  /* под размер картинки */
  background-color: transparent !important;
  margin-top: auto;
}



.step-card {
  width: 380px;
  height: 226px;
  aspect-ratio: 1 / 1;
  background-color: transparent !important;
  box-shadow: none !important;
  border: 0 !important;
}
</style>

