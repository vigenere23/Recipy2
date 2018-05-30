<template>
<nav class="nav">
	<ul>
		<li v-for="(link, i) in nav" :key="i">
      <router-link :to="'./' + link">
        <span :class="{current : link == current}">{{ link }}</span>
      </router-link>
    </li>
	</ul>
</nav>
</template>


<script>
export default {
	name: 'Nav',
	props:  {
    nav: Array,
    current: String
	}
}
</script>


<style lang="scss">
.nav {
  font-family: 'Roboto', arial, sans-serif;
  font-weight: 500;

  ul {
		list-style: none;
		text-indent: 0;
  }
}
</style>
