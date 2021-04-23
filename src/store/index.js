import Vue from 'vue'
import * as Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    selected: 0,
    layout: [
      {"x":0,"y":0,"w":3,"h":4,"i":0, static: false, component: 'Button', property: {
        type: 'primary',
        text: 'aaaaaa',
        size: 'medium',
        isSelected: false
      }},
      {"x":4,"y":0,"w":3,"h":4,"i":1, static: false,  component: 'Input_a', property: {
        type: 'primary',
        text: 'aaaaaa',
        isSelected: false
      }},
    ],
  },
  mutations: {
    updateSelected (state, selected) {
      state.selected = selected;
      console.log('selected index: ' + selected);
      console.log('is selected: ' + state.layout[state.selected].property.isSelected);
      
    },
    updateComponentSelectStatus (state, isSelected) {
      state.layout[state.selected].property.isSelected = isSelected;
    },
    updateText (state, text) {
      state.layout[state.selected].property.text = text;
    },
    updateType (state, type) {
      state.layout[state.selected].property.type = type;
    },
    updateSize (state, size) {
      state.layout[state.selected].property.size = size;
    }
  },
  actions: {
    increment (context) {
      context.commit('increment')
    }
  }
});
