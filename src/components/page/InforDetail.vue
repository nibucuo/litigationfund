<template>
  <div class="informationDetail">
    <!-- 顶部登录，中英文切换,顶部导航栏，左图右导航结构 -->
    <TopNavBlack></TopNavBlack>
    <!-- 顶部不占位，做一个占位空白 -->
    <div style="width:100%;height:115px;background:transparent"></div>
    <!-- 信息列表图片 -->
    <div class="aboutImg">
      <img src="../../assets/images/banner2.png">
      
      <div class="aboutImgBox">
        <div class="aboutChi">信息详情</div>
      </div>
    </div>
    <!-- 信息列表 -->
    <div class="infoBox">
      <div class="infoTitle">
        <span>联系我们 > 信息列表 > </span><span class="information">{{dStandard}}</span>
      </div>
      <div class="infoList">
        <div class="infoListTitle">
          <div class="infoListName">
            <span>姓名：<span>{{dName}}</span></span><br>
            <span>诉讼标的：<span>{{dStandard}}</span></span>
          </div>
          <div class="infoListTime">{{dts}}</div>
        </div>
        <div class="infoListContent">
          {{ddesc}}
        </div>
        <div class="infoListName">
          <span>电话：<span>{{dMobile}}</span></span><br>
          <span>电邮：<span>{{dMail}}</span></span>
        </div>
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
  name: 'InforDetail',
  data () {
    return {
      dName: '',
      dStandard: '',
      ddesc: '',
      dMobile: '',
      dMail: '',
      dts: ''
    }
  },
  methods: {
    init: function(){
    },
    // ”lfdid”:诉讼基金ID   可空   int
    // ”dName”: 姓名      string
    // ”dMobile”: 电话    string
    // ”dMail”: 邮件    string
    // ”dStandard”: 标的   string
    // ”ddesc”: 需求描述    string  
    // ”dReply”: 是否已回复  0 否  1 是    int
    // 获取某条需求详细信息
    getInforDetail: function(lfdid){
      var that = this;
      var url = '';
      var str = window.location.href;
      console.log(str);
      if(str.indexOf('localhost')>-1){
        url = 'http://www.lvshikaimen.com'
      }else{
        url = location.host
      }
      $.ajax({
          type: 'GET',
          url: url + '/exp/QuerylfDemandDetail.do?lfdid='+lfdid,
          success:function(data){
            console.log(data);
            that.dName = data.dName;
            that.dStandard = data.dStandard;
            that.ddesc = data.ddesc;
            that.dMobile = data.dMobile;
            that.dMail = data.dMail;
            that.dts = new Date(data.ts).Format('yyyy-MM-dd hh:mm');
            that.updateInforDetail(data.lfdid,data.dName,data.dMobile,data.dMail,data.dStandard,data.ddesc)
          },
          error:function(error){
            alert('网络连接错误或服务器异常！');
          }
        });
    },
    // 更新某条需求状态为已读
    updateInforDetail: function(lfdid,dName,dMobile,dMail,dStandard,ddesc){
      var url = '';
      var str = window.location.href;
      console.log(str);
      if(str.indexOf('localhost')>-1){
        url = 'http://www.lvshikaimen.com'
      }else{
        url = location.host
      }
      $.ajax({
        type: 'POST',
        url: url + '/exp/UpdatelfDemand.do',
        data: JSON.stringify({
          "lfdid": lfdid,
          "dName": dName,
          "dMobile": dMobile,
          "dMail": dMail,
          "dStandard": dStandard,
          "ddesc": ddesc,
          "dReply": 1
        }),
        success:function(data){
          console.log(data);
          if(data.c === 1000){
            console.log('更新状态成功！');
          }
        },
        error:function(error){
          alert('网络连接错误或服务器异常！');
        }
      });
    }
  },
  mounted:function(){
    this.init();
    var lfdid = this.$route.query.lfdid;
    if(!lfdid) return;
    this.getInforDetail(lfdid)
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
  margin: 0 auto 20px;
  padding-bottom: 20px;
  border-bottom: 1px solid #ccc;

}
.infoListTitle{
  width: 800px;
  margin-bottom: 15px;
  display: flex;
}
.infoListName{
  font-family: 'Medium';
  color: #333;
  font-size: 16px;
  width: 50%;
  display: inline-block;
  line-height: 25px;
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
  margin-bottom: 20px;
}
</style>
