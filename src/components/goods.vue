<template>
  <!--商品详情管理-->
  <div class="container">
    <div class="new-goods">
      <el-button type="primary" class="el-icon-plus" @click="newGoods('new')"> 添加商品</el-button>
    </div>

    <div class="goods-list">
      <h5>商品列表</h5>
      <el-table :data="tableData"  style="width: 100%" border :default-sort = "{prop: 'id', order: 'ascending'}">
        <el-table-column  prop="id"  label="id" width="80px" align="left" sortable></el-table-column>
        <el-table-column  prop="category"  label="所属分类"  width="120px" align="left" sortable></el-table-column>
        <el-table-column  prop="goodsName"  label="商品名称" width="120px" align="left" sortable></el-table-column>
        <el-table-column  prop="goodsDescription"  label="商品描述" width="150px" align="left"></el-table-column>
        <el-table-column  label="价  格" width="210px" align="center">
          <el-table-column prop="price.big" label="大份" width="70px" align="center"></el-table-column>
          <el-table-column prop="price.middle" label="中份" width="70px" align="center"></el-table-column>
          <el-table-column prop="price.small" label="小份" width="70px" align="center"></el-table-column>
        </el-table-column>
        <el-table-column  prop="goodsImg"  label="商品图片" width="250px" align="center"></el-table-column>
        <el-table-column  label="操作" width="200px" align="center">
          <template scope="scope">
            <el-button type="primary" @click="newGoods('edit',scope.row.id)">编辑</el-button>
            <el-button type="danger" @click="removeItem(scope.row)">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <!--添加 编辑商品弹窗-->
    <el-dialog :title="goodsTitle" v-model="goodsDialog" size="small" :before-close="goodsDialogClose">
          <el-form :model="goodsForm" label-width="100px"  :rules="goodsFormRules"  ref="goodsFormForm">
            <el-form-item label="商品名称">
              <el-input v-model="goodsForm.name"></el-input>
            </el-form-item>
            <el-form-item label="商品描述">
              <el-input v-model="goodsForm.description"></el-input>
            </el-form-item>
            <el-form-item label="所属分类">
              <el-select v-model="goodsForm.category" class="category-select">
                <option value="汤粉类">汤粉类</option>
              </el-select>
            </el-form-item>
            <el-form-item label="商品价格">
                <el-row>
                  <el-col :span="5">规格</el-col>
                  <el-col :span="5">大</el-col>
                  <el-col :span="1">&nbsp;</el-col>
                  <el-col :span="5">中</el-col>
                  <el-col :span="1">&nbsp;</el-col>
                  <el-col :span="5">小</el-col>
                </el-row>
                <el-row>
                  <el-col :span="5">价格</el-col>
                  <el-col :span="5">
                    <el-input v-model="goodsForm.price.big"></el-input>
                  </el-col>
                  <el-col :span="1">&nbsp;</el-col>
                  <el-col :span="5">
                    <el-input v-model="goodsForm.price.middle"></el-input>
                  </el-col>
                  <el-col :span="1">&nbsp;</el-col>
                  <el-col :span="5">
                    <el-input v-model="goodsForm.price.small"></el-input>
                  </el-col>
                </el-row>
            </el-form-item>
            <el-form-item label="商品图片">
              <el-upload
                action="https://jsonplaceholder.typicode.com/posts/"
                list-type="picture-card"
                :on-preview="handlePictureCardPreview"
                :file-list="goodsForm.fileList"
                :auto-upload="false"
                :on-change = "handChange"
                :on-remove="handleRemove" style="text-align: left;">
                <i class="el-icon-plus"></i>
              </el-upload>
              <el-dialog v-model="dialogVisible" size="tiny">
                <img width="100%" :src="dialogImageUrl" alt="">
              </el-dialog>
            </el-form-item>
          </el-form>
          <div slot="footer" class="dialog-footer">
            <el-button type="primary" @click="goodsSave">确 定</el-button>
            <el-button @click="goodsDialogClose">取 消</el-button>
          </div>
    </el-dialog>
  </div>
</template>

<script>
  export default{
    data (){
      return {
        tableData: [
          {
            id: '1',
            category: '汤粉类',
            goodsName: '都匀米粉',
            goodsDescription: '都匀米粉都匀米粉都匀米粉都匀米粉',
            price: {
              big: 20,
              middle: 15,
              small: 10
            },
            goodsImg: [],
          },
          {
            id: '2',
            category: '汤粉类',
            goodsName: '桂林米粉',
            goodsDescription: '都匀米粉都匀米粉都匀米粉都匀米粉',
            price: {
              big: 20,
              middle: 15,
              small: 10
            },
            goodsImg: [],
          },
          {
            id: '3',
            category: '汤粉类',
            goodsName: '牛肉粉',
            goodsDescription: '都匀米粉都匀米粉都匀米粉都匀米粉',
            price: {
              big: 20,
              middle: 15,
              small: 10
            },
            goodsImg: [],
          },

        ],
        goodsTitle: '',
        goodsDialog: false,
        goodsForm: {
          price: {
            big: '',
            middle: '',
            small: ''
          }
        },
        goodsFormRules: {},
        dialogImageUrl: '',
        dialogVisible: false,
      }
    },
    created (){

    },
    methods :{
      newGoods (type,id){
        this.goodsDialog = true;
        if(type==='new'){
          this.goodsTitle = '新建商品';
        }else if(type==='edit'){
          this.goodsTitle = '编辑商品';
        }
      },
      removeItem (row){
        console.log(row);
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
      goodsDialogClose (){
        this.goodsForm.fileList = [];
        this.goodsDialog = false;
      },
      goodsSave (){
        console.log(this.goodsForm.fileList);

      },
      handleRemove(file, fileList) {
        console.log(file, fileList);
        this.goodsForm.fileList = fileList;
        let len = fileList.length;
        if(len<4){
          let element = document.getElementsByClassName('el-upload--picture-card')[0];
          element.style.cssText = "display: inline-block";
        }
      },
      handlePictureCardPreview(file) {
        this.dialogImageUrl = file.url;
        this.dialogVisible = true;
        console.log(this.dialogImageUrl);
      },
      handChange (file, fileList){
        console.log(file, fileList);
        this.goodsForm.fileList = fileList;
        let len = fileList.length;
        if(len===4){
          let element = document.getElementsByClassName('el-upload--picture-card')[0];
          element.style.cssText = "display: none";
        }
      },

    }
  }
</script>


<style lang="less">
  .new-goods{
  text-align: left;
  }
  .goods-list{
    h5{
    border-bottom: 3px solid #ddd;
    text-align: left;
    color: #20a0ff;
    }
  }
  .category-select{
    width: 100%;
  }
</style>
