<template>
  <div class="hello">
    <!-- <h2>首页</h2> -->
    <!-- 图片轮播部分 -->
    <div class="window" @mouseover="stop" @mouseout="play">
      <transition-group tag="ul" class="container" name="image">
        <li v-for="(image,index) in imgData" :key="index" v-show="index===mark">
          <img :src="image">
        </li>
      </transition-group>
      <div class="left" @click="left" >
        <img src="../assets/images/bannerLeft.png"/> 
      </div>
      <div class="right" @click="right">
        <img src="../assets/images/bannerRight.png"/>               
      </div>
      <ul class="dots">
        <li v-for="(dot, index) in imgData" :key="index" :class="{dotted: index ===  mark}"      @click = "change(index)">
        </li>
      </ul>
    </div>
    <!-- 诉讼资助简介 -->
    <div class="introduction">
      <div class="introTitle">诉讼资助</div>
      <div class="introLine">
        <span></span>
        <span class="two"></span>
        <span class="three"></span>
      </div>
      <div class="introEng">LITIGATION SUPPORT</div>
      <div class="introMessage">如果您有民商事诉讼／仲裁／执行领域重大、疑难案件，因当事人财力有限，或代理人专业／地域／资源局限，难以启动司法救济，请联系我们。我们以诉讼垫资，全国网络覆盖和资深律师／专家／顾问团队及行业资源，为您实现胜诉和回款。</div>
    </div>
    <!-- 客户/律师 -->
    <div class="lawyer">
      <div class="lawyerBox">
        <span class="lawyerLine">—</span>
        <span class="lawyerTop">客户/律师</span>
        <span class="lawyerLine">—</span>
      </div>
      <ul class="lawyerList">
        <li>
          <img src="../assets/images/professionalService.png" >
          <div class="lawyerTitle">专业服务</div>
          <div class="lawyerBox">
            <span class="lawyerLine">—</span>
            <span>资深专业团队</span>
            <span class="lawyerLine">—</span>
          </div>
        </li>
        <li>
          <img src="../assets/images/coveringCountry.png" >
          <div class="lawyerTitle">覆盖全国</div>
          <div class="lawyerBox">
            <span class="lawyerLine">—</span>
            <span>覆盖各省自治区</span>
            <span class="lawyerLine">—</span>
          </div>
        </li>
        <li>
          <img src="../assets/images/resourceSupport.png" >
          <div class="lawyerTitle">资源支持</div>
          <div class="lawyerBox">
            <span class="lawyerLine">—</span>
            <span>各方资源的整合</span>
            <span class="lawyerLine">—</span>
          </div>
        </li>
        <li>
          <img src="../assets/images/litigation.png" >
          <div class="lawyerTitle">诉讼垫资</div>
          <div class="lawyerBox">
            <span class="lawyerLine">—</span>
            <span>雄厚的资本支持</span>
            <span class="lawyerLine">—</span>
          </div>
        </li>
      </ul>
    </div>
    <!-- 支持 -->
    <div class="support">
      <div class="introduction">
        <div class="introTitle">支持</div>
        <div class="introLine">
          <span></span>
          <span class="two"></span>
          <span class="three"></span>
        </div>
        <div class="introEng">SUPPORT</div>
      </div>
      <div class="introListBox">
        <img src="../assets/images/support.png">
        <ul class="introList">
          <li>风险评估</li>
          <li>尽调论证</li>
          <li>诉讼资助</li>
          <li>资源支持</li>
          <li>胜诉回款</li>
        </ul>
      </div> 
    </div>
    <!-- 申请资助 -->
    <ApplyFunding></ApplyFunding>
    <!-- 首页底部 -->
    <Bottom></Bottom>
  </div>
</template>

<script>
import Bottom from '@/components/common/Bottom'
import ApplyFunding from '@/components/common/ApplyFunding'
export default {
  name: 'Index',
  data () {
    return {
      msg: 'i am hello html',
      timer: null,
      mark: 0,
      imgData: [
        'http://t-dist.green-stone.cn/common/font/banner.png',
        'http://t-dist.green-stone.cn/common/font/banner2.png'
      ]
    }
  },
  components:{
    Bottom,
    ApplyFunding
  },
  methods:{
    init:function(){
      // 设置图片轮播容器高度 图片原尺寸：1366*570
      var windowHeight = $(window).width();
      var imgHeight = (570/1366)*windowHeight;
      // console.log(imgHeight);
      $('.window').height(imgHeight);
      // console.log($('.window').height());
      $('.container img').height(imgHeight)
    },
    // 通过底部按钮切换图片
    change:function(index){
      this.mark = index;
    },
    // 图片轮播自动播放
    autoPlay:function(){
      this.mark++;
      // console.log(this.mark);
      if(this.mark == 2){
        this.mark = 0
        return
      }
    },
    // 图片轮播播放
    play: function(){
      this.timer = setInterval(this.autoPlay,3000)
    },
    // 图片轮播停止
    stop: function(event){
      clearInterval(this.timer);
    },
    // 向左滑动
    left:function(){
      clearInterval(this.timer);
      this.mark -=1;
      if(this.mark == -1){
        this.mark = 1
        return
      }
    },
    // 向右滑动
    right:function(){
      clearInterval(this.timer);
      this.mark +=1;
      if(this.mark == 2){
        this.mark = 0
        return
      }
    },
  },
  mounted: function(){
    this.init();
  },
  created: function(){
    this.play();
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.hello{

}
/*图片轮播容器*/
.window{
  width: 100%;
  height: 600px;
  overflow: hidden;
  position: relative;
}
/*图片轮播盒子*/
.container{
  width: 100%;
  height: 100%;
  position: absolute;
}
.container li{
  width: 100%;
  height: 100%;
}
.container img{
  position: absolute;
  left: 0;
  top: 0;
  display: block;
  width: 100%;
}
/*图片轮播动画*/
.image-enter-active{
  transform: opacity(0);
  transition: all 1s ease;
}
.image-leave-active{
  transform: opacity(100%);
  transition: all 0.5s ease;
}
.image-enter{
  transform: opacity(100%);
}
.image-leave{
  transform: opacity(0);
}

/*左右按钮*/
.direction{
  width: 100%;
  height: 100%;
  position: absolute;
}
.left{
  width: 29px;
  height: 29px;
  position: absolute;
  left: 38px;
  top: 50%;
  margin-top: -14px;
  cursor: pointer;
}
.right{
  width: 29px;
  height: 29px;
  position: absolute;
  right: 38px;
  top: 50%;
  margin-top: -14px;
  cursor: pointer;
}
/*图片轮播底部按钮*/
.dots{
  width: 90px;
  height: 4px;
  position: absolute;
  left: 50%;
  bottom: 30px;
  margin-left: -45px;
}
.dots li{
  width: 30px;
  height: 4px;
  background: #fff;
  cursor: pointer;
  margin-right: 15px;
}
.dots li.dotted{
  background: #c49a6d;
}
/*诉讼资助信息介绍*/
.introduction{
  width: 800px;
  height: 192px;
  text-align: center;
  margin: 40px auto 0;
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
.introMessage{
  font-family: 'Normal';
  color: #333;
  font-size: 15px;
}
/*客户/律师*/
.lawyer{
  width: 100%;
  height: 385px;
  background: #f0f0f0;
  padding-top: 34px;
}
.lawyerTop{
  width: 142px;
  height: 33px;
  display: inline-block;
  margin: 0 auto 56px;
  background: #c49a6d;
  text-align: center;
  color: #fff;
  font-size: 18px;
  font-family: 'Medium';
  border-radius: 5px;
  line-height: 33px;
}
.lawyerList{
  width: 800px;
  height: 182px;
  display: flex;
  margin: 0 auto;
}
.lawyerList li{
  width: 25%
}
.lawyerTitle{
  width: 100%;
  text-align: center;
  color: #333;
  font-size: 19px;
  font-family: 'Regular';
  margin-top: 30px;
}
.lawyerBox{
  width: 100%;
  text-align: center;
  color: #333;
  font-size: 15px;
  font-family: 'Regular';
}
.lawyerLine{
  color: #c49a6d;
}
/*<!-- 支持 -->*/
.support .introduction{
  height: 90px;
}
.introListBox{
  width: 100%;
  position: relative;
}
.introListBox img{
  width: 100%;
}
.introList{
  width: 70%;
  height: 100px;
  display: flex;
  position: absolute;
  left: 50%;
  margin-left: -400px;
  bottom: 10%;
}
.introList li{
  width: 20%;
  color: #c49a6d;
  font-size: 20px;
  font-family: 'Medium';
}
/*申请资助*/
.applyFunding{
  width: 100%;
  position: relative;
}
.applyFunding img{
  width: 100%;
}
.applyTitle{
  position: absolute;
  left: 24%;
  color: #fff;
  font-size: 26px;
  font-family: 'Regular';
  top: 130px;
}
.applyButton{
  position: absolute;
  right: 23%;
  width: 123px;
  height: 50px;
  line-height: 50px;
  border-radius: 10px;
  color: #fff;
  font-size: 18px;
  font-family: 'Regular';
  top: 124px;
  background: #c49a6d;
  text-align: center;
}
/*底部版权*/
.bottom{
  padding-top: 34px;
  background: #333;
}
.bottomList{
  width: 70%;
  margin: 0 auto 20px;
  display: flex;
}
.bottomListLogo{
  width: 40%;
  margin-right: 20%;
}

.bottomListLogo div{
  color: #cacaca;
  font-size: 12px;
  font-family: 'Normal';
  transform: scale(0.75);
}
.bottomListLogo img{
  text-align: left;
  margin-left: 0;
  transform: scale(1);
  height: 56px;
}
.bottomListTel{
  width: 20%;
  margin-right: 10%;
  padding-top: 30px;
  color: #cacaca;
  font-size: 12px;
  font-family: 'Regular';
}
.bottomListTel .bottomListContactUs{
  color: #cacaca;
  font-size: 13px;
  font-family: 'Medium';
}
.bottomListQrcode{
  width: 12%;
}
.bottomListQrcode img{
  width: 100%;
}
.bottomLine{
  width: 95%;
  height: 1px;
  background: #cacaca;
  margin: 0 auto;
}
.bottomText{
  width: 100%;
  height: 40px;
  line-height: 40px;
  color: #cacaca;
  font-size: 12px;
  font-family: 'Regular';
  text-align: center;
}
</style>
