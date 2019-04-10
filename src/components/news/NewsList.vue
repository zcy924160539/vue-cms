<template>
  <div>
    <ul class="mui-table-view">
      <li class="mui-table-view-cell mui-media" v-for="item in newsList" :key="item.id">
        <router-link :to="'/home/newslist/newsinfo'+item.id">
          <img class="mui-media-object mui-pull-left" :src="item.img_url">
          <div class="mui-media-body">
            <h1>{{item.title}}</h1>
            <p class="mui-ellipsis">
              <span>发表时间:{{item.add_time | dateFormat}}</span>
              <span>点击:{{item.click}}次</span>
            </p>
          </div>
        </router-link>
      </li>
    </ul>
  </div>
</template>


<script>
import { Toast } from "mint-ui";
export default {
  data() {
    return {
      newsList: []
    };
  },
  created() {
    this.getNewsList();
  },
  methods: {
    getNewsList() {
      // 获取新闻列表
      this.$http.get("api/getnewslist").then(result => {
        if (result.body.status === 0) {
          //成功 则把数据保存到data上
          this.newsList = result.body.message;
        } else {
          // 失败
          Toast("新闻列表加载失败");
        }
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.mui-table-view {
  li {
    h1 {
      font-size: 14px;
    }
    .mui-ellipsis {
      font-size: 12px;
      color: #26a2ff;
      // 弹性布局实现p标签里的span左右对齐
      display: flex;
      justify-content: space-between;
    }
  }
}
</style>
