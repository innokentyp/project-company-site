<template>
  <div class="home">
  	<img src="../assets/logo.png">
  	<HelloWorld msg="Welcome to Your Vue.js App"/>
  	
  	<div>
  		<a href="" class="uk-icon-button uk-margin-small-right" uk-icon="twitter"></a>
			<a href="" class="uk-icon-button  uk-margin-small-right" uk-icon="facebook"></a>
			<a href="" class="uk-icon-button" uk-icon="google-plus"></a>
  	</div>
	</div>
</template>

<script>
	// @ is an alias to /src
	import HelloWorld from '@/components/HelloWorld.vue'

	export default {
	  name: 'home',
	  components: {
	    HelloWorld
	  }
	}
</script>
