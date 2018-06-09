<template>
<nav class="nav">
	<ul>
		<li v-for="(link, i) in nav" :key="i">
      <a @click="changeRecipeType">
				<span :class="{current : link == current}">{{ link }}</span>
			</a>
    </li>
	</ul>
</nav>
</template>


<script>
export default {
	name: 'Nav',
	props:  {
    nav: Array
	},
	data() {
		return {
			current: 'all'
		}
	},
	methods: {
		changeRecipeType(e) {
			let type = this.nav.includes(e.target.innerHTML) ? e.target.innerHTML : 'all'
			console.log(this.$route)
			this.$router.replace({ query: {type} })
			this.current = type
		}
	}
}
</script>


<style lang="scss">
.nav {
  font-family: 'Roboto', arial, sans-serif;
  font-weight: 500;

  ul {
		list-style: none;
		text-indent: 0;

		a {
			cursor: pointer;
		}
  }
}
</style>
