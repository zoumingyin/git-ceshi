import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import test from '@/test/test'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    }, {
      path: '/test',
      name: 'test',
      component: test
    }
  ]
})
