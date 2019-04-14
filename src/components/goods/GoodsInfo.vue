<template>
  <div class="goodsinfo-container">
    <!-- 购物车小球 -->
    <transition @before-enter="beforeEnter" @enter="enter" @after-enter="afterEnter">
      <div class="ball" v-show="ballFlag" ref="ball"></div>
    </transition>

    <!-- 商品轮播图区域 -->
    <div class="mui-card">
      <div class="mui-card-content">
        <div class="mui-card-content-inner">
          <!-- 轮播图组件导入 -->
          <swiper :lunbotuList="lunbotu"></swiper>
        </div>
      </div>
    </div>

    <!-- 商品购买区域 -->
    <div class="mui-card">
      <div class="mui-card-header">{{goodsinfo.title}}</div>
      <div class="mui-card-content">
        <div class="mui-card-content-inner">
          <p class="price">
            市场价:
            <del>￥ {{goodsinfo.market_price}}</del>&nbsp;&nbsp;销售价:
            <span class="now_price">￥{{goodsinfo.sell_price}}</span>
          </p>
          <p>
            购买数量：
            <numbox @getCount="getSelectedCount" :max="goodsinfo.stock_quantity"></numbox>
          </p>
          <p>
            <mt-button type="primary" size="small">立即购买</mt-button>
            <mt-button type="danger" size="small" @click="addToShopcar">加入购物车</mt-button>
            <!--  -->
          </p>
        </div>
      </div>
    </div>

    <!-- 商品参数区域 -->
    <div class="mui-card">
      <div class="mui-card-header">商品参数</div>
      <div class="mui-card-content">
        <div class="mui-card-content-inner">
          <p>商品货号：{{goodsinfo.goods_no}}</p>
          <p>库存情况：{{goodsinfo.stock_quantity}} 件</p>
          <p>上架时间：{{goodsinfo.add_time | dateFormat}}</p>
        </div>
      </div>
      <div class="mui-card-footer">
        <mt-button type="primary" size="large" plain @click="goDesc(id)">图文介绍</mt-button>
        <mt-button type="danger" size="large" plain @click="goComment(id)">商品评论</mt-button>
      </div>
    </div>
  </div>
</template>

<script>
// 导入轮播图组件
import swiper from "../subcomponets/swiper.vue";
// 导入numbox数字选择框组件
import numbox from "../subcomponets/goodsinfo_numbox.vue";
export default {
  data() {
    return {
      id: this.$route.params.id, // 将路由参数中的id挂载在data上
      lunbotu: [], //轮播图的数据
      goodsinfo: {}, // 获取商品信息
      ballFlag: false, // 控制小球显示隐藏
      selectedCount: 1 // 保存用户选中的商品数量,默认用户买一件
    };
  },
  created() {
    this.getLunbotu();
    this.getGoodsInfo();
  },
  methods: {
    // 获取轮播图数据
    getLunbotu() {
      this.$http.get("api/getthumimages/" + this.id).then(result => {
        if (result.body.status === 0) {
          // 轮播图组件导入图片地址的接口是item.img,在这里我们需要在获取到的result.body.message数组中手动循环加入 item.img 这一项使 item.img = item.src,从而在页面中渲染出轮播图
          result.body.message.forEach(item => {
            item.img = item.src;
          });
          this.lunbotu = result.body.message;
        }
      });
    },
    // 获取商品购买数据
    getGoodsInfo() {
      this.$http.get("api/goods/getinfo/" + this.id).then(result => {
        if (result.body.status === 0) {
          this.goodsinfo = result.body.message[0];
        }
      });
    },
    // 点击图文介绍按钮进入图文介绍页面
    goDesc(id) {
      // 点击使用编程式导航跳转到图文介绍页面
      this.$router.push({ name: "goodsdesc", params: { id } });
    },
    // 点击商品评论按钮进入商品评论页面
    goComment(id) {
      // 点击使用编程式导航跳转到商品评论页面
      this.$router.push({ name: "goodscomment", params: { id } });
    },
    addToShopcar() {
      // 添加到购物车
      this.ballFlag = !this.ballFlag;

      // 拼接一个要保存到store中的对象car数组里的商品信息对象
      // { id:商品id,count:要购买的数量,price:商品单价,selected:商品在购物车中是否被选中false}
      var goodsinfo = {
        id: this.id,
        count: this.selectedCount,
        price: this.goodsinfo.sell_price,
        selected: true
      };
      // 调用 stroe 中的 mutations 来将商品加入到购物车
      this.$store.commit('addToCar',goodsinfo)
    },
    // 小球去购物车的半场动画的钩子函数
    beforeEnter(el) {
      // 刚开始的小球位置
      el.style.transform = "translate(0,0)";
    },
    enter(el, done) {
      el.offsetWidth;

      // getBoundingClientRect()是个DOM 的方法,用于获取矩形左上角在页面中的位置

      // 获取小球在页面中的位置
      const ballPosition = this.$refs.ball.getBoundingClientRect();
      // 获取徽标在页面中的位置(这里用DOM较方便一些)
      const badgePosition = document
        .querySelector("#badge")
        .getBoundingClientRect();

      const xDist = badgePosition.left - ballPosition.left;
      const yDist = badgePosition.top - ballPosition.top;

      el.style.transform = `translate(${xDist}px,${yDist}px)`; // xDist yDist让这两个值为变化的,使得小球动画可以适配不同的分辨率
      el.style.transition = "all 0.5s cubic-bezier(.37,-0.25,1,.66)";
      done();
    },
    afterEnter(el) {
      this.ballFlag = !this.ballFlag;
    },
    getSelectedCount(count) {
      // 当子组件把 选中的数量（count）传递给父组件的时候,把选中的值保存到data（this.selectedCount）上
      this.selectedCount = count;
      console.log("父组件拿到的数量值=" + count);
    }
  },
  components: {
    swiper,
    numbox
  }
};
</script>

<style lang="scss" scoped>
.goodsinfo-container {
  background-color: #eee;
  overflow: hidden;
  .now_price {
    color: #f00;
    font-size: 16px;
    font-weight: bold;
  }
  .mui-card-footer {
    display: block;
    button {
      margin: 5px 0;
    }
  }
  .ball {
    width: 15px;
    height: 15px;
    border-radius: 50%;
    background-color: #f00;
    position: absolute;
    z-index: 99;
    top: 410px;
    left: 152px;
  }
}
</style>
