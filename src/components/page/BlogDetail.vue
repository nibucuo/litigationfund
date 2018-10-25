<template>
  <div class="aboutUs">
    <!-- 顶部登录，中英文切换,顶部导航栏，左图右导航结构 -->
    <TopNavBlack></TopNavBlack>
    <!-- 顶部不占位，做一个占位空白 -->
    <div style="width:100%;height:115px;background:transparent"></div>
    <!-- 团队／顾问 -->
    <div class="aboutImg">
      <img src="../../assets/images/banner2.png">
      <div class="aboutImgBox">
        <div class="aboutChi">团队/顾问</div>
        <div class="aboutEng">OUR TEAM</div>
      </div>
    </div>
    <!-- 绿石研究院文章详情 -->
    <div class="contentBox">
      <div class="infoTitle">
        <span>绿石研究院 > </span><span class="information">破产重整与清算</span>
      </div>
      <div class="title">破产重整与清算</div>
      <div class="date">2018年10月16日</div>
      <div class="content">
        当事人之间不平等的财务资源存在着巨大的差异，给司法救济带来了障碍和不平衡，并使资金紧张的当事人所能获得的裁判结果发生偏离和扭曲
        当事人之间不平等的财务资源存在着巨大的差异，给司法救济带来了障碍和不平衡，并使资金紧张的当事人所能获得的裁判结果发生偏离和扭曲
        当事人之间不平等的财务资源存在着巨大的差异，给司法救济带来了障碍和不平衡，并使资金紧张的当事人所能获得的裁判结果发生偏离和扭曲
      </div>
    </div>
    <!-- 首页底部 -->
    <Bottom></Bottom>
  </div>
  

</template>

<script>
import TopNavBlack from '@/components/common/TopNavBlack'
import Bottom from '@/components/common/Bottom'
export default {
  name: 'BlogDetail',
  data () {
    return {
    }
  },
  methods: {
    init: function(){
    },
  },
  mounted:function(){
    // this.init();
  },
  components:{
    TopNavBlack,
    Bottom
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/*关于我们图片*/
.aboutImg{
  width: 100%;
  position: relative;
  margin-bottom: -89px;
}
.aboutImg img{
  width: 100%;
  position: relative;
  top: -89px;
}
.aboutImgBox{
  width: 100px;
  height: 60px;
  position: absolute;
  left: 50%;
  top: 40%;
  margin-left: -50px;
}
.aboutChi{
  width: 120px;
  height: 30px;
  text-align: center;
  font-family: 'Medium';
  color: #fff;
  font-size: 22px;
  border-bottom: 1px solid #c49a6d;
}
.aboutEng{
  width: 120px;
  height: 22px;
  text-align: center;
  font-family: 'Regular';
  color: #fff;
  font-size: 16px;
}
/*绿石研究院文章详情*/
.contentBox{
  width: 1000px;
  height: auto;
  margin: 0 auto 20px;
  position: relative;
}
.infoTitle{
  width: 1000px;
  height: 50px;
  line-height: 50px;
  border-bottom: 1px solid #ccc;
  font-family: 'Normal';
  color: #333;
  font-size: 16px;
  margin: 0 auto 10px;
}
.information{
  font-family: 'Normal';
  color: #c49a6d;
  font-size: 16px;
}
.title{
  width: 850px;
  height: 40px;
  font-family: 'Medium';
  color: #c49a6d;
  font-size: 22px;
  text-align: center;
  margin: 30px auto 0;
}
.date{
  width: 850px;
  height: 30px;
  line-height: 30px;
  padding-right: 30px;
  text-align: right;
  box-sizing: border-box;
  font-family: 'Normal';
  color: #979797;
  font-size: 16px;
  margin: 0 auto 20px;
}
.content{
  width: 850px;
  line-height: 28px;
  font-family: 'Normal';
  color: #333;
  font-size: 15px;
  margin: 0 auto 20px;
}


</style>
