<template>
  <div id="search-drawer" :class="{ show: $store.showSearchDrawer }">
    <SearchDrawerInput></SearchDrawerInput>
    <div class="spacer"></div>
    <Dropdown :menu="sortOptions"></Dropdown>
  </div>
</template>


<script>
import SearchDrawerInput from '@/components/SearchDrawerInput.vue'
import Dropdown from '@/components/Dropdown.vue'

export default {
  name: 'SearchDrawer',
  components: {
    SearchDrawerInput,
    Dropdown
  },
  data() {
    return {
      sortOptions: [
        'date',
        'popularity',
        'favorites',
        'bookmarks'
      ]
    }
  }
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

  .spacer {
    width: 100%;
    margin-bottom: 12px;
  }

  .divider {
    width: 100%;
    margin-bottom: 12px;
    border-top: solid 2px $divider-color;
  }
}
</style>