// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import firebase from 'firebase/app'
import 'firebase/auth'
import router from './router'
import jQuery from 'jquery/dist/jquery.min'
import fontawesome from '@fortawesome/fontawesome'
import faSolids from '@fortawesome/fontawesome-free-solid'
import { store } from './store/index'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.css'
import 'startbootstrap-sb-admin/css/sb-admin.css'

Vue.config.productionTip = false
fontawesome.library.add( faSolids )
global.$jQuery = jQuery
global.$windowSize = 'windowSize'

export const EventBus = new Vue()

const firebaseConfig = {
  apiKey: 'AIzaSyDwiVypDQ9MDru5U47p2guR1II498T9Tj4',
  authDomain: 'athenas-app.firebaseapp.com',
  databaseURL: 'https://athenas-app.firebaseio.com',
  projectId: 'athenas-app',
  storageBucket: 'athenas-app.appspot.com'
}
let apiFirebase = firebase.initializeApp(firebaseConfig)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  apiFirebase,
  components: { App },
  template: '<App/>'
})
