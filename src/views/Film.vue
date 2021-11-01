<template>
    <div>
        <!-- <div class="lunbo" style="background:green;height:150px;">轮播</div> -->
        <film-swiper>
            <div class="swiper-slide" v-for="img in bannerData" :key="img.bannerId">
                <img :src="img.imgUrl" alt="">
            </div>
        </film-swiper>
        <film-head></film-head>
    </div>
</template>
<script>
import filmHead from "@/views/film/FilmHead"
import filmSwiper from "@/views/film/FilmSwiper"
import http from '@/utils/http.js';
export default {
    data(){
        return {
            bannerData:[]
        }
    },
    components:{
        filmHead,
        filmSwiper
    },
    mounted(){
        http({
            url:`/gateway?type=2&cityId=150300&k=8092882`,
            headers:{
                'X-Host': 'mall.cfg.common-banner'
            }
        }).then((res) => {
            //console.log(res);
            this.bannerData = res.data.data
        })
    }
}
</script>

