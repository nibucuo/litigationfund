import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

var crypto = require('@/assets/js/hmac-md5');
const state = {
	loginFlag: false,
  userTel: '',
  userPwd: '',
  username: '',
  ownUri: ''
}
const mutations = {
	// 显示登录框，禁止页面滚动
  showLogin: function(){
    state.loginFlag = true;
    $('body').css('overflow', 'hidden');
  },
  // 隐藏登录框，取消禁止页面滚动
  closeLogin: function(){
    state.loginFlag = false;
    $('body').css('overflow', 'auto');
  },
  // 更新用户手机号
  updateUserTel (state, userTel) {
    state.userTel = userTel
  },
  // 更新用户密码
  updateUserPwd (state, userPwd) {
    state.userPwd = userPwd
  },
	// 用户登录
  login: function(){
    // console.log(state.userTel);
    // console.log(state.userPwd);
    var userTel = state.userTel;
    var userPwd = state.userPwd;
    var at = 1;
    if(!userTel){
      alert('请输入手机号码！');
      return;
    }else if(userTel.length != 11){
      alert('电话号码位数不正确');
      return;
    }else if(!userPwd){
      alert('请输入密码！');
      return;
    }

    var server = 'http://dist.green-stone.cn/';
    var tempHost = server.split('//')[1];
    var host = tempHost.replace('/','');
    var uri = userTel.toLowerCase();
    var ts = Date.parse(new Date());
    var nonce = 'BPDDYoz7'
    
    var mac = userTel+ts+nonce+'GET'+host+'/exp/Login.do?at='+at;
    // console.log(mac);
    var pwd = crypto.crypto.SHA1(userPwd).toString(crypto.crypto.enc.Hex).toUpperCase();
    // console.log(pwd);
    var result = crypto.crypto.HmacSHA1(mac,pwd).toString(crypto.crypto.enc.Base64);
    // console.log(result);
    $.ajax({
      type:'GET',
      url:server+'exp/Login.do?at='+at,
      beforeSend:function(req){
        var auth = "MAC id=\""+userTel+"\",ts=\""+ts+"\",nonce=\""+nonce+"\",mac=\""+result+"\"";
        req.setRequestHeader('Authorization',auth);
      },
      success:function(data){
        // console.log(data);
        if(data.c == 1000){
          alert('登录成功');
          state.loginFlag = false;
          $('body').css('overflow', 'auto');
          state.username = data.u.n;
          state.ownUri = data.u.ja;
        }else if(data.c == 1005){
          alert('用户名或密码错误！');
        }else if(data.c == 1002){
          alert('密码输入错误次数过多，账号被锁定，请稍后重试！');
        }
      },
      error:function(error){
        alert('网络连接错误或服务器异常！');
      }
    });
  }
} 
export default new Vuex.Store({
	state,
	mutations
})
