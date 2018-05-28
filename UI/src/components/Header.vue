<template>
  <div id="header" :class="{ float: isScrolledTop }">
    <router-link to="/recipes" class="logo">Recipy</router-link>
		<HeaderRight :nav="nav"></HeaderRight>
  </div>
</template>


<script>
import HeaderRight from '@/components/HeaderRight.vue'

export default {
  name: 'Header',
  components: {
		HeaderRight
  },
	data() {
		return {
			isScrolledTop: false,
			sideNavOpened: false,
			nav: [
        'all',
				'breakfeast',
				'lunch',
				'dinner',
				'dessert'
			]
		}
	},
	methods: {
		handleScroll(e) {
			this.isScrolledTop = e.pageY > 10 ? true : false
		}
	},
	created: function () {
    window.addEventListener('scroll', this.handleScroll);
  },
  destroyed: function () {
    window.removeEventListener('scroll');
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
}
</style>
