<template>
  <div>
    <div class="hero-container">
      <img class="hero" src="/back-main.png">
      <h2 class="first-word"> LAST</h2>
      <h2 class="second-word"> SIGNAL</h2>
    </div>

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
        <v-row>
          <v-col cols="12">
            <v-card class="step-card" elevation="0">
              <div class="card-content">
                <div class="text-content">
                  <div class="number">
                    <h2>[01]</h2>
                  </div>
                  
                  <div class="about-text text-start font-weight-bold">
                    ГЛАС
                  </div>

                  <div class="about-text-album text-start">
                    ИСТОЧНИК ОСНОВНОГО ШУМА. ПРЕОБРАЗУЕТ БОЛЬ ДАННЫХ В ЧИСТУЮ 
                    АГРЕССИЮ. ЛИЦО-МАСКА — ВИЗУАЛИЗАТОР ВОКАЛА В РЕАЛЬНОМ ВРЕМЕНИ
                  </div>
                </div>
                <img class="ellipse-3" src="/albums/sphere.png" alt="Sphere" />
                
              </div>
              
            </v-card>
          </v-col>
        </v-row>
        </v-container>
    </div>

    <div class="group-2">
      <v-container fluid>
        <v-row justify="center">
          <v-col cols="auto">
            <v-card class="step-card" elevation="0">
              <div class="number">
                <h2>[02]</h2>
              </div>
              
              <div class="about-text text-start font-weight-bold">
                РИФФ
              </div>

              <div class="about-text-album text-start">
                ГЕНЕРАТОР ИСКАЖЕНИЙ. ПРЕВРАЩАЕТ АНАЛОГОВЫЙ СИГНАЛ В ЦИФРОВОЙ ХАОС. КАБЕЛЬ — ЭТО ПРОДОЛЖЕНИЕ НЕРВНОЙ СИСТЕМЫ.
              </div>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </div>

    <div class="group-3">
      <v-container fluid>
        <v-row justify="space-between">
          <v-col cols="auto">
            <v-card class="step-card" elevation="0">
              <div class="number">
                <h2>[03]</h2>
              </div>
              
              <div class="about-text text-start font-weight-bold">
                БИТ
              </div>

              <div class="about-text-album text-start">
                ХРАНИТЕЛЬ РИТМА СИСТЕМЫ. ЕГО HEARTBEAT — ЭТО МЕТРОНОМ ДЛЯ АПОКАЛИПСИСА. СОБИРАЕТ ЗВУКИ УМИРАЮЩИХ ТЕХНОЛОГИЙ.
              </div>
            </v-card>
          </v-col>

          <v-col cols="auto">
            <v-card class="step-card" elevation="0">
              <div class="number">
                <h2>[04]</h2>
              </div>
              
              <div class="about-text text-start font-weight-bold">
                ШУМ
              </div>

              <div class="about-text-album text-start">
                СОЗДАЕТ ПРОСТРАНСТВО. ЕГО ТЕРРИТОРИЯ — БЕЛЫЙ ШУМ МЕЖДУ ТРЕКАМИ. ДЕЛАЕТ ТИШИНУ НЕВЫНОСИМОЙ.
              </div>
            </v-card>
          </v-col>
        </v-row>
      </v-container>

    </div>
    <div class="signal-container">
      <div class="signal-title center">
        <div class="ellipse ellipse-2"></div>
        <div class="ellipse ellipse-1"></div>        
        <h2>> СИГНАЛ <br> ОБНАРУЖЕН...</h2>          
      </div>

      <div class="button center">
        <NuxtLink class="album-btn1 button-text1 text-center" to="/albums">
          ВСЕ АЛЬБОМЫ
        </NuxtLink>
      </div>
    </div>
      
  
        <div id="albums" class="album-1 pb-16">
          <v-container fluid>
              <v-row>
                <v-card class="about-card" elevation="0">
                  <div class="album-title pb-4">
                    <h2>NO_FUTURE</h2>
                  </div>
  
                  <div class="about-text text-start pb-8">
                    НЕ ЛЮДИ. НЕ ПРОГРАММА. КОЛЛЕКТИВНЫЙ СБОЙ НА ГРАНИ ЦИФРОВОГО И АНАЛОГОВОГО. ИХ МУЗЫКА - 
                    ЭТО ЗВУК ПЕРЕГРУЗКИ, ПРОТОКОЛ СОПРОТИВЛЕНИЯ И ФИДБЭК ОТ РЕАЛЬНОСТИ, КОТОРОЙ БОЛЬШЕ НЕТ.
                  </div>
                  <div class="button">
                      <NuxtLink class="album-btn button-text text-center" to="/albums">
                        ВСЕ ТРЕКИ
                      </NuxtLink>
                  </div>
                </v-card>
  
                <v-card class="album-img" elevation="0">
                  <img src="/albums/no-future.png" alt="album-1">
                </v-card>
              </v-row>
            </v-container>
        </div>
  
        <div class="album-2">
          <v-container fluid>
            <v-row>              
              <v-card class="about-card2 pl-8" elevation="0">
                <div class="album-title pb-4">
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
                <img src="/albums/protocol-silence-zip.png" alt="album-2">
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
  font-family: 'IFKica';
  font-weight: 300;
  letter-spacing: -3%;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding-left: 16px;
  padding-right: 16px;
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

.hero-container {
  position: relative;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto 1fr auto;
  min-height: 600px;
  align-items: center;
  z-index: 0;
}

.center {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  padding: 24px 12px 48px;
}

.first-word, .second-word{
  color: #FFFFC5;
  position: relative; 
  z-index: 1;
  font-size: 150px;
  line-height: 150px;
}

.first-word {
  grid-column: 1;
  grid-row: 1 / 3;
  text-align: left;
  padding-left: 10%;
  align-self: flex-center;
}

.second-word {
  grid-column: 2;
  grid-row: 2 / 4;
  text-align: right;
  padding-right: 10%;
  align-self: flex-end;
  justify-self: end;
}

.about-text {
  font-family: 'Helvetica';
  color: #FFFFC5;
  font-weight: 400;
  font-size: 16px;
  justify-content: center;
  text-align: center;
  letter-spacing: 0.1em; 
  padding-bottom: 10px;
}

.about-text-album {
  font-family: 'NeueMachina';
  color: #FFFFC5;
  font-weight: 300;
  font-size: 16px;
  text-align: center;
  letter-spacing: 0.08em;
  line-height: 24px; 
  padding-bottom: 10px;
  max-width: 380px;
}

.about-title {
  font-size: 52px;
  line-height: 62px;
  letter-spacing: 0.05em;
  color: #FE5907;
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
  font-family: 'NeueMachina';
  font-weight: 800;
  font-size: 18px;
  letter-spacing: 0.03em;
  line-height: 24px;
  color: #FE5907;
  padding: 0;
  z-index: 1;
}

.signal-title {
  font-size: 52px;
  line-height: 62px;
  letter-spacing: 0.05em;
  text-align: center;
  color: #171717;
  position: relative;
  z-index: 1;
}

.signal-container {
  padding: 15%;
}

.ellipse {
  position: absolute;
  border-radius: 50%;
  opacity: 1;
  z-index: 0;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.ellipse-1 {
  width: 384px;
  height: 384px;
  background-color: #FFFFC5;
  filter: blur(50px);
}

.ellipse-2 {
  width: 574px;
  height: 574px;
  background-color: #FE5907;
  filter: blur(100px);
}

.signal-title h2 {
  position: relative;
  z-index: 1;
}

.album-title {
  font-family: 'IFKica';
  font-size: 32px;
  font-weight: 300;
  letter-spacing: -0.03em;
  color: #FE5907;
}

.album-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px solid #FE5907;
  width: 380px;
  height: 48px;
}

.button-text1 {
  font-family: 'NeueMachina';
  font-size: 18px;
  font-weight: 800;
  line-height: 24px;
  letter-spacing: 0.03em;
  color: #171717;
  align-content: center !important;
}

.album-btn1 {
  border: 3px solid #171717;
  width: 380px;
  height: 48px;
  gap: 10px;
  z-index: 1000;
}

.albums-btn:hover {
  filter: brightness(0.95);
}


.album-img {
  max-width: 380px;
  width: 100%;
  height: auto;
  aspect-ratio: 1;
}

.album-img img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.album2-img {
  max-width: 580px;
  width: 100%;
  height: auto;
  aspect-ratio: 1;
}

.album2-img img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.about-card {
  max-width: 750px;
  width: auto;
  height: auto;
  background-color: transparent !important;
  margin-top: auto; 
}

.about-card2 {
  max-width: 580px;
  width: auto;
  background-color: transparent !important;
  margin-top: auto;
}

.album-1 .v-row,
.album-2 .v-row {
  flex-wrap: nowrap;
  gap: 24px;
}

.number {
  font-size: 52px;
  line-height: 62px;
  letter-spacing: 0.05em;
  color: #FE5907;
  padding-bottom: 10px;
}

.step-card {
  width: 100%;
  height: auto;
  min-height: 226px;
  background-color: transparent !important;
  box-shadow: none !important;
  border: 0 !important;
  overflow: visible;
}

.card-content {
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  gap: 24px;
}

.text-content {
  display: flex;
  flex-direction: column;
  gap: 8px;
  max-width: 600px;
}

.ellipse-3 {
  width: auto;
  height: 252px;
  flex-shrink: 0;
  align-self: flex-end;
  justify-self: end;
}

</style>

