  <template>
    <div id="base64" class="base64">
    <el-input
            type="textarea"
            autosize
            placeholder="请输入内容"
            v-model="textarea1">
    </el-input>
    <el-row>
      <el-button type="primary" @click="b64_encode">加密</el-button>
      <el-button type="primary" @click="b64_decode">解密</el-button>
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
          name: 'base64',
          data: function () {
              return {
                  textarea1: '',
                  textarea2: ''
              }
          },
          methods: {
              b64_encode: function () {
                  let _this = this
                  this.axios.get('/api/polls/encode/', {
                      params: {
                          textarea1:this.textarea1
                      }
                  }).then(function (resp) {
                      _this.textarea2 = resp.data.textarea2;
                  })
              },
              b64_decode: function () {
                  let _this = this
                  this.axios.get('/api/polls/decode/', {
                      params: {
                          textarea2:this.textarea2
                      }
                  }).then(function (resp) {
                      _this.textarea1 = resp.data.textarea1;
                  })
              }
          }
      }
  </script>

  <style scoped>

  </style>