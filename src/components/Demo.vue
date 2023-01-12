<template>
  <div class="demo">
    <div class="wrapper">
      <div class="demo__top">
        <div class="demo__top_left">
          <div class="demo__top_left_subtitle">can't decide?</div>
          <div class="demo__top_left_title">TRY A DEMO</div>
          <div class="demo__top_left_text">
            <button class="button">try now</button>
            <div>
              get access <br/>
              to 3 exercises for free
            </div>
          </div>

        </div>
        <div class="demo__top_right">
          <img src="@/assets/image/demo-1.png" alt="Banner Course">
        </div>
      </div>
      <div class="demo__bottom">
        <img src="@/assets/image/demo-2.png" alt="Banner Course">
      </div>
    </div>
    <img class="demo__image" src="@/assets/image/demo-3.png" alt="Banner Course">
  </div>

</template>

<script>
export default {
  name: "Demo"
}
</script>

<style lang="scss">
.demo {
  position: relative;
  margin-bottom: 100px;
  &__top {
    display: flex;
    justify-content: space-between;
    align-items: center;
    &_left {
      width: 100%;
      margin-right: 110px;
      &_title {
        font-weight: 300;
        font-size: 50px;
        line-height: 90px;
        margin: 25px 0;
        text-transform: uppercase;
        color: $yellow;
      }
      &_subtitle {
        font-weight: 300;
        font-size: 30px;
        text-transform: uppercase;
      }
      &_text {
        font-size: 16px;
        line-height: 26px;
        color: $gray;
        display: flex;
        justify-content: space-between;
        align-items: center;
      }
    }
  }
  &__bottom {
    width: 100%;
    text-align: center;
    margin-top: 70px;
  }
  &__image {
    position: absolute;
    right: 0;
    top: 20%;
  }
}
</style>
