<template>
  <div id="search-drawer-input">
    <input id="search-title" v-model="query.title" placeholder="Search">
    <div id="search-title-eraser" @click="query.title = ''">
      <i class="material-icons">close</i>
    </div>
  </div>
</template>


<script>
export default {
  name: 'SearchDrawerInput',
  data() {
    return {
      query: {
        title: ''
      }
    }
  },
  watch: {
    query: {
      handler() {
        this.$router.push({query: this.query})
      },
      deep: true
    }
  }
}
</script>


<style lang="scss">
@import '~@/assets/scss/variables';

#search-drawer-input {
  width: 100%;
  border-bottom: solid 2px $divider-color;
  padding-bottom: 4px;

  #search-title {
    width: 100%;
    border: 0;
    font-family: 'Open Sans', arial, sans-serif;
    font-size: 14px;
    padding: 4px;
  }

  #search-title-eraser {
    position: absolute;
    display: block;
    background-color: white;
    top: 0;
    right: 0;
    cursor: pointer;
  }
}
</style>
