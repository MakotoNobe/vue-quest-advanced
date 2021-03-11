

import Vue from "vue";
import Vuex from "vuex";

import { event } from "@/store/event.js";

Vue.use(Vuex);

export default new Vuex.Store({ 
    // modulesには他のファイルなどでstoreを定義したときに使用する
    modules:{
      event
    },
    // stateは参照専用、直接編集はだめ絶対！
    state:{
      isOpenSideBar : false,
      createTaskDialog:false
      },
      // mutationsはstateを変更のみを行う
    mutations:{
      updateIsOpenSideBar(state,value) {
        state.isOpenSideBar = value;
      },
      updateCreateTaskDialog(state,value) {
        state.createTaskDialog = value;
      }
      },
    actions: {
      switchSideBar({commit},payload){
        // commit(”mutations名",引数)でmutation名を実行できる
        commit("updateIsOpenSideBar",payload);
      },
      switchCreateTaskDialog({commit},payload){
        commit("updateCreateTaskDialog",payload);
      },
     }
});
