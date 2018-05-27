<template>
<nav id="header-nav">
	<ul>
		<li v-for="(link, i) in nav" :key="i">{{ link }}</li>
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
		margin-right: 8px;
		display: flex;

		li {
			display: flex;
			align-items: center;
			height: 100%;
			padding: 0 12px;
			font-family: 'Open Sans';
			font-size: 14px;
			font-weight: 600;
			text-transform: uppercase;
		}
	}
}
</style>
