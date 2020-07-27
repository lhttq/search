import Vue from 'vue';
import App from './App.vue';
//导入vue-router相关组件
import vueRouter from 'vue-router';
import router from "@/router";
import './font/font.css';
//导入iview相关的组件
import ViewUI from 'view-design';
import 'view-design/dist/styles/iview.css';
//注册vue-router相关组件
Vue.use(vueRouter);
//注册iview组件
Vue.use(ViewUI);
Vue.config.productionTip = false;
new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
