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
          <router-link class="header__link" active-class="header__link--active" tag="div" to="/demo">demo</router-link>
          <a class="header__link" target="_blank" href="https://onlysense.app/horuna">LOG IN</a>
        </div>

        <button v-if="$route.name !== 'Payment'" class="button button--border" v-scroll-to="'#buy'">buy</button>
        <div v-else @click="$router.go(-1)" class="header__a">
          <svg width="68" height="50" viewBox="0 0 68 50" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M65 25H3.4M3.4 25L26.5 3M3.4 25L26.5 47" stroke="#EAEAEA" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </div>
      </div>
    </div>

    <div class="mobile">
      <div class="header">
        <router-link tag="div" to="/" class="header__item">
          <svg width="35" height="35" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M23.1006 24.9949L18.116 0L13.1212 1.62731L10.2413 13.9476L7.21253 3.12115L0 5.18994L4.66633 24.9949L12.8183 25L11.4374 19.0298L17.5667 24.9949H23.1006Z" fill="#EEE919"/>
          </svg>
        </router-link>

        <b-dropdown v-if="$route.name !== 'Payment'" dropleft size="lg" variant="link" no-caret>
          <template #button-content>
            <svg width="30" height="30" viewBox="0 0 21 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M0.6875 1.08203C0.6875 0.529746 1.13522 0.0820312 1.6875 0.0820312H19.6526C20.2049 0.0820312 20.6526 0.529746 20.6526 1.08203C20.6526 1.63432 20.2049 2.08203 19.6526 2.08203H1.6875C1.13522 2.08203 0.6875 1.63432 0.6875 1.08203ZM0.6875 7.57227C0.6875 7.01998 1.13522 6.57227 1.6875 6.57227H19.6526C20.2049 6.57227 20.6526 7.01998 20.6526 7.57227C20.6526 8.12455 20.2049 8.57227 19.6526 8.57227H1.6875C1.13522 8.57227 0.6875 8.12455 0.6875 7.57227ZM1.6875 13.0625C1.13522 13.0625 0.6875 13.5102 0.6875 14.0625C0.6875 14.6148 1.13522 15.0625 1.6875 15.0625H19.6526C20.2049 15.0625 20.6526 14.6148 20.6526 14.0625C20.6526 13.5102 20.2049 13.0625 19.6526 13.0625H1.6875Z" fill="#EEEEEE"/>
            </svg>
          </template>
          <b-dropdown-item href="/">ABOUT</b-dropdown-item>
          <b-dropdown-item href="/demo">DEMO</b-dropdown-item>
          <b-dropdown-item href="https://onlysense.app/horuna" target="_blank">LOG IN</b-dropdown-item>
          <b-dropdown-item v-scroll-to="'#buy'">BUY</b-dropdown-item>
        </b-dropdown>

        <div v-else @click="$router.go(-1)" class="header__a">
          <svg width="34" height="25" viewBox="0 0 68 50" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M65 25H3.4M3.4 25L26.5 3M3.4 25L26.5 47" stroke="#EAEAEA" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
  export default {
    name: "Header",
  }
</script>
