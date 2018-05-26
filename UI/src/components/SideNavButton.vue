<template>
  <a id="side-nav-button" @click="$emit('toggleSideNav'), toggleSideNav()">
    <i class="material-icons">
			{{ sideNavOpened ? 'keyboard_arrow_right' : icon }}
		</i>
  </a>
</template>


<script>
export default {
  name: 'SideNavButton',
  props: {
		icon: String
	},
	data() {
		return {
			sideNavOpened: false
		}
	},
  methods: {
    toggleSideNav() {
      this.sideNavOpened = !this.sideNavOpened
    }
  }
}
</script>


<style lang="scss" scoped>
#side-nav-button {
	padding: 8px;
	cursor: pointer;
	margin-right: 8px;

	.material-icons {
		display: block;
	}
}
</style>
