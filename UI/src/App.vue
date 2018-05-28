<template>
  <div id="app">
    <router-view :key="$route.fullPath"></router-view>
    <!-- :key="" is needed for reloading new route with same component -->
  </div>
</template>


<script>
export default {
  name: 'App'
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
</style>
