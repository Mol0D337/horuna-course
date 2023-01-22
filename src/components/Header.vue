<template>
  <header class="wrapper">
    <div class="desktop">
      <div class="header">
        <router-link tag="div" to="/" class="header__item">
          <svg width="56" height="60" viewBox="0 0 56 60" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M55.4415 59.9877L43.4784 0L31.4908 3.90554L24.5791 33.4743L17.3101 7.49076L0 12.4559L11.1992 59.9877L30.7639 60L27.4497 45.6715L42.1602 59.9877H55.4415Z" fill="#EEE919"/>
          </svg>
        </router-link>
        <div class="header__item header__links">
          <router-link class="header__link" active-class="header__link--active" tag="div" to="/">about</router-link>
          <router-link class="header__link" active-class="header__link--active" tag="div" to="/sign-up">features</router-link>
          <router-link class="header__link" active-class="header__link--active" tag="div" to="/sign-up">pricing</router-link>
        </div>
        <div class="header__item">
          <button class="button button--border" v-scroll-to="'#buy'">buy</button>
        </div>
      </div>
    </div>

    <div class="mobile">
      <div class="header">
        <router-link tag="div" to="/" class="header__item">
          <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M23.1006 24.9949L18.116 0L13.1212 1.62731L10.2413 13.9476L7.21253 3.12115L0 5.18994L4.66633 24.9949L12.8183 25L11.4374 19.0298L17.5667 24.9949H23.1006Z" fill="#EEE919"/>
          </svg>
        </router-link>
        <svg width="21" height="16" viewBox="0 0 21 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M0.6875 1.08203C0.6875 0.529746 1.13522 0.0820312 1.6875 0.0820312H19.6526C20.2049 0.0820312 20.6526 0.529746 20.6526 1.08203C20.6526 1.63432 20.2049 2.08203 19.6526 2.08203H1.6875C1.13522 2.08203 0.6875 1.63432 0.6875 1.08203ZM0.6875 7.57227C0.6875 7.01998 1.13522 6.57227 1.6875 6.57227H19.6526C20.2049 6.57227 20.6526 7.01998 20.6526 7.57227C20.6526 8.12455 20.2049 8.57227 19.6526 8.57227H1.6875C1.13522 8.57227 0.6875 8.12455 0.6875 7.57227ZM1.6875 13.0625C1.13522 13.0625 0.6875 13.5102 0.6875 14.0625C0.6875 14.6148 1.13522 15.0625 1.6875 15.0625H19.6526C20.2049 15.0625 20.6526 14.6148 20.6526 14.0625C20.6526 13.5102 20.2049 13.0625 19.6526 13.0625H1.6875Z" fill="#EEEEEE"/>
        </svg>
      </div>
    </div>
  </header>
</template>

<script>
  export default {
    name: "Header",
  }
</script>
