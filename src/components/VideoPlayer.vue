<template>
  <div class="video--player-wrap">
    <div :id="`player-${emberID}`" data-plyr-provider="vimeo" :data-plyr-embed-id="emberID"></div>
  </div>

</template>

<script>
import Plyr from "plyr";

export default {
  name: "VideoPlayer",
  props: {
    emberID: {
      type: String,
      required: true,
    }
  },
  mounted() {
    new Plyr(`#player-${this.emberID}`, {
      invertTime: false,
      hideControls: false,
    });
  },
}
</script>

<style scoped>

</style>
