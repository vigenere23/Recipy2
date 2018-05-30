<template>
<nav id="header-nav">
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
	name: 'HeaderNav',
	props:  {
    nav: Array,
    current: String
	}
}
</script>


<style lang="scss" scoped>
@import '~@/assets/scss/variables';

#header-nav {
	height: 100%;
  font-family: 'Roboto', arial, sans-serif;
  font-weight: 500;
  text-transform: uppercase;

	ul {
		display: block;
		list-style: none;
		text-indent: 0;
		height: 100%;
		display: flex;

		li {
			height: 100%;
      
      a {
        height: 100%;
        width: 100%;
        display: block;
        display: flex;
        align-items: center;
        padding: 0 16px;

        span {
          height: 100%;
          display: flex;
          align-items: center;
          
          &.current {
            color: $primary-color;
          }

          &.current::after {
            content: "";
            width: 100%;
            display: block;
            position: absolute;
            bottom: 0;
            border-top: 4px solid $primary-color;
            border-radius: 2px;
          }
        }
      }
		}
	}
}
</style>
