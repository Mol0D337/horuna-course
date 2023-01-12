<template>
  <div class="wrapper">
    <div class="title">COURSE SECTIONS</div>
    <div class="course wrapper">
      <div class="course__left">
        <Accordion v-for="(item, index) in accordionData" :key="index" :item="item" :index="index"></Accordion>
      </div>
      <div class="course__right">
        <img src="../assets/image/course.png" alt="Stas Horuna">
        <div class="course__right_sign">
          <div class="course__right_sign--title">START NOW</div>
          <button class="button">SIGN UP</button>
          <div>Starting at $75 for all exercises</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Accordion from "@/components/Accordion";
export default {
  name: "Course",
  components: {Accordion},
  data() {
    return {
      accordionData: [
        {question: 'warn-ups', answer: 'The exercises are very diverse, they focus on the striking work of the hands and feet, and teach you to move easily and quickly. We will analyze different types of attacking combinations and practice reactions.'},
        {question: 'warn-ups', answer: 'The exercises are very diverse, they focus on the striking work of the hands and feet, and teach you to move easily and quickly. We will analyze different types of attacking combinations and practice reactions.'},
        {question: 'warn-ups', answer: 'The exercises are very diverse, they focus on the striking work of the hands and feet, and teach you to move easily and quickly. We will analyze different types of attacking combinations and practice reactions.'},
        {question: 'warn-ups', answer: 'The exercises are very diverse, they focus on the striking work of the hands and feet, and teach you to move easily and quickly. We will analyze different types of attacking combinations and practice reactions.'},
        {question: 'warn-ups', answer: 'The exercises are very diverse, they focus on the striking work of the hands and feet, and teach you to move easily and quickly. We will analyze different types of attacking combinations and practice reactions.'},
        {question: 'warn-ups', answer: 'The exercises are very diverse, they focus on the striking work of the hands and feet, and teach you to move easily and quickly. We will analyze different types of attacking combinations and practice reactions.'},
      ]
    }
  },
}
</script>

<style lang="scss">
.course {
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  margin-bottom: 100px;
  &__left {
    width: 100%;
    margin-right: 50px;
  }
  &__right {
    //width: 30%;
    position: relative;
    &_sign {
      position: absolute;
      bottom: 0;
      width: 100%;
      height: 270px;
      background: rgba(24, 26, 32, 0.5);
      border: 2px solid $yellow;
      padding: 0 45px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-evenly;
      &--title {
        font-weight: 300;
        font-size: 30px;
        text-transform: uppercase;
        color: $yellow;
      }
    }
  }

}
</style>
