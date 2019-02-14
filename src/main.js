import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import VueResource from 'vue-resource';

Vue.config.productionTip = false;

export const EventBus = new Vue();

Vue.use(VueResource);
new Vue({
  render: h => h(App),
}).$mount('#app')

