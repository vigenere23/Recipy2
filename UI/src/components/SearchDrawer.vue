<template>
  <div id="search-drawer" :class="{ show: $store.showSearchDrawer }">

  </div>
</template>


<script>
export default {
  name: 'SearchDrawer'
}
</script>


<style lang="scss">
@import '~@/assets/scss/variables';

#search-drawer {
  width: $drawer-width;
  max-width: 85%;
  position: fixed;
  right: -100%;
  top: 0;
  bottom: 0;
  background-color: white;
  color: $text-secondary;
  z-index: 90;
  transition: right 300ms $ease-in-out;

  &.show {
    right: 0;
    transition: right 250ms $ease-out;
  }
}
</style>