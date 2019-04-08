// 入口文件

// 导入Vue包
import Vue from 'vue'

// 1.1 导入vue-router路由的包
import VueRouter from 'vue-router'
// 1.2 安装路由模块
Vue.use(VueRouter)

// 2.1 导入vue-resource
// 2.2 安装vue-resource
import VueResource from 'vue-resource'
Vue.use(VueResource)

// 导入app根组件  
import app from './App.vue'

// 导入 MUI 样式 制作底部Tabbar
import './lib/mui/css/mui.css'

// MUI额外的字体图标样式(购物车图标)
import './lib/mui/css/icons-extra.css'

// 导入 Mint-UI 组件
import { Header,Swipe,SwipeItem } from 'mint-ui'



// 注册这个 Header 组件
Vue.component(Header.name,Header)
Vue.component(Swipe.name,Swipe)
Vue.component(SwipeItem.name,SwipeItem)

// 1.3 导入自己的路由模块 router.js
import router from './router.js'


var vm=new Vue({
    el:'#app',
    data:{

    },
    methods:{

    },
    // render函数导入App.vue组件
    render: c=>c(app),
    // 1.4 挂载路由对象到vm实例上
    router
})