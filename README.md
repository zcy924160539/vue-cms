# Date:2019-04-07
# 这是一个牛逼的项目,我的第一个项目。

## 这是本人放弃本科专业后毅然选择的发展之路,前程凶吉为卜,但愿可以实现胸中的抱负,掌握技术,不再被人看轻,最主要的还是自己可以养活自己。

### 下一步的目标是学会开发项目,希望通过自己的不断努力,不断学习,掌握更多更强的技术,使得以后开发项目犹如砍瓜切菜版顺手,当然前路铺满荆棘,但是并不能被困难打倒,在困难面前不能停滞不前,要想尽一切办法去破除阴霾,精诚所至金石为开！

#### 自赠：莫愁代码不识你,天下技术尽归君:) 
# 哈哈哈

## [开源协议之间有何异同？](https://www.zhihu.com/question/19568896/answer/20907890)


## 制作了首页App组件
1. 完成了 Header 区域,使用的是Mint-UI中的 Header 组件
2. 制作底部 Tabber 区域,使用的是MUI的 Tabbar.html
   购物车字体图标真让我好找,有icons-extra.css样式文件,还有mui-icons-extra.ttf字体文件
3. 要在中间区域放置一个 router-view 来展示路由组件

# Date:2019-04-08
改造tabbar为路由,每个小图标都对应着一个路由
1. 把tabbar的每个a标签改为router-link,即每个tab切换代表路由切换;
2. 制作了tabbar高亮显示,在路由对象router的linkActiveClass属性中把linkActiveClass:router-active-class替换成linkActiveClass:'mui-active',可以使点击图标切换路由高亮显示
4. 分别在src目录中新建一个放组件的文件夹components,然后在里面创建4个不同的组件(即tabbar切换时的4个组件),然后引入到router.js中

# header组件
1. 用Mint-UI制作轮播图,
2. 导入vue-resource模块,向服务器发送请求,请求轮播图数据,把得到的数据保存到当前组件的data里面,再用v-for遍历渲染出来
3. 改造九宫格区域的样式


# Date:2019-04-10
## 改造 新闻资讯 路由资讯

# 新闻资讯页面制作
1. 绘制界面 使用 MUI 中的 media-list.html
2. 使用 vue-resource 获取数据
3. 渲染真实数据

## 实现 新闻列表 点击跳转到新闻详情
1. 把列表中的每一项(a标签)都改造成 router-link ,同时,在跳转的时候应该提供唯一的标识符
2. 创建新闻详情的组件页面 NewsInfo.vue
3. 在路由模块中,将 新闻详情的 路由地址和组件页面对应起来

## 实现新闻详情的页面布局和数据渲染
1. 先创建一个comment.vue组件模板
2. 在需要使用 comment 组件的 页面中,先手动导入 comment组件
3. 在父组件中,使用 components属性中,将刚才导入的 comment 组件,注册为之间的 子组件
4. 将注册子组件时候的 注册名称,以 标签的形式,引入到页面中

## 获取所有的评论数据显示到页面中

## 实现点击加载更多的评论功能
1. 为加载更多按钮绑定点击事件,在事件中请求下一页数据
2. 点击加载更多,让 pageIndex++ ,然后重新调用一下this.getComments()方法,重新获取最新一页的数据
3. 为了防止新数据覆盖老数据的情况,我们在点击加载更多的 时候 把新数据拼接到老数据后面得到一个新数组,从而不丢失评论数据 this.comments = this.comments.concat(result.body.message);
