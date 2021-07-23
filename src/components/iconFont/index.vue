<template>
  <svg :class="`icon ${className}`" aria-hidden="true" @click="clickIcon">
    <use :xlink:href="`#${name}`"></use>
  </svg>
</template>
<script>
import './icon-font.js';
export default {
  name: 'IconFont',
  props: {
    className: {
      type: String,
      default: '',
    },
    name: {
      type: String,
      require: true,
      default: '',
    },
  },
  methods: {
    clickIcon() {
      this.$emit('clickIcon');
    },
  },
};
</script>
<style scoped lang="scss">
.icon {
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}
</style>
