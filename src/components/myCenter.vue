<template>
  <div class="container">
    <el-tabs v-model="activeName" class="my-center-box">
      <el-tab-pane label="个人中心" name="first">
        <el-form :model="myCenter">
          <el-form-item label="用户名：">
            <el-input v-model="myCenter.userName" auto-complete="off" :disabled="true"></el-input>
          </el-form-item>
          <el-form-item label="密码：">
            <el-input type="password" v-model="myCenter.userPwd" auto-complete="off" :maxlength="userPwdLen"></el-input>
          </el-form-item>
        </el-form>
        <div class="my-center-btn">
          <el-button type="primary">修改密码</el-button>
        </div>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
  export default {
    data (){
      return {
        activeName: 'first',
        myCenter: {
          userName: '张三',
          userPwd: '123456',
        },
        userNameLen: 10,
        userPwdLen: 6
      }
    },
    created (){

    },
    methods: {

    }
  }
</script>

<style lang="less">
  .my-center-box{
    .is-active{
      font-weight: bold;
    }
    .el-tab-pane{
      margin-left: 16px;
    }
    .my-center-btn{
      text-align: left;
    }
  }

</style>
