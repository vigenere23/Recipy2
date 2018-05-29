<template>
	<div
		id="drawer-screen"
		:class="{'show-screen': showScreen}"
		@click="emitCloseDrawersCmd"
	>

	</div>
</template>


<script>
import bus from '@/EventBus'

export default {
	name: 'DrawerScreen',
	data() {
		return {
			showScreen: false
		}
	},
	methods: {
		emitCloseDrawersCmd() {
      bus.$emit('closeDrawersCmd') // see events hierarchy
      
      this.showScreen = false
    },
    handleShowDrawerScreenCmd() {
      this.showScreen = true
    }
	},
	mounted() {
    bus.$on('showDrawerScreenCmd', this.handleShowDrawerScreenCmd)
	},
	beforeDestroyed() {
    bus.$off('showDrawerScreenCmd')
	}
}
</script>


<style lang="scss" scoped>
@import '~@/assets/scss/variables';

#drawer-screen {
	position: fixed;
	top: 0;
	bottom: 0;
	right: 0;
	left: 0;
  z-index: 80;
  visibility: hidden;
	background-color: rgba(0, 0, 0, 0);
	transition: background-color 250ms $ease-in-out, visibility 250ms;

	&.show-screen {
		visibility: visible;
		background-color: $text-secondary;
		transition: background-color 200ms $ease-in-out;
	}
}
</style>
