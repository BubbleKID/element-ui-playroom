import Vue from 'vue'
import * as Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    selected: 0,
    layout: [
      {"x":0,"y":0,"w":2,"h":2,"i":"0", static: false, component: 'Button', property: {
        type: 'primary',
        text: 'aaaaaa'
      }},
      {"x":2,"y":0,"w":2,"h":4,"i":"1", static: false,  component: 'Input_a', property: {
        type: 'primary',
        text: 'aaaaaa'
      }},
    ],
  },
  mutations: {
    // updateSelected (state, selected) {
    //   console.log('aaa');
    //   //state.layout[state.selected].property.text = text;
    // },
    updateText (state, text) {
      state.layout[state.selected].property.text = text;
    },
    updateType (state, type) {
      state.layout[state.selected].property.type = type;
    }
  },
  actions: {
    increment (context) {
      context.commit('increment')
    }
  }
});
