<template>
  <div class="wrapper">
    <h2 class="title">COURSE SECTIONS</h2>
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
        {
          question: 'Warm-ups',
          answer: 'The multifunctional and high-speed sport of KARATE requires high-quality training for improvin both: the body and mind. Body warm-up - for greater flexibility and preventing the injuries, mind warm-up - to quickly analyze and make best decisions.',
        },
        {
          question: 'MOTORS/REACTION/BALANCE',
          answer: 'My 7 exercises develop coordinational skills. Those are necessary for the high-quality performance of complex and multifunctional tasks.',
        },
        {
          question: 'Movement',
          answer: 'Movements are the basis of the match. Excellent defense and advantageous moments for attacks are created due to the sharp quick and light movements.',
        },
        {
          question: 'PUNCHES AND KICKS',
          answer: 'Practice all possible strokes in different contexts and situations. We must understand that even the most unpredictable situations should be predictable for us.',
        },
        {
          question: 'DEFENSE',
          answer: "A good athlete is not only an athlete who hits a lot, but also one who misses little. Let's make our opponents look bad on tatami. This section contains exercises that help me avoid most of my opponents' attacks, developing the appropriate skills and action algorithms.",
        },
        {
          question: 'ATTACK',
          answer: "The main task for our victory is the earning of points that is ensured by a successful attacking action. Some of my exercises are collected here, with which I hone the skill of getting points and the ability to quickly choose attacking actions depending on the situation.",
        },
        {
          question: 'TRICKS AND MANEUVERS',
          answer: "Section with the exercises that increase the probability of a successful attacking action by misleading the opponent or optimizing certain movements.",
        },
        {
          question: 'FIND THE SOLUTION',
          answer: "One of the most important section. Exercises of this type develop the flexibility of thinking and creativity, which will allow everyone to create their own unique style.",
        },
        {
          question: 'FOX VS HUNTER',
          answer: "This is my vision of KARATE - two main tactical models. The knowledge of these models together with the skills that we can develop practicing the exercises from the previous sections give us the opportunity to reach those peaks and results that we all are striving for.",
        },
        {
          question: 'PHYSICAL EXERCISES',
          answer: "Only a healthy and strong body can ensure the possibility of stable training and development without stopping. Karate is a unique sport that requires unique exercises.",
        },
      ]
    }
  },
}
</script>
