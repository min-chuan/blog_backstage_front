<template>
  <div class="layout">
    <div class="left">
      <side-menu />
    </div>
    <div class="main">
      <top-bar />
      <el-scrollbar>
        <div class="main-container">
          <app-main />
        </div>
      </el-scrollbar>
    </div>
  </div>
</template>
<script>
import SideMenu from './sideMenu';
import TopBar from './topBar';
import AppMain from './appMain';
export default {
  name: 'Layout',
  components: {
    SideMenu,
    TopBar,
    AppMain,
  },
};
</script>
<style scoped lang="scss">
.layout {
  display: flex;
  .left {
    width: 207px;
    height: 100vh;
  }
  .main {
    width: calc(100vw - 207px);
    height: 100vh;
    .el-scrollbar {
      height: calc(100vh - 50px);
    }
    .el-scrollbar ::v-deep .el-scrollbar__wrap {
      overflow-x: auto;
    }
    .main-container {
      box-sizing: border-box;
      transition: margin-left 0.28s;
      position: relative;
      background-color: #f5f5f5;
      padding: 0 18px 18px 18px;
    }
  }
}
</style>
