<template>
  <div class="informationList">
    <!-- 顶部登录，中英文切换,顶部导航栏，左图右导航结构 -->
    <TopNavBlack></TopNavBlack>
    <!-- 顶部不占位，做一个占位空白 -->
    <div style="width:100%;height:115px;background:transparent"></div>
    <!-- 信息列表图片 -->
    <div class="aboutImg">
      <img src="../../assets/images/banner2.png">
      <div class="aboutImgBox">
        <div class="aboutChi">信息列表</div>
      </div>
      
    </div>
    <!-- 信息列表 -->
    <div class="infoBox">
      <div class="infoTitle">
        <span>联系我们 > </span><span class="information">信息列表</span>
      </div>
      <ul class="infoList">
        <router-link v-for="item in commandList" :to="{path:'/Contact/InforDetail',query:{lfdid:item.lfdid}}" :key="item.lfdid" tag="li" >
          <div class="infoListTitle">
            <span :class="item.dReply==0?'infoListName':'infoListNameRead'">姓名：<span>{{item.dName}}</span></span><span class="infoListTime">{{item.ts}}</span>
          </div>
          <div class="infoListContent">
            <span class="infoListTel">电话：<span>{{item.dMobile}}</span></span>
            <span>{{item.ddesc}}</span>
          </div>
          <div class="infoListDelete" @click.stop="deleteCommand(item.lfdid)">
            删除
          </div>
        </router-link>
      </ul>
      <ol class="pageList">
        <li @click="gotoPre()"><a href="javascript:;">&lt;</a></li>
        <li v-for="page in showPageBtn" :class="{'pageActive':page==pageIndex+1}">
          <a href="javascript:;" v-if="page" @click="gotoPage(page)">{{page}}</a>
          <a href="javascript:;" v-else>···</a>
        </li>
        <li @click="gotoNext()"><a href="javascript:;">&gt;</a></li>
      </ol>
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
  name: 'InforList',
  store,
  data () {
    return {
      pageIndex: 0,
      count: 5,
      pages: 0,
      commandList: [],
      pageList: []
    }
  },
  computed: {
    ...mapState(['username']),
    // 显示分页按钮
    showPageBtn:function() {
      let pageNum = this.pages; // 总页数
      let index = this.pageIndex+1; // 当前页
      let arr = [];
      if (pageNum <= 6) {
         for (let i = 1; i <= pageNum; i++) {
             arr.push(i)
        }
         return arr
      }
      // 对页码显示进行处理，动态展示
      if (index <= 3){
        return [1, 2, 3, 4, 0, pageNum];
      } 
      if (index >= pageNum - 1){
        return [1, 0, pageNum - 3, pageNum - 2, pageNum - 1, pageNum];
      } 
      if (index === 4){
        return [1, 2, 3, 4, 5, 0, pageNum];
      } 
      if (index === pageNum - 2){
        return [1, 0, pageNum - 4, pageNum - 3, pageNum - 2, pageNum - 1, pageNum];
      } 
      return [1, 0, index - 2,index - 1, index, index + 1, index + 2, 0, pageNum];
    }
  },
  methods: {
    init: function(){
      // console.log(this.username);
    },
    // 获取需求列表
    getInforList: function(page){
      var that = this;
      // 判断是否登录获取到用户名，如果没有，则不显示 
      if(!that.username) return;
      // console.log(page);
      //时间格式化
      Date.prototype.Format = function(fmt)   
      { //author: meizz   
        var o = {   
          "M+" : this.getMonth()+1,                 //月份   
          "d+" : this.getDate(),                    //日   
          "h+" : this.getHours(),                   //小时   
          "m+" : this.getMinutes(),                 //分   
          "s+" : this.getSeconds(),                 //秒   
          "q+" : Math.floor((this.getMonth()+3)/3), //季度   
          "S"  : this.getMilliseconds()             //毫秒   
        };   
        if(/(y+)/.test(fmt))   
          fmt=fmt.replace(RegExp.$1, (this.getFullYear()+"").substr(4 - RegExp.$1.length));   
        for(var k in o)   
          if(new RegExp("("+ k +")").test(fmt))   
        fmt = fmt.replace(RegExp.$1, (RegExp.$1.length==1) ? (o[k]) : (("00"+ o[k]).substr((""+ o[k]).length)));   
        return fmt;   
      }
      // ”lfdid”:诉讼基金ID   可空   int
      // ”dName”: 姓名      string
      // ”dMobile”: 电话    string
      // ”dMail”: 邮件    string
      // ”dStandard”: 标的   string
      // ”ddesc”: 需求描述    string  
      // ”dReply”: 是否已回复  0 否  1 是    int
      var url = '';
      var str = window.location.origin;
      var that = this;
      if(str.indexOf('localhost')>-1){
        url = 'http://t-www.susongzizhu.cn/'
      }else{
        url = location.origin
      }
      // console.log(that);
      axios.get(url+'/exp/QuerylfDemand.do?page='+page+'&count=5')
      .then(function (response) {
        // console.log(response.data);
        that.commandList = response.data.lfdl;
        that.pages = Math.ceil(response.data.num/5);
        // console.log('pages:'+that.pages);
        // 修改时间戳为时间格式
        for (var i = 0; i < that.commandList.length; i++) {
          that.commandList[i].ts = new Date(that.commandList[i].ts).Format('yyyy-MM-dd hh:mm')
        }
      })
      .catch(function (error) {
        alert('网络连接错误或服务器异常！');
      });
    },
    // 删除某条需求
    deleteCommand: function(lfdid){
      // console.log(lfdid);
      var that = this;
      var confirm = window.confirm('确定要删除么？');
      var url = '';
      var str = window.location.origin;
      // console.log(str);
      if(str.indexOf('localhost')>-1){
        url = 'http://t-www.susongzizhu.cn/'
      }else{
        url = location.origin
      }
      if(confirm){
        axios.post(url+'/exp/DellfDemand.do',{
          "lfdid": lfdid
        })
        .then(function(response){
          // console.log(response);
          that.getInforList(that.pageIndex);
        })
        .catch(function(){
          alert('网络连接错误或服务器异常！');
        })
      }
    },
    // 跳转到某一页
    gotoPage: function(page){
      this.pageIndex = page-1;
      this.getInforList(page-1)
    },
    // 跳转到上一页
    gotoPre: function(){
      this.pageIndex -= 1;
      if(this.pageIndex < 0){
        this.pageIndex = 0;
      } 
      this.getInforList(this.pageIndex)
    },
    // 跳转到下一页
    gotoNext: function(){
      // console.log(this.pageIndex);
      // console.log(this.pages);
      this.pageIndex += 1;
      if(this.pageIndex > this.pages-1){
        this.pageIndex = this.pages-1;
      } 
      this.getInforList(this.pageIndex)
    }
  },
  mounted:function(){
    this.init();
    this.getInforList(this.pageIndex);
  },
  components:{
    TopNavBlack,
    Bottom
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/*联系我们图片*/
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
/*信息列表*/
.infoBox{
  width: 985px;
  height: auto;
  margin: 0 auto 10px;
}
.infoTitle{
  width: 985px;
  height: 51px;
  line-height: 51px;
  border-bottom: 1px solid #ccc;
  font-family: 'Normal';
  color: #333;
  font-size: 16px;
  margin-bottom: 30px;
}
.information{
  color: #c49a6d
}
.infoList{
  width: 800px;
  height: auto;
  margin: 0 auto;
}
.infoList li{
  border-bottom: 1px solid #ccc;
  margin-bottom: 20px;
  position: relative;
  padding-bottom: 30px;
  cursor: pointer;
}
.infoListTitle{
  width: 800px;
}
.infoListName{
  font-family: 'Medium';
  color: #c49a6d;
  font-size: 18px;
  width: 50%;
  display: inline-block;
  line-height: 30px;
}
.infoListNameRead{
  font-family: 'Medium';
  color: #333;
  font-size: 18px;
  width: 50%;
  display: inline-block;
  line-height: 30px;
}
.infoListTime{
  font-family: 'Normal';
  color: #808080;
  font-size: 15px;
  display: inline-block;
  width: 50%;
  text-align: right;
  line-height: 30px;
}
.infoListContent{
  font-family: 'Normal';
  color: #333;
  font-size: 15px;
  line-height: 24px;
}
.infoListTel{
  height: 35px;
  display: block;
  line-height: 30px;
}
.infoListDelete{
  position: absolute;
  bottom: 20px;
  right: 0;
  font-family: 'Normal';
  color: #f00;
  font-size: 15px;
  cursor: pointer;
}
.pageList{
  width: 500px;
  height: 40px;
  margin: 20px auto;
  display: flex;
}
.pageList li{
  width: 25px;
  height: 25px;
  line-height: 25px;
  margin: 7px 10px;
  text-align: center;
  cursor: pointer;
  border-radius: 12px;
}
.pageList li a{
  width: 25px;
  height: 25px;
  line-height: 25px;
  display: block;
  font-family: 'Regular';
  color: #4d4d4d;
  font-size: 14px;
}
.pageList li.pageActive{
  border-radius: 12px;
  background: #c49a6d;
}
.pageList li.pageActive a{
  font-family: 'Normal';
  color: #fff;
  font-size: 14px;
}
</style>
