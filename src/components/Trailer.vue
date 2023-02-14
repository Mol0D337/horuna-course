<template>
  <div class="trailer" id="trailer">
    <div class="trailer__left desktop">
      <video
        playsinline
        muted
        autoplay
        loop
        poster="@/assets/image/poster.webp"
        src="@/assets/video/trailer.mp4"
      />
    </div>
    <div class="trailer__right">
      <div class="trailer__right_gray">course content</div>
      <div class="trailer__right_num">56</div>
      <div class="trailer__right_title">unique exercises</div>

      <div class="trailer__left mobile">
        <video
          playsinline
          muted
          autoplay
          loop
          poster="@/assets/image/poster.webp"
          src="@/assets/video/trailer.mp4"
        />
      </div>

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
  name: "Trailer",
}
</script>

