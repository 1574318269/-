<template>
  <div id="student_index" class="student_index">
  <el-table id="text"
          :data="tableData"
          style="width: 100%"
          :default-sort="{prop: 'date', order: 'descending'}"
  >
    <el-table-column
            prop="date"
            label="日期"
            sortable
            width="180">
    </el-table-column>
    <el-table-column
            prop="phone"
            label="电话"
            sortable
            width="180">
    </el-table-column>
    <el-table-column
            prop="name"
            label="姓名"
            sortable
            width="180">
    </el-table-column>
    <el-table-column
            prop="address"
            label="地址">
    </el-table-column>
    </el-table>
  </div>
</template>

<script>
    export default {
        name:"student_index",
        data() {
            return {
                tableData: [{
                    date: '2016-05-02',
                    name: '薛平安',
                    address: '太原市',
                    phone: '1887415615'
                }, {
                    date: '2016-05-04',
                    name: '薛明珠',
                    address: '上海市',
                    phone: '1887415615'
                }, {
                    date: '2016-05-01',
                    name: '薛星河',
                    address: '海口市',
                    phone: '1887415615'
                }, {
                    date: '2016-05-03',
                    name: '薛龙阳',
                    address: '郑州市',
                    phone: '1887415615'
                }]
            }
        },
        methods: {

        }
    }
</script>

<style type="css" scoped>

</style>