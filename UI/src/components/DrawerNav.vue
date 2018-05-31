<template>
  <Nav id="drawer-nav" :nav="nav" :current="current"></Nav>
</template>


<script>
import Nav from '@/components/Nav.vue'

export default {
  name: 'DrawerNav',
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

.nav#drawer-nav {
  text-transform: uppercase;
  width: 100%;

  ul {
    display: block;
    width: 100%;

    li {
      width: 100%;
      height: 48px;

      a {
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        transition: background-color 250ms $ease-in-out;

        &:hover {
          background-color: #F5F5F5;
          transition: background-color 200ms $ease-in-out;
        }

        span {
          padding-left: 32px;

          &.current {
            color: $primary-color;
            text-indent: 0.5em;
          }

          &.current::before {
            content: "";
            height: 100%;
            width: 1.4em;
            display: block;
            position: absolute;
            left: 0;
            transform: translateX(-50%);
            background-color: $primary-color;
            border-radius: 50%;
          }
        }
      }
    }
  }
}
</style>
