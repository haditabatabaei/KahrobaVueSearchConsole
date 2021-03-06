// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store/store'
import JsonExcel from 'vue-json-excel'
import VueApexCharts from 'vue-apexcharts'

Vue.component('apexchart', VueApexCharts)
Vue.component('downloadExcel', JsonExcel);

Vue.config.productionTip = false
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router, store,
  components: {App},
  template: '<App/>'
});
