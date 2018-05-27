<template>
	<div
		id="side-nav-screen"
		:class="{'show-side-nav': searchDrawerOpened}"
		@click="emitOpenSearchDrawerEvent(!searchDrawerOpened), emitOpenMenuDrawerEvent(!menuDrawerOpened)"
	>

	</div>
</template>


<script>
import bus from '@/EventBus'

export default {
	name: 'DrawerScreen',
	data() {
		return {
			searchDrawerOpened: false,
			menuDrawerOpened: false
		}
	},
	methods: {
		emitOpenSearchDrawerEvent(isOpened) {
			bus.$emit('openSearchDrawerEvent', isOpened)
		},
		handleOpenSearchDrawerEvent(isOpened) {
			this.searchDrawerOpened = isOpened
		},
		emitOpenMenuDrawerEvent(isOpened) {
			bus.$emit('openMenuDrawerEvent', isOpened)
		},
		handleOpenMenuDrawerEvent(isOpened) {
			this.menuDrawerOpened = isOpened
		}
	},
	mounted() {
		bus.$on('openSearchDrawerEvent', isOpened => this.handleOpenSearchDrawerEvent(isOpened))
		bus.$on('openMenuDrawerEvent', isOpened => this.handleOpenMenuDrawerEvent(isOpened))
	},
	beforeDestroyed() {
		bus.$off('openSearchDrawerEvent')
		bus.$off('openMenuDrawerEvent')
	}
}
</script>


<style lang="scss" scoped>
@import '~@/assets/scss/variables';

#side-nav-screen {
	position: fixed;
	top: 0;
	bottom: 0;
	right: 0;
	left: 0;
	z-index: 80;
	background-color: rgba(0, 0, 0, 0.54);
	opacity: 0;
	visibility: hidden;
	transition: opactiy 250ms $ease-in-out, visibility 0 linear 250ms;

	&.show-side-nav {
		visibility: visible;
		opacity: 1;
		transition: opactiy 200ms $ease-in-out;
	}
}
</style>
