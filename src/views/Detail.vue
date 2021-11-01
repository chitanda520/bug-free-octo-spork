<template>
    <div v-if="filmInfo">
        <detailHeader v-top :title="filmInfo.name"></detailHeader>
        <div 
            :style="{backgroundImage:'url('+filmInfo.poster+')'}" 
            style="height:200px;background-size:cover;background-position:center;"
        ></div>
        <h3>{{filmInfo.name}}--{{filmInfo.filmType.name}}</h3>
        <p>{{filmInfo.category}}</p>
        <!-- 使用过滤器过滤时间戳 -->
        <p>{{filmInfo.premiereAt | dataFilter}} 上映</p>
        <p>{{filmInfo.nation}}|{{filmInfo.runtime}}分钟</p>
        <!-- isShow为true显示所有内容，为false只显示一部分 -->
        <div :class="isShow ? '' : 'synopsis'">
            {{filmInfo.synopsis}}
        </div>
        <div style="text-align:center;">
            <i @click="isShow=!isShow" class="iconfont" :class="isShow ? 'icon-shang' : 'icon-xiangxia'"></i>
        </div>
        <h3>演职人员</h3>
        <detail-swiper :num="4" :cname="'actor'">
            <div class="swiper-slide" v-for="(actor,index) in filmInfo.actors" :key="index">
                <img :src="actor.avatarAddress" alt="">
                <div style="text-align:center;font-size:12px;">
                    <div>{{actor.name}}</div>
                    <div>{{actor.role}}</div>
                </div>
            </div>
        </detail-swiper>
        <h3>剧照</h3>
        <detail-swiper :num="2" :cname="'photo'">
            <div class="swiper-slide" v-for="(photo,index) in filmInfo.photos" :key="index">
                <div 
                    :style="{backgroundImage:'url('+photo+')'}" 
                    style="height:100px;background-size:cover;background-position:center;"
                    @click="handlePreview(index)"
                ></div>
            </div>
        </detail-swiper>
        <div style="height:55px;text-align:center;line-height:55px;background:red;">选择购票</div>
    </div>
</template>
<script>
import http from "@/utils/http.js"
import Vue from "vue"
import { ImagePreview } from "vant"
import moment from "moment"
Vue.filter("dataFilter",(premiereAt) => {
    console.log(premiereAt);
    return moment(premiereAt).format("YYYY-MM-DD")
})
import detailSwiper from "@/views/detail/DetailSwiper"
import detailHeader from "@/views/detail/DetailHeader"

Vue.directive("top",{
    inserted(el){
        console.log(el);
        // 默认隐藏
        el.style.display = "none";
        window.onscroll = () => {
            let stop = document.documentElement.scrollTop || document.body.scrollTop;
            if(stop >= 50){
                el.style.display = "block";
            }else{
                el.style.display = "none";
            }
        }
    },
    unbind(){
        window.onscroll = null;
    }
})
export default {
    data(){
        return {
            filmInfo:null,
            isShow:false
        }
    },
    components:{
        detailSwiper,
        detailHeader
    },
    beforeMount(){
        // 隐藏tabBar
        this.$store.commit("hide")
    },
    mounted(){
        http({
            url:`/gateway?filmId=${this.$route.params.id}&k=4437593`,
            headers:{
                'X-Host': 'mall.film-ticket.film.info'
            }
        }).then((res) => {
            
            this.filmInfo = res.data.data.film
            console.log(this.filmInfo);
            
        })
    },
    methods:{
        handlePreview(index){
            console.log(index);
            ImagePreview({
                images: this.filmInfo.photos,
                startPosition: index,//指定从index位置开始显示
                closeable: true,//显示关闭按钮
                closeIconPosition: "top-left",//关闭按钮显示在顶部左边
                // loop: false //禁止循环切换
            })
        }
    },
    beforeDestroy(){
        this.$store.commit("show")
    }
}
</script>
<style lang="scss" scoped>
    .synopsis{
        height: 50px;
        overflow: hidden;
    }
</style>

