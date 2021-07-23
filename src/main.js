import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import MavonEditor from 'mavon-editor';
import IconFont from '@/components/iconFont';

import '@/plugins/element.js';
import utils from '@/utils';
import 'normalize.css';

Vue.config.productionTip = false;
Vue.use(MavonEditor); // 注册markdown编辑器
Vue.component(IconFont.name, IconFont);

Vue.prototype.$utils = utils;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
