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
    <!-- 上传图片，编辑内容，发布 -->
    <div class="contentBox">
      <div class="imgBox">
        <div class="imgTitle">封面图片上传</div>
        <div class="imgUpload">
          <div class="imgLeft">
            <img src="../../assets/images/team.png">
          </div>
          <div class="imgRight">
            <div class="chooseImg">选择图片</div>
            <div class="uploadImg">上传</div>
          </div>
          
        </div>
      </div>
      <div class="imgTitle">编辑内容</div>
      <div class="contentTitle">
        <input type="text" name="" placeholder="请输入标题">
      </div>
      <div class="content">
        <textarea placeholder="请输入内容"></textarea>
      </div>
      <div class="submit">发布</div>
    </div>
    <!-- 首页底部 -->
    <Bottom></Bottom>
  </div>
  

</template>

<script>
import TopNavBlack from '@/components/common/TopNavBlack'
import Bottom from '@/components/common/Bottom'
export default {
  name: 'BlogEdit',
  data () {
    return {
    }
  },
  methods: {
    init: function(){
    },
  },
  mounted:function(){
    // this.init();
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
/*上传图片，编辑内容，发布*/
.contentBox{
  width: 856px;
  height: auto;
  margin: 0 auto 20px;
  position: relative;
}
.imgBox{
  width: 856px;
  height: 305px;
}
.imgTitle{
  width: 100%;
  height: 40px;
  line-height: 40px;
  font-family: 'Medium';
  color: #4d4d4d;
  font-size: 18px;
  margin:25px 0 15px;
}
.imgUpload{
  width: 100%;
  display: flex;
  height: 250px;
}
.imgLeft{
  width: 342px;
  height: 255px;
  margin-right: 30px;
}
.imgLeft img{
  width: 100%;
  height: 100%;
  display: block;
}
.imgRight{
  flex: 1;
  padding-top: 180px;
  box-sizing: border-box;
}
.chooseImg{
  width: 97px;
  height: 30px;
  border: 1px solid #4d4d4d;
  line-height: 30px;
  text-align: center;
  font-family: 'Normal';
  color: #4d4d4d;
  font-size: 15px;
  border-radius: 3px;
  cursor: pointer;
  margin-bottom: 15px;
  box-sizing: border-box;
}
.uploadImg{
  width: 97px;
  height: 30px;
  border: 1px solid #c49a6d;
  line-height: 30px;
  text-align: center;
  font-family: 'Normal';
  color: #c49a6d;
  font-size: 15px;
  border-radius: 3px;
  cursor: pointer;
  box-sizing: border-box;
}
.contentTitle{
  width: 856px;
  height: 30px;
  border: 1px solid #ccc;
  box-sizing: border-box;
  margin-bottom: 20px;
}
.contentTitle input{
  border: none;
  outline: none;
  text-indent: 15px;
  font-family: 'Normal';
  color: #4d4d4d;
  font-size: 14px;
  height: 26px;
  line-height: 26px;
}
.content{
  width: 856px;
  height: 533px;
  border: 1px solid #ccc;
  box-sizing: border-box;
  margin-bottom: 20px;
}
.content textarea{
  width: 100%;
  height: 100%;
  border: none;
  resize: none;
  outline: none;
  text-indent: 15px;
  font-family: 'Normal';
  color: #4d4d4d;
  font-size: 14px;
  line-height: 26px;
  box-sizing: border-box;
}
.submit{
  width: 106px;
  height: 30px;
  border: 1px solid #c49a6d;
  line-height: 30px;
  text-align: center;
  font-family: 'Normal';
  color: #c49a6d;
  font-size: 15px;
  border-radius: 3px;
  cursor: pointer;
  margin-bottom: 50px;
}


</style>
