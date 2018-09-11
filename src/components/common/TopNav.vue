<template>
  <div class="top">
    <!-- 顶部欢迎菜单包括登录按钮，中英文切换 -->
    <div class="topMenu">
      <span class="welcome">您好，欢迎来到绿石诉讼资助！</span>
      <span class="login" @click="showLogin">登录</span>
      <span class="language"><span>English</span>/<span class="active">中文</span></span>
    </div>
    <!-- 顶部导航栏，左图右导航结构 -->
    <div class="topNavBox">
      <div class="topNavLeft">
        <img src="../../assets/images/logo.png"/>
      </div>
      <ul class="topNav">
        <router-link to="/" tag="li" >首页</router-link>
        <router-link to="/Hi" tag="li" >关于我们</router-link>
        <router-link to="/Params/110/liuqiangdong,mocha,shijian" tag="li" >资助</router-link>
        <router-link to="/Hi2" tag="li" >网络</router-link>
        <router-link to="/Params/0927/bujianbusan" tag="li" >案例</router-link>
        <router-link to="/Hi1" tag="li" >联系我们</router-link>
      </ul>
    </div>
    <div v-if="loginFlag" class="loginBg">
      <div class="loginBox">
        <div class="loginText">用户登录</div>
        <div class="loginTel">
          <span>手机号</span><input type="text" name="" placeholder="请输入您的手机号">
        </div>
        <div class="loginPwd">
          <span>密码</span><input type="password" name="" placeholder="请输入您的密码">
        </div>
        <div class="loginBtn">
          登录
        </div>
        <div class="closeLogin" @click="closeLogin">
          <img src="../../assets/images/closeLogin.png">
        </div>
      </div>
    </div>
  </div>
  
</template>

<script>
export default {
  name: 'TopNav',
  data () {
    return {
      loginFlag: false
    }
  },
  methods: {
    showLogin: function(){
      this.loginFlag = true;
      $('body').css('overflow', 'hidden');
    },
    closeLogin: function(){
      this.loginFlag = false;
      $('body').css('overflow', 'auto');
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/*顶部欢迎菜单包括登录按钮，中英文切换*/
.topMenu{
  width: 100%;
  height: 26px;
  background: #f0f0f0;
}
.topMenu span{
  height: 26px;
  display: inline-block;
  line-height: 26px;
}
.welcome{
  margin-left: 5%;
  font-family: 'Bold';
  font-size: 12px;
  color: #333;
}
.login{
  margin-left: 2.5%;
  font-family: 'Normal';
  font-size: 12px;
  color: #c49a6d;
  cursor: pointer;
}
.language{
  margin-left: 63%;
  font-family: 'Normal';
  font-size: 12px;
  color: #333;
}
.language span{
  margin: 0 10px;
  cursor: pointer;
}
.language .active{
  color: #c49a6d;
}

/*顶部导航栏，左图右导航结构*/
.topNavBox{
  width: 100%;
  height: 85px;
}
.topNavLeft{
  width: 20%;
  height: 85px;
  float: left;
  margin-left: 12%;
  margin-right: 8%;
}
.topNavLeft img{
  height: 51px;
  display: block;
  margin-top: 17px; 
}
.topNav{
  width: 48%;
  float: left;
  padding-top: 20px;
  line-height: 65px;
}
.topNav li{
  float: left;
  width: 10%;
  margin: 0 2%;
  font-family: 'Normal';
  font-size: 14px;
  border-bottom: 2px solid transparent;
  text-align: center;
  cursor: pointer;
}
.topNav li.active{
  color: #c49a6d;
  border-bottom: 4px solid #c49a6d;
}
/*登陆框*/
.loginBg{
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  bottom: 0;
  background: transparent;
  z-index: 10;
}
.loginBox{
  width: 315px;
  height: 300px;
  background: rgba(240,240,240,0.9);
  position: absolute;
  left: 50%;
  margin-left: -157.5px;
  top: 50%;
  margin-top: -150px;
  padding: 30px;
  box-sizing: border-box;
  border-radius: 10px;
}
.loginBox div{
  width: 255px;
  height: 32px;
  margin-bottom: 30px;
  line-height: 32px;
  text-align: center;
}
.loginText{
  font-family: 'Regular';
  font-size: 21px;
  color: #333;
}
.loginTel{
  width: 100%;
  height: 32px;
  background: #fff;
  font-family: 'Normal';
  font-size: 15px;
  color: #4d4d4d;
}
.loginTel span{
  display: inline-block;
  width: 19%;
}
.loginPwd{
  width: 100%;
  height: 32px;
  background: #fff;
  font-family: 'Normal';
  font-size: 14px;
  color: #979797;
}
.loginPwd span{
  display: inline-block;
  width: 19%;
}
.loginTel input{
  width: 80%;
  height: 30px;
  line-height: 30px;
  border: none;
  background: #fff;
  font-family: 'Normal';
  font-size: 15px;
  color: #4d4d4d;
}
.loginPwd input{
  width: 80%;
  height: 30px;
  line-height: 30px;
  border: none;
  background: #fff;
  font-family: 'Normal';
  font-size: 14px;
  color: #979797;
}
.loginBtn{
  width: 100%;
  height: 38px;
  line-height: 38px;
  background: #c49a6d;
  border-radius: 5px;
  color: #fff;
  font-family: 'Normal';
  font-size: 14px;
  cursor: pointer;
}
.loginBox div.closeLogin{
  width: 20px;
  height: 20px;
  position: absolute;
  right: 20px;
  top: 20px;
}
.loginBox div.closeLogin img{
  width: 100%;
  cursor: pointer;
}
</style>
