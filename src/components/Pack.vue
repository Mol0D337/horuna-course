<template>
  <div class="wrapper">
    <div class="title">CHOOSE YOUR PACK</div>
    <div class="pack__wrap">
      <div class="pack pack--silver">
        <div class="pack__header pack--silver_header">silver</div>
        <div class="pack__body pack--silver_body">
          <div>→ 8 sections</div>
          <div>→ 56 exercises</div>
          <div>→ Special physical exercises</div>
          <div>→ Special menu</div>
          <div>→ Stretching</div>
          <div>→ Psychology</div>
          <div class="pack__footer">
            <div class="pack__num">$125</div>
            <button class="button">buy</button>
          </div>
        </div>
      </div>
      <div class="pack pack--gold">
        <div class="pack__header pack--gold_header">gold</div>
        <div class="pack__body pack--gold_body">
          <div>→ 8 sections</div>
          <div>→ 56 exercises</div>
          <div>→ Special physical exercises</div>
          <div>→ Special menu</div>
          <div>→ Stretching</div>
          <div>→ Psychology</div>
          <div class="yellow">→ 1 to 1 online meeting with Stas Horuna</div>
          <div class="pack__footer">
            <div class="pack__num">$250</div>
            <button class="button">buy</button>
          </div>
        </div>
      </div>
      <div class="pack pack--bronze">
        <div class="pack__header pack--bronze_header">gold</div>
        <div class="pack__body pack--bronze_body">
          <div>→ 8 sections</div>
          <div>→ 56 exercises</div>
          <div class="pack__footer">
            <div class="pack__num">$75</div>
            <button class="button">buy</button>
          </div>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
export default {
  name: "Pack"
}
</script>

<style lang="scss">
.pack {
  width: 400px;
  button {
    width: 180px;
  }
  &__header {
    width: 100%;
    height: 80px;
    font-weight: 300;
    font-size: 30px;
    line-height: 90px;
    text-transform: uppercase;
    color: $black;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  &__body {
    padding: 30px 35px;
    background: rgba(24, 26, 32, 0.5);
  }
  &__footer {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  &__num {
    font-weight: 300;
    font-size: 50px;
    line-height: 90px;
    margin: 25px 0;
  }
  &--silver {
    border: 2px solid $silver;
    &_header {
      background: $silver;
    }
    button {
      background: $silver;
    }
  }
  &--gold {
    border: 2px solid $yellow;
    &_header {
      background: $yellow;
    }
    button {
      background: $yellow;
    }
  }
  &--bronze {
    border: 2px solid $orange;
    &_header {
      background: $orange;
    }
    button {
      background: $orange;
    }
  }
  &__wrap {
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    margin-bottom: 100px;
  }
}
</style>
