import Vue from 'vue'
import Router from 'vue-router'
import kecheng from '@/components/kecheng'
import shequ from '@/components/shequ'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'kecheng',
      component: kecheng
    },
    {
      path: '/shequ',
      component: shequ
    },
    {
      path: '/kecheng',
      component: kecheng
    }
  ]
})
