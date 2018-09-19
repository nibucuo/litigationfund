<template>
  <div class="aboutUs">
    <!-- 顶部登录，中英文切换,顶部导航栏，左图右导航结构 -->
    <TopNavBlack></TopNavBlack>
    <!-- 顶部不占位，做一个占位空白 -->
    <div style="width:100%;height:115px;background:transparent"></div>
    <!-- 诉讼资助 -->
    <div class="aboutImg">
      <img src="../../assets/images/banner3.png">
      <div class="aboutChi">资助</div>
      <div class="aboutEng">FUNDING</div>
    </div>
    <div class="litigation">
      <div class="introduction">
        <div class="introTitle">诉讼资助</div>
        <div class="introLine">
          <span></span>
          <span class="two"></span>
          <span class="three"></span>
        </div>
        <div class="introEng">FUNDING</div>
      </div>
      <div class="litigationImgBox">
        <div v-if="litigationLeft" class="litigationLeft">保全费</div>
        <div @mouseenter="showLeft" @mouseleave="hiddenLeft" class="litigationLeftBox"></div>
        <div class="litigationImg"><img src="../../assets/images/circles.png"></div>
        <div v-if="litigationRight" class="litigationRight">审计费、鉴定费、公证费、评估费、拍卖费</div>
        <div @mouseenter="showRight" @mouseleave="hiddenRight" class="litigationRightBox"></div>
      </div>
    </div>
    <!-- 资助阶段 -->
    <div class="funding">
      <!-- <img src="../../assets/images/lightBg.png"> -->
      <div class="introduction">
        <div class="introTitle">诉讼资助</div>
        <div class="introLine">
          <span></span>
          <span class="two"></span>
          <span class="three"></span>
        </div>
        <div class="introEng">FUNDING</div>
      </div>
      <ul class="phase">
        <li class="phaseLine">————</li>
        <li class="phaseImg">
          <ul>
            <li v-if="!phase1" @click="changePhase1"><img src="../../assets/images/phase1.png"></li>
            <li v-else><img src="../../assets/images/phase11.png"></li>
            <li :class="!phase1?'phaseTextGray':'phaseTextActive'">诉讼</li>
            <li v-if="phase1">
              <div class="phaseImgBig">诉讼</div>
              <div class="phaseImgSmall">
                <span>一审</span><br>
                <span>二审</span><br>
                <span>三审</span>
              </div>
            </li>
          </ul>
        </li>
        <li class="phaseLine">————</li>
        <li class="phaseImg">
          <ul>
            <li v-if="!phase2" @click="changePhase2"><img src="../../assets/images/phase2.png"></li>
            <li v-else><img src="../../assets/images/phase22.png"></li>
            <li :class="!phase2?'phaseTextGray':'phaseTextActive'">仲裁</li>
            <li v-if="phase2">
              <div class="phaseImgBig">仲裁</div>
              <div class="phaseImgSmall">
                <span>国内</span><br>
                <span>国际</span>
              </div>
            </li>
          </ul>
        </li>
        <li class="phaseLine">————</li>
        <li class="phaseImg">
          <ul>
            <li v-if="!phase3" @click="changePhase3"><img src="../../assets/images/phase3.png"></li>
            <li v-else><img src="../../assets/images/phase33.png"></li>
            <li :class="!phase3?'phaseTextGray':'phaseTextActive'">保全与执行</li>
            <li v-if="phase3">
              <div class="phaseImgBig">保全与执行</div>
              <div class="phaseImgSmall">
                <span>公证债权文书执行</span><br>
                <span>裁判文书执行</span><br>
                <span>其他生效法律文书执行</span>
              </div>
            </li>
          </ul>
        </li>
        <li class="phaseLine">————</li>
        <li class="phaseImg">
          <ul>
            <li v-if="!phase4" @click="changePhase4"><img src="../../assets/images/phase4.png"></li>
            <li v-else><img src="../../assets/images/phase44.png"></li>
            <li :class="!phase4?'phaseTextGray':'phaseTextActive'">破产重组与清算</li>
            <li v-if="phase4">
              <div class="phaseImgBig">破产重组与清算</div>
              <div class="phaseImgSmall">
                <span>债务重组</span><br>
                <span>破产重整</span><br>
                <span>破产和解</span><br>
                <span>破产清算</span>
              </div>
            </li>
          </ul>
        </li>
        <li class="phaseLine">————</li>
      </ul>
    </div>
    
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
  name: 'AboutUs',
  data () {
    return {
      loginFlag: false,
      litigationLeft: false,
      litigationRight: false,
      phase1: true,
      phase2: false,
      phase3: false,
      phase4: false
    }
  },
  methods: {
    init: function(){
    },
    showLeft: function(){
      this.litigationLeft = true;
    },
    showRight: function(){
      this.litigationRight = true;
    },
    hiddenLeft: function(){
      this.litigationLeft = false;
    },
    hiddenRight: function(){
      this.litigationRight = false;
    },
    changePhase1: function(){
      this.phase1 = true;
      this.phase2 = false;
      this.phase3 = false;
      this.phase4 = false;
    },
    changePhase2: function(){
      this.phase1 = false;
      this.phase2 = true;
      this.phase3 = false;
      this.phase4 = false;
    },
    changePhase3: function(){
      this.phase1 = false;
      this.phase2 = false;
      this.phase3 = true;
      this.phase4 = false;
    },
    changePhase4: function(){
      this.phase1 = false;
      this.phase2 = false;
      this.phase3 = false;
      this.phase4 = true;
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
/*诉讼资助图片*/
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
.aboutChi{
  width: 100px;
  height: 30px;
  text-align: center;
  font-family: 'Medium';
  color: #fff;
  font-size: 22px;
  position: absolute;
  left: 50%;
  top: 45%;
  margin-left: -50px;
  border-bottom: 1px solid #c49a6d;
}
.aboutEng{
  width: 100px;
  height: 22px;
  text-align: center;
  font-family: 'Regular';
  color: #fff;
  font-size: 16px;
  position: absolute;
  left: 50%;
  top: 54%;
  margin-left: -50px;
}
/*诉讼资助*/
.litigation{
  width: 100%;
  height: 500px;
  background: #f0f0f0;
  padding-top: 40px;
}
.introduction{
  width: 800px;
  height: 87px;
  text-align: center;
  margin: 0 auto;
}
.introTitle{
  font-family: 'Medium';
  color: #333;
  font-size: 21px;
  
}
.introLine{
  font-size: 0;
  margin: 2px 10px;
}
.introLine span{
  width: 20px;
  height: 1px;
  background: #c49a6d;
  display: inline-block;
  margin-right: 10px;
}
.introLine span.two{
  width: 80px;
}
.introLine span.three{
  margin-right: 0;
}
.introEng{
  font-family: 'Regular';
  color: #333;
  font-size: 14px;
  margin-bottom: 33px;
}
.litigationImgBox{
  width: 100%;
  height: 360px;
  position: relative;
}
.litigationLeft{
  position: absolute;
  left: 26%;
  top: 64%;
  font-family: 'Regular';
  color: #333;
  font-size: 18px;
}
.litigationLeftBox{
  width: 230px;
  height: 250px;
  position: absolute;
  left: 32%;
  top: 40%;
  background: transparent;
  z-index: 2;
}
.litigationImg{
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 360px;
  z-index: 1;
}
.litigationImg img{
  height: 100%;
}
.litigationRight{
  width: 180px;
  position: absolute;
  right: 16%;
  top: 64%;
  font-family: 'Regular';
  color: #333;
  font-size: 18px;
}
.litigationRightBox{
  width: 230px;
  height: 250px;
  position: absolute;
  right: 32%;
  top: 40%;
  background: transparent;
  z-index: 2;
}
/*<!-- 资助阶段 -->*/
.funding{
  padding-top: 40px;
  background: url('../../assets/images/lightBg.png');
}
.phase{
  width: 80%;
  height: 300px;
  display: flex;
  margin: 0 auto;
}
.phaseLine{
  width: 80px;
  height: 100px;
  line-height: 100px;
  color: #ccc;
}
.phaseImg ul{
  width: 175px;
  text-align: center;
}
.phaseImg img{
  width: 100px;
  height: 100px;
  margin-left: 37px;
  margin-bottom: 10px;
  cursor: pointer;
}
.phaseTextGray{
  font-family: 'Regular';
  color: #333;
  font-size: 17px;
  margin-bottom: 20px;
}
.phaseTextActive{
  font-family: 'Regular';
  color: #c49a6d;
  font-size: 17px;
  margin-bottom: 20px;
}
.phaseImgBig{
  font-family: 'Regular';
  color: #000;
  font-size: 22px;
  line-height: 1.5;
}
.phaseImgSmall{
  font-family: 'Normal';
  color: #4d4d4d;
  font-size: 16px;
  line-height: 1.5;
}
</style>
