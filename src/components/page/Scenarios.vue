<template>
  <div class="aboutUs">
    <!-- 顶部登录，中英文切换,顶部导航栏，左图右导航结构 -->
    <TopNavBlack></TopNavBlack>
    <!-- 顶部不占位，做一个占位空白 -->
    <div style="width:100%;height:115px;background:transparent"></div>
    <!-- 应用场景 -->
    <div class="aboutImg">
      <img src="../../assets/images/banner2.png">
      <div class="aboutImgBox">
        <div class="aboutChi">应用场景</div>
        <div class="aboutEng">CASE SCENARIOS</div>
      </div>
      
    </div>
    <!-- 案例列表 -->
    <ul class="caseList">
      <li>
        <div class="caseListLeft"><img src="../../assets/images/case1.png"></div>
        <div class="caseListRight">
          <div class="caseTitle">案例1</div>
          <div class="caseContent">某企业及其创始人因在建工程陷入财务困境，但对其原股东有巨额诉权且案情复杂，诉讼资助使其聘请到了一流的律师团队并启动司法救济，向原股东追索出资和挪用资金。</div>
        </div>
      </li>
      <li>
        <div class="caseListLeft"><img src="../../assets/images/case2.png"></div>
        <div class="caseListRight">
          <div class="caseTitle">案例2</div>
          <div class="caseContent">某创业公司被诉知识产权侵权，通过诉讼资助找到了合适的知产律师并提供了诉讼成本垫资，创业公司得以集中财力用于研发和运营，同时在诉讼中成功抗辩、提起反诉并赢得赔偿。</div>
        </div>
      </li>
      <li>
        <div class="caseListLeft"><img src="../../assets/images/case3.png"></div>
        <div class="caseListRight">
          <div class="caseTitle">案例3</div>
          <div class="caseContent">某上市公司创始人猝然离世，遗产陷入股权纷争，继承人通过诉讼资助聘请公司法和资本市场专家型律师为其清理潜在的对赌、代持、 低价转股等风险，明晰股权后二级市场解封变现退出。</div>
        </div>
      </li>
      <li>
        <div class="caseListLeft"><img src="../../assets/images/case4.png"></div>
        <div class="caseListRight">
          <div class="caseTitle">案例4</div>
          <div class="caseContent">某大型露天煤矿困境企业急需债务重组而无力负担成本，通过诉讼资助解决破产管理人费用，申请破产重整，6个月后重整计划经各类债权人表决通过执行，企业重生。</div>
        </div>
      </li>
    </ul>
    <!-- 申请资助 -->
    <ApplyFunding></ApplyFunding>
    <!-- 首页底部 -->
    <Bottom></Bottom>
  </div>
  

</template>

<script>
import TopNavBlack from '@/components/common/TopNavBlack'
import ApplyFunding from '@/components/common/ApplyFunding'
import Bottom from '@/components/common/Bottom'
export default {
  name: 'Scenarios',
  data () {
    return {
      loginFlag: false
    }
  },
  methods: {
    init: function(){
    }
  },
  mounted:function(){
    // this.init();
  },
  components:{
    TopNavBlack,
    ApplyFunding,
    Bottom
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/*应用场景图片*/
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
  width: 160px;
  height: 60px;
  position: absolute;
  left: 50%;
  top: 40%;
  margin-left: -80px;
}
.aboutChi{
  width: 160px;
  height: 30px;
  text-align: center;
  font-family: 'Medium';
  color: #fff;
  font-size: 22px;
  border-bottom: 1px solid #c49a6d;
}
.aboutEng{
  width: 160px;
  height: 22px;
  text-align: center;
  font-family: 'Regular';
  color: #fff;
  font-size: 16px;
}
/*案例列表*/
.caseList{
  width: 800px;
  height: auto;
  margin: 0 auto;
  padding-top: 50px;
}
.caseList li{
  width: 100%;
  display: flex;
  border-bottom: 1px solid #ccc;
  margin-bottom: 18px;
}
.caseList li:last-child{
  border-bottom: 0;
}
.caseListLeft{
  width: 197px;
  height: 130px;
  margin-right: 25px;
  margin-bottom: 19px; 
}
.caseListLeft img{
  width: 100%;
}
.caseListRight{
  width: 575px;
}
.caseTitle{
  font-family: 'Medium';
  color: #333;
  font-size: 18px;
  margin: 5px 0 15px
}
.caseContent{
  font-family: 'Normal';
  color: #333;
  font-size: 15px;
}


</style>
