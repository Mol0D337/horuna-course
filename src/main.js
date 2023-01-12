import Vue from 'vue'
import App from './App.vue'
import VueScrollTo from 'vue-scrollto';
import { BootstrapVue } from 'bootstrap-vue'
import router from './router'
import store from './store'
import i18n from './i18n';
import Vuelidate from 'vuelidate';
import './plugins/vueAxios';
import vuetify from '@/plugins/vuetify';

Vue.use(BootstrapVue);
Vue.use(Vuelidate);
Vue.use(VueScrollTo, {
  container: 'body',
  duration: 1000,
  easing: 'ease',
  offset: 0,
  force: true,
  cancelable: true,
  onStart: false,
  onDone: false,
  onCancel: false,
  x: false,
  y: true,
});

Vue.config.productionTip = false

new Vue({
  router,
  store,
  i18n,
  vuetify,
  render: h => h(App)
}).$mount('#app')
