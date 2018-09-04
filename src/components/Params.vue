<template>
	<div>
		<h2>{{ msg }}</h2>
		<h3>新闻ID：{{ $route.params.newsId }}</h3>
		<h3>新闻title：{{ $route.params.newsTitle }}</h3>
	</div>
</template>
<script type="text/javascript">
	export default{
		name: "params",
		data(){
			return {
				msg: "params page"
			}
		},
		beforeRouteEnter:(to,from,next)=>{
			console.log('route in');
			next();
		},
		beforeRouteLeave:(to,from,next)=>{
			console.log('route out');
			next();
		}
	}
</script>
<style type="text/css">
	
</style>