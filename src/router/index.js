import Vue from 'vue'
import Router from 'vue-router'
import Element from 'element-ui'
import Less from 'less'
import 'element-ui/lib/theme-default/index.css'
import 'less/lib/less/index'
import index from '@/components/index'
import category from '@/components/category'
import goods from '@/components/goods'
import order from '@/components/order'
import statistics from '@/components/statistics'
import authority from '@/components/authority'
import myCenter from '@/components/myCenter'

Vue.use(Router)
Vue.use(Element)
Vue.use(Less)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    },
    {
      path: '/category',
      name: 'category',
      component: category
    },
    {
      path: '/goods',
      name: 'goods',
      component: goods
    },
    {
      path: '/order',
      name: 'order',
      component: order
    },
    {
      path: '/statistics',
      name: 'statistics',
      component: statistics
    },
    {
      path: '/authority',
      name: 'authority',
      component: authority
    },
    {
      path: '/myCenter',
      name: 'myCenter',
      component: myCenter
    },

  ]
})
