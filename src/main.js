import Vue from "vue";
import App from "./App.vue";
import { BootstrapVue, IconsPlugin } from "bootstrap-vue";
import VueContentPlaceholders from '@gomarky/vue-shimmer';
import Router from "vue-router";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import router from "./router";
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.config.productionTip = false;
Vue.use(BootstrapVue);
Vue.use(IconsPlugin);
Vue.use(Router);
Vue.use(VueContentPlaceholders)
Vue.use(VueAxios, axios)

new Vue({
  el: '#app',
  router,
  render: h => h(App)
});
