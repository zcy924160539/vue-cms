<template>
  <!-- 问题：在异步的情况下,我们不知道什么时候才能拿到真正的max值,但终归有一刻会拿到max值 -->
  <!-- 可以使用 watch 属性监听, 监听父组件传递过来的 max 值,不管watch被触发几次,但是最后一次,肯定是一个合法的max数值-->
  <div class="mui-numbox" data-numbox-min="1">
    <button class="mui-btn mui-btn-numbox-minus" type="button">-</button>
    <input
      id="test"
      class="mui-input-numbox"
      type="number"
      value="1"
      @change="countChanged"
      ref="numbox"
    >
    <button class="mui-btn mui-btn-numbox-plus" type="button">+</button>
  </div>
</template>

<script>
import mui from "../../lib/mui/js/mui.min.js";
export default {
  data() {
    return {};
  },
  mounted() {
    //初始化数字选择框组件
    mui(".mui-numbox").numbox();
    console.log(this.max);
    // 这里的max是父组件GoodsInfo.vue传递过来的,父组件传递过来的max在父组件中最初是通过发送网络请求异步获取到的
    // 在响应结果没得到之前,代码已经解析完毕了,父组件还没拿到确切的响应数据,但是因为异步操作,父组件只能传递一个空的max过来,所以解析结果为undefined
  },
  methods: {
    countChanged() {
      // 每当文本框的数据被修改的时候,立即把 最新的数据通过事件调用传递给父组件
      // console.log(this.$refs.numbox.value)
      this.$emit("getCount", parseInt(this.$refs.numbox.value));
    }
  },
  props: ["max"],
  // 监听传过来的max值
  watch: {
    max: function(newVal, oldVal) {
      // 使用js API 设置numbox的最大值
      mui(".mui-numbox")
        .numbox()
        .setOption("max", newVal);
    }
  }
};
</script>

<style lang="scss" scoped>
</style>