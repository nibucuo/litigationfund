<template>
	<!-- 申请资助 -->
  <div class="applyFunding">
    <img src="../../assets/images/applyFunding.png">
    <div class="applyTitle">我们分担您的诉讼风险</div>
    <router-link tag="div" to="/Contact" class="applyButton">申请资助</router-link>
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
/*申请资助*/
.applyFunding{
  width: 100%;
  position: relative;
}
.applyFunding img{
  width: 100%;
}
.applyTitle{
  position: absolute;
  left: 24%;
  color: #fff;
  font-size: 26px;
  font-family: 'Regular';
  top: 48%;
}
.applyButton{
  position: absolute;
  right: 23%;
  width: 123px;
  height: 50px;
  line-height: 50px;
  border-radius: 10px;
  color: #fff;
  font-size: 18px;
  font-family: 'Regular';
  top: 48%;
  background: #c49a6d;
  text-align: center;
  cursor: pointer;
}
</style>
