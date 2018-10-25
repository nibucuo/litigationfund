<template>
  <div class="aboutUs">
    <!-- 顶部登录，中英文切换,顶部导航栏，左图右导航结构 -->
    <TopNavBlack></TopNavBlack>
    <!-- 顶部不占位，做一个占位空白 -->
    <div style="width:100%;height:115px;background:transparent"></div>
    <div id="contact">
      <!-- 联系我们图片 -->
      <div class="aboutImg">
        <img src="../../assets/images/banner2.png">
        <div class="aboutImgBox">
          <div class="aboutChi">联系我们</div>
          <div class="aboutEng">CONTACT US</div>
        </div>
        
      </div>
      <!-- 联系我们 -->
      <div class="contactBox">
        <div class="contactLeft">
          <div class="leftTitle">诉讼资助联系方式</div>
          <div class="leftTitleEng">Contact Information</div>
          <div class="leftMessage">微信公众号：诉讼资助<br/>邮箱：business@green-stone.cn</div>
          <div class="leftQrcode"><img src="../../assets/images/qrcode.png"></div>
        </div>
        <div class="contactRight">
          <div class="rightTitle">请填写您的需求，我们将尽快与您联系</div>
          <div class="rightInput">
            <input type="text" v-model.trim="clientName" name="" placeholder="您的姓名">
          </div>
          <div class="rightInput">
            <input type="text" v-model="clientTel" name="" placeholder="电话">
          </div>
          <div class="rightInput">
            <input type="text" v-model="clientEmail" name="" placeholder="电邮">
          </div>
          <div class="rightInput">
            <input type="text" v-model.trim="clientSubject" name="" placeholder="诉讼标的">
          </div>
          <div class="rightTextarea">
            <textarea cols="5" rows="3" v-model.trim="clientDemand" placeholder="案件情况和具体需求">
              
            </textarea>
          </div>
          <div class="rightButton" @click="submit">提交信息</div>
        </div>
      </div>  
    </div>
    
    <!-- 首页底部 -->
    <Bottom></Bottom>
  </div>
</template>

<script>
import TopNavBlack from '@/components/common/TopNavBlack';
import Bottom from '@/components/common/Bottom';
import store from '@/vuex/store';
import {mapState} from 'vuex';
import axios from 'axios';
export default {
  name: 'ContactUs',
  store,
  data () {
    return {
      clientName: '',
      clientTel: '',
      clientEmail: '',
      clientSubject: '',
      clientDemand: ''
    }
  },
  computed:{
    ...mapState(['uesrname'])
  },
  methods: {
    init: function(){
      console.log(this.username);
    },
    submit: function(event) {
      if(!this.clientName){
        alert('请输入您的姓名！');
        return;
      }else if(!this.clientTel){
        alert('请输入您的电话！');
        return;
      }else if(this.clientTel.length != 11){
        alert('电话号码位数不正确');
        return;
      }else if(!this.clientSubject){
        alert('请输入诉讼标的！');
        return;
      }else if(!this.clientDemand){
        alert('请输入需求描述！');
        return;
      }
      // ”lfdid”:诉讼基金ID   可空   int
      // ”dName”: 姓名      string
      // ”dMobile”: 电话    string
      // ”dMail”: 邮件    string
      // ”dStandard”: 标的   string
      // ”ddesc”: 需求描述    string  
      // ”dReply”: 是否已回复  0 否  1 是    int
      var that = this;
      var url = '';
      var str = window.location.href;
      if(str.indexOf('localhost')>-1){
        url = 'http://www.lvshikaimen.com'
      }else{
        url = window.location.href
      }
      axios.post(url + '/exp/UpdatelfDemand.do', {
        "lfdid": 0,
        "dName": that.clientName,
        "dMobile": that.clientTel,
        "dMail": that.clientEmail,
        "dStandard": that.clientSubject,
        "ddesc": that.clientDemand,
        "dReply": 0
      })
      .then(function (success) {
        // console.log(success);
        alert('提交成功！')
      })
      .catch(function (error) {
        alert('网络连接错误或服务器异常！');
      });

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
/*联系我们*/
.contactBox{
  width: 800px;
  height: 500px;
  margin: 0 auto;
  padding-top: 45px;
}
.contactLeft{
  width: 200px;
  float: left;
  margin-right: 100px;
}
.leftTitle{
  font-family: 'Medium';
  color: #333;
  font-size: 23px;
}
.leftTitleEng{
  font-family: 'Normal';
  color: #c49a6d;
  font-size: 17px;
  margin-bottom: 25px;
}
.leftMessage{
  font-family: 'Normal';
  color: #333;
  font-size: 15px;
  line-height: 2;
  margin-bottom: 25px;
}
.leftQrcode{
  width: 110px;
}
.leftQrcode img{
  width: 110px;
}
.contactRight{
  width: 500px;
  float: left;
}
.rightTitle{
  font-family: 'Medium';
  color: #333;
  font-size: 21px;
}
.rightInput{
  width: 480px;
  height: 29px;
  border: 1px solid #ccc;
  margin: 15px 0;
}
.rightInput input{
  border: none;
  width: 478px;
  height: 27px;
  line-height: 28px;
  font-family: 'Normal';
  color: #979797;
  font-size: 14px;
  text-indent: 10px;
}
.rightTextarea{
  width: 480px;
  height: 170px;
  border: 1px solid #ccc;
  margin: 15px 0;
}
.rightTextarea textarea{
  border: none;
  resize: none;
  width: 476px;
  height: 166px;
  line-height: 22px;
  font-family: 'Normal';
  color: #979797;
  text-indent: 10px;
  font-size: 14px;
}
.rightButton{
  width: 115px;
  height: 35px;
  border: 1px solid #c49a6d;
  text-align: center;
  line-height: 35px;
  font-family: 'Normal';
  color: #c49a6d;
  font-size: 15px;
  background: #fff;
  cursor: pointer;
  border-radius: 5px;
}
</style>
