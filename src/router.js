// 路由入口js文件

// 导入vue-router这个包
import VueRouter from 'vue-router'

// 导入对应路由组件
import HomeContainer from './components/tabbar/HomeContainer.vue'
import MemberContainer from './components/tabbar/MemberContainer.vue'
import ShopcarContainer from './components/tabbar/ShopcarContainer.vue'
import SearchContainer from './components/tabbar/SearchContainer.vue'
import NewsList from './components/news/NewsList.vue'
import NewsInfo from './components/news/NewsInfo.vue'
import PhotoList from './components/photos/PhotoList.vue'
import PhotoInfo from './components/photos/PhotoInfo.vue'
import GoodsList from './components/goods/GoodsList.vue'




// 创建路由对象
var router=new VueRouter({
    routes:[// 匹配路由规则
        { path:'/',redirect:'/home'},// 重定向到home
        { path:'/home',component:HomeContainer },
        { path:'/member',component:MemberContainer },
        { path:'/shopcar',component:ShopcarContainer },
        { path:'/search',component:SearchContainer },
        { path:'/home/newslist',component:NewsList },
        { path:'/home/newslist/newsinfo:id',component:NewsInfo},
        { path:'/home/photolist',component:PhotoList},
        { path: '/home/photoinfo/:id',component:PhotoInfo},
        { path: '/home/goodslist',component:GoodsList}
        
    ],
    linkActiveClass:'mui-active'// 覆盖默认路由高亮的类,把router-active-class替换为mui-active
})

// 把 router 对象暴露出去
export default router