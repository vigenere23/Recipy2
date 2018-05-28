<template>
	<div id="header-right">
		<HeaderNav :nav="nav"></HeaderNav>
    <LoginButton></LoginButton>
		<SearchDrawerButton></SearchDrawerButton>
	</div>
</template>


<script>
import HeaderNav from '@/components/HeaderNav.vue'
import LoginButton from '@/components/LoginButton.vue'
import SearchDrawerButton from '@/components/SearchDrawerButton.vue'

export default {
	name: 'HeaderRight',
	components: {
    HeaderNav,
    LoginButton,
		SearchDrawerButton
	},
	props: {
		nav: Array
	}
}
</script>


<style lang="scss" scoped>
@import '~@/assets/scss/variables.scss';

#header-right {
	display: flex;
	align-items: center;
  height: 100%;
  text-transform: uppercase;
  font-family: 'Open Sans', arial, sans-serif;
  font-weight: 600;
  color: $text-secondary;

  > * {
    margin-left: 16px;
  }

  > :first-child {
    margin-left: 0;
  }
}
</style>
