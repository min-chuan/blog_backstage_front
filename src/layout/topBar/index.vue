<template>
  <div class="top-bar">
    <div class="top-bar-left">
      <div class="btn" @click="$router.push({ name: 'blogEdit' })">
        <icon-font class="icon" name="icon-yumaobi"></icon-font>
        <span>开始创作</span>
      </div>
    </div>
    <div class="top-bar-right">
      <div class="user">{{ username }}</div>
      <div class="logout" @click="handleLogout">
        <icon-font name="icon-tuichu" />
      </div>
    </div>
  </div>
</template>
<script>
import { mapState, mapMutations } from 'vuex';
export default {
  name: 'TopBar',
  computed: {
    ...mapState({
      username: (state) => state.user.userInfo.username,
    }),
  },
  methods: {
    ...mapMutations({
      CLEAR_DATA_AND_EXIT: 'app/CLEAR_DATA_AND_EXIT',
    }),
    handleLogout() {
      this.CLEAR_DATA_AND_EXIT();
    },
  },
};
</script>
<style scoped lang="scss">
.top-bar {
  height: 50px;
  overflow: hidden;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 14px;
  padding: 0 20px;
  &-left {
    display: flex;
    align-items: center;
    .icon {
      margin-right: 5px;
    }
    .btn {
      padding: 5px 10px;
      border: 2px solid #409eff;
      color: #409eff;
      cursor: pointer;
    }
  }
  &-right {
    display: flex;
    align-items: center;
    .user {
      box-sizing: border-box;
      padding: 5px 10px;
      border-radius: 16px;
      background-color: rgb(233, 233, 235);
      margin-right: 10px;
      // color: #fff;
    }
    .logout {
      font-size: 18px;
      cursor: pointer;
    }
  }
}
</style>
