// 入口文件

// 导入Vue包
import Vue from 'vue'

// 导入app根组件  
import app from './App.vue'

// 导入Header组件
import { Header } from 'mint-ui'

// 导入 MUI 样式 制作底部Tabbar
import './lib/mui/css/mui.css'

// 注册这个 Header 组件
Vue.component(Header.name,Header)

var vm=new Vue({
    el:'#app',
    data:{

    },
    methods:{

    },
    // render函数导入App.vue组件
    render: c=>c(app)
})