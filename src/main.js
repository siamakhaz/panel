import 'core-js/es6/promise'
import 'core-js/es6/string'
import 'core-js/es7/array'
import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'
import App from './App'
import router from './router'
import Vuelidate from "vuelidate";

Vue.use(Vuelidate);
Vue.use(BootstrapVue);

new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: {
    App
  }
});
