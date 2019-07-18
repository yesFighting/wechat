import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

import menu from './modules/menu'
import money from './modules/money'
import user from './modules/user'
import permission from './modules/permission'

export default new Vuex.Store({
  modules:{
    menu,
    money,
    user,
    permission
  }

});
