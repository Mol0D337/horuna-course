<template>
  <div class="faq__accordion">
    <div class="faq__accordion__question" :class="{'faq__accordion__question--active': visible}" @click="visible = !visible">
      {{ visible ? '–' : '+' }} {{ item.question }} #{{ index + 1 }}
    </div>
    <b-collapse class="faq__accordion__answer" v-model="visible" accordion="faq-accordion">
      {{ item.answer }}
    </b-collapse>
  </div>
</template>

<script>
export default {
  name: "FaqAccordion",
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

