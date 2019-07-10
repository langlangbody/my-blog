import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import './registerServiceWorker';

// 支持IE11和Safari 9 添加垫片
import 'babel-polyfill'

import './plugins/ant-design-vue'
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
  mounted: () => document.dispatchEvent(new Event("x-app-rendered")),
}).$mount('#app');
