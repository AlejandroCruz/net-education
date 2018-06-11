// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import jQuery from 'jquery/dist/jquery.min'
import fontawesome from '@fortawesome/fontawesome'
import faSolids from '@fortawesome/fontawesome-free-solid'
// import windowSize from './utils/UtilWindowSize'
import { store } from './store/index'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.css'
import 'startbootstrap-sb-admin/css/sb-admin.css'

Vue.config.productionTip = false
fontawesome.library.add( faSolids )
global.$jQuery = jQuery
global.$windowSize = 'windowSize'

export const EventBus = new Vue()

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
