<template>
  <div class="faq wrapper">
    <div class="faq__left">
      <div class="title">faq</div>
      <div class="faq__left_text">
        We have prepared answers
        to frequently asked questions.
        Text us if you still have a question.
      </div>
      <button class="button button--border">contact us</button>
    </div>
    <div class="faq__right">
      <FaqAccordion v-for="(item, index) in faqData" :key="index" :item="item" :index="index"></FaqAccordion>
    </div>
  </div>
</template>

<script>
import FaqAccordion from "@/components/FaqAccordion";
export default {
  name: "Faq",
  components: {FaqAccordion},
  data() {
    return {
      faqData: [
        {question: 'QUESTION', answer: 'The exercises are very diverse, they focus on the striking work of the hands and feet, and teach you to move easily and quickly.'},
        {question: 'QUESTION', answer: 'The exercises are very diverse, they focus on the striking work of the hands and feet, and teach you to move easily and quickly.'},
        {question: 'QUESTION', answer: 'The exercises are very diverse, they focus on the striking work of the hands and feet, and teach you to move easily and quickly.'},
        {question: 'QUESTION', answer: 'The exercises are very diverse, they focus on the striking work of the hands and feet, and teach you to move easily and quickly.'},
      ]
    }
  }
}
</script>

<style lang="scss">
.faq {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  margin-bottom: 85px;
  &__left {
    width: 35%;
    margin-right: 100px;
    &_text {
      line-height: 23px;
      margin: 20px 0 40px;
    }
  }
  &__right {
    width: 65%;
  }
  &__accordion {
    border: 2px solid $white;
    background: rgba(24, 26, 32, 0.5);
    margin-bottom: 60px;
    padding: 20px 60px;
    &:last-child {
      margin-bottom: 0;
    }
    &__question {
      cursor: pointer;
      font-weight: 300;
      font-size: 30px;
      line-height: 90px;
      text-transform: uppercase;
      &--active {
        color: #EEE919;
      }
    }
    &__answer {
      line-height: 23px;
      margin-bottom: 35px;
    }
  }
}
</style>
