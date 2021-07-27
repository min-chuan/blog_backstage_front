<template>
  <div class="test">
    <div class="line">
      <el-input style="width: 200px" v-model="tag.name"></el-input>
      <el-button @click="handleAddTag">添加标签</el-button>
    </div>
  </div>
</template>
<script>
import { mapActions } from 'vuex';
export default {
  name: 'test',
  created() {},
  data() {
    return {
      tag: {
        name: '',
      },
    };
  },
  methods: {
    ...mapActions('tag', ['addTag']),
    handleAddTag() {
      this.addTag(this.tag).then(() => {
        this.$message.success('添加成功');
        this.tag.name = '';
      });
    },
  },
};
</script>
<style scoped lang="scss"></style>
