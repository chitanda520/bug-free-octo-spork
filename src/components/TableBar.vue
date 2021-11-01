<template>
    <nav>
        <ul>
            <router-link to="/film" tag="li" active-class="on">
                <i class="iconfont icon-dianying-"></i>
                <span>首页</span>
            </router-link>
            <router-link to="/cinema" tag="li" active-class="on">    
                <i class="iconfont icon-yingyuan"></i>
                <span>影院</span>
            </router-link>
            <router-link to="/zx" tag="li" active-class="on">
                <i class="iconfont icon-biaoqiankuozhan_zixun-199"></i>
                <span>资讯</span>
            </router-link>
            <router-link to="/mine" tag="li" active-class="on">
                <i class="iconfont icon-wode"></i>
                <span>我的</span>
            </router-link>
        </ul>
    </nav>
</template>
<style lang="scss" scoped>
    nav{
        position: fixed;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 50px;
        background: white;
        text-align: center;
        border-top: 1px solid #ccc;
        z-index: 10000;
        ul{
            display: flex;
            list-style: none;
            margin-top: 5px;
            li{
                flex: 1;
                display: flex;
                flex-direction: column;
                color: #797d82;
                i{
                    font-size: 18px;
                }
                span{
                    font-size: 12px;
                }
            }
        }
    }
    .on{
        color: #ff5f16;
    }
</style>
