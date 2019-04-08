<template>
  <div>
    <!-- 轮播图区域 -->
    <!-- 由于没有数据接口,这里轮播图只能用本地图片代替 -->
    <mt-swipe :auto="4000">
      <mt-swipe-item v-for="item in lunbotuList" :key="item.url">
        <img :src="item.img" alt>
      </mt-swipe-item>
    </mt-swipe>
    <ul class="mui-table-view mui-grid-view mui-grid-9">
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-4">
        <a href="#">
          <img src="../../images/menu1.png" alt="">
          <div class="mui-media-body">新闻资讯</div>
        </a>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-4">
        <a href="#">
          <img src="../../images/menu2.png" alt="">
          <div class="mui-media-body">图片分享</div>
        </a>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-4">
        <a href="#">
          <img src="../../images/menu3.png" alt="">
          <div class="mui-media-body">商品购买</div>
        </a>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-4">
        <a href="#">
          <img src="../../images/menu4.png" alt="">
          <div class="mui-media-body">留言反馈</div>
        </a>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-4">
        <a href="#">
          <img src="../../images/menu5.png" alt="">
          <div class="mui-media-body">视频专区</div>
        </a>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-4">
        <a href="#">
          <img src="../../images/menu6.png" alt="">
          <div class="mui-media-body">联系我们</div>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
import { Toast } from "mint-ui";
export default {
  data() {
    return {
      // 由于没有数据接口,这里轮播图只能用本地图片代替
      lunbotuList: [
        { img: "src/images/01.jpg", url: "01" },
        { img: "src/images/02.jpg", url: "02" },
        { img: "src/images/03.jpg", url: "03" },
        { img: "src/images/04.jpg", url: "04" },
        { img: "src/images/05.jpg", url: "05" }
      ]
    };
  },
  created() {
    // 页面渲染完成后调用方法请求数据
    this.getLunbotu();
  },
  methods: {
    getLunbotu() {
      //    由于没有数据接口,这里轮播图只能用本地图片代替
      //    this.$http.get("http://vue.studyit.io/api/getlunbo").then(result => {
      //        if(result.body.status === 0){
      //            // 数据请求成功
      //            this.lunbotuList = result.body.message;
      //            Toast('图片加载成功')
      //        }else {
      //            // 数据请求失败
      //            Toast('图片加载失败...')
      //        }
      //    })
      Toast("图片加载成功");
    }
  }
};
</script>

<style lang="scss" scoped>
.mint-swipe {
  height: 200px;
  .mint-swipe-item {
    &:nth-child(1) {
      background-color: #f00;
    }
    &:nth-child(2) {
      background-color: #0f0;
    }
    &:nth-child(3) {
      background-color: #00f;
    }

    img {
      width: 100%;
      height: 100%;
    }
  }
}
//清除 ul 的背景色和边框
.mui-grid-view.mui-grid-9 {
  background-color: #fff;
  border: none;
  img{
      width: 60px;
      height: 60px;
  }
  .mui-media-body{
      font-size: 13px;
  }
}
// 清除 li 的边框 
.mui-grid-view.mui-grid-9 .mui-table-view-cell {
  border: none;
}
</style>