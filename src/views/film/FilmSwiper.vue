<template>
    <div class="swiper-container">
        <div class="swiper-wrapper">
            <!-- <div class="swiper-slide">111</div>
            <div class="swiper-slide">222</div>
            <div class="swiper-slide">333</div> -->
            <slot></slot>
        </div>
        <!-- 如果需要分页器 -->
        <div class="swiper-pagination"></div>
    </div>
</template>
<script>
import Swiper from "swiper/swiper-bundle.js"//引入js
import "swiper/swiper-bundle.min.css"//引入css
export default {
    // mounted(){
    //     new Swiper(".swiper-container",{
    //         loop:true,
    //         autoPlay:true,
    //         // 如果需要分页器
    //         pagination: {
    //             el: '.swiper-pagination',
    //         },
    //     })
    // }
    updated(){
        new Swiper(".swiper-container",{
            loop:true,
            autoPlay:true,
            // 如果需要分页器
            pagination: {
                el: '.swiper-pagination',
            },
        })
    }
}
</script>
<style lang="scss" scoped>
.swiper-wrapper img{
    width:100%
}
</style>



