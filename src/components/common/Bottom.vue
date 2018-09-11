<template>
  <!-- 首页底部 -->
  <div class="bottom">
    <ul class="bottomList">
      <li class="bottomListLogo">
        <div><img src="../../assets/images/bottomLogo.png"></div>
        <div>
          <span class="bottomListLogoTitle">平台免责声明：</span><br>
          <span>网站所载的信息可能包含通过各种公开和非公开渠道所获取的内容，本网站不保证第三方内容的真实性、准确性、完整性、实时性、原创性等。基于前述信息而作的任何交易或决定，由您自行承担决策或决定的后果和责任，诉讼有风险，决策需谨慎。</span>
        </div>
      </li>
      <li class="bottomListTel">
        <div>
          <span class="bottomListContactUs">联系我们</span><br>
          <span>电话：18611683380</span><br>
          <span>微信：chenyingjin1125</span>
        </div>
      </li>
      <li class="bottomListQrcode">
        <div><img src="../../assets/images/qrcode.png"></div>
      </li>
    </ul>
    <div class="bottomLine"></div>
    <div class="bottomText">2018 北京绿石赢盛投资公司 版权所有 京ICP备00000000号 -0</div>
  </div>
</template>

<script>
export default {
  name: 'TopNav',
  data () {
    return {

    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
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
