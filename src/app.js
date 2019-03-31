import Vue from 'vue'
import Button from '../package/button.vue'
import Icon from '../package/common/icon.vue'
Vue.component('g-icon', Icon)
Vue.component('g-button', Button)
new Vue({
  el: '#app',
  data: {
    loading1: false
  }
})