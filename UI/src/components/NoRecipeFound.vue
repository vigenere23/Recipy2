<template>
  <div id="no-recipes-found">
    <h1>WOOPS!</h1>
    <p>No recipes found!</p>
  </div>
</template>


<script>
export default {
  name: 'NoRecipeFound'
}
</script>



<style lang="scss">
#no-recipes-found {
  height: 100%;
  margin-top: 100px;
  text-align: center;
  color: rgba(0, 0, 0, 0.54);

  h1 {
    font-size: 72px;
    font-weight: 400;
    margin-bottom: 24px;
  }

  p {
    font-size: 24px;
  }
}
</style>
