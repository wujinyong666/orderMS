<template>
  <!--统计管理-->
  <div class="container">
    <el-tabs v-model="activeName" @tab-click="">
      <el-tab-pane label="营业收入统计" name="first">
        <h5>营业收入统计</h5>
        <el-form label-width="100px" :inline="true" :model="taking" ref="takingForm" style="text-align: left;">
          <el-form-item label="营业时间范围">
            <el-date-picker v-model="taking.timeRange" type="datetimerange" placeholder="请选择营业时间范围" :editable="false"></el-date-picker>
          </el-form-item>
          <el-form-item>
            <el-button type="primary">查 询</el-button>
          </el-form-item>
        </el-form>
        <div>
          <el-table :data="takingTableData"  style="width: 100%" border :default-sort = "{prop: 'orderTime', order: 'ascending'}">
            <el-table-column  prop="orderTime"  label="日期" width="200px" align="center"  sortable></el-table-column>
            <el-table-column  prop="goodsNum"  label="商品销售量(份)"  width="200px" align="center"  sortable></el-table-column>
            <el-table-column  prop="taking"  label="营业收入（元）" width="200px" align="center"  sortable></el-table-column>
          </el-table>
        </div>
      </el-tab-pane>
      <el-tab-pane label="菜单分类销售统计" name="second">
        <h5>菜单分类销售统计</h5>
        <el-form label-width="100px" :inline="true" :model="menu" ref="menuForm" style="text-align: left;">
          <el-form-item label="营业时间范围">
            <el-date-picker v-model="menu.timeRange" type="datetimerange" placeholder="请选择营业时间范围" :editable="false"></el-date-picker>
          </el-form-item>
          <el-form-item>
            <el-button type="primary">查 询</el-button>
          </el-form-item>
        </el-form>
        <div>
          <el-table :data="menuTableData"  style="width: 100%" border :default-sort = "{prop: 'orderTime', order: 'ascending'}">
            <el-table-column  prop="orderTime"  label="日期" width="200px" align="center"  sortable></el-table-column>
            <el-table-column  prop="flour"  label="汤粉类(份)" width="200px" align="center"  sortable></el-table-column>
            <el-table-column  prop="rice"  label="米饭类(份)"  width="200px" align="center"  sortable></el-table-column>
            <el-table-column  prop="drinks"  label="酒水类(份)" width="200px" align="center"  sortable></el-table-column>
          </el-table>
        </div>
      </el-tab-pane>
      <el-tab-pane label="商品销售统计" name="third">
        <h5>商品销售统计</h5>
        <el-form label-width="100px" :inline="true" :model="goods" ref="goodsForm" style="text-align: left;">
          <el-form-item label="营业时间范围">
            <el-date-picker v-model="goods.timeRange" type="datetimerange" placeholder="请选择营业时间范围" :editable="false"></el-date-picker>
          </el-form-item>
          <el-form-item>
            <el-button type="primary">查 询</el-button>
          </el-form-item>
        </el-form>
        <div>
          <el-table :data="goodsTableData"  style="width: 100%" border :default-sort = "{prop: 'income', order: 'descending'}">
            <el-table-column  prop="goodsName"  label="商品名称" width="200px" align="center"></el-table-column>
            <el-table-column  prop="goodsNum"  label="商品销售量(份)" width="200px" align="center"  sortable></el-table-column>
            <el-table-column  prop="income"  label="商品销售收入(元)"  width="200px" align="center"  sortable></el-table-column>
          </el-table>
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
        taking: {
          timeRange: '',
          beginTime: '',
          endTime: ''
        },
        menu: {
          timeRange: '',
          beginTime: '',
          endTime: ''
        },
        goods: {
          timeRange: '',
          beginTime: '',
          endTime: ''
        },
        takingTableData: [
          {
            orderTime: '2017-10-1',
            goodsNum: 200,
            taking: 1200000
          },
          {
            orderTime: '2017-10-2',
            goodsNum: 150,
            taking: 1000000
          },
          {
            orderTime: '2017-10-3',
            goodsNum: 230,
            taking: 1500000
          },
        ],
        menuTableData: [
          {
            orderTime: '2017-10-1',
            flour: 100,
            rice: 200,
            drinks: 205
          },
          {
            orderTime: '2017-10-2',
            flour: 100,
            rice: 200,
            drinks: 205
          },
          {
            orderTime: '2017-10-3',
            flour: 100,
            rice: 200,
            drinks: 205
          },
        ],
        goodsTableData: [
          {
            goodsName: '蛋炒饭',
            goodsNum: 1000,  //销售量
            income: 20000,  //销售收入
          },
          {
            goodsName: '桂林米粉',
            goodsNum: 2000,
            income: 30000,
          },
        ],

      }
    },
    created (){

    },
    methods: {


    },

  }
</script>

<style lang="less">
  .container{
    h5{
      text-align: left;
      margin-left: 4px;
    }
  }

</style>
