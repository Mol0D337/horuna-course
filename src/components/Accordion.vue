<template>
  <div class="accordion">
    <div class="accordion__question" :class="{'accordion__question--active': visible}" @click="visible = !visible">
      0{{ index + 1 }} | {{ item.question }}
    </div>
    <b-collapse class="accordion__answer" v-model="visible" accordion="accordion">
      {{ item.answer }}
    </b-collapse>
  </div>
</template>

<script>
export default {
  name: "Accordion",
  props: {
    item: {
      type: Object,
      require: true,
    },
    index: {
      type: Number,
      require: true,
    },
  },
  data() {
    return {
      visible: false,
    }
  },
  created() {
    if (this.index === 0) this.visible = true;
  }
}
</script>

