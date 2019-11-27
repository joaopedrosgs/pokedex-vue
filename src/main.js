import Vue from 'vue'
import App from './App.vue'
import store from "./store"
import { VLazyImagePlugin } from "v-lazy-image";

Vue.config.productionTip = false
Vue.use(VLazyImagePlugin);

new Vue({
  render: h => h(App),
  store,
}).$mount('#app')
