<template>
  <div id="search-drawer-form">
    <VueForm
      :inputs="inputs"
      :changeListener="changeListener"
    ></VueForm>
  </div>
</template>


<script>
import VueForm from '@/components/VueForm.vue'
import { mapMutations, mapActions } from 'vuex'

export default {
  name: 'SearchDrawerForm',
  components: {
    VueForm
  },
  data() {
    return {
      inputs: [
        {
          type: 'text',
          name: 'title',
          label: 'Search'
        },
        {
          type: 'dropdown',
          name: 'sort',
          label: 'Sorting',
          options: [
            { text: 'Date', value: 'createdAt', default: true },
            { text: 'Favorites', value: 'numberOfFavorites' },
            { text: 'Bookmarks', value: 'numberOfBookmarks' }
          ]
        },
        {
          type: 'dropdown',
          name: 'order',
          label: 'Ordering',
          options: [
            { text: 'Descending', value: 'desc', default: true },
            { text: 'Ascending', value: 'asc' }
          ]
        }
      ]
    }
  },
  methods: {
    changeListener(value, fieldName) {
      this.updateQueryField({ value, fieldName })
      this.updateRecipes()
    },
    ...mapMutations('recipes', [
      'updateQueryField'
    ]),
    ...mapActions('recipes', [
      'updateRecipes'
    ])
  }
}
</script>


<style lang="scss">
@import '~@/assets/scss/variables';

#search-drawer-form {
  .spacer {
    width: 100%;
    margin-bottom: 16px;
  }

  .divider {
    width: 100%;
    margin-bottom: 16px;
    border-top: solid 2px $divider-color;
  }
}
</style>