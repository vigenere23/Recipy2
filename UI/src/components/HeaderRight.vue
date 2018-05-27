<template>
	<div id="header-right">
		<HeaderNav :nav="nav"></HeaderNav>
		<SearchDrawerButton></SearchDrawerButton>
	</div>
</template>


<script>
import HeaderNav from '@/components/headerNav.vue'
import SearchDrawerButton from '@/components/SearchDrawerButton.vue'

export default {
	name: 'HeaderRight',
	components: {
		HeaderNav,
		SearchDrawerButton
	},
	props: {
		nav: Array
	}
}
</script>


<style lang="scss" scoped>
#header-right {
	display: flex;
	align-items: center;
	height: 100%;
}
</style>
