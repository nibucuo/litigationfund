<template>
  <div id="slider">
  	<h2> i am Hi1 html</h2>
    <div class="window">
      <ul class="container">
        <li>
          <img src="../assets/images/banner.png">
        </li>
        <li>
          <img src="../assets/images/logo.png">
        </li>
        <li>
          <img src="../assets/images/banner2.png">
        </li>
      </ul>
      <!-- <ul class="direction">
        <li class="left" @click="move(1, speed)">
          <img src="../../assets/images/bannerLeft.png"/> 
        </li>
        <li class="right" @click="move(-1, speed)">
          <img src="../../assets/images/bannerRight.png"/>               
        </li>
      </ul>
      <ul class="dots">
        <li v-for="(dot, i) in sliders" :key="i" 
        :class="{dotted: i === (currentIndex-1)}"
        @click = "jump(i+1)">
        </li>
      </ul> -->
    </div>
  </div>
</template>
<script>
	export default {
		name: "Hi",
		data () {
			return {
				msg: "Hi iam Hi1 html"
			}
		}
	}
</script>
<style>
	h1, h2 {
  	font-weight: normal;
	}
</style>	