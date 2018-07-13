<template>
  <form id="search-drawer-form">
    <SearchInput @input="updateForm" name="title" label="Search"></SearchInput>
    <div class="spacer"></div>
    <div class="input">
      <Dropdown @input="updateForm" name="sort" label="Sort by" :options="sortOptions"></Dropdown>
    </div>
    <Dropdown @input="updateForm" name="order" label="Order by" :options="orderOptions"></Dropdown>
  </form>
</template>


<script>
import SearchInput from '@/components/SearchInput.vue'
import Dropdown from '@/components/Dropdown.vue'
import { mapState, mapMutations } from 'vuex'

export default {
  name: 'SearchDrawerForm',
  components: {
    SearchInput,
    Dropdown
  },
  data() {
    return {
      form: {},
      sortOptions: [
        { text: 'Date', value: 'createdAt', default: true },
        //{ text: 'Popularity', value: 'popularity'},
        { text: 'Favorites', value: 'numberOfFavorites' },
        { text: 'Bookmarks', value: 'numberOfBookmarks' }
      ],
      orderOptions: [
        { text: 'Descending', value: 'desc', default: true },
        { text: 'Ascending', value: 'asc' }
      ]
    }
  },
  computed: mapState('recipes', [
    'query'
  ]),
  methods: {
    updateForm(value, fieldName) {
      this.updateQueryField({ fieldName, value })
      this.$router.push({ query: this.query })
    },
    ...mapMutations('recipes', [
      'updateQueryField'
    ])
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
