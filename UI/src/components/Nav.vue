<template>
<nav class="nav">
	<ul>
		<li v-for="(route, i) in nav" :key="i">
      <router-link
				:to="route.path"
				:class="{current : route.name == current}"
			>
				<span>{{ route.name }}</span>
			</router-link>
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
	computed: {
    current() {
      return this.$route.name
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
