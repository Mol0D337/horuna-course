<template>
  <div>
    <main class="main wrapper">
      <div class="main__left">
        <div class="main__left_title">
          KARATE COURSE
          FROM <span class="yellow">STAS HORUNA</span>
        </div>
        <div class="main__left_subtitle">
          <img src="@/assets/image/medal.png" alt="Stas Horuna Medal">
          <span class="yellow">41+ prize medals →</span>
        </div>
        <div class="main__left_text">
          <div>2020 | Bronze medal at the <u>Tokyo Olympic Games</u></div>
          <div>2022 | Silver medal at the <u>World Games</u></div>
          <div>2019 | Gold medal at the <u>European Games</u></div>
          <div>2021 | Gold medal at the <u>European Championships</u></div>
        </div>
        <button v-scroll-to="'#trailer'" class="button button--border">trailer</button>
      </div>
      <div class="main__right">
        <img src="@/assets/image/main.png" alt="Stas Horuna">
      </div>
    </main>

    <marquee scrollamount="20" class="main__slider" onmouseover="this.stop()" onmouseout="this.start()">
      <span>HI! BRONZE-winning Olympic KARATE STAS HORUNA teaches her training techniques—from beginner to advanced—so you can practice like a champion.</span>
    </marquee>
  </div>
</template>

<script>
export default {
  name: "MainBlock"
}
</script>

<style lang="scss">
.main {
  //height: 100vh;
  display: flex;
  justify-content: space-between;
  &__left {
    margin-top: 110px;
    width: 55%;
    margin-right: 60px;
    &_title {
      font-weight: 300;
      font-size: 50px;
      line-height: 90px;
      letter-spacing: 2px;
      text-transform: uppercase;
      color: $white;
    }
    &_subtitle {
      font-size: 20px;
      color: $yellow;
      display: flex;
      align-items: center;
      //justify-content: space-between;
      margin: 35px 0;
      img {
        margin-right: 160px;
        height: 60px;
      }
    }
    &_text {
      font-size: 14px;
      line-height: 26px;
      color: $gray;
      margin-bottom: 45px;
    }
  }
  &__right {
    width: 45%;
    img {
      //height: 50%;
    }
  }
  &__slider {
    width: 100vw;
    height: 120px;
    transform: translateY(-120px);
    background: rgba(24, 26, 32, 0.5);
    border-top: 2px solid $yellow;
    border-bottom: 2px solid $yellow;
    display: flex;
    align-items: center;
    span {
      font-weight: 300;
      font-size: 30px;
      line-height: 90px;
      letter-spacing: 2px;
      text-transform: uppercase;
      color: $yellow;
    }
  }
}
</style>
