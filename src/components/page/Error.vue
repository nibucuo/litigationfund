<template>
	<h1>{{ msg }}</h1>
</template>
<script type="text/javascript">
	export default{
		name: 'Error',
		data(){
			return {
				msg: "Error:404"
			}
		}
	}
</script>
<style type="text/css">
	h1{
		width: 400px;
		margin: 100px auto;
		text-align: center;
	}
</style>