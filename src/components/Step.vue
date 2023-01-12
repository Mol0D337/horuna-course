<template>
  <div class="step">
    <div
      v-for="(item, index) in stepArray"
      :class="step === index ? 'step__item--active' : 'step__item'"
    >
      {{ step === index ? item : '' }}
    </div>
  </div>
</template>

<script>
export default {
  name: "Step",
  props: {
    stepArray: {
      type: Array,
      require: true,
    },
    step: {
      type: Number,
      require: true,
    }
  },
}
</script>

<style lang="scss">
.step {
  display: flex;
  align-items: center;
  font-size: 12px;

  letter-spacing: 1px;
  &__item {
    width: 28px;
    height: 28px;
    position: relative;
    margin-right: 28px;
    background: $dark;
    border-radius: 99px;
    &:after {
      content: '';
      width: 28px;
      height: 3px;
      top: 48%;
      left: -100%;
      position: absolute;
      background: $dark;
    }
    &:before {
      content: '';
      width: 28px;
      height: 3px;
      top: 48%;
      left: 100%;
      position: absolute;
      background: $dark;
    }
    &:last-child {
      &:before {
        width: 0;
      }
    }
    &:first-child {
      &:after {
        width: 0;
      }
    }
    //&:nth-child(1), &:nth-child(2) {
    //  background: red;
    //  &:before {
    //    background: red;
    //  }
    //}
    &--active {
      background: $bcg;
      width: 100px;
      height: 28px;
      text-align: center;
      border: 2px solid $yellow;
      border-radius: 60px;
      transition: width 0.35s ease-out;
      margin-right: 28px;
      color: $yellow;
      font-size: 12px;
      line-height: 24px;
      &:last-child {
        margin-right: 0;
      }
    }
  }
}
</style>
