<template>
  <div class="video--player-wrap">
    <div :id="`${id}-player-${emberID}`" data-plyr-provider="vimeo" :data-plyr-embed-id="emberID"></div>
  </div>

</template>

<script>
import Plyr from "plyr";

export default {
  name: "VideoPlayer",
  props: {
    id: {
      type: String,
      default: 'one',
    },
    emberID: {
      type: String,
      required: true,
    }
  },
  mounted() {
    new Plyr(`#${this.id}-player-${this.emberID}`, {
      invertTime: false,
      hideControls: false,
    });
  },
}
</script>

<style scoped>

</style>
