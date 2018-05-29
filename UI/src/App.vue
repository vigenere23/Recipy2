<template>
  <div id="app">
    <router-view :key="$route.fullPath"></router-view>
    <!-- :key="" is needed for reloading new route with same component -->
  </div>
</template>


<script>
import bus from '@/EventBus'
import consts from '@/constants'

export default {
  name: 'App',
  data() {
    return {
      isSmallScreen: false,
      isLargeScreen: false
    }
  },
  methods: {
    handleResizeEvent(e) {
      const target = e != null ? e.target : window
      const screenWidth = target.innerWidth

      if (screenWidth < consts.smallWidth && !this.isSmallScreen) {
        this.isSmallScreen = true // needed to ensure in-time response
        bus.$emit('isSmallScreenEvent', true)
      }
      else if (screenWidth >= consts.smallWidth && this.isSmallScreen) {
        this.isSmallScreen = false
        bus.$emit('isSmallScreenEvent', false)
      }
      else if (screenWidth < consts.largeWidth && this.isLargeScreen) {
        this.isLargeScreen = false
        bus.$emit('isLargeScreenEvent', false)
      }
      else if (screenWidth >= consts.largeWidth && !this.isLargeScreen) {
        this.isLargeScreen = true
        bus.$emit('isLargeScreenEvent', true)
      }
    }
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
	height: 120vh;
  top: 0;
  box-sizing: content-box;
  font-family: 'Roboto', arial, sans-serif;
  font-weight: 500;
  font-size: 14px;
}

a {
  text-decoration: inherit;
  color: inherit;
}

i.material-icons {
  font-weight: 400;
}
</style>
