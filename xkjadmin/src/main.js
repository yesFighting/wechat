import Vue from "vue";
import App from "./App.vue";
import router from "./router/index.js";
import store from "./store/";
import './plugins/element.js'
import '@/permission' // permission control

import http from 'axios'
Vue.prototype.$http =http;

Vue.config.productionTip = false;
//全局注册
import VueUeditorWrap from "vue-ueditor-wrap";
// //设置全局方法
// Vue.mxin({
//   computed:{
//     uploadUrl(){
//       return '/api/upload'
//     }
//   },
//   methods:{
//     getAuthHeaders(){
//       return {
//         Authorization: `Bearer ${localStorage.token || ''}`
//       }
//     }
//   }
// })

Vue.component('vue-ueditor-wrap', VueUeditorWrap)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
