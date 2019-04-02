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

// 单元测试
import chai from 'chai'
import spies from 'chai-spies'
chai.use(spies)
const expect = chai.expect
{
  const Constructor = Vue.extend(Button)
  const button = new Constructor({
    propsData: {
      icon: 'back'
    }
  })
  button.$mount()
  const useElement = button.$el.querySelector('use')
  expect(useElement.getAttribute('xlink:href')).to.eq('#i-back')
  button.$el.remove()
  button.$destroy()
}
{
  const Constructor = Vue.extend(Button)
  const button = new Constructor({
    propsData: {
      icon: 'back',
      loading: true
    }
  })
  button.$mount()
  const useElement = button.$el.querySelector('use')
  expect(useElement.getAttribute('xlink:href')).to.eq('#i-loading')
  button.$el.remove()
  button.$destroy()
}
{
  const Constructor = Vue.extend(Button)
  const button = new Constructor({
    propsData: {
      icon: 'back',
      loading: true,iconPosition: 'right'
    }
  })
  button.$mount('#test')
  const svg = button.$el.querySelector('svg')
  let { order } = window.getComputedStyle(svg)
  expect(order).to.eq('2')
  button.$el.remove()
  button.$destroy()
}
{
  // mock
  const Constructor = Vue.extend(Button)
  const vm = new Constructor({
    propsData: {
      icon: 'back',
      iconPosition: 'right'
    }
  })
  vm.$mount()
  let spy = chai.spy(() => {})
  vm.$on('click', spy)
  const btn = vm.$el;
  btn.click()
  expect(spy).to.have.been.called()
  vm.$el.remove()
  vm.$destroy()
}