<template>
  <div class="app-container">
    <!-- 顶部 Header区域 -->

    <mt-header fixed title="购吗？">
      <mt-button type="primary" icon="back" slot="left" @click="back" v-show="flag">返回</mt-button>
    </mt-header>

    <!-- 动画包裹router-view 区域 -->
    <transition>
      <!-- 中间的路由 router-view 区域 -->
      <router-view></router-view>
    </transition>

    <!-- 底部的 Tabbar 区域 -->
    <nav class="mui-bar mui-bar-tab">
      <router-link to="/home" class="mui-tab-item-llb">
        <span class="mui-icon mui-icon-home"></span>
        <span class="mui-tab-label">首页</span>
      </router-link>
      <router-link to="/member" class="mui-tab-item-llb">
        <span class="mui-icon mui-icon-contact"></span>
        <span class="mui-tab-label">会员</span>
      </router-link>
      <router-link to="/shopcar" class="mui-tab-item-llb">
        <span class="mui-icon mui-icon-extra mui-icon-extra-cart">
          <!-- 记数小球 -->
          <span class="mui-badge" id="badge">{{$store.getters.getAllCount}}</span>
        </span>
        <span class="mui-tab-label">购物车</span>
      </router-link>
      <router-link to="/search" class="mui-tab-item-llb">
        <span class="mui-icon mui-icon-search"></span>
        <span class="mui-tab-label">搜索</span>
      </router-link>
    </nav>
  </div>
</template>

<script>
export default {
	data(){
		return {
      flag:false
    }
  },
  created(){
    this.flag = this.$route.path === '/home' ? false : true;
  },
  methods: {
    back(){ // 返回按钮点击事件
		  this.$router.go(-1)
	  }
  },
  watch:{
    '$route.path':function(newVal){
      this.flag = newVal==='/home'?false:true
    }
  }
};
</script>

<style lang="scss" scoped>
.mint-header {
  z-index: 99;
}
.app-container {
  padding-top: 40px;
  padding-bottom: 50px;
  overflow-x: hidden;
}
.v-enter {
  opacity: 0;
  transform: translateX(100%);
}
.v-leave-to {
  opacity: 0;
  transform: translateX(-100%);
  position: absolute;
}
.v-enter-active,
.v-leave-active {
  transition: all 0.8s ease;
}

// 改类名解决 tabbar 点击无法切换的问题
.mui-bar-tab .mui-tab-item-llb.mui-active {
  color: #007aff;
}
.mui-bar-tab .mui-tab-item-llb {
  display: table-cell;
  overflow: hidden;
  width: 1%;
  height: 50px;
  text-align: center;
  vertical-align: middle;
  white-space: nowrap;
  text-overflow: ellipsis;
  color: #929292;
}
.mui-bar-tab .mui-tab-item-llb .mui-icon {
  top: 3px;
  width: 24px;
  height: 24px;
  padding-top: 0;
  padding-bottom: 0;
}

.mui-bar-tab .mui-tab-item-llb .mui-icon ~ .mui-tab-label {
  font-size: 11px;
  display: block;
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>
