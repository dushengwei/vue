// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
//引入mint-ui
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
Vue.use(MintUI)

//awesome 图标
import './common/scss/index.scss'


//引入element
//import ElementUI from 'element-ui'
//import 'element-ui/lib/theme-default/index.css'
//引入store
import store from './action/store'

//引入bootstrap
//import BootStrap from 'BootStrap'
//import 'bootstrap/dist/css/bootstrap.css'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  template: '<App/>',
  components: { App }
})
