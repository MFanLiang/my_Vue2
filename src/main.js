// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import fastClick from 'fastclick'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
import 'styles/reset.css'
import 'styles/border.css'
import 'styles/iconfont.css'

// 阻止 vue 在启动时生成生产提示。
Vue.config.productionTip = false

// 解决300毫秒点击延迟问题
fastClick.attach(document.body)

// mount with global 将VueAwesomeSwiper组件挂载到全局下
Vue.use(VueAwesomeSwiper)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})

// 路由就是根据网址的不同，返回不同的内容给用户
