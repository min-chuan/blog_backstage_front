<template>
  <div class="login">
    <div class="login-form">
      <h4 class="title">疯狂の石头博客后台系统</h4>
      <el-form>
        <el-form-item>
          <el-input v-model="userData.username" placeholder="账号">
            <i slot="prefix" class="el-icon-user el-input__icon"></i>
          </el-input>
        </el-form-item>
        <el-form-item>
          <el-input
            v-model="userData.password"
            placeholder="密码"
            type="password"
          >
            <i slot="prefix" class="el-icon-unlock el-input__icon"></i>
          </el-input>
        </el-form-item>
        <el-form-item>
          <el-input
            v-model="userData.qrcode"
            placeholder="验证码"
            style="width: 300px"
          >
            <i slot="prefix" class="el-icon-picture-outline el-input__icon"></i>
          </el-input>
          <div class="qrcode"></div>
        </el-form-item>
        <el-form-item>
          <el-button style="width: 100%" type="primary">登录</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Login',
  data() {
    return {
      userData: {
        username: '',
        password: '',
        qrcode: '',
      },
    };
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
    width: 100px;
    margin-left: 10px;
    height: 45px;
    border: 1px solid #ccc;
    display: inline-block;
    vertical-align: bottom;
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
