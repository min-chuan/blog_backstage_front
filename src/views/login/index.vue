<template>
  <div class="login">
    <div class="login-form">
      <h4 class="title">疯狂の石头博客后台系统</h4>
      <el-form :model="userData" ref="form" :rules="rules">
        <el-form-item prop="username">
          <el-input v-model="userData.username" placeholder="账号">
            <i slot="prefix" class="el-icon-user el-input__icon"></i>
          </el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input
            v-model="userData.password"
            placeholder="密码"
            type="password"
          >
            <i slot="prefix" class="el-icon-unlock el-input__icon"></i>
          </el-input>
        </el-form-item>
        <el-form-item prop="qrcode">
          <el-input
            v-model="userData.qrcode"
            placeholder="验证码"
            style="width: 310px"
          >
            <i slot="prefix" class="el-icon-picture-outline el-input__icon"></i>
          </el-input>
          <img :src="qrcodeImg" class="qrcode" @click="handleCodeChange" />
        </el-form-item>
        <el-form-item>
          <el-button style="width: 100%" type="primary" @click="handleLogin">
            登录
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
        qrcode: '',
      },
      qrcodeImg: '/api/v1/common/captcha',
      rules: {
        username: [{ required: true, message: '请输入账号', trigger: 'blur' }],
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' },
          { min: 6, message: '密码至少为6位', trigger: 'blur' },
        ],
        qrcode: [{ required: true, message: '请输入验证码', trigger: 'blur' }],
      },
    };
  },
  methods: {
    ...mapActions('user', ['login']),
    handleCodeChange() {
      this.qrcodeImg = `/api/v1/common/captcha?t=${Date.now()}`;
    },
    handleLogin() {
      this.$refs.form.validate((valid) => {
        if (valid) {
          this.login(this.userData)
            .then(() => {
              this.$router.push({ name: 'home' });
            })
            .catch(() => {
              this.handleCodeChange();
            });
        }
      });
    },
  },
};
</script>
<style scoped lang="scss">
.login {
  width: 100vw;
  height: 100vh;
  background-color: #2b3b4a;
}
.login-form {
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
  .qrcode {
    cursor: pointer;
    vertical-align: middle;
    margin-left: 20px;
  }
  ::v-deep .el-form-item__content {
    line-height: 47px;
  }
  ::v-deep .el-input--prefix .el-input__inner {
    padding-left: 40px;
  }
  ::v-deep .el-input__inner {
    height: 47px;
    line-height: 47px;
    background-color: #263542;
    border-color: #3c4956;
    color: #bfc4cc;
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
