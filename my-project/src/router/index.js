import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import City from '@/components/City/city'
import Detail from '@/components/Detail/Detail'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    }, {
      path: '/city',
      name: 'City',
      component: City
    }, {
      path: '/Detail/:id',
      name: 'Detail',
      component: Detail
    }
  ]
})
