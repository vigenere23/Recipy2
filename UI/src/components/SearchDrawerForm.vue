<template>
  <form id="search-drawer-form">
    <TextInput @input="updateForm" name="title" label="Search"></TextInput>
    <div class="spacer"></div>
    <div class="input">
      <DropdownInput @input="updateForm" name="sort" label="Sort by" :options="sortOptions"></DropdownInput>
    </div>
    <DropdownInput @input="updateForm" name="order" label="Order by" :options="orderOptions"></DropdownInput>
  </form>
</template>


<script>
import TextInput from '@/components/TextInput.vue'
import DropdownInput from '@/components/DropdownInput.vue'
import { mapState, mapMutations } from 'vuex'

export default {
  name: 'SearchDrawerForm',
  components: {
    TextInput,
    DropdownInput
  },
  data() {
    return {
      form: {},
      sortOptions: [
        { text: 'Date', value: 'createdAt', default: true },
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
