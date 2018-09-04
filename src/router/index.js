import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Hi from '@/components/Hi'
import Hi1 from '@/components/Hi1'
import Hi2 from '@/components/Hi2'
import Params from '@/components/Params'
import Error from '@/components/Error'

Vue.use(Router)

export default new Router({
  // mode: 'hash',
  mode: 'history',
  routes: [
    {
      path: '/',
      components: {
        default: HelloWorld,
        left: Hi1,
        right: Hi2
      },
      alias: '/home'
    },
    {
      path: '/Hi1',
      component: Hi1,
      alias: '/qiaof'
    },
    {
      path: '/Hi',
      components: {
        default: HelloWorld,
        left: Hi2,
        right: Hi1
      }
    },
    {
      path: '/Params/:newsId(\\d+)/:newsTitle',
      component: Params,
      beforeEnter:(to,from,next)=>{
        console.log('beforeEnter');
        console.log(to);
        console.log(from);
        // next(false);
        next();
      }
    },
    {
      path: '/goback',
      redirect: '/'
    },
    {
      path: '/Params/:newsId(\\d+)/:newsTitle',
      redirect: '/Params/:newsId(\\d+)/:newsTitle'
    },
    {
      path: '*',
      component: Error
    }
  ]
})
