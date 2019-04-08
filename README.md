# Date:2019-04-07
# 这是一个牛逼的项目,我的第一个项目。

## 这是本人放弃本科专业后毅然选择的发展之路,前程凶吉为卜,但愿可以实现胸中的抱负,掌握技术,不再被人看轻,最主要的还是自己可以养活自己。

### 下一步的目标是学会开发项目,希望通过自己的不断努力,不断学习,掌握更多更强的技术,使得以后开发项目犹如砍瓜切菜版顺手,当然前路铺满荆棘,但是并不能被困难打倒,在困难面前不能停滞不前,要想尽一切办法去破除阴霾,精诚所至金石为开！

#### 自赠：莫愁代码不识你,天下技术尽归君:) 
# 哈哈哈

## [开源协议之间有何异同？](https://www.zhihu.com/question/19568896/answer/20907890)


## 制作了首页App组件
1.完成了 Header 区域,使用的是Mint-UI中的 Header 组件
2.制作底部 Tabber 区域,使用的是MUI的 Tabbar.html
 +购物车字体图标真让我好找,有icons-extra.css样式文件,还有mui-icons-extra.ttf字体文件
3.要在中间区域放置一个 router-view 来展示路由组件

# Date:2019-04-08
改造tabbar为路由,每个小图标都对应着一个路由
1.把tabbar的每个a标签改为router-link,即每个tab切换代表路由切换;
2.制作了tabbar高亮显示,在路由对象router的linkActiveClass属性中把linkActiveClass:router-active-class替换成linkActiveClass:'mui-active',可以使点击图标切换路由高亮显示
4.分别在src目录中新建一个放组件的文件夹components,然后在里面创建4个不同的组件(即tabbar切换时的4个组件),然后引入到router.js中

# header组件
1.用Mint-UI制作轮播图,
2.导入vue-resource模块,向服务器发送请求,请求轮播图数据,把得到的数据保存到当前组件的data里面,再用v-for遍历渲染出来
3.改造九宫格区域的样式