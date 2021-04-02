import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'


import { routes } from './routes'
import store from './store/store'


Vue.config.productionTip = false
Vue.use(VueRouter)
Vue.use(VueResource)

Vue.http.options.root = 'https://vue-complete-70fcd-default-rtdb.firebaseio.com/'

const router = new VueRouter({
  mode: 'history',
  routes
});

Vue.filter('currency', function (value) {
  return '$' + parseFloat(value).toFixed(2)
});

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
