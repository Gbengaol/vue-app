import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./registerServiceWorker";
import VueResource from 'vue-resource'

Vue.config.productionTip = false;
export const bus = new Vue(); // For Event Bus
Vue.use(VueResource); //For Http request

//Custom Directives
// Vue.directive('randomColorDirective', {
//   bind(el, binding, vnode){
//     el.style.color = `#${Math.random().toString().slice(2,8)}`;
//   }
// });

// Custom Filters
Vue.filter('toSnippet', function(value){
  return `${value.slice(0, 100)} ...`
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
