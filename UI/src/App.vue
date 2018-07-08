<template>
  <div id="app">
    <!--  <router-view :key="$route.path"></router-view> -->
    <router-view></router-view>
  </div>
</template>


<script>
import consts from '@/constants'
import { mapState, mapMutations } from 'vuex'

export default {
  name: 'App',
  computed: mapState('layout', [
    'isSmallScreen'
  ]),
  methods: {
    handleResizeEvent(e) {
      const target = e != null ? e.target : window
      const screenWidth = target.innerWidth

      if (screenWidth < consts.smallWidth && !this.isSmallScreen) {
        this.changeScreenSize(true)
      }
      else if (screenWidth >= consts.smallWidth && this.isSmallScreen) {
        this.changeScreenSize(false)
        this.closeDrawers()
      }
    },
    closeDrawers() {
      this.hideMenuDrawer()
      this.hideSearchDrawer()
    },
    ...mapMutations('layout', [
      'changeScreenSize',
      'hideMenuDrawer',
      'hideSearchDrawer'
    ])
  },
  mounted() {
    window.addEventListener('resize', this.handleResizeEvent)
    this.handleResizeEvent()
  },
  beforeDestroyed() {
    window.removeEventListener('resize')
  }
}
</script>


<style lang="scss">
@import '~@/assets/fonts/Bariol/stylesheet.css';
@import '~@/assets/scss/variables';

* {
  position: relative;
  box-sizing: border-box;
  margin: 0;
	padding: 0;
}

html,
body {
  width: 100%;
  top: 0;
  box-sizing: content-box;
  font-family: 'Roboto', arial, sans-serif;
  font-weight: 500;
  font-size: 14px;
  color: $text-primary;
}

a {
  text-decoration: inherit;
  color: inherit;
}

button {
  color: inherit;
  background-color: none;
  border: 0;
  cursor: pointer;
  font: inherit;
  text-align: inherit;
}

i.material-icons {
  font-weight: 400;
}
</style>
