<template>
  <div id="app">
    <img src="./assets/logo.png">
    
    <p>
      导航：
      <router-link to="/">首页</router-link>
      <router-link to="/Hi">Hi页面</router-link>
    </p>
  </div>
</template>

<script>
export default {
  name: 'App'
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
</style>
