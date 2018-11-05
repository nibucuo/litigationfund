<template>
  <div class="aboutUs">
    <!-- 顶部登录，中英文切换,顶部导航栏，左图右导航结构 -->
    <TopNavBlack></TopNavBlack>
    <!-- 顶部不占位，做一个占位空白 -->
    <div style="width:100%;height:115px;background:transparent;position:relative;"></div>
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
            <img v-if="imgUrl" v-bind:src="imgUrl">
            <img v-else src="../../assets/images/team.png">
          </div>
          <div class="imgRight">
            <div class="chooseImg">选择图片<input type="file" accept="image/jpeg,image/jpg,image/png,image/gif" @change="resetImg($event)"></div>
            <div class="uploadImg">上传</div>
          </div>
          
        </div>
      </div>
      <div class="imgTitle">编辑内容</div>
      <div class="contentTitle">
        <input type="text" name="" placeholder="请输入标题">
      </div>
      <div class="annexBox">
      <div class="annexTitle">上传附件<input type="file" accept=".pdf" @change="resetAnnex($event)"> </div>
        <div class="annexFile" v-if="fileName">
          <span class="annexFileImg"><img src="../../assets/images/annex.png"></span>
          <span class="annexFileName" >{{fileName}}<span class="annexFileSize">({{fileSize}})</span></span>
          <span class="annexFileDelete" @click="clearAnnex">删除</span>
        </div>
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
      imgUrl: '',
      fileName: '',
      fileSize: ''
    }
  },
  methods: {
    init: function(){
      // console.log(this.fileName);
    },
    // 获取上传文件名和大小
    resetAnnex: function(e){
      // console.log(e);
      this.fileName = e.target.files[0].name;
      this.fileSize = (e.target.files[0].size/1000/1000).toFixed(1)+'M';
    },
    // 清空上传文件
    clearAnnex: function(){
      this.fileName = '';
    },
    // 获取上传图片路径
    resetImg: function(e){
      // console.log(e.target.files);
      // console.log(e.target.value);
      this.imgUrl = this.getObjectURL(e.target.files[0]);
    },
    // 获取文件绝对路径
    getObjectURL:function (file) {  
       var url = null;  
       if (window.createObjcectURL != undefined) {  
           url = window.createOjcectURL(file);  
       } else if (window.URL != undefined) {  
           url = window.URL.createObjectURL(file);  
       } else if (window.webkitURL != undefined) {  
           url = window.webkitURL.createObjectURL(file);  
       }  
       return url;  
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
/*上传图片，编辑内容，发布*/
.contentBox{
  width: 856px;
  height: auto;
  margin: 0 auto 20px;
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
  overflow: hidden;
}
.imgLeft img{
  width: 100%;
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
  position: relative;
  z-index: 0;
}
.chooseImg input{
  opacity: 0;
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  z-index: 1;
  cursor: pointer;
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
  margin-bottom: 10px;
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
.annexBox{
  width: 100%;
  padding: 0 0 10px;
}
.annexTitle{
  background: url('../../assets/images/annex.png') left center no-repeat;
  height: 30px;
  line-height: 30px;
  text-decoration: underline;
  padding-left: 20px;
  box-sizing: border-box;
  font-family: 'Normal';
  color: #333;
  font-size: 15px;
  position: relative;
  z-index: 0;
}
.annexTitle input{
  opacity: 0;
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  z-index: 1;
}
.annexFile{
  width: 100%;
  height: 30px;
  line-height: 30px;
  font-family: 'Normal';
  color: #333;
  font-size: 15px;
  background: #e4e4e4;
  display: flex;
}
.annexFileImg{
  width: 40px;
  height: 30px;
  display: block;
  padding: 5px 10px;
  box-sizing: border-box;
}
.annexFileName{
  width: auto;
  height: 30px;
  line-height: 30px;
  display: block;
  margin-right: 45px;
  font-family: 'Normal';
  color: #333;
  font-size: 13px;
}
.annexFileSize{
  width: auto;
  height: 30px;
  line-height: 30px;
  display: inline-block;
  font-family: 'Normal';
  color: #808080;
  font-size: 13px;
}
.annexFileDelete{
  height: 30px;
  line-height: 30px;
  display: block;
  font-family: 'Normal';
  color: #333;
  font-size: 13px;
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
