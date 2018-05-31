<template>
	<div
		id="drawer-screen"
		:class="{'show-screen': showScreen && isSmallScreen}"
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
      showScreen: false,
      isSmallScreen: false
		}
	},
	methods: {
		emitCloseDrawersCmd() {
      bus.$emit('closeDrawersCmd') // see events hierarchy
      
      this.showScreen = false
    },
    handleShowDrawerScreenCmd(showScreen) {
      this.showScreen = showScreen
    },
    handleIsSmallScreenEvent(isSmallScreen) {
      this.isSmallScreen = isSmallScreen
    }
	},
	mounted() {
    bus.$on('showDrawerScreenCmd', this.handleShowDrawerScreenCmd)
    bus.$on('isSmallScreenEvent', this.handleIsSmallScreenEvent)
	},
	beforeDestroyed() {
    bus.$off('showDrawerScreenCmd')
    bus.$off('isSmallScreenEvent')
	}
}
</script>


<style lang="scss">
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
	transition: background-color $nav-closing, visibility $nav-closing-duration;

	&.show-screen {
		visibility: visible;
		background-color: $text-secondary;
		transition: background-color $nav-opening;
	}
}
</style>
