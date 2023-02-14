<template>
  <div>
    <div class="desktop">
      <div class="demo wrapper">
        <div class="wrapper">
          <div class="demo__top">
            <div class="demo__top_left">
              <div class="demo__top_left_subtitle">can't decide?</div>
              <h2 class="demo__top_left_title">TRY A DEMO</h2>
              <div class="demo__top_left_text">
                <button class="button" @click="$router.push({ name: 'Demo' })">try now</button>
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
    </div>
    <div class="mobile">
      <div class="demo-mobile wrapper">
        <div class="demo__top_left">
          <div class="demo__top_left_subtitle">can't decide?</div>
          <div class="demo__top_left_title">TRY A DEMO</div>
          <div class="demo__top_left_text">
            <button class="button button--border" @click="$router.push({ name: 'Demo' })">try now</button>
            <div>
              get access to 3 exercises for free
            </div>
          </div>

        </div>
        <img src="@/assets/image/demo-mobile.png" alt="Banner Course">
      </div>
    </div>
  </div>


</template>

<script>
export default {
  name: "Demo"
}
</script>

