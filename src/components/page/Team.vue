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
    <!-- 搜索框，新建按钮，团队介绍 -->
    <div class="searchBox">
      <div class="search">
        <input type="text" name="search" class="searchInput" placeholder="请输入关键词" >
        <span class="searchBtn">搜索</span>
        <router-link tag="span" to="/Team/TeamEdit" v-if="username" class="searchBtn">新建</router-link>
      </div>
      <div class="teamIntroduction">
        绿石诉讼资助通过专业能力和执行力，在争议解决中提供相关资源和费用方面的帮助，来释放合法诉权的潜在价值。已有越来越多的财富500强公司、企业和个人从该模式中受益，日益成为民商事诉讼、仲裁、执行业务的主流趋势。<br/>
      </div>
      <div class="teamIntroduction">
        争议解决所涉及的专业门槛高、诉讼周期长，许多应收款长期挂账，严重影响现金流周转，甚至最终丧失诉讼时效而不得不予以核销。当事人对律师行业和司法体系的生疏也导致具有合理诉权的主张被推迟或被迫放弃追索。
      </div>
      <div class="teamIntroduction">
        当事人之间不平等的财务资源存在着巨大的差异，给司法救济带来了障碍和不平衡，并使资金紧张的当事人所能获得的裁判结果发生偏离和扭曲。诉讼资助应运而生，在为客户切实创造价值的基础上实现共赢。
      </div>
    </div>
    <!-- 专家团队列表 -->
    <div class="lawyerBox">
      <h4 class="lawyerTitle">专家团队</h4>
      <ul class="lawyerList">
        <li class="lawyer">
          <div class="lawyerBottom1"></div>
          <div class="lawyerBottom2"></div>
          <div class="lawyerContent">
            <div class="lawyerLeft">
              <img src="../../assets/images/team.png">
              <div class="lawyerNameBox">诉讼顾问：<span class="lawyerName">戴永明</span> </div>
            </div>
            <div class="lawyerRight">
              <div class="lawyerIntroduction">
                当事人之间不平等的财务资源存在着巨大的差异，给司法救济带来了障碍和不平衡，并使资金紧张的当事人所能获得的裁判结果发生偏离和扭曲。诉讼资助应运而生，在为客户切实创造价值的基础上实现共赢。
              </div>
              <div v-if="username" class="lawyerEdit">
                <span class="deleteBtn">删除</span>
                <span class="editBtn">编辑</span>
              </div>
            </div>
          </div>
        </li>
        <li class="lawyer">
          <div class="lawyerBottom1"></div>
          <div class="lawyerBottom2"></div>
          <div class="lawyerContent">
            <div class="lawyerLeft">
              <img src="../../assets/images/team.png">
              <div class="lawyerNameBox">诉讼顾问：<span class="lawyerName">戴永明</span> </div>
            </div>
            <div class="lawyerRight">
              <div class="lawyerIntroduction">
                当事人之间不平等的财务资源存在着巨大的差异，给司法救济带来了障碍和不平衡，并使资金紧张的当事人所能获得的裁判结果发生偏离和扭曲。诉讼资助应运而生，在为客户切实创造价值的基础上实现共赢。
              </div>
              <div v-if="username" class="lawyerEdit">
                <span class="deleteBtn">删除</span>
                <span class="editBtn">编辑</span>
              </div>
            </div>
          </div>
        </li>
        <li class="lawyer">
          <div class="lawyerBottom1"></div>
          <div class="lawyerBottom2"></div>
          <div class="lawyerContent">
            <div class="lawyerLeft">
              <img src="../../assets/images/team.png">
              <div class="lawyerNameBox">诉讼顾问：<span class="lawyerName">戴永明</span> </div>
            </div>
            <div class="lawyerRight">
              <div class="lawyerIntroduction">
                当事人之间不平等的财务资源存在着巨大的差异，给司法救济带来了障碍和不平衡，并使资金紧张的当事人所能获得的裁判结果发生偏离和扭曲。诉讼资助应运而生，在为客户切实创造价值的基础上实现共赢。
              </div>
              <div v-if="username" class="lawyerEdit">
                <span class="deleteBtn">删除</span>
                <span class="editBtn">编辑</span>
              </div>
            </div>
          </div>
        </li>
      </ul>
    </div>
    <!-- 首页底部 -->
    <Bottom></Bottom>
  </div>
  

</template>

<script>
import TopNavBlack from '@/components/common/TopNavBlack'
import Bottom from '@/components/common/Bottom'
import store from '@/vuex/store';
import {mapState,mapMutations} from 'vuex';
import axios from 'axios';

export default {
  name: 'Team',
  store,
  data () {
    return {
    }
  },
  computed:{
    ...mapState(['username'])
  },
  methods: {
    init: function(){
      console.log(this.username);
    }
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
/*搜索框，新建按钮，团队介绍*/
.searchBox{
  width: 850px;
  margin: 0 auto;
  padding-top: 20px;
  position: relative;
}
.search{
  width: 100%;
  height: 35px;
  margin-bottom: 20px;
}
.searchInput{
  width: 470px;
  height: 35px;
  line-height: 33px;
  padding-left: 10px;
  outline: none;
  box-sizing: border-box;
  font-family: 'Normal';
  color: #b1b1b1;
  font-size: 14px;
  border: 1px solid #ccc;
}
.searchBtn{
  width: 83px;
  height: 33px;
  text-align: center;
  display: inline-block;
  border: 1px solid #c49a6d;
  line-height: 33px;
  font-family: 'Normal';
  color: #c49a6d;
  font-size: 14px;
  margin-left: 75px;
  cursor: pointer;
}
.teamIntroduction{
  width: 100%;
  font-family: 'Normal';
  color: #333;
  font-size: 15px;
  line-height: 27px;
  text-indent: 30px;
}
/*团队列表*/
.lawyerBox{
  width: 100%;
  padding-top: 30px;
}
.lawyerTitle{
  width: 850px;
  height: 30px;
  font-weight: normal;
  font-family: 'Medium';
  color: #c49a6d;
  font-size: 24px;
  margin: 0 auto 30px;
}
.lawyerList{
  width: 100%;
}
.lawyer{
  width: 100%;
  height: 250px;
  position: relative;
  margin-bottom: 40px;
}
.lawyer:last-child{
  margin-bottom: 0;
}
.lawyerBottom1{
  width: 100%;
  height: 115px;
  background: #fff;
}
.lawyerBottom2{
  width: 100%;
  height: 135px;
  background: #f5f5f5;
}
.lawyerContent{
  width: 850px;
  height: 250px;
  position: absolute;
  left: 50%;
  top: 0;
  margin-left: -425px;
  display: flex;
}
.lawyerLeft{
  width: 250px;
  height: 250px;
  position: relative;
}
.lawyerLeft img{
  width: 100%;
  height: 100%;
}
.lawyerNameBox{
  width: 100%;
  height: 40px;
  position: absolute;
  left: 0;
  bottom: 0;
  background: rgba(0,0,0,0.3);
  line-height: 40px;
  padding: 0 50px;
  box-sizing: border-box;
  font-family: 'Regular';
  color: #fff;
  font-size: 18px;
}
.lawyerRight{
  width: 595px;
  height: 250px;
  background: #c49a6d;
  padding: 40px;
  box-sizing: border-box;
  
  position: relative;
}
.lawyerIntroduction{
  font-family: 'Normal';
  color: #fff;
  font-size: 15px;
  line-height: 27px;
  text-indent: 30px;
}
.lawyerEdit{
  width: 100%;
  height: 40px;
  position: absolute;
  left: 0;
  bottom: 0;
  background: rgba(0,0,0,0.3);
  line-height: 40px;
  padding-right: 30px;
  box-sizing: border-box;
}
.editBtn{
  float: right;
  width: 60px;
  height: 40px;
  display: inline-block;
  text-align: center;
  line-height: 40px;
  font-family: 'Regular';
  color: #fff;
  font-size: 15px;
}
.deleteBtn{
  float: right;
  width: 60px;
  height: 40px;
  display: inline-block;
  text-align: center;
  line-height: 40px;
  font-family: 'Regular';
  color: red;
  font-size: 15px;
}
</style>
