// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false
//导入样式清除文件
import './static/css/reset.css'
//全局导入echarts
//import echarts from 'echarts'
//Vue.prototype.$echarts = echarts
/* eslint-disable no-new */

//导入element-ui
import {Row, Col} from 'element-ui';
Vue.use(Row).use(Col)
// 引入 ElementUI 响应式断点
import 'element-ui/lib/theme-chalk/display.css';

new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
