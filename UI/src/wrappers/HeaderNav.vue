<template>
  <Nav id="header-nav" :nav="nav" :current="current"></Nav>
</template>


<script>
import Nav from '@/components/Nav.vue'

export default {
  name: 'HeaderNav',
  components: {
    Nav
  },
	props:  {
    nav: Array,
    current: String
	}
}
</script>


<style lang="scss">
@import '~@/assets/scss/variables';

.nav#header-nav {
  height: 100%;
  text-transform: uppercase;

	ul {
		height: 100%;
		display: flex;

		li {
			height: 100%;
			align-content: center;
      
      a {
        height: 100%;
        width: 100%;
        display: block;
        display: flex;
        align-items: center;
        padding: 0 16px;

        span {
          height: 100%;
          display: flex;
          align-items: center;
				}

				&.current {
					span {
						color: $primary-color;
					}

					&::after {
						content: "";
						display: block;
						position: absolute;
						left: 5%;
						right: 5%;
						bottom: 0;
						border-top: 4px solid $primary-color;
						border-radius: 4px;
					}
        }
      }
		}
	}
}
</style>
