<template>
  <div id="demo" class="demo">
    <h1>那么我们来举个栗子</h1>
    <el-button v-on:click="handleClick" type="primary">吧唧</el-button>
    <h5>接口返回结果:{{ respText }}</h5>
  </div>
</template>

<script>
    export default {
        name: "Demo",
        data: function(){
            return {
                respText: ''
            }
        },
        methods: {
            handleClick: function() {
                this.respText = '爸爸';
            }}}
</script>

<style type="css" scoped>
  .demo {
    background-color:yellowgreen;
  }
</style>