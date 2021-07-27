<template>
  <div class="side-menu">
    <!-- logo开始 -->
    <div class="logo">疯狂の石头</div>
    <!-- logo结束 -->
    <!-- menu开始 -->
    <el-scrollbar>
      <el-menu
        default-active="2"
        class="menu"
        router
        :default-openeds="openedMenu"
        @open="handleOpen"
        @close="handleClose"
      >
        <div v-for="menu in menuList" :key="menu.menuName">
          <!-- 一级菜单 -->
          <el-menu-item
            v-if="!(menu.childMenuList && menu.childMenuList.length)"
            :index="menu.path"
            :route="{ path: menu.path }"
            :class="`level1 ${menu.path === activePath ? 'active' : ''}`"
          >
            <template slot="title">
              <icon-font :name="menu.icon" class="icon" />
              <span class="menu-name">
                {{ menu.menuName }}
              </span>
            </template>
          </el-menu-item>
          <!-- 二级菜单 -->
          <el-submenu v-else :index="menu.menuName">
            <template slot="title">
              <div class="level1 has-submenu">
                <icon-font :name="menu.icon" class="icon" />
                <span class="menu-name">{{ menu.menuName }}</span>
              </div>
            </template>
            <el-menu-item-group>
              <el-menu-item
                v-for="secondMenu in menu.childMenuList"
                :key="secondMenu.path"
                :index="secondMenu.path"
                :route="{ path: secondMenu.path }"
                :class="`level2 ${
                  secondMenu.path === activePath ? 'active' : ''
                }`"
              >
                <icon-font v-if="secondMenu.icon" :name="secondMenu.icon" />
                <span
                  :class="`menu-name ${
                    secondMenu.showHotMarker ? 'show-marker' : ''
                  }`"
                >
                  {{ secondMenu.menuName }}
                </span>
              </el-menu-item>
            </el-menu-item-group>
          </el-submenu>
        </div>
      </el-menu>
    </el-scrollbar>
    <!-- menu结束 -->
  </div>
</template>
<script>
export default {
  name: 'SideMenu',
  data() {
    return {
      menuList: [
        {
          icon: 'icon-home',
          menuName: '首页',
          path: '/home',
        },
      ],
      activePath: '',
      activeTitle: '',
      openedMenu: [],
    };
  },
  computed: {
    subMenuTitleMap() {
      const titleMap = {};
      this.menuList.forEach((menu) => {
        if (menu.childMenuList && menu.childMenuList.length) {
          const pathList = [];
          menu.childMenuList.forEach((secondMenu) => {
            pathList.push(secondMenu.path);
          });
          titleMap[menu.menuName] = pathList;
        }
      });
      return titleMap;
    },
  },
  watch: {
    $route: {
      handler: function (val) {
        // 设置当前项
        this.activePath = val.path;
        const filterMenuList = this.menuList.filter(
          (item) => item.childMenuList
        );
        const result = filterMenuList.find((item) => {
          return !!item.childMenuList.find(
            (subItem) => subItem.path === val.path
          );
        });
        this.activeTitle = result ? result.menuName : '';
        // 打开菜单
        Object.keys(this.subMenuTitleMap).forEach((title) => {
          if (this.subMenuTitleMap[title].includes(val.path)) {
            !this.openedMenu.includes(title) && this.openedMenu.push(title);
          }
        });
      },
      immediate: true,
    },
  },
  created() {
    // 根据菜单列表，初始化展开项
    const newOpenedMenu = [];
    this.menuList.forEach((item) => {
      if (item.childMenuList && item.childMenuList.length) {
        newOpenedMenu.push(item.menuName);
      }
    });
    this.openedMenu = newOpenedMenu;
  },

  methods: {
    handleOpen(index) {
      !this.openedMenu.includes(index) && this.openedMenu.push(index);
    },
    handleClose(index) {
      const pos = this.openedMenu.findIndex((item) => item === index);
      if (pos !== -1) {
        this.openedMenu.splice(pos, 1);
      }
    },
  },
};
</script>
<style scoped lang="scss">
.side-menu {
  width: 207px;
  height: 100vh;
  background-color: #484848;
  .logo {
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #409eff;
    color: #fff;
    font-size: 18px;
    cursor: pointer;
    .icon {
      margin-right: 5px;
    }
  }
  .el-scrollbar {
    height: calc(100vh - 50px);
  }
  .el-scrollbar ::v-deep .el-scrollbar__wrap {
    overflow-x: hidden;
  }
  .menu {
    margin-top: 16px;
    border-right: 1px solid #484848;
    .level1 {
      background-color: #484848;
      padding-left: 30px !important;
      .icon {
        color: #fff;
      }
      .menu-name {
        position: relative;
        margin-left: 18px;
        color: #fff;
      }

      &.has-submenu {
        margin-left: -20px;
      }
      &::before {
        content: '';
        width: 6px;
        height: 100%;
        position: absolute;
        left: 0;
        top: 0;
        background-color: #409eff;
        opacity: 0;
      }
      &.active {
        position: relative;
        background: linear-gradient(
          270deg,
          rgba(255, 123, 70, 0) 0%,
          rgb(140, 197, 255) 100%
        );
        background-color: #484848;
        &::before {
          opacity: 1;
          transition: all 0.5s;
        }
      }
    }
    .level2 {
      background-color: #333;
      .menu-name {
        position: relative;
        margin-left: 20px;
        color: #fff;
        opacity: 0.7;
      }
      &::before {
        content: '';
        width: 6px;
        height: 100%;
        position: absolute;
        left: 0;
        top: 0;
        background-color: #ff7946;
        opacity: 0;
      }
      &.active {
        position: relative;
        background: linear-gradient(
          270deg,
          rgba(255, 123, 70, 0) 0%,
          rgba(255, 123, 70, 0.5) 100%
        );
        background-color: #333;
        .menu-name {
          opacity: 1;
        }
        &::before {
          opacity: 1;
          transition: all 0.5s;
        }
      }
    }
  }

  &::v-deep .el-menu-item-group .el-menu-item.menu-item {
    padding-left: 44px !important;
  }
  &::v-deep .el-submenu__title,
  .el-menu-item {
    height: 44px;
    line-height: 44px;
  }
  &::v-deep .el-submenu__title {
    padding-right: 0 !important;
  }
  &::v-deep .el-menu-item-group__title {
    padding: 0;
  }
}
</style>
