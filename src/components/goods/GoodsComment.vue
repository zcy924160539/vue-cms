<template>
    <div>
        <cmtbox :id="$route.params.id"></cmtbox>
        
    </div>
</template>

<script>
// 导入评论子组件
import cmtbox from '../subcomponets/comment.vue'
export default {
    components:{
        cmtbox
    }
}
</script>

<style lang="scss" scoped> 
    
</style>
