<template>
  <div id="hash" class="hash">
  <el-input
          type="textarea"
          autosize
          placeholder="请输入内容"
          v-model="textarea1">
  </el-input>
  <el-row>
    <el-button type="primary" @click="hash">加密</el-button>
  </el-row>
  <el-input
          type="textarea"
          autosize
          placeholder="请输入内容"
          v-model="textarea2">
  </el-input>
  </div>
</template>

<script>
    export default {
        name: "hash",
        data: function () {
            return {
                textarea1: '',
                textarea2: ''
            }
        },
        methods: {
            hash: function () {
                let _this = this
                this.axios.get('/api/polls/hash/', {
                    params: {
                        textarea1: this.textarea1
                    }
                }).then(function (resp) {
                    _this.textarea2 = resp.data.textarea2;
                })
            }
        }
    }
</script>

<style scoped>

</style>