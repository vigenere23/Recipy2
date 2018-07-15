<template>
  <div id="search-drawer" :class="{ show: isSearchDrawerVisible }">
    <SearchDrawerForm></SearchDrawerForm>
  </div>
</template>


<script>
import { mapState } from 'vuex'

import SearchDrawerForm from '@/wrappers/SearchDrawerForm.vue'

export default {
  name: 'SearchDrawer',
  components: {
    SearchDrawerForm
  },
  computed: mapState('layout', [
    'isSearchDrawerVisible'
  ])
}
</script>


<style lang="scss">
@import '~@/assets/scss/variables';

#search-drawer {
  width: $drawer-width;
  max-width: 85%;
  position: fixed;
  padding: 16px;
  right: -100%;
  top: 0;
  bottom: 0;
  background-color: white;
  color: $text-secondary;
  z-index: 90;
  transition: right $nav-closing;

  &.show {
    right: 0;
    transition: right $nav-opening;
  }
}
</style>