<template>
	<div id="reduced-layout">
		<router-view :key="$route.path"></router-view>
	</div>
</template>

<script>
export default {
	name: 'ReducedLayout'
}
</script>
