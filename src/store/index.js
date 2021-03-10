import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({ 
modules:{},
state:{
  IsOpenSideBar : true
  },
mutations:{
  updateIsOpenSideBar(state,value) {
    state.IsOpenSideBar = value;
  }
  },
actions: {
  switchSideBar({commit},payload){
    commit("updateIsOpenSideBar",payload);
  },
  }
});
