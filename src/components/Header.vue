<template>
  <header class="header wrapper">
    <router-link tag="div" to="/" class="header__item">
      <svg width="56" height="60" viewBox="0 0 56 60" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M55.4415 59.9877L43.4784 0L31.4908 3.90554L24.5791 33.4743L17.3101 7.49076L0 12.4559L11.1992 59.9877L30.7639 60L27.4497 45.6715L42.1602 59.9877H55.4415Z" fill="#EEE919"/>
      </svg>
    </router-link>
    <div class="header__item header__links">
      <router-link class="header__link" active-class="header__link--active" tag="div" to="/">{{ $t('header.about') }}</router-link>
      <router-link class="header__link" active-class="header__link--active" tag="div" to="/sign-up">{{ $t('header.features') }}</router-link>
      <router-link class="header__link" active-class="header__link--active" tag="div" to="/sign-up">{{ $t('header.pricing') }}</router-link>
    </div>
    <div class="header__item">
      <router-link class="button button--border" tag="button" to="/sign-up">{{ $t('header.sign-up') }}</router-link>
    </div>
  </header>
</template>

<script>
  export default {
    name: "Header",
    data() {
      return {
        locale: true, // en-true / uk-false
      }
    },
    created() {
      const locale = localStorage.getItem('locale');
      if (locale === 'uk') {
        this.locale = true;
        this.setLocale('uk');
      } else {
        this.locale = false;
        this.setLocale('en');
      }
    },
    methods: {
      isLocale(locale) {
        if (this.locale === false) {
          this.setLocale(locale);
          localStorage.setItem('locale', 'en');
          this.$store.dispatch('SET_CHANGE_LOCALE', 'en');
        } else {
          this.setLocale(locale);
          localStorage.setItem('locale', 'uk');
          this.$store.dispatch('SET_CHANGE_LOCALE', 'uk');
        }
        return this.locale = !this.locale
      },
      setLocale(locale) {
        this.$emit('setLocale', locale)
        import(`../locales/${locale}.json`).then((msgs) => {
          this.$i18n.setLocaleMessage(locale, msgs);
          this.$i18n.locale = locale;
        })
      },
    }
  }
</script>

<style lang="scss">
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 50px;
  margin-top: 35px;
  &__item {

  }
  &__links {
    display: flex;
    align-items: center;
    background: rgba(24, 26, 32, 0.5);
    border-radius: 110px;
    height: 60px;
    padding: 0 5px;
  }
  &__link {
    width: 200px;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    text-transform: uppercase;
    font-weight: 600;
    font-size: 16px;
    line-height: 48px;
    &--active {
      border: 2px solid $yellow;
      border-radius: 110px;
      color: $yellow;
    }
  }
}
</style>
