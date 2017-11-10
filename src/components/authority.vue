<template>
  <!--权限管理-->
  <div class="container">
    <el-tabs v-model="activeName" @tab-click="">
      <el-tab-pane label="用户管理" name="first">
        <div class="new-user">
          <el-button type="primary" class="el-icon-plus" @click="newUser('new')"> 新建用户</el-button>
        </div>
        <div class="category-list">
          <h5>用户列表</h5>
          <el-table :data="userList"  style="width: 100%" border :default-sort = "{prop: 'userId', order: 'ascending'}">
            <el-table-column  prop="userId"  label="用户ID" width="100px" align="center"></el-table-column>
            <el-table-column  prop="userName"  label="用户名" width="250px" align="center"></el-table-column>
            <el-table-column  label="操作" width="300px" align="center">
              <template scope="scope">
                <el-button type="primary" @click="newUser('edit',scope.row.userId)">编辑</el-button>
                <el-button type="danger" @click="removeItem(scope.row)">删除</el-button>
              </template>
            </el-table-column>
          </el-table>
        </div>
      </el-tab-pane>
      <el-tab-pane label="用户权限管理" name="second">
        <div class="power-box">
          <el-form label-width="100px" :inline="true" :model="option" ref="searchForm">
              <el-form-item label="用户名" class="userName-box">
                <el-select v-model="option.userName" placeholder="请选择用户名"  clearable>
                  <option value="1">1</option>
                </el-select>
              </el-form-item>
            </el-form>
          <el-table border :data="powerTableData"  @selection-change="handleSelectionChange" ref="multipleTable">
            <el-table-column type="selection"></el-table-column>
            <el-table-column label="模块权限" prop="powerName" align="center"></el-table-column>
          </el-table>
          <div class="power-save-btn">
            <el-button type="primary">保 存</el-button>
          </div>
        </div>
      </el-tab-pane>
    </el-tabs>

    <!--新建 编辑用户弹窗-->
    <el-dialog :title="dialogTitle" :visible.sync="dialogFormVisible" size="tiny" :before-close="userCancel">
      <el-form :model="form">
        <el-form-item label="用户名">
          <el-input v-model="form.userName" auto-complete="off" :maxlength="userNameLen"></el-input>
        </el-form-item>
        <el-form-item label="密码">
          <el-input type="password" v-model="form.userPwd" auto-complete="off" :maxlength="userPwdLen"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button type="primary" @click="userSave">保 存</el-button>
        <el-button @click="userCancel">取 消</el-button>
      </div>
    </el-dialog>

  </div>
</template>

<script>
  export default{
    data (){
          return {
            activeName: 'first',
            userList: [
              {
                userId: '1',
                userName: 'xiaoqiang',
                userPwd: 'xiaoqing',
              },
              {
                userId: '2',
                userName: 'xiaoma',
                userPwd: 'xiaoma',
              },
            ],
            form: {
              userName: '',
              userPwd: '',
            },
            userNameLen: 10,
            userPwdLen: 6,
            dialogFormVisible: false,
            dialogTitle: '',
            option: {
                userName: ''
            },
            powerTableData: [
              {
                id: '1',
                powerName: '菜单分类管理'
              },
              {
                id: '2',
                powerName: '商品详情管理'
              },
              {
                id: '3',
                powerName: '订单管理'
              },
              {
                id: '4',
                powerName: '统计管理'
              },
              {
                id: '5',
                powerName: '权限管理'
              },
            ]
          }
      },
    created() {

    },
    methods: {
      newUser (type, userId){
        this.dialogFormVisible = true;
        if(type === 'new'){
          this.dialogTitle = '新建用户';
        }else{
          this.dialogTitle = '编辑用户';
          console.log(userId); //通过 userId 掉接口  获得用户信息
        }
      },

      removeItem(row){

      },
      userSave (){
        alert('保存成功');
        this.userCancel();
      },
      userCancel (){
        this.form.userName = '';
        this.form.userPwd = '';
        this.dialogFormVisible = false;
      },
      handleSelectionChange(val) {
        console.log(val);
      }

    }

  }
</script>

<style lang="less">

  .container{
    .new-user{
      text-align: left;
    }
    h5{
      border-bottom: 3px solid #ddd;
      text-align: left;
      color: #20a0ff;
    }
    .userName-box{
      margin-left: -46px;
    }
    .power-save-btn{
      text-align: right;
      margin-top: 10px;
    }
  }

</style>
