<template>
  <div class="blog-edit">
    <!-- 标题 start -->
    <div class="title">
      <div class="title-back" @click="$router.go(-1)">
        <i class="el-icon-arrow-left"></i>
        <span>创作中心</span>
      </div>
      <div class="title-input">
        <el-input
          maxlength="100"
          style="width: 100%"
          v-model="articleData.title"
        ></el-input>
      </div>
      <div class="titile-btns">
        <el-button round>保存草稿</el-button>
        <el-button round type="primary" @click="releaseArticleVisible = true">
          发布文章
        </el-button>
      </div>
    </div>
    <!-- 标题 end -->
    <!-- 编辑器 start -->
    <mavon-editor
      class="editor"
      v-model="articleData.content"
      previewBackground="#f5f5f5"
    />
    <!-- 编辑器 end -->
    <!-- 弹窗 -->
    <el-dialog
      title="发布文章"
      :visible="releaseArticleVisible"
      @close="releaseArticleVisible = false"
      width="450px"
      :close-on-click-modal="false"
    >
      <el-form label-width="80px" label-suffix=":" size="mini">
        <el-form-item label="文章标签">
          <el-select
            multiple
            style="width: 300px"
            v-model="articleData.tagIdList"
            clearable
          >
            <el-option
              v-for="tag in tagList"
              :key="tag.id"
              :label="tag.name"
              :value="tag.id"
            />
          </el-select>
        </el-form-item>
        <el-form-item label="文章摘要">
          <el-input
            type="textarea"
            :rows="4"
            placeholder="请输入内容"
            v-model="articleData.abstract"
            style="width: 300px"
          ></el-input>
        </el-form-item>
      </el-form>
      <template slot="footer">
        <el-button size="mini" @click="releaseArticleVisible = false">
          取消
        </el-button>
        <el-button type="primary" size="mini" @click="handleOk">确定</el-button>
      </template>
    </el-dialog>
  </div>
</template>
<script>
import moment from 'moment';
export default {
  name: 'BlogEdit',
  created() {
    this.articleTitle = moment().format('YYYY-MM-DD');
  },
  data() {
    return {
      articleData: {
        title: '',
        content: '',
        tagIdList: [],
        abstract: '',
      },
      // 'js', 'css', 'html', 'vue', 'react', 'node'
      tagList: [
        {
          id: 1,
          name: 'js',
        },
        {
          id: 2,
          name: 'css',
        },
        {
          id: 3,
          name: 'html',
        },
        {
          id: 4,
          name: 'vue',
        },
        {
          id: 5,
          name: 'react',
        },
        {
          id: 6,
          name: 'node',
        },
      ],
      releaseArticleVisible: false,
    };
  },
  methods: {
    handleOk() {
      this.releaseArticleVisible = false;
    },
  },
};
</script>
<style scoped lang="scss">
.blog-edit {
  .title {
    display: flex;
    justify-content: space-between;
    line-height: 56px;
    padding: 0 24px;
    background-color: #f3f3f3;
    ::v-deep .el-input__inner {
      border-radius: 20px;
    }
    .title-back {
      cursor: pointer;
      i {
        margin-right: 10px;
      }
    }
    .title-input {
      flex-grow: 1;
      margin: 0 20px;
    }
    .title-btns {
    }
  }
  .editor {
    height: calc(100vh - 58px);
  }
  ::v-deep .el-dialog__body {
    padding: 10px 20px 0 20px;
  }
}
</style>
