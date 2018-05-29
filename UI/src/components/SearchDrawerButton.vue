<template>
  <a id="search-drawer-button" @click="emitRightDrawerOpenedEvent(!searchDrawerOpened)">
    <i class="material-icons">
			{{ searchDrawerOpened ? 'keyboard_arrow_right' : 'search' }}
		</i>
  </a>
</template>


<script>
import bus from '@/EventBus'

export default {
  name: 'SearchDrawerButton',
	data() {
		return {
			searchDrawerOpened: false
		}
	},
  methods: {
		emitRightDrawerOpenedEvent(isOpened) {
			bus.$emit('rightDrawerOpenedEvent', isOpened)
		},
    handleRightDrawerOpenedEvent(isOpened) {
      this.searchDrawerOpened = isOpened
    }
	},
	mounted() {
		bus.$on('rightDrawerOpenedEvent', this.handleRightDrawerOpenedEvent)
	},
	beforeDestroyed() {
		bus.$off('rightDrawerOpenedEvent')
	}
}
</script>


<style lang="scss" scoped>
#search-drawer-button {
	padding: 8px;
	cursor: pointer;

	.material-icons {
		display: block;
	}
}
</style>
