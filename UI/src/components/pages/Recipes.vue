<template>
  <div id="recipes" :class="{'show-side-nav': searchDrawerOpened}">
    <Header></Header>
		<SideNavScreen></SideNavScreen>
  </div>
</template>


<script>
import bus from '@/EventBus'
import Header from '@/components/Header.vue'
import SideNavScreen from '@/components/DrawerScreen.vue'

export default {
	name: 'Recipes',
	components: {
		Header,
		SideNavScreen
	},
	data() {
		return {
			searchDrawerOpened: false
		}
	},
	methods: {
		handleOpenSearchDrawerEvent(isOpened) {
			this.searchDrawerOpened = isOpened
		}
	},
	mounted() {
		bus.$on('openSearchDrawerEvent', isOpened => this.handleOpenSearchDrawerEvent(isOpened))
	},
	beforeDestroyed() {
		bus.$off('openSearchDrawerEvent')
	}
}
</script>


<style lang="scss" scoped>
@import '~@/assets/scss/variables';

#recipes {
	margin-right: 0;
	transition: margin-right 250ms $ease-in-out;

	&.show-side-nav {
		margin-right: 240px;
		transition: margin-right 200ms $ease-in-out;
	}
}
</style>
