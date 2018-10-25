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
import Team from '@/components/page/Team'
import TeamEdit from '@/components/page/TeamEdit'
import Blog from '@/components/page/Blog'
import BlogEdit from '@/components/page/BlogEdit'
import BlogDetail from '@/components/page/BlogDetail'
import InforList from '@/components/page/InforList'
import InforDetail from '@/components/page/InforDetail'
import Error from '@/components/page/Error'

Vue.use(Router)

export default new Router({
  mode: 'history',
  linkActiveClass: "active",
  routes: [
    {
      path: '/',
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
      path: '/Team',
      component: Team
    },
    {
      path: '/Team/TeamEdit',
      component: TeamEdit
    },
    {
      path: '/Blog',
      component: Blog
    },
    {
      path: '/Blog/BlogEdit',
      component: BlogEdit
    },
    {
      path: '/Blog/BlogDetail',
      component: BlogDetail
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
      redirect: '/'
    }
  ],
  // 窗口滚动到顶部
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
    console.log('轮播图滚动会影响么');
  }
})
