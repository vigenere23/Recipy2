<template>
  <Nav id="drawer-nav" :nav="nav"></Nav>
</template>


<script>
import Nav from '@/components/Nav.vue'

export default {
  name: 'DrawerNav',
  components: {
    Nav
  },
	props:  {
    nav: Array
	}
}
</script>


<style lang="scss">
@import '~@/assets/scss/variables';

.nav#drawer-nav {
  text-transform: uppercase;
  width: 100%;

  ul {
    display: block;
    width: 100%;

    li {
      width: 100%;
      height: 42px;

      a {
        width: 85%;
				height: 100%;
				border-radius: 0 21px 21px 0;
        display: flex;
        align-items: center;
        transition: background-color 250ms $ease-in-out;

        &:hover:not(.current) {
          background-color: #F5F5F5;
          transition: background-color 200ms $ease-in-out;
        }

        span {
          padding-left: 32px;
				}

				&.current {
					background-color: $primary-color-alpha;

					span {
						color: $primary-color;
					}
				}
      }
    }
  }
}
</style>
