<template>
    <div class="goods-list">
        <div class="goods-item">
            <img src="../../images/01.jpg" alt="">
            <h1 class="title">小米手机</h1>
            <div class="info">
                <p class="price">
                    <span class="now">￥899</span>
                    <span class="old">￥2399</span>
                </p>
                <p class="sell">
                    <span>热卖中</span>
                    <span>剩60件</span>
                </p>
            </div>
        </div>
        <div class="goods-item">
            <img src="../../images/01.jpg" alt="">
            <h1 class="title">小米手机</h1>
            <div class="info">
                <p class="price">
                    <span class="now">￥899</span>
                    <span class="old">￥2399</span>
                </p>
                <p class="sell">
                    <span>热卖中</span>
                    <span>剩60件</span>
                </p>
            </div>
        </div>
        <div class="goods-item">
            <img src="../../images/01.jpg" alt="">
            <h1 class="title">小米手机</h1>
            <div class="info">
                <p class="price">
                    <span class="now">￥899</span>
                    <span class="old">￥2399</span>
                </p>
                <p class="sell">
                    <span>热卖中</span>
                    <span>剩60件</span>
                </p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    
}
</script>

<style lang="scss" scoped>
.goods-list{
    display: flex;
    flex-wrap: wrap;
    padding: 8px;
    justify-content: space-between;
    .goods-item{
        width: 49%;
        border: 1px solid #ccc;
        box-shadow: 0 0 8px #ccc;
        margin: 4px 0;
        padding: 2px;
        display: flex;
        flex-direction: column;// 主轴方向改为纵向
        justify-content: space-between;
        
        // 设置最小高度,使得还没加载出来时,盒子不会因为没内容而网上缩
        min-height: 293px;
        img{
            width: 100%
        }
        .title{
            font-size: 14px;
        }
    }
    .info{
        background-color: #eee;
        p{
            margin: 0;
            padding: 5px;
        }
        .price{
            .now{
                color: #f00;
                font-weight: bold;
                font-size: 16px;
            }
            .old{
                text-decoration: line-through;
                font-size: 12px;
                margin-left: 10px; 
            }
        }
    }
    .sell{
        display: flex;
        justify-content: space-between;
        font-size: 13px;
    }
}
</style>
