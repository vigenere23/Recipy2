<template>
	<div class="recipe-card">
    <router-link class="card" :to="recipe._id">
      <div class="top-bar">
        <router-link :to="`/users/${recipe.author._id}`" class="profile-picture"></router-link>
        <div class="texts">
          <router-link :to="`/recipes/${recipe._id}`" class="title">{{ recipe.title }}</router-link>
          <router-link :to="`/users/${recipe.author._id}`" class="username">{{ `by ${recipe.author.username}` }}</router-link>
        </div>
      </div>
      <div class="bottom-bar">
        <div class="left">
          <div class="favorites">
            <i class="material-icons">favorite</i>
            <p>{{ recipe.numberOfFavorites }}</p>
          </div>
          <div class="bookmarks">
            <i class="material-icons bookmark">bookmark</i>
            <p>{{ recipe.numberOfBookmarks }}</p>
          </div>
        </div>
        <i class="material-icons share">share</i>
      </div>
    </router-link>
	</div>
</template>

<script>
export default {
	name: 'RecipeCard',
	props: {
		recipe: Object
	}
}
</script>

<style lang="scss">
@import '~@/assets/scss/variables';

.recipe-card {
  flex-shrink: 0;
  flex-grow: 0;
  flex-basis: 275px;

  &::after {
    content: "";
    display: block;
    padding-bottom: 110%;
  }

  .card {
    position: absolute;
    top: 8px;
    bottom: 8px;
    right: 8px;
    left: 8px;
    background-color: #f5f5f5;
    background-repeat: no-repeat;
    background-size: cover;
    border-radius: 4px;
    overflow: hidden;
    @include shadow(1);
    transition: box-shadow 250ms $ease-in-out;

    &:hover {
      @include shadow(8);
      transition: box-shadow 200ms $ease-out;
    }

    .top-bar {
      font-family: 'Roboto', arial, sans-serif;
      display: flex;
      align-items: center;
      padding: 1em;
      background-color: white;

      .profile-picture {
        flex-basis: 38px;
        flex-grow: 0;
        flex-shrink: 0;
        height: 38px;
        border-radius: 50%;
        background-color: #f5f5f5;
      }

      .texts {
        display: flex;
        flex-direction: column;
        padding-left: 1em;

        .title {
          font-weight: 500;
          font-size: 14px;
          line-height: 1.1em;
          margin-bottom: 0.2em;
        }

        .username {
          font-size: 13px;
          color: $text-secondary;
        }
      }
    }

    .bottom-bar {
      padding: 1em;
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      background-color: white;
      display: flex;
      justify-content: space-between;
      color: $text-secondary;

      .material-icons {
        font-size: 18px;
      }

      .left {
        display: flex;
        align-items: center;
        font-size: 13px;

        :not(:last-child) {
          margin-right: 0.75em;
        }

        .material-icons {
          margin-right: 0.25em;
        }
        
        .favorites, .bookmarks {
          display: flex;
          align-items: center;
        }

        .favorites.selected {
          color: $favorite-color;
        }

        .bookmarks.selected {
          color: $bookmark-color;
        }
      }
    }
  }
}
</style>
