<template>
  <!--菜单分类管理-->
  <div class="container">
    <div class="new-category">
       <el-button type="primary" class="el-icon-plus" @click="newCategory('new')"> 新建菜单分类</el-button>
    </div>
    <div class="category-list">
      <h5>菜单分类列表</h5>
      <el-table :data="tableData"  style="width: 100%" border :default-sort = "{prop: 'id', order: 'ascending'}">
        <el-table-column  prop="id"  label="id" width="100px" align="center"></el-table-column>
        <el-table-column  prop="categoryName"  label="菜单分类" width="250px" align="center"></el-table-column>
        <el-table-column  label="操作" width="300px" align="center">
          <template scope="scope">
            <el-button type="primary" @click="newCategory('edit',scope.row.id)">编辑</el-button>
            <el-button type="danger" @click="removeItem(scope.row)">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <!--新建 编辑菜单分类弹窗-->
    <el-dialog :title="dialogTitle" :visible.sync="dialogFormVisible" size="tiny" :before-close="categoryCancel">
      <el-form :model="form">
        <el-form-item label="分类名称">
          <el-input v-model="form.name" auto-complete="off"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button type="primary" @click="categorySave">确 定</el-button>
        <el-button @click="categoryCancel">取 消</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
  export default {
    data (){
      return {
        self: this,
        tableData: [
          {
            id: '1',
            categoryName: '汤粉类',
          },
          {
            id: '2',
            categoryName: '米饭类',
          },
        ],
        dialogFormVisible: false,
        dialogTitle: '',
        form: {
          id: '',
          name: '',
        },
      }
    },
    created (){

    },
    methods: {
      newCategory (type, id){
        if(type === 'new'){
          this.dialogTitle = '新建菜单分类';
        }else if(type === 'edit'){
          this.dialogTitle = ' 编辑菜单分类';
          this.form.name = id; //调接口  通过id 找到菜单分类信息
        }
        this.dialogFormVisible = true;
      },
      removeItem (row){
        this.$confirm('是否删除该项?', '提示', {
          type: 'warning'
        }).then(() => {
              this.$message({
                type: 'success',
                message: '删除成功！'
              });
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除!'
          });
        });
      },
      categoryCancel (){
        this.form.name = '';
        this.dialogFormVisible = false;
      },
      categorySave (){
        this.tableData.push(
          {
            id: 3,
            categoryName: '酒水类'
          }
        );
        alert('添加成功');
        this.categoryCancel();
      },

    }
  }
</script>


<style lang="less">
  .new-category{
    text-align: left;
  }
  .category-list{
    h5{
      border-bottom: 3px solid #ddd;
      text-align: left;
      color: #20a0ff;
    }

  }
</style>
