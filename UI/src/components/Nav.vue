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
			let text = e.currentTarget.children[0].innerHTML
			let type = this.nav.includes(text) ? text : 'all'
			this.$router.push({ path: '/recipes/search', query: {type} })
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
