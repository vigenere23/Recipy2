<template>
  <div id="app">
    <router-view :key="$route.path"></router-view>
  </div>
</template>


<script>
import bus from '@/EventBus'
import consts from '@/constants'

export default {
  name: 'App',
  methods: {
    handleResizeEvent(e) {
      const target = e != null ? e.target : window
      const screenWidth = target.innerWidth

      if (screenWidth < consts.smallWidth && !this.$store.isSmallScreen) {
        this.$store.isSmallScreen = true
      }
      else if (screenWidth >= consts.smallWidth && this.$store.isSmallScreen) {
        this.$store.isSmallScreen = false
        this.closeDrawers()
      }
    },
    closeDrawers() {
      this.$store.showMenuDrawer = false
      this.$store.showSearchDrawer = false
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

i.material-icons {
  font-weight: 400;
}
</style>
