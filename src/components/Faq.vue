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
        {
          question: 'WHO CAN STUDY AND IS THERE ANY AGE LIMIT?',
          answer: 'Everyone can study, it all depends on the conditions and capabilities of your body.'
        },
        {
          question: 'HOW TO PAY THE COURSE?',
          answer: 'Choose from three packages: Bronze, Silver or Gold. After that click the "Buy" button. You will see a form for entering data for payment. After paying, you will be taken to the welcome page with next instructions.'
        },
        {
          question: 'WHAT EQUIPMENT DO I NEED?',
          answer: 'For your safety and the safety of your partners, it is RECOMMENDED to wear all the necessary equipment: protection for the feet, protection for the hands, protection for the teeth. The auxiliary equipment used in the exercises can be replaced by any analogues.'
        },
        {
          question: 'CAN I PRACTICE AT HOME?',
          answer: 'You can practice at home, before making sure that you have enough space so as not to harm yourself or others. And of course, if the neighbors don\'t mind ;-)'
        },
        {
          question: 'Can I get a refund?',
          answer: 'Write to us no later than 14 days from the date of purchase. Specify your name and card number and we will return the payment to the same card within 5 banking days, except for $10.'
        },
        {
          question: 'HOW LONG WILL THE COURSE BE AVAILABLE TO ME?',
          answer: 'The account will be available to you for 1 year from the date of purchase of the course.'
        },
      ]
    }
  }
}
</script>

