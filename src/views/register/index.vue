<template>
  <div class="register">
    <div class="register-form">
      <h4 class="title">注册</h4>
      <el-form ref="form">
        <el-form-item required>
          <el-input v-model="userData.username" placeholder="账号">
            <i slot="prefix" class="el-icon-user el-input__icon"></i>
          </el-input>
        </el-form-item>
        <el-form-item required>
          <el-input
            v-model="userData.password"
            placeholder="密码"
            type="password"
          >
            <i slot="prefix" class="el-icon-unlock el-input__icon"></i>
          </el-input>
        </el-form-item>
        <el-form-item>
          <el-button style="width: 100%" type="primary" @click="handleRegister">
            注册
          </el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>
<script>
import { mapActions } from 'vuex';
export default {
  name: 'Login',
  data() {
    return {
      userData: {
        username: '',
        password: '',
      },
    };
  },
  methods: {
    ...mapActions('user', ['register']),
    handleRegister() {
      this.register(this.userData).then(() => {
        this.$refs.form.validate((valid) => {
          if (valid) {
            this.$message.success('注册成功');
          }
        });
      });
    },
  },
};
</script>
<style scoped lang="scss">
.register {
  width: 100vw;
  height: 100vh;
  background-color: #2b3b4a;
}
.register-form {
  width: 450px;
  padding: 160px 35px 0 35px;
  margin: 0 auto;
  .title {
    font-size: 26px;
    color: #eee;
    margin: 0 auto 45px auto;
    text-align: center;
    font-weight: 700;
  }
  ::v-deep .el-form-item__content {
    line-height: 47px;
  }
  ::v-deep .el-input__inner {
    height: 47px;
    line-height: 47px;
    background-color: #263542;
    border-color: #3c4956;
    &:focus {
      border-color: #3c4956;
    }
  }
}
.el-input__icon {
  color: #869aa4;
  font-size: 18px;
}
</style>
