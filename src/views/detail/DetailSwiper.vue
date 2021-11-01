<template>
     <!-- Swiper -->
  <div class="swiper-container" :class="cname">
    <div class="swiper-wrapper">
        <slot></slot>
    </div>
  </div>
</template>
<script>
import Swiper from "swiper/swiper-bundle.js"//引入js
import "swiper/swiper-bundle.min.css"//引入css
export default {
    props:["num","cname"],
    mounted(){
        new Swiper('.' + this.cname, {
            slidesPerView: this.num,
            spaceBetween: 10,
            freeMode: true,
        });
    }
}
</script>
<style lang="scss" scoped>
    .swiper-wrapper{
        img{
            width:100%;
        }
    }
</style>


