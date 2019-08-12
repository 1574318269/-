<template>
  <div id="demo" class="demo">
    <h1>学生列表</h1>
    <!--    <p> 修改的地方有main.js、router.js、 App.vue、 views/Demo.vue 。<br>-->
    <!--      过程：用UI库引入了一个别人写好的按钮，触发事件，请求接口，获取数据，渲染数据到子组件。-->
    <!--    </p>-->
    <div>
      <label for="name">姓名</label>
      <input type="text" id="name" placeholder="请输入学生姓名" v-model="newPerson.name">
    </div>
    <div>
      <label for="age">年龄</label>
      <input type="text" id="age" placeholder="请输入学生年龄" v-model="newPerson.age">
    </div>
    <div>
      <label for="gender">性别</label>
      <select name="" id="gender" v-model="newPerson.gender">
        <option value="female" selected>female</option>
        <option value="male">male</option>

      </select>
    </div>
    <div>
      <label for="tel">手机</label>
      <input type="text" id="tel" placeholder="请输入学生手机" v-model="newPerson.tel">
    </div>
    <div>
      <!--      <button @click="createNewPerson">创建学生信息</button>-->
      <el-button v-on:click="createNewPerson" type="primary">创建学生信息</el-button>
    </div>

    <table>
      <thead>
      <tr>
        <th>姓名</th>
        <th>性别</th>
        <th>年龄</th>
        <th>手机</th>
        <th>操作</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="(p, index) in persons">
        <td>{{ p.name }}</td>
        <td>{{ p.gender }}</td>
        <td>{{ p.age }}</td>
        <td>{{ p.tel }}</td>
        <td>
          <!--              <button @click="delPerson(index)">删除</button>-->
          <el-button v-on:click="delPerson(index)" type="primary">删除</el-button>
        </td>
      </tr>
      </tbody>
    </table>
    <!--    <el-button v-on:click="handleClick" type="primary">点击向后端发起请求</el-button>-->
    <!--    <h5>接口返回结果：{{ respText }}</h5>-->
  </div>
</template>

<script>
    export default {
        name: "Demo",
        data: function(){
            return {
                // respText: '',
                persons: [
                    // {name: '', age: '', gender: '', tel: ''}
                ],
                newPerson: {
                    name: '',
                    age: '18',
                    gender: '',
                    tel: ''
                }
            }
        },
        methods: {
            handleClick: function(){
                console.log(11111);
                // http://127.0.0.1:5000/index
                // /api/index
                let _this = this;
                this.axios.get('/api/index', {
                    params: {
                        // kw: 'ip'
                    }
                }).then(function(resp){
                    console.log(resp);
                    console.log(resp.data, typeof resp);
                    console.log(resp.data.msg);
                    console.log(this); // undefined
                    // axios中this指向问题  https://www.cnblogs.com/lalalagq/p/9961762.html  新生命一个变量或用es6函数写法
                    console.log(_this)
                    _this.respText = resp.data.msg;
                })
                // .then((resp)=> {console.log(this)})
            },
            createNewPerson: function () {
                // 验证
                if (this.newPerson.name == '') {
                    alert('姓名不能为空');
                    return;
                }
                // 插入
                this.persons.push(this.newPerson);
                // 清空
                this.newPerson = {
                    name: '',
                    age: '',
                    gender: '',
                    tel: ''
                }
            },
            delPerson: function (index) {
                this.persons.splice(index, 1)
            }
        }
    }
</script>

<style type="css" scoped>
  .demo {
    color: #b0e690;
    font-family: "楷体";
    font-size: 20px;
  }
  table {
    border: 2px solid #751f1d;
    border-radius: 20px;
    background-size: 100% 200%;
    color: #751f1d;
  }
</style>