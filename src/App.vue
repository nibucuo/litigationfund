<template>
  <div id="app">
    <TopNav></TopNav>
    <router-view/>
  </div>
</template>

<script>
import $ from 'jquery'
import TopNav from '@/components/common/TopNav'
export default {
  name: 'App',
  components:{
    TopNav
  }
}
// console.log($);
</script>

<style>
html,body,#app{
  margin: 0;
  padding: 0;
}
ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
}
li {
  display: inline-block;
}
a {
  color: #42b983;
}
input{
  outline: none;
}
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.top{
  width: 100%;
  font-family: 'Bold';
}
a{
  text-decoration: none;
  margin: 0 20px;
}
img{
  display: block;
  margin: 0 auto;
}
</style>
