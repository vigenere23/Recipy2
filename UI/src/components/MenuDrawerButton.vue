<template>
  <a id="menu-drawer-button" @click="toggleMenuDrawer">
    <i class="material-icons">menu</i>
  </a>
</template>


<script>
import { mapMutations } from 'vuex'

export default {
  name: 'MenuDrawerButton',
  methods: mapMutations('layout', [
    'toggleMenuDrawer'
  ]),
}
</script>


<style lang="scss">
#menu-drawer-button {
	padding: 8px;
	cursor: pointer;
  float: left;

	.material-icons {
		display: block;
	}
}
</style>