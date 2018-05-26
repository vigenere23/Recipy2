<template>
<nav id="header-nav">
	<ul>
		<!-- li v-for -->
	</ul>
	<SideNavButton></SideNavButton>
</nav>
</template>


<script>
import SideNavButton from '@/components/SideNavButton.vue'

export default {
	name: 'HeaderNav',
	components: {
		SideNavButton
	}
}
</script>
