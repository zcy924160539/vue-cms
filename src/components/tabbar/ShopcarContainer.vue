<template>
  <div class="shopcar-container">
    <div class="goods-list">
      <!-- 商品列表项目区域 -->
      <div class="mui-card" v-for="(item,i) in goodsList" :key="item.id">
        <div class="mui-card-content">
          <div class="mui-card-content-inner">
            <mt-switch
              v-model="$store.getters.getGoodsSelected[item.id]"
              @change="selectedChanged(item.id,$store.getters.getGoodsSelected[item.id])"
            ></mt-switch>
            <img :src="item.thumb_path" alt>
            <div class="info">
              <h1>{{item.title}}</h1>
              <p>
                <span class="price">￥{{item.sell_price}}</span>
                <numbox :initcount="$store.getters.getGoodsCount[item.id]" :goodsid="item.id"></numbox>

                <a href="#" @click.prevent="remove(item.id,i)">删除</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- 结算区域 -->

    <div class="mui-card">
      <div class="mui-card-content">
        <div class="mui-card-content-inner jiesuan">
          <div class="left">
            <p>总计(不含运费)</p>
            <p>
              已勾选商品
              <span class="red">{{ $store.getters.getGoodsCountAndAmount.count}}</span> 件,总价 ￥
              <span class="red">{{ $store.getters.getGoodsCountAndAmount.amount}}</span>
            </p>
          </div>
          <mt-button type="danger">去结算</mt-button>
        </div>
      </div>
    </div>

    <!-- <p>{{$store.getters.getGoodsSelected}}</p> -->
  </div>
</template>

<script>
// 导入子组件shopcar_numbox.vue
import numbox from "../subcomponets/shopcar_numbox.vue";

export default {
  data() {
    return {
      goodsList: [] //购物车中所有商品的数据
    };
  },
  created() {
    this.getGoodsList();
  },
  methods: {
    getGoodsList() {
      // 1. 获取到 store 中所有商品的Id,然后拼接出一个 用逗号分隔的字符串
      var idArr = [];
      this.$store.state.car.forEach(item => idArr.push(item.id));
      // 如果购物车中没有商品,则直接返回,不需要请求数据接口,以防报错
      if (idArr.length <= 0) return;
      // 获取购物车商品列表
      this.$http
        .get("api/goods/getshopcarlist/" + idArr.join(","))
        .then(result => {
          if (result.body.status === 0) {
            this.goodsList = result.body.message;
          }
        });
    },
    remove(id, index) {
      // 点击删除,把商品从 store 中根据 传递的 id 删除,同时把当前组件中的 goodsList 中, 对应要删掉的那个商品,使用对应index来删除

      // 通过index来删除
      this.goodsList.splice(index, 1);

      // 删除 store 中的数据
      this.$store.commit("removeFormCar", id);
    },
    selectedChanged(id, val) {
      // 每当点击开关,把最新的 开关状态同步到 store 中
      console.log(id + "---" + val);
      this.$store.commit("updataGoodsSelected", { id, selected: val });
    }
  },
  components: {
    numbox
  }
};
</script>

<style lang="scss" scopd>
.shopcar-container {
  background-color: #eee;
  overflow: hidden;
  .goods-list {
    .mui-card-content-inner {
      display: flex;
      align-items: center;
    }
    img {
      width: 50px;
      height: 50px;
    }
    h1 {
      font-size: 13px;
    }
    .info {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      .price {
        color: #f00;
        font-weight: bold;
      }
    }
  }
  .jiesuan {
    display: flex;
    justify-content: space-between;
    align-items: center;
    .red {
      color: red;
      font-weight: bold;
      font-size: 16px;
    }
  }
}
</style>