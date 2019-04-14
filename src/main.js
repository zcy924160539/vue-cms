// 入口文件

// 导入Vue包
import Vue from 'vue'

// 1.1 导入vue-router路由的包
import VueRouter from 'vue-router'
// 1.2 安装路由模块
Vue.use(VueRouter)


// 注册 Vuex 
import Vuex from 'vuex'
Vue.use(Vuex)

// 每次进入网站,肯定会调用 main.js在刚调用的时候,先从本地存储中把购物车的数据读出来,放到 store 中
var car = JSON.parse(localStorage.getItem('car') || '[]')


// 创建 一个状态管理对象store实例
var store = new Vuex.Store({
    state: { // 获取state数据: this.$store.state.***
        car: car // 将购物车上商品的数据用一个数组存储起来,在car数组中存储商品对象 { id:商品id,count:要购买的数量,price:商品单价,selected:商品在购物车中是否被选中false}
    },
    mutations: { // 获取 mutations里面的方法: this.$store.commit(参数1:"方法名",参数2),注意只能传两个参数，第一个参数一定是"方法名",第二个可以是一个变量或一个数组,或一个对象
        addToCar(state, goodsinfo) {
            // 点击进入购物车按钮,把商品信息加入到 store 中的 car 上
            // 分析:
            // 1. 如果购物车之前就有对应商品了,只需要更新实例就可以了
            // 2. 如果没有则直接把商品数据 push 到 car 中即可
            var flag = false; //假设在购物车中没有找到对应的商品
            state.car.some(item => {
                if (item.id == goodsinfo.id) {
                    item.count += parseInt(goodsinfo.count)
                    // 找到后让flag为true
                    flag = true
                    // 符合条件后终止后续循环
                    return true
                }
            })
            // 如果最终循环完毕都没找到的情况下,则把商品数据直接 push 到购物车中
            if (!flag) {
                state.car.push(goodsinfo)
            }
            // 当更新car之后,把 car 数组存储到本地的 localStorage 中
            localStorage.setItem('car', JSON.stringify(state.car))
        },
        updatedGoodsInfo(state, goodsinfo) { // 修改购物车页面中商品的数量值
            state.car.some(item => {
                if (item.id == goodsinfo.id) {
                    item.count = parseInt(goodsinfo.count)
                    return true
                }
            })
            // 当修改为商品数量,把最新的购物车数据保存到 本地储存
            localStorage.setItem('car', JSON.stringify(state.car))
        },
        removeFormCar(state, id) {
            // 根据id从 store 中的购物车中删除对应的那条商品数据
            state.car.some((item, i) => {
                if (item.id == id) {
                    state.car.splice(i, 1)
                    return true
                }
            })
            // 将删除完毕后的最新的购物车数据同步到本地存储
            localStorage.setItem('car', JSON.stringify(state.car))
        },
        updataGoodsSelected(state, info) {
            state.car.some(item => {
                if (item.id == info.id) {
                    item.selected = info.selected
                }
            })
            // 把最新的使用购物车商品的状态保存到 store中去
            localStorage.setItem('car', JSON.stringify(state.car))
        }
    },
    getters: { // this.$store.getters.***
        // 相当于 计算属性, 也相当于 filters 
        getAllCount(state) {
            var c = 0;
            state.car.forEach(item => {
                c += item.count
            })
            return c
        },
        getGoodsCount(state) {
            var o = {}
            state.car.forEach(item => {
                // 把每一项商品id数量作为键,商品数量作为值,拿到 o 这个对象,就可以通过它的id去获取对应商品的数量了
                o[item.id] = item.count
            })
            return o
        },
        getGoodsSelected(state) {
            var o = {}
            state.car.forEach(item => {
                o[item.id] = item.selected
            })
            return o
        },
        getGoodsCountAndAmount(state) {
            var o = {
                count: 0, // 勾选的数量
                amount: 0 // 勾选的总价
            }
            state.car.forEach(item => {
                if (item.selected) {
                    o.count += item.count
                    o.amount += item.price * item.count
                }
            })
            return o
        }
    }
})

// 2.1 导入vue-resource
// 2.2 安装vue-resource
import VueResource from 'vue-resource'
Vue.use(VueResource)


// 全局配置请求的根路径(注意要写在VueResource模块后面)
Vue.http.options.root = 'http://www.liulongbin.top:3005'
// 全局设置 post 时候表单数据格式的组织形式 application/x-www-form-urlencoded
Vue.http.options.emulateHTTP = true;

// 导入app根组件  
import app from './App.vue'

// 导入 MUI 样式 制作底部Tabbar
import './lib/mui/css/mui.css'

// MUI额外的字体图标样式(购物车图标)
import './lib/mui/css/icons-extra.css'
import './lib/css/golbal.scss'

// 导入 Mint-UI 组件
// import { Header,Swipe,SwipeItem,Button,Lazyload } from 'mint-ui'
import MintUI from 'mint-ui'
Vue.use(MintUI)
import 'mint-ui/lib/style.css'

// 安装图片预览插件
import VuePreview from 'vue-preview'
Vue.use(VuePreview)


// 导入数时间插件
import moment from 'moment'

// 全局定义时间过滤器
Vue.filter('dateFormat', function (dataStr, pattern = "YYYY-MM-DD HH:mm:ss") {
    return moment(dataStr).format(pattern)
})

// 注册这个 Header 组件
// Vue.component(Header.name,Header)
// Vue.component(Swipe.name,Swipe)
// Vue.component(SwipeItem.name,SwipeItem)
// Vue.component(Button.name, Button);
// Vue.component(Lazyload)


// 1.3 导入自己的路由模块 router.js
import router from './router.js'

// 创建一个Vue实例
var vm = new Vue({
    el: '#app',
    data: {

    },
    methods: {

    },
    // render函数导入App.vue组件
    render: c => c(app),
    // 1.4 挂载路由对象到vm实例上
    router,
    // 把创建好的状态管理对象store挂载到vue身上
    store
})