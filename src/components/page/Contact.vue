<template>
  <div class="aboutUs">
    <!-- 顶部登录，中英文切换,顶部导航栏，左图右导航结构 -->
    <TopNavBlack></TopNavBlack>
    <!-- 顶部不占位，做一个占位空白 -->
    <div style="width:100%;height:115px;background:transparent"></div>
    
    <router-view></router-view> 
    <!-- 首页底部 -->
    <Bottom></Bottom>
  </div>
</template>

<script>
import TopNavBlack from '@/components/common/TopNavBlack'
import Bottom from '@/components/common/Bottom'
export default {
  name: 'Contact',
  data () {
    return {
    }
  },
  methods: {
    init: function(){
    }
  },
  computed:{
    
  },
  mounted:function(){
    this.init();
  },
  components:{
    TopNavBlack,
    Bottom
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
