<template>
<nav id="header-nav">
	<ul>
		<li v-for="(link, i) in nav" :key="i">
      <router-link :to="'./' + link">{{ link }}</router-link>
    </li>
	</ul>
</nav>
</template>


<script>
export default {
	name: 'HeaderNav',
	props:  {
		nav: Array
	}
}
</script>


<style lang="scss" scoped>
#header-nav {
	height: 100%;

	ul {
		display: block;
		list-style: none;
		text-indent: 0;
		height: 100%;
		display: flex;

		li {
			height: 100%;
      
      a {
        height: 100%;
        width: 100%;
        display: flex;
			  align-items: center;
			  height: 100%;
        padding: 0 16px;
      }
		}
	}
}
</style>
