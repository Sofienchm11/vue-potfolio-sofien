import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import AOS from 'aos'

import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import 'aos/dist/aos.css'

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
  mounted() {
    AOS.init()
  },
}).$mount("#app");
