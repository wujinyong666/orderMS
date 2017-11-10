<template>
  <div id="app">
    <div class="title">
      <h2>欢迎使用点餐信息平台，我们将竭诚为您服务！</h2>
    </div>
    <div class="nav-bar">
        <el-menu default-active="1" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" :router="true" theme="blue">
          <el-menu-item index="category" align="left"><i class="el-icon-menu"></i>菜单分类管理</el-menu-item>
          <el-menu-item index="goods" align="left"><i class="el-icon-document"></i>商品详情管理</el-menu-item>
          <el-menu-item index="order" align="left"><i class="el-icon-date"></i>订单管理</el-menu-item>
          <el-menu-item index="statistics" align="left"><i class="el-icon-edit"></i>统计管理</el-menu-item>
          <el-menu-item index="authority" align="left"><i class="el-icon-setting"></i>权限管理</el-menu-item>
          <el-menu-item index="myCenter" align="left"><i class="el-icon-star-on"></i>个人中心</el-menu-item>
        </el-menu>
        <div class="login-user-info">
          <p>欢迎 {{loginUser}}</p>
          <el-button type="text"  @click="logOut">退 出</el-button>
        </div>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',

  data () {
    return {
        loginUser: '张三',
    }
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
    logOut (){
      window.sessionStorage.clear();
      this.$router.push({name: 'index'});
    }
  }
}

</script>

<style lang="less">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.title{
  height: 70px;
  overflow: hidden;

  h2{
    margin: 0;
    padding: 20px 0;
    background-color: #20a0ff;
    color: #fff;
  }
}
.nav-bar{
  position: fixed;
  top: 90px;
  z-index: 999;
  bottom:0;
}
.el-menu{
  max-width: 200px;
  text-align: center;
  li{
    display: block;
  }
}
.container{
  float: left;
  margin: 20px 0 0 180px;
}
.el-dialog__header{
  text-align: left;
}
.login-user-info{
  background: #EEF1F6;
  padding: 5px 0 10px 0;
  margin-top: 20px;
}
</style>
