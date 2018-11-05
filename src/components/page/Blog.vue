<template>
  <div class="aboutUs">
    <!-- 顶部登录，中英文切换,顶部导航栏，左图右导航结构 -->
    <TopNavBlack></TopNavBlack>
    <!-- 顶部不占位，做一个占位空白 -->
    <div style="width:100%;height:115px;background:transparent;position:relative;"></div>
   <!-- 绿石研究院 -->
    <div class="aboutImg">
      <img src="../../assets/images/banner4.png">
      <div class="aboutImgBox">
        <div class="aboutChi">绿石研究院</div>
        <div class="aboutEng">GS INSTITUTE</div>
      </div>
    </div>
    <!-- 搜索框，新建按钮，团队介绍 -->
    <div class="searchBox">
      <div class="search">
        <input type="text" name="search" class="searchInput" placeholder="请输入关键词" >
        <span class="searchBtn">搜索</span>
        <router-link tag="span" to="/Blog/BlogEdit" v-if="username" class="searchBtn">新建</router-link>
      </div>
    </div>
    <!-- 专家团队列表 -->
    <ul class="searchList">
      <li class="searchLi">
        <div class="searchLeft">
          <img src="../../assets/images/research.png">
        </div>
        <div class="searchRight">
          <div class="searchRightTop">
            <div class="title">破产重整与清算</div>
            <div class="date">2018年10月18日</div>
          </div>
          <div class="searchIntroduction">
            当事人之间不平等的财务资源存在着巨大的差异，给司法救济带来了障碍和不平衡，并使资金紧张的当事人所能获得的裁判结果发生偏离和扭曲...
          </div>
          <div v-if="username" class="searchEdit">
            <span class="deleteBtn">删除</span>
            <span class="editBtn">编辑</span>
          </div>
        </div>
      </li>
      <li class="searchLi">
        <div class="searchLeft">
          <img src="../../assets/images/research.png">
        </div>
        <div class="searchRight">
          <div class="searchRightTop">
            <div class="title">破产重整与清算</div>
            <div class="date">2018年10月18日</div>
          </div>
          <div class="searchIntroduction">
            当事人之间不平等的财务资源存在着巨大的差异，给司法救济带来了障碍和不平衡，并使资金紧张的当事人所能获得的裁判结果发生偏离和扭曲...
          </div>
          <div v-if="username" class="searchEdit">
            <span class="deleteBtn">删除</span>
            <span class="editBtn">编辑</span>
          </div>
        </div>
      </li>
      <li class="searchLi">
        <div class="searchLeft">
          <img src="../../assets/images/research.png">
        </div>
        <div class="searchRight">
          <div class="searchRightTop">
            <div class="title">破产重整与清算</div>
            <div class="date">2018年10月18日</div>
          </div>
          <div class="searchIntroduction">
            当事人之间不平等的财务资源存在着巨大的差异，给司法救济带来了障碍和不平衡，并使资金紧张的当事人所能获得的裁判结果发生偏离和扭曲...
          </div>
          <div v-if="username" class="searchEdit">
            <span class="deleteBtn">删除</span>
            <span class="editBtn">编辑</span>
          </div>
        </div>
      </li>
    </ul>
    <!-- 首页底部 -->
    <Bottom></Bottom>
  </div>
  

</template>

<script>
import TopNavBlack from '@/components/common/TopNavBlack';
import Bottom from '@/components/common/Bottom';
import store from '@/vuex/store';
import {mapState,mapMutations} from 'vuex';
import axios from 'axios';

export default {
  name: 'Blog',
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
      // console.log(this.username);
    },
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
  width: 120px;
  height: 60px;
  position: absolute;
  left: 50%;
  top: 40%;
  margin-left: -60px;
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
/*文章列表*/
.searchList{
  width: 850px;
  margin: 0 auto;
  position: relative;
}
.searchLi{
  padding: 20px 0;
  border-bottom: 1px solid #ccc;
  display: flex;
}
.searchLeft{
  width: 198px;
  height: 130px;
  margin-right: 20px;
}
.searchLeft img{
  width: 100%;
  height: 100%;
}
.searchRight{
  width: 630px;
  height: 130px;
}
.searchRightTop{
  width: 100%;
  padding-top: 5px;
  box-sizing: border-box;
  margin-bottom: 20px;
}
.title{
  width: 50%;
  display: inline-block;
  font-family: 'Medium';
  color: #c49a6d;
  font-size: 18px;
  text-decoration: underline;
}
.date{
  width: 49%;
  display: inline-block;
  text-align: right;
  font-family: 'Normal';
  color: #333;
  font-size: 15px;
}
.searchIntroduction{
  width: 100%;
  font-family: 'Normal';
  color: #333;
  font-size: 15px;
  line-height: 27px;
  text-indent: 30px;
}
.searchEdit{
  width: 100%;
  height: 20px;
  line-height: 20px;
  box-sizing: border-box;
}
.editBtn{
  float: right;
  width: 60px;
  height: 20px;
  display: inline-block;
  text-align: center;
  line-height: 20px;
  font-family: 'Regular';
  color: #333;
  font-size: 15px;
}
.deleteBtn{
  float: right;
  width: 60px;
  height: 20px;
  display: inline-block;
  text-align: center;
  line-height: 20px;
  font-family: 'Regular';
  color: red;
  font-size: 15px;
}
</style>

