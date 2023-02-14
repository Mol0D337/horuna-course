<template>
  <div>
    <div class="demo__video--wrap">
      <VideoPlayer emberID="798117617"/>
    </div>

    <div class="demo__video wrapper">
      <div class="subtitle">Still can't decide?</div>
      <div class="title yellow">
        Watch a special <br />
        video with Stas' advice
      </div>
    </div>

    <div class="demo__video--wrap">
      <VideoPlayer emberID="798118035"/>
    </div>
  </div>
</template>

<script>
import VideoPlayer from "@/components/VideoPlayer";

export default {
  name: "DemoVideo",
  components: {VideoPlayer},
}
</script>

<style scoped>

</style>
