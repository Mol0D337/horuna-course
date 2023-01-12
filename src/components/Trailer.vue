<template>
  <div class="trailer" id="trailer">
    <div class="trailer__left">
      <video muted loop onmouseout="this.pause()" onmouseover="this.play()" poster="@/assets/image/poster.png" >
        <source src="https://ia801909.us.archive.org/22/items/karateASL/karate.ia.mp4" type="video/mp4">
        Sorry, your browser doesn't support embedded videos,
        but don't worry, you can <a href="https://ia801909.us.archive.org/22/items/karateASL/karate.ia.mp4">download it</a>
        and watch it with your favorite video player!
      </video>
    </div>
    <div class="trailer__right">
      <div class="trailer__right_gray">course content</div>
      <div class="trailer__right_num">56</div>
      <div class="trailer__right_title">unique exercises</div>

      <div class="trailer__right_ul">
        <div>this online karate course for:</div>
        <div class="yellow">→ athletes</div>
        <div class="yellow">→ coaches</div>
        <div class="yellow">→ karate lovers</div>
      </div>


      <div class="trailer__right_text">
        The exercises are very diverse, they focus on the striking work of the hands and feet, and teach you to move easily and quickly.
        We will analyze different types of attacking combinations and practice reactions.
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Trailer"
}
</script>

<style lang="scss">
.trailer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: -50px;
  margin-bottom: 75px;
  &__left {
    width: 65%;
    margin-right: 50px;
    video {
      width: 100%;
    }
  }
  &__right {
    width: 35%;
    //margin-right: calc((100vw - 1300px) / 2);
    margin-right: 100px;
    &_gray {
      line-height: 26px;
      color: $gray;
    }
    &_num {
      font-weight: 300;
      font-size: 50px;
      line-height: 90px;
      text-transform: uppercase;
      color: $yellow;
    }
    &_title {
      font-size: 20px;
      color: $yellow;
    }
    &_ul {
      margin: 40px 0;
      text-transform: lowercase;
    }
    &_text {
      line-height: 23px;
    }
  }
}
</style>
