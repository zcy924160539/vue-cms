<template>
  <div class="goods-list">
    <!-- 商品展示 -->

    <!-- 老方式改造路由 -->
    <!-- <router-link class="goods-item" v-for="item in goodsList" :key="item.id" :to="'/home/goodsinfo/'+item.id" tag="div">
            <img :src="item.img_url" alt="">
            <h1 class="title">{{item.title}}</h1>
            <div class="info">
                <p class="price">
                    <span class="now">￥{{item.sell_price}}</span>
                    <span class="old">￥{{item.market_price}}</span>
                </p>
                <p class="sell">
                    <span>热卖中</span>
                    <span>剩{{item.stock_quantity}}件</span>
                </p>
            </div>
    </router-link>-->

    <!-- 在网页中有两种跳转方式 -->
    <!-- 方式1：使用 a标签 的形式叫做 标签跳转 -->
    <!-- 方式2： 使用 window.location.href  的形式,叫做编程式导航 -->
    <div class="goods-item" v-for="item in goodsList" :key="item.id" @click="goDetail(item.id)">
      <img :src="item.img_url" alt>
      <h1 class="title">{{item.title}}</h1>
      <div class="info">
        <p class="price">
          <span class="now">￥{{item.sell_price}}</span>
          <span class="old">￥{{item.market_price}}</span>
        </p>
        <p class="sell">
          <span>热卖中</span>
          <span>剩{{item.stock_quantity}}件</span>
        </p>
      </div>
    </div>

    <!-- 加载更多 -->
    <mt-button type="danger" size="large" @click="getMore">加载更多</mt-button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      pageindex: 1, // 分页的页数,默认展示的是第一页
      goodsList: [] // 用于存放商品列表的数组
    };
  },
  created() {
    this.getGoodsList();
  },
  methods: {
    getGoodsList() {
      this.$http
        .get("api/getgoods?pageindex=" + this.pageindex)
        .then(result => {
          if (result.body.status === 0) {
            // 获取当前数据,然后把旧数据和当前数据用concat拼接起来
            this.goodsList = this.goodsList.concat(result.body.message);
          }
        });
    },
    getMore() {
      this.pageindex++; // 页面自增
      this.getGoodsList(); // 再加载图片
    },
    goDetail(id) {
      // 使用js的形式进行路由导航

      // 注意：一定要区分 this.$route 和 this.$router 这两个对象
      // this.$route是路由参数对象,所有路由中的参数 params 和 query 都属于 this.$route这个对象
      // this.$router是一个路由导航对象,用它可以分别地使用js代码实现路由的前进后退,跳转到新的 url 地址

      // 用法1. router.push('home') //传入一个路由路径的字符串
      // this.$router.push('/home/goodsinfo/'+id)

      // 用法2. router.push({path:'home'}) //传入一个对象
      // this.$router.push({path:'/home/goodsinfo/'+id})

      // 用法3.1 router.push({name:'user,params:{user:'123'}}) // 传递一个命名的路由
      this.$router.push({ name: "goodsinfo", params: { id: id } });
      // 用法3.2 router.push({path:'register',query:{plan:'private'}}) //带查询参数，变成 /register?plan=private
      // 注意：如果提供了 path，params 会被忽略，上述例子中的 query 并不属于这种情况。

    }
  }
};
</script>

<style lang="scss" scoped>
.goods-list {
  display: flex;
  flex-wrap: wrap;
  padding: 8px;
  justify-content: space-between;
  .goods-item {
    width: 49%;
    border: 1px solid #ccc;
    box-shadow: 0 0 8px #ccc;
    margin: 4px 0;
    padding: 2px;
    display: flex;
    flex-direction: column; // 主轴方向改为纵向
    justify-content: space-between;

    // 设置最小高度,使得还没加载出来时,盒子不会因为没内容而网上缩
    min-height: 293px;
    img {
      width: 100%;
    }
    .title {
      font-size: 14px;
    }
  }
  .info {
    background-color: #eee;
    p {
      margin: 0;
      padding: 5px;
    }
    .price {
      .now {
        color: #f00;
        font-weight: bold;
        font-size: 16px;
      }
      .old {
        text-decoration: line-through;
        font-size: 12px;
        margin-left: 10px;
      }
    }
  }
  .sell {
    display: flex;
    justify-content: space-between;
    font-size: 13px;
  }
}
</style>
