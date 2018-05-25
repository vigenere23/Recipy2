<template>
  <div id="app">
    <Header></Header>
    <router-view :key="$route.fullPath"></router-view>
    <!-- :key="" is needed for reloading new route with same component -->
  </div>
</template>


<script>
import Header from '@/components/Header.vue'

export default {
  name: 'App',
  components: {
    Header
  }
}
</script>


<style lang="scss">
* {
  position: relative;
  box-sizing: border-box;
  font-size: 400;
  margin: 0;
  padding: 0;
}

html,
body {
  width: 100%;
  top: 0;
}

a {
  text-decoration: inherit;
  color: inherit;
}
</style>
