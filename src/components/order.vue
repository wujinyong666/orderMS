<template>
  <!--订单管理-->
  <div class="container">
    <div class="search-box">
      <el-form label-width="100px" :inline="true" :model="option" ref="searchForm">
        <el-form-item label="订单号">
          <el-input v-model="option.orderSn" placeholder="请输入订单号"></el-input>
        </el-form-item>
        <el-form-item label="订单状态">
          <el-select v-model="option.orderStatusUnion" placeholder="请选择订单状态"  clearable>
            <option value="1">1</option>
          </el-select>
        </el-form-item>
        <el-form-item label="所属分类">
          <el-select v-model="option.orderStatusUnion" placeholder="请选择所属分类"  clearable>
            <option value="1">1</option>
          </el-select>
        </el-form-item>
        <el-form-item label="商品名称">
          <el-input v-model="option.orderSn" placeholder="请输入商品名称"></el-input>
        </el-form-item>
        <el-form-item label="商品规格">
          <el-select v-model="option.orderStatusUnion" placeholder="请选择商品规格"  clearable>
            <option value="1">1</option>
          </el-select>
        </el-form-item>
        <el-form-item label="座位编号">
          <el-input v-model="option.seatNo"></el-input>
        </el-form-item>
        <el-form-item label="订单时间">
          <el-date-picker v-model="orderTime" type="datetimerange" placeholder="选择订单创建时间" :editable="false"></el-date-picker>
        </el-form-item>
        <el-form-item label="">
          <div class="btn-box">
            <el-button type="primary">查 询</el-button>
            <el-button>取 消</el-button>
          </div>
        </el-form-item>
      </el-form>
    </div>

    <div class="order-list">
      <h5>订单列表</h5>
      <el-table :data="tableData"  style="width: 100%" border :default-sort = "{prop: 'orderSn', order: 'ascending'}">
        <el-table-column  prop="orderSn"  label="订单号" width="100px" align="center" sortable></el-table-column>
        <el-table-column  prop="category"  label="所属分类"  width="150px" align="center" sortable></el-table-column>
        <el-table-column  prop="goodsName"  label="商品名称" width="150px" align="center" sortable></el-table-column>
        <el-table-column  prop="size"  label="规格" width="100px" align="center"></el-table-column>
        <el-table-column  prop="price"  label="金额" width="100px" align="center"></el-table-column>
        <el-table-column  prop="status"  label="订单状态" width="100px" align="center"></el-table-column>
        <el-table-column  prop="seatNo"  label="座位编号" width="100px" align="center"></el-table-column>
        <el-table-column  prop="orderTime"  label="订单时间" width="120px" align="center" sortable></el-table-column>
        <el-table-column  label="操作" width="140px" align="center">
          <template scope="scope">
            <el-button type="danger">取消订单</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
  export default{
    data (){
      return {
        self: this,
        option: {

        },
        orderTime: '',
        tableData: [
          {
            orderSn: '20171010123456',
            category: '汤粉类',
            goodsName: '都匀米粉',
            size: '大',
            price: '20',
            status: '已支付',
            seatNo: '1',
            orderTime: '2017-10-10 10:10:10'
          },
          {
            orderSn: '20171010123456',
            category: '汤粉类',
            goodsName: '都匀米粉',
            size: '大',
            price: '20',
            status: '已送达',
            seatNo: '2',
            orderTime: '2017-10-10 10:10:10'
          },
          {
            orderSn: '20171010123456',
            category: '汤粉类',
            goodsName: '都匀米粉',
            size: '大',
            price: '20',
            status: '已取消',
            seatNo: '3',
            orderTime: '2017-10-10 10:10:10'
          },
        ],

      }
    },
    created (){

    },
    methods :{

    }
  }
</script>

<style lang="less">
  .search-box{
    text-align: left;
    margin-left: -34px;
  }
  .order-list{
    float: left;
    h5{
      border-bottom: 3px solid #ddd;
      text-align: left;
      color: #20a0ff;
    }
  }
</style>
