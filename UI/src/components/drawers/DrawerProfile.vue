<template>
  <router-link
    id="drawer-profile"
    :to="userRoute"
    :style="{ backgroundImage: `url(${user.backgroundImgPath})` }"
  >
    <div class="infos">
      <div
        v-if="user._id"
        class="profile-picture"
        :style="{ backgroundImage: `url(${user.profileImgPath})` }">
      </div>
      <div class="texts">
        <p class="username">{{ user.username }}</p>
        <p class="email">{{ user.email }}</p>
      </div>
    </div>
  </router-link>
</template>


<script>
export default {
  name: 'DrawerProfile',
  data() {
    return {
      user: {
        _id: '',
        username: 'Sign In',
        email: '',
        profileImgPath: '',
        backgroundImgPath: ''
      }
    }
  },
  computed: {
    userRoute() {
      return this.user._id ? `/users/${user._id}` : '/signin'
    }
  },
  mounted() {
    let user = null // Should call the API for registrated user
    if (user) this.user = user // If the user is registrated, set it
  }
}
</script>


<style lang="scss">
@import '~@/assets/scss/variables';

#drawer-profile {
  width: 100%;
  display: block;
  padding-top: calc(100% * 9/16);
  background-color: #F5F5F5;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;

  .infos {
    position: absolute;
    bottom: 16px;
    left: 16px;

    .profile-picture {
      width: 56px;
      height: 56px;
      border-radius: 50%;
      background-color: #E4E4E4;
      background-repeat: no-repeat;
      background-size: cover;
      background-position: center;
    }

    .texts {
      margin-top: 16px;
      line-height: 1.4em;

      .username {
        font-weight: 500;
        font-size: 14px;
      }

      .email {
        font-weight: 400;
        font-size: 13px;
      }
    }
  }
}
</style>
