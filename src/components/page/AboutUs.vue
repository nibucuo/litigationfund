<template>
  <div class="aboutUs">
    <!-- 顶部登录，中英文切换,顶部导航栏，左图右导航结构 -->
    <TopNavBlack></TopNavBlack>
    <!-- 顶部不占位，做一个占位空白 -->
    <div style="width:100%;height:115px;background:transparent"></div>
    <!-- 关于我们正文 -->
    <div class="aboutImg">
      <img src="../../assets/images/banner2.png">
      <div class="aboutImgBox">
        <div class="aboutChi">关于我们</div>
        <div class="aboutEng">ABOUT US</div>
      </div>
      
    </div>
    <div class="litigation">
      <img class="litigationImg" src="../../assets/images/logoWe.png">
      <div class="paragraph1">
        绿石诉讼资助通过专业能力和执行力，在争议解决中提供相关资源和费用方面的帮助，来释放诉权的潜在价值。已有越来越多的财富500强公司、企业和个人从该模式中受益，日益成为民商事诉讼、仲裁、执行领域的主流趋势。
      </div>
      <div class="paragraph1">
        争议解决所涉及的专业门槛高、诉讼周期长，应收款长期挂账，甚至最终超过诉讼时效而不得不予以核销，严重影响现金流周转。当事人对律师行业和司法体系的生疏也导致具有诉权的主张被推迟或被迫放弃追索。
      </div>
      <div class="paragraph1">
        当事人之间不同的财务资源存在着巨大差异，给其自身的司法救济带来了障碍和不平衡，并使资金紧张的当事人所能获得的裁判结果发生偏离。诉讼资助应运而生，在为客户切实创造价值的基础上实现共赢。
      </div>
      <div class="paragraph2">顶级团队</div>
      <div class="paragraph3">绿石与一流的专家型律师、顾问合作，在客户与顶尖团队间搭建桥梁：</div>
      <div class="paragraph4">
        <ul>
          <li><i>-  </i><span>资深诉讼律师</span></li>
          <li><i>-  </i><span>律所专业部门负责人</span></li>
          <li><i>-  </i><span>公司法务总监</span></li>
          <li><i>-  </i><span>离职司法工作人员</span></li>
          <li><i>-  </i><span>国际仲裁专家律师</span></li>
          <li><i>-  </i><span>破产重整/清算专业团队</span></li>
        </ul>
        <ul>
          <li><i>-  </i><span>法学专家、知名高校教授</span></li>
          <li><i>-  </i><span>投行、金融资深人士</span></li>
          <li><i>-  </i><span>财会/税务专业团队</span></li>
          <li><i>-  </i><span>领先的知识产权、海事海商、建筑工程、矿业能源、文化传媒、环境保护、 医疗健康、反垄断、侵权赔偿等各专业领域的学科带头律师和顾问</span></li>
        </ul>
      </div>
      <div class="paragraph5">诉讼垫资项目包括但不局限于：</div>
      <div class="paragraph4">
        <ul>
          <li><i>-  </i><span>律师费</span></li>
          <li><i>-  </i><span>诉讼费、仲裁申请费、保全费</span></li>
          <li><i>-  </i><span>司法鉴定费、专家证人费</span></li>
          <li><i>-  </i><span>公证费</span></li>
          <li><i>-  </i><span>审计费、评估费、拍卖费等</span></li>
        </ul>
      </div>
      <div class="paragraph6">
        <div class="more">更多资料请下载宣传册查看</div>
        <a href="http://dist.green-stone.cn/common/font/绿石诉讼资助宣传册.pdf" download="text" class="download">绿石诉讼资助宣传册</a>
      </div>
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
      loginFlag: false
    }
  },
  methods: {
    init: function(){
      // console.log(this.$route.params);
      // console.log(this.$route.query);
      var ownUri = this.$route.params.ownUri;
      // console.log(ownUri);
    }
  },
  mounted:function(){
    this.init();
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
  width: 100px;
  height: 30px;
  text-align: center;
  font-family: 'Medium';
  color: #fff;
  font-size: 22px;
  border-bottom: 1px solid #c49a6d;
}
.aboutEng{
  width: 100px;
  height: 22px;
  text-align: center;
  font-family: 'Regular';
  color: #fff;
  font-size: 16px;
}
/*段落简介*/
.litigationImg{
  height: 70px;
  display: block;
  margin: 30px auto;
}
.paragraph1{
  width: 63%;
  margin: 0 auto;
  font-family: 'Normal';
  color: #333;
  font-size: 15px;
  text-indent: 30px;
  line-height: 1.8;
}
.paragraph2{
  width: 63%;
  margin: 40px auto 25px;
  font-family: 'Medium';
  color: #c49a6d;
  font-size: 24px;
}
.paragraph3{
  width: 63%;
  margin: 0 auto 20px;
  font-family: 'Regular';
  color: #c49a6d;
  font-size: 15px;
}
.paragraph4{
  width: 63%;
  display: flex;
  margin: 0 auto;
}
.paragraph4 ul{
  width: 45%;
  font-family: 'Normal';
  color: #333;
  font-size: 15px;
  line-height: 2;
}
.paragraph4 ul li i{
  width: 5%;
  display: inline-block;
  float: left;
  font-style: normal;
}
.paragraph4 ul li span{
  width: 95%;
  display: inline-block;
  float: left;
}
.paragraph5{
  width: 63%;
  margin: 35px auto 20px;
  font-family: 'Medium';
  color: #c49a6d;
  font-size: 20px;
}
.paragraph6{
  width: 63%;
  margin: 20px auto;
  border-top: 1px solid #ccc;
  padding-top: 30px;
}
.more{
  width: 100%;
  font-family: 'Regular';
  color: #c49a6d;
  font-size: 16px;
  text-align: center;
}
.download{
  display: block;
  width: 186px;
  height: 26px;
  text-align: center;
  line-height: 26px;
  border-radius: 13px;
  font-family: 'Regular';
  color: #fff;
  font-size: 12px;
  background: #c49a6d;
  margin: 10px auto 50px;
  cursor: pointer;
}
</style>
