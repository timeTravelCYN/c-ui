import Vue from 'vue'
import Button from '../package/button.vue'
import Icon from '../package/common/icon.vue'
import ButtonGroup from '../package/button-group.vue'
Vue.component('c-icon', Icon)
Vue.component('c-button', Button)
Vue.component('c-button-group', ButtonGroup)
new Vue({
  el: '#app',
  data: {
    loading1: false
  }
})