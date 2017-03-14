import Vue from 'vue'
import Router from 'vue-router'
import test from '@/components/test'
import goods from '@/components/goods/goods'
import test1 from '@/components/test1'


Vue.use(Router)

export default new Router({
  routes: [
      {
      path: '/test',
      name: 'test',
      component: test
    }, {
      path: '/',
      name: 'goods',
      component: goods
    }, {
      path: '/test1',
      name: 'test1',
      component: test1
    }
  ]
})
