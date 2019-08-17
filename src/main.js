import Vue from 'vue'
import App from './App'

import router from './router'
import store from './store'

import VueLazyload from 'vue-lazyload'
import loading from '../src/common/imgs/loading.gif'

import "../src/mock/mockServer"

Vue.use(VueLazyload, {
  loading
})

new Vue({
  el: '#app',
  render: h => h(App),
  router,
  store
})
