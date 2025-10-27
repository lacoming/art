<template>
    <footer class="center pb-8">
        <div class="hero text-center pt-16">
            <h2 class="pb-8">THE LAST SIGNAL</h2>

            <div class="footer-music-platforms">
                <a
                    href="https://open.spotify.com/"
                    class="footer-platform-btn"
                    target="_blank"
                    rel="noopener"
                >
                    <img class="imge" src="/footer/spotify.png" />
                </a>
                <a
                    href="https://music.youtube.com/"
                    class="footer-platform-btn"
                    target="_blank"
                    rel="noopener"
                >
                    <img class="imge" src="/footer/youtube.png" />
                </a>
                <a
                    href="https://music.yandex.ru/"
                    class="footer-platform-btn"
                    target="_blank"
                    rel="noopener"
                >
                    <img class="imge" src="/footer/yandex.png" />
                </a>
            </div>
        </div>
      <div class="about-text text-center pt-16">
        ЭТОТ САЙТ - ТВОРЧЕСКИЙ ЭКСПЕРИМЕНТ И УЧЕБНЫЙ ПРОЕКТ.<br>
        НАСЛАЖДАЙТЕСЬ ИЛЛЮЗИЕЙ!<br>
        <br>
        DESIGN: АЛЕКСАНДРА МОСТОВАЯ<br>
        DEVELOPMENT: АЛЕКСАНДР ВОСТРУХИН<br>
        ВДОХНОВИТЕЛЬ: РОМАН НОСКОВ

      </div>
    </footer>
  </template>
  
  <style lang="scss" scoped>
    h2 {
        font-family: 'IFKica';
        font-size: 52px;
        font-weight: 300;
        line-height: 62px;
        letter-spacing: 0.05em;
        color: #FE5907;
    }

    .hero {
        width: 838px;
    }

    .footer-music-platforms {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
    }

    .footer-nav {
      display: flex;
      justify-content: center;
    }

    .footer-anchor-btn {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      height: 40px;
      padding: 0 16px;
      border: 2px solid #ffffff;
      color: #ffffff;
      font-family: 'Helvetica';
      font-weight: 700;
      font-size: 16px;
      letter-spacing: 2px;
      text-decoration: none;
    }

    .footer-anchor-btn:hover {
      filter: brightness(0.95);
    }

    .imge {
        height: 40px;
    }

    .center {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 16px;
        padding: 24px 12px 48px;
    }

    .about-text {
        font-family: 'NeueMachina';
        color: #FFFFC5;
        font-weight: 400;
        font-size: 16px;
        justify-content: center;
        text-align: center;
        letter-spacing: 0.08em; 
        line-height: 24px;
    }

  </style>
  