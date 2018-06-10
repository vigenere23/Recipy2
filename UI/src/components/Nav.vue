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
import bus from '@/EventBus'

export default {
	name: 'Nav',
	props:  {
		nav: Array
	},
	data() {
		return {
			current: ''
		}
	},
	mounted() {
		bus.$on('updateCurrentNavCmd', this.handleUpdateCurrentNavCmd) // Should be fired by the pages linked by nav tabs
	},
	beforeDestroyed() {
		bus.$off('updateCurrentNavCmd')
	},
	methods: {
		handleUpdateCurrentNavCmd(current) {
			this.current = current
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
