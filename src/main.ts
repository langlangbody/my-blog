import Vue from 'vue';
// import './plugins/vuetify'
import App from './App.vue';
import router from './router';
import store from './store';
import './registerServiceWorker';


import vuetify from '@/plugins/vuetify'
// 支持IE11和Safari 9 添加垫片
import 'babel-polyfill'

Vue.config.productionTip = false;

new Vue({
  vuetify,
  router,
  store,
  render: (h) => h(App),
  mounted: () => document.dispatchEvent(new Event("x-app-rendered")),
}).$mount('#app');
