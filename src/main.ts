import Vue from 'vue';
// import './plugins/vuetify'
import App from './App.vue';
import router from './router';
import store from './store';
import './registerServiceWorker';


import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'

const opts:any = {
  theme: {
    primary: '#ee44aa',
    secondary: '#424242',
    accent: '#82B1FF',
    error: '#FF5252',
    info: '#2196F3',
    success: '#4CAF50',
    warning: '#FFC107'
  },
  iconfont: 'md'
}
Vue.use(Vuetify)
// 支持IE11和Safari 9 添加垫片
import 'babel-polyfill'

Vue.config.productionTip = false;

new Vue({
  vuetify: new Vuetify(opts),
  router,
  store,
  render: (h) => h(App),
  mounted: () => document.dispatchEvent(new Event("x-app-rendered")),
}).$mount('#app');
