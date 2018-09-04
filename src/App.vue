<template>
  <div id="app">
    <img src="./assets/logo.png"/>
    <router-link to="/">首页</router-link>|
    <router-link to="/Hi">Hi页面</router-link>|
    <router-link to="/Params/110/liuqiangdong,mocha,shijian">liuqiangdong</router-link>|
    <router-link to="/goback">goback</router-link> |
    <router-link to="/Params/0927/bujianbusan">bujianbusan</router-link> |
    <router-link to="/Hi1">go Hi1</router-link> |
    <router-link to="/qiaof">go Hi1 by alias</router-link> |
    <router-link to="/home">go index by alias</router-link> |
    <router-link to="/bbbb">Error</router-link> |
    <transition name="fade" mode="out-in">
      <router-view/>
    </transition>  
    <router-view name="left" class="left"/>
    <router-view name="right" class="right"/>
    <button @click="goback()">goback</button>
    <button @click="go()">go</button>
    <button @click="gohome()">gohome</button>
  </div>
</template>

<script>
export default {
  name: 'App',
  methods: {
    goback(){
      console.log(this);
      console.log(this.$router);
      this.$router.go(-1)
    },
    go(){
      this.$router.go(1)
    },
    gohome(){
      this.$router.push('/')
    }
  }
}
</script>

<style>

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
a{
  text-decoration: none;
  margin: 0 20px;
}
img{
  display: block;
  margin: 0 auto;
}
.left{
  width: 50%;
  float: left;
  background: yellow;
  height: 300px;
}
.right{
  width: 50%;
  float: right;
  background: skyblue;
  height: 300px;
}
.fade-enter{
  opacity: 0;
}
.fade-enter-active{
  transition: opacity 0.2s; 
}
.fade-leave{
  opacity: 1;
}
.fade-leave-active{
  transition: opacity 0.2s;
}
</style>
