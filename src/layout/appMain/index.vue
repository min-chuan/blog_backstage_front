<template>
  <section class="app-main">
    <page-wrapper>
      <transition name="fade-transform" mode="out-in">
        <router-view :key="key" />
      </transition>
    </page-wrapper>
  </section>
</template>

<script>
import PageWrapper from './pageWrapper';
export default {
  name: 'AppMain',
  components: {
    PageWrapper,
  },
  computed: {
    key() {
      return this.$route.path;
    },
  },
};
</script>

<style scoped>
.app-main {
  min-height: 100%;
  width: 100%;
  position: relative;
}
</style>
