<template>
  <form id="search-drawer-form">
    <SearchDrawerInput @update-form="updateForm" fieldName="title"></SearchDrawerInput>
    <div class="spacer"></div>
    <div class="input">
      <Dropdown @update-form="updateForm" fieldName="sort" :menu="sortOptions" width="120px"></Dropdown>
    </div>
    <Dropdown @update-form="updateForm" fieldName="order" :menu="orderOptions" width="124px"></Dropdown>
  </form>
</template>


<script>
import SearchDrawerInput from '@/components/SearchDrawerInput.vue'
import Dropdown from '@/components/Dropdown.vue'

export default {
  name: 'SearchDrawerForm',
  components: {
    SearchDrawerInput,
    Dropdown
  },
  data() {
    return {
      form: {},
      sortOptions: [
        'date',
        'popularity',
        'favorites',
        'bookmarks'
      ],
      orderOptions: [
        'descending',
        'ascending'
      ]
    }
  },
  methods: {
    updateForm(fieldName, value) {
      this.form[fieldName] = value
      this.$router.push({ query: this.form })
    }
  }
}
</script>


<style lang="scss">
@import '~@/assets/scss/variables';

#search-drawer-form {
  .spacer {
    width: 100%;
    margin-bottom: 12px;
  }

  .divider {
    width: 100%;
    margin-bottom: 12px;
    border-top: solid 2px $divider-color;
  }

  .input {
    width: 100%;
    display: flex;

  }
}
</style>
