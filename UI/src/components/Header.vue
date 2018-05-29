<template>
  <div id="header" :class="{ float: isScrolledTop }">
    <div id="left-header">
      <MenuDrawerButton v-if="isSmallScreen"></MenuDrawerButton>
      <router-link to="/recipes" class="logo">Recipy</router-link>
    </div>
    <div id="right-header">
      <HeaderNav v-if="!isSmallScreen" :nav="nav"></HeaderNav>
      <SigninButton></SigninButton>
      <SearchDrawerButton></SearchDrawerButton>
    </div>
  </div>
</template>


<script>
import MenuDrawerButton from '@/components/MenuDrawerButton.vue'
import HeaderNav from '@/components/HeaderNav.vue'
import SigninButton from '@/components/SigninButton.vue'
import SearchDrawerButton from '@/components/SearchDrawerButton.vue'

import bus from '@/EventBus'

export default {
  name: 'Header',
  components: {
    MenuDrawerButton,
    HeaderNav,
    SigninButton,
    SearchDrawerButton
  },
  props: {
    nav: Array
  },
	data() {
		return {
      isScrolledTop: false,
      isSmallScreen: false
		}
	},
	methods: {
		handleScrollEvent(e) {
			this.isScrolledTop = e.pageY > 10
    },
    handleIsSmallScreenEvent(isSmallScreen) {
      this.isSmallScreen = isSmallScreen
    }
	},
	mounted () {
    window.addEventListener('scroll', this.handleScrollEvent);
    bus.$on('isSmallScreenEvent', this.handleIsSmallScreenEvent)
  },
  beforeDestroyed () {
    window.removeEventListener('scroll');
    bus.$off('isSmallScreenEvent')
  }
}
</script>


<style lang="scss" scoped>
@import '~@/assets/scss/variables';

#header {
  /*width: 100%;*/
  height: 64px;
  background-color: white;
  position: fixed;
  padding: 0 16px;
  top: 0;
	left: 0;
	right: 0;
	border-bottom: solid 1px $divider-color;
  z-index: 50;
	display: flex;
	flex-direction: left;
	align-items: center;
	justify-content: space-between;
  color: $text-secondary;
	transition: box-shadow 300ms $ease-in-out;

	&.float {
		box-shadow: $shadow-4dp;
		transition: box-shadow 200ms $ease-in-out;
	}

  .logo {
    font-family: 'Bariol', 'Roboto', sans-serif;
    font-size: 28px;
    font-weight: 700;
    color: $primary-color;
    display: flex;
    height: 100%;
    padding: 0 8px;
    align-items: center;
    justify-content: center;
  }

  > * {
    display: flex;
    align-items: center;
    height: 100%;
  }

  > #left-header > *:not(:last-child), > #right-header > *:not(:last-child) {
    margin-right: 8px;
  }
}
</style>
