//vue-router路由配置文件

import Vue from 'vue'
import Router from 'vue-router'
import App from './App'
import vueResource from 'vue-resource'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import porxy from 'http-proxy-middleware'
import vuex from 'vuex'
import axios from 'axios'
// import $ from 'jquery'
Vue.config.debug = true
Vue.use(Router)
Vue.use(vuex)
Vue.prototype.$http = axios
// var jQuery = require('jquery');
// require('jquery.easing')(jQuery);
const router = new Router({
  // mode: 'history',
  routes: [
    { 
  	  path: '/',
      redirect: '/login' //默认主页
    },
    {
      path: '/index',
      component: resolve => require(['./components/common/home.vue'], resolve),
        children:[
          {
              path: '/',
              component: resolve => require(['./components/page/index/index.vue'], resolve)
          },
          {
              path: '/add',
              component: resolve => require(['./components/page/add.vue'], resolve)
          },
          {
              path: '/view/:id',
              component: resolve => require(['./components/page/view.vue'], resolve)
          },
          {
              path: '/editor/:id',
              component: resolve => require(['./components/page/editor.vue'], resolve)
          },
          {
              path: '/all',
              component: resolve => require(['./components/page/all.vue'], resolve)
          },
          {
              path: '/aboutme',
              component: resolve => require(['./components/page/aboutme.vue'], resolve)
          },
        ]
    },
    {
      path: '/login',
      component: resolve => require(['./components/page/login.vue'], resolve)
    },
    {
      path: '/reg',
      component: resolve => require(['./components/page/reg.vue'], resolve)
    },
  ]
});



Vue.use(ElementUI)
new Vue({
  el: '#app',
  router,
  render (createElement) {
    return createElement(App)
  }
})
