import Vue from 'vue'
import Router from 'vue-router'
import Params from '@/components/Params'
import Hello from '@/components/page/Hello'
import TopNav from '@/components/common/TopNav'
import AboutUs from '@/components/page/AboutUs'
import Funding from '@/components/page/Funding'
import Coverage from '@/components/page/Coverage'
import Scenarios from '@/components/page/Scenarios'
import ContactUs from '@/components/page/ContactUs'
import Contact from '@/components/page/Contact'
import InforList from '@/components/page/InforList'
import InforDetail from '@/components/page/InforDetail'
import Error from '@/components/page/Error'

Vue.use(Router)

export default new Router({
  mode: 'history',
  linkActiveClass: "active",
  routes: [
    {
      path: '/index',
      component: Hello
    },
    {
      path: '/AboutUs',
      component: AboutUs
    },
    {
      path: '/Funding',
      component: Funding
    },
    {
      path: '/Coverage',
      component: Coverage
    },
    {
      path: '/Scenarios',
      component: Scenarios
    },
    {
      path: '/Contact',
      component: ContactUs
    },
    {
      path: '/Contact/InforList',
      component: InforList,
    },
    {
      path: '/Contact/InforDetail',
      component: InforDetail,
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
  // 窗口滚动到顶部
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  }
})
