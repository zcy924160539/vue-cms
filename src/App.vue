<template>
   <div class="app-container">

      <!-- 顶部 Header区域 -->
      <mt-header fixed title="购吗？">
         
      </mt-header>

      <!-- 中间的路由 router-view 区域 -->
      
      <!-- 底部的 Tabbar 区域 -->
      <nav class="mui-bar mui-bar-tab">
			<a class="mui-tab-item mui-active" href="#tabbar">
				<span class="mui-icon mui-icon-home"></span>
				<span class="mui-tab-label">首页</span>
			</a>
			<a class="mui-tab-item" href="#tabbar-with-chat">
				<span class="mui-icon mui-icon-contact"></span>
				<span class="mui-tab-label">会员</span>
			</a>
			<a class="mui-tab-item" href="#tabbar-with-contact">
				<span class="mui-icon mui-icon-extra mui-icon-extra-cart">
					<span class="mui-badge">0</span>
				</span>
				<span class="mui-tab-label">购物车</span>
			</a>
			<a class="mui-tab-item" href="#tabbar-with-map">
				<span class="mui-icon mui-icon-search"></span>
				<span class="mui-tab-label">搜索</span>
			</a>
		</nav>

      <h1>这是 App 组件</h1>
   </div>
</template>

<script>
export default{

}
</script>

<style lang="scss" scoped>
.app-container{
   padding: 40px;
}

</style>
