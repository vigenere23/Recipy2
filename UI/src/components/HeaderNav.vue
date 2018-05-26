<template>
<nav id="header-nav">
	<ul>
		<!-- li v-for -->
	</ul>
	<SideNavButton :icon="sideNavIcon"></SideNavButton>
</nav>
</template>


<script>
import SideNavButton from '@/components/SideNavButton.vue'

export default {
	name: 'HeaderNav',
	components: {
		SideNavButton
	},
	props: {
		sideNavIcon: String
	}
}
</script>
