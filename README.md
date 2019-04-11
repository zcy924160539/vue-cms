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

# Date:2019-04-11
## 发表评论
1. v-model双向绑定文本框数据 textarea
2. 为点击发表评论按钮绑定一个事件
3. 校验评论内容是否为空,如果为空,则Toast提示用户 评论内容不能为空
4. 通过vue-resource 发送一个请求,把评论内容提交个服务器
5. 当发表评论OK后,重新刷新列表,以查看最新的评论
6. 用post请求发评论, 当评论成功发表后,在客户端,手动拼接出一个最新 的评论对象,然后用数组的unshift方法,把最新的评论,追加到 comment 的开头,就能使新发表的评论指顶了

## 改造图片分享按钮为路由链接,并显示其对应的组件页面
1. 顶部滑动导航条制作的bug
1.1 在MUI中拷过来顶部滑动导航条,发现顶到最顶了 解决：把 mui-fullscreen(满屏显示) 这个类样式去掉,
1.2 导入mui.js,然后调入官方提供的方式去初始化
...

mui('.mui-scroll-wrapper').scroll({
	deceleration: 0.0005 //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
});

...

在初始化滑动条的时候导入了mui.js, 但是控制台报错了 Uncaught TypeError: 'caller', 'callee', and 'arguments' properties may not be accessed on strict mode functions or the arguments objects for calls to them
解决方案：
第一步：cnpm install babel-plugin-transform-remove-strict-mode -D(安装babel插件transform-remove-strict-mode),
         
第二步：装完插件后,在babelrc文件中添加配置
{
    "plugins": ["transform-remove-strict-mode"]
}
1.3 滑动滑条谷歌浏览器报错：Unable to preventDefault inside passive event listener due to target being treated as passive. See https://www.chromestatus.com/features/5093566007214080
解决方案:在style中加入
* {
  touch-action: pan-y;
}

1.4 刚进入 图片分享页面是 ,滑动条不能正常工作,经过分析,发现 如果要初始化 滑动条,必须等DOM元素加载完成才能初始化,所以要把初始化的代码写在
mounted这个生命周期构造函数中

1.5 tabbar 无法正常切换组件
解决：在App.vue组件中 把 .mui-tab-item 这个类样式重新改一下类名


## 制作图片列表区域
1. 图片列表需要使用懒加载技术(lazy-load),可以在Mint-UI提供的组件中去找
2. 根据lazy-load文档说明来进行使用
3. 渲染图片列表数据

## 实现了 图片列表 懒加载改造 和样式美化(实现懒加载过程中,Mint-UI全部都导入了(没办法按需导入实现不了懒加载的效果))


## 实现了点击图片 跳转到 图片详情页面
1. 在改造 li 的 router-link 的时候,需要使用 tag=li 这个属性

## 实现 详情页面 的布局和美化,同时获取数据渲染页面

# 实现 图片详情中的 缩略图功能
1. 使用 插件vue-preview 这个缩略图插件
2. 使用 介绍 ：https://blog.csdn.net/qq_36742720/article/details/83270636


## 绘制 商品列表 页面基本结构并美化
