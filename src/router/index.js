import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Hi from '@/components/Hi'
import Hi1 from '@/components/Hi1'
import Hi2 from '@/components/Hi2'
import Params from '@/components/Params'
import TopNav from '@/components/common/TopNav'
import Error from '@/components/Error'

Vue.use(Router)

export default new Router({
  mode: 'history',
  linkExactActiveClass:"active",
  routes: [
    {
      path: '/',
      component: Hello
    },
    {
      path: '/Hi1',
      component: Hi1
    },
    {
      path: '/Hi2',
      component: Hi2
    },
    {
      path: '/Hi',
      component: Hi
    },
    {
      path: '/Params/:newsId/:newsTitle',
      component: Params,
      beforeEnter:(to,from,next)=>{
        // console.log('beforeEnter');
        // console.log(to);
        // console.log(from);
        // next(false);
        next();
      }
    },
    {
      path: '*',
      component: Error
    }
  ],
  components:{
    TopNav
  }
})
