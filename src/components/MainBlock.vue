<template>
  <div>
    <main class="main wrapper">
      <div class="main__left">
        <h1 class="main__left_title">
          KARATE COURSE
          FROM <span class="yellow">STAS HORUNA</span>
        </h1>
        <div class="main__left_subtitle">
          <img src="@/assets/image/medal.png" alt="Stas Horuna Medal">
          <a href="https://en.wikipedia.org/wiki/Stanislav_Horuna" target="_blank" class="yellow link">Wikipedia →</a>
        </div>
        <div class="main__left_text">
          <div>2014 | Bronze medal at the <u>World Championship</u></div>
          <div>2017 | Gold medal at the <u>World Games</u></div>
          <div>2019 | Gold medal at the <u>European Games</u></div>
          <div>2021 | Gold medal at the <u>European Championships</u></div>
          <div>2021 | Bronze medal at the <u>Tokyo Olympics Games 2020</u></div>
        </div>
        <button v-scroll-to="'#trailer'" class="button button--border">trailer</button>
      </div>
      <div class="main__right">
        <img src="@/assets/image/main.png" alt="Stas Horuna">
      </div>
    </main>

    <div class="marquee">
      <div class="track">
        <span class="text -twox">HI! BRONZE-winning Olympic KARATE STAS HORUNA teaches her training techniques—from beginner to advanced—so you can practice like a champion.</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MainBlock"
}
</script>

