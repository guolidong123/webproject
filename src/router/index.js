import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import LayOut from '@/views/layout/layout'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'LayOut',
      component: LayOut
    },
    {
      path: '/HelloWorld',
      name: 'HelloWorld',
      component: HelloWorld
    }
  ]
})
