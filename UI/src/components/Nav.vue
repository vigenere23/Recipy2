<template>
<nav class="nav">
	<ul>
		<li v-for="(route, i) in nav" :key="i">
      <router-link
				@click.native="changeCurrent"
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
import bus from '@/EventBus'

export default {
	name: 'Nav',
	props:  {
		nav: Array
	},
	data() {
		return {
			current: 'find'
		}
  },
  methods: {
    changeCurrent(e) {
      this.current = e.currentTarget.children[0].innerHTML
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
