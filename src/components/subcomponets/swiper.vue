<template>
  <div>
    <mt-swipe :auto="4000">
      <!-- 将来,谁调用 此轮播图,谁就要为我们传递lunbotuList -->
      <!-- 此时,lunbotuList 应该是 父组件向子组件传值来设置 -->
      <mt-swipe-item v-for="item in lunbotuList" :key="item.id">
        <img :src="item.img" alt="" :class="{full:isfull}">
      </mt-swipe-item>
    </mt-swipe>
  </div>
</template>

<script>
export default {
  props: ["lunbotuList","isfull"]
};
</script>

<style lang="scss" scoped>
.mint-swipe {
  height: 200px;
  .mint-swipe-item {
    text-align: center;
    img {
      height: 100%;
    }
  }
}
// 在首页轮播图中需要用到width: 100%;但是商品列表轮播图中不能设置width: 100%;
// 在这里,设置一个类样式full,使得width: 100%;
// 在轮播图组件文件中 <img :src="item.img" alt="" :class="{full:isfull}">绑定这个类样式:class="{full:isfull}"
// 在 props中设置一个判断条件isfull,isfull为true需要设置width: 100%;,
.full{
  width: 100%;
}
</style>