<template>
  <a id="side-nav-button" @click="emitOpenSearchDrawerEvent(!searchDrawerOpened)">
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
		emitOpenSearchDrawerEvent(isOpened) {
			bus.$emit('openSearchDrawerEvent', isOpened)
		},
    handleOpenSearchDrawerEvent(isOpened) {
      this.searchDrawerOpened = isOpened
    }
	},
	mounted() {
		bus.$on('openSearchDrawerEvent', isOpened => this.handleOpenSearchDrawerEvent(isOpened))
	},
	beforeDestroyed() {
		bus.$off('openSearchDrawerEvent')
	}
}
</script>


<style lang="scss" scoped>
#side-nav-button {
	padding: 8px;
	cursor: pointer;
	margin-right: 8px;

	.material-icons {
		display: block;
	}
}
</style>
