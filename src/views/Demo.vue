<template>
  <div class="bcg" data-view>
    <div class="blob"></div>
    <Header />

    <div class="wrapper">
      <div class="demo__video--wrap flex-column align-items-center">
        <VideoPlayer emberID="798117617"/>

        <div class="form__video">
          <div class="form__video_item">
            <div class="form__video_title">description</div>
            <div class="form__video_text">
              Standing on different sides of the circle facing each other, we learn to quickly react to the explosive displacement of the opponent, not giving him the opportunity to get the initiative on the mat. One number suddenly makes a quick shift along the circle, and the second number must also move along the circle without delay
            </div>
          </div>
        </div>
      </div>

      <div class="demo__video">
        <h4 class="subtitle">Still can't decide?</h4>
        <h3 class="title yellow">
          Watch a special <br />
          video with Stas' advice
        </h3>
      </div>

      <div class="demo__video--wrap" style="margin-bottom: 60px">
        <VideoPlayer emberID="798118035"/>
      </div>
    </div>
    <Pack />
    <Footer />
  </div>
</template>

<script>
import Pack from "@/components/Pack";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import VideoPlayer from "@/components/VideoPlayer";

export default {
  name: "Demo",
  components: { Pack, Footer, Header, VideoPlayer}
}
</script>

<style scoped>

</style>
