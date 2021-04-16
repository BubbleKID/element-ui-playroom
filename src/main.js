import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import Vuex from 'vuex';


Vue.config.productionTip = false 
Vue.use(ElementUI);
Vue.use(Vuex);

const store = new Vuex.Store({
  select: null,
  mutations: {
    selected () {
       
    }
  }
})

new Vue({
  render: h => h(App),
  store: store,
}).$mount('#app')
