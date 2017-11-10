<template>
  <div class="container">
    <el-tabs v-model="activeName" class="user-login-box">
      <el-tab-pane label="用户登录" name="first">
        <el-form :model="loginForm">
          <el-form-item label="用户名：">
            <el-input v-model="loginForm.userName" auto-complete="off" :maxlength="userNameLen"></el-input>
          </el-form-item>
          <el-form-item label="密码：">
            <el-input type="password" v-model="loginForm.userPwd" auto-complete="off" :maxlength="userPwdLen"></el-input>
          </el-form-item>
        </el-form>
        <div class="login-btn">
          <el-button type="primary">登 录</el-button>
          <el-button>取 消</el-button>
        </div>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
export default {
  name: 'hello',
  data () {
  return {
    activeName: 'first',
    loginForm: {
      userName: '',
      userPwd: ''
    },
    userNameLen: 10,
    userPwdLen: 6,

  }
},
  methods: {

  }
}
</script>
<style lang="less">
  .user-login-box{
    .is-active{
      font-weight: bold;
    }
    .el-tab-pane{
      margin-left: 16px;
    }
  }
  .login-btn {
    text-align: left;
  }

</style>
