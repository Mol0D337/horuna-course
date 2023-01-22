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
          <button class="button" v-scroll-to="'#buy'">buy</button>
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
