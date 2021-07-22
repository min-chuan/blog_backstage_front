import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import '@/plugins/element.js';
import utils from '@/utils';
import 'normalize.css';

Vue.config.productionTip = false;

Vue.prototype.$utils = utils;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
