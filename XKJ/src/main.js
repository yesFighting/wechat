import Vue from 'vue'
import App from './App.vue'
import '@/config/rem.js'
import router from './router'


import http from 'axios'
Vue.prototype.$http =http;


// import Vant from 'vant'
 import 'vant/lib/index.css'
// Vue.use(Vant)
import '@/assets/css/public.css'


import { Icon, Button, Tab, Tabs, Loading, RadioGroup, Radio,Popup, Dialog, Picker } from 'vant';

Vue.use(Icon)
.use(Button)
.use(Tab)
.use(Tabs)
.use(Loading)
.use(RadioGroup)
.use(Radio)
.use(Popup)
.use(Dialog)
.use(Picker);


Vue.config.productionTip = false



new Vue({
  router,
  render: h => h(App),
 
}).$mount('#app')
