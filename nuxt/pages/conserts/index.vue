<template>
    <div>
      <div class="hero-container">
        <img class="hero" src="/conserts/back-con.png">
        <h2 class="first-word">КОНЦЕРТЫ</h2>
      </div>
  
      <div class="container">
  
        <div class="about center pt-16 pb-16">
          <div class="about-title">
            <h2> > ЗАПЛАНИРОВАННЫЕ СБОИ<br> В РЕАЛЬНОСТИ...</h2>
          </div>
          
          <div class="about-text about-w pt-8">
            Живое выступление — это точка максимальной перегрузки. Материальное воплощение цифрового призрака. Ожидайте потери сигнала.
          </div>
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
    align-items: flex-end;
    z-index: 0;
  }
  
  .center {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 16px;
    padding: 24px 12px 48px;
  }
  
  .first-word {
    color: #FFFFC5;
    position: relative; 
    z-index: 1;
    font-size: 180px;
    line-height: 180px;
    grid-column: 1 / -1;
    grid-row: 1 / 3;
    text-align: center;
    align-self: flex-end;
    justify-self: center;
  }
  
  .about-text {
    font-family: 'NeueMachina';
    color: #FFFFC5;
    font-weight: 400;
    font-size: 16px;
    justify-content: center;
    text-align: center;
    letter-spacing: 0.05em; 
    padding-bottom: 10px;
    line-height: 24px;
    text-transform: uppercase;
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
  }
  
  .about-title {
    font-size: 52px;
    line-height: 62px;
    letter-spacing: 0.05em;
    color: #FE5907;
    text-align: center;
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
    border: 2px solid #171717;
    width: 380px;
    height: 48px;
    gap: 10px;
    z-index: 1000;
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
  
  .number {
    font-size: 52px;
    line-height: 62px;
    letter-spacing: 0.05em;
    color: #FE5907;
    padding-bottom: 10px;
  }
  
  .step-card {
    width: auto;
    max-width: 800px;
    height: auto;
    min-height: 226px;
    background-color: transparent !important;
    box-shadow: none !important;
    border: 0 !important;
    overflow: visible;
  }
  
  .card-content {
    display: flex;
    align-items: flex-start;
    gap: 24px;
  }
  
  .text-content {
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 8px;
  }
  
  .ellipse-3 {
    width: auto;
    height: 226px;
    flex-shrink: 0;
  
  }
  
  </style>
  
  