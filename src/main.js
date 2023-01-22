import Vue from 'vue'
import App from './App.vue'
import VueScrollTo from 'vue-scrollto';
import { BootstrapVue } from 'bootstrap-vue'
import router from './router'
import './plugins/vueAxios';
import vuetify from '@/plugins/vuetify';

Vue.use(BootstrapVue);
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
  vuetify,
  render: h => h(App)
}).$mount('#app')
