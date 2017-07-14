// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import rem from '../static/js/rem.js'
import Axios from 'axios'
import VueAxios from 'vue-axios'
import {ipApiConfig} from './apiconfig'
import infiniteScroll from 'vue-infinite-scroll'
import fixmenu from './components/commoncomponents/fixmenu'

Vue.config.productionTip = false
Vue.use(VueAxios, Axios)
Vue.use(infiniteScroll)
Vue.prototype.ipApiConfig = ipApiConfig
/* eslint-disable no-new */
// 全局组件
Vue.component('fixmenu', fixmenu)
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App, rem, Vue }
})

