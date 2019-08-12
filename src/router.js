import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Demo from './views/Demo.vue'
import Weather from './views/Weather.vue'
import Base64 from './views/Base64.vue'
import hash from './views/hash.vue'
import compress from './views/compress.vue'
import Student_index from './views/Student_index.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },
      //栗子
    {
      path:"/demo",
      name:'demo',
      component:Demo
    },
      //天气
    {
      path:"/weather",
      name:'weather',
      component:Weather
    },
    //base64
    {
      path:"/base64",
      name:'base64',
      component:Base64
    },
    //hash
    {
      path:"/hash",
      name:'hash',
      component:hash
    },
    //压缩
    {
      path:'/compress',
      name:'compress',
      component:compress
    },
    //学生列表
    {
      path:"/student_index",
      name:'student_index',
      component:Student_index
    }
  ]
})
