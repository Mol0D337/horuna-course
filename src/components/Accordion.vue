<template>
  <div class="accordion">
    <h3 class="accordion__question" :class="{'accordion__question--active': visible}" @click="visible = !visible">
      {{ index + 1 >= 10 ? `${index + 1}` : `0${index + 1}`}} <span>|</span> {{ item.question }}
    </h3>
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

