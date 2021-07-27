<template>
  <div class="page-wrapper">
    <div class="page-wrapper-head">
      <h4 class="page-wrapper-title">{{ title }}</h4>
    </div>
    <div class="page-wrapper-inner">
      <slot />
    </div>
  </div>
</template>
<script>
export default {
  name: 'PageWrapper',
  data() {
    return {
      title: '',
    };
  },
  watch: {
    $route: {
      handler(val) {
        this.title = val.meta.name || '未知标题';
      },
      immediate: true,
    },
  },
};
</script>
<style scoped lang="scss">
.page-wrapper {
  position: relative;
  &-title {
    font-weight: bold;
  }
  &-head {
    height: 50px;
    display: flex;
    align-items: center;
    .carousel {
      margin-left: 15px;
    }
  }
  &-inner {
    padding: 10px;
    background-color: #fff;
    min-height: calc(100vh - 120px);
    box-sizing: border-box;
  }
}
</style>
