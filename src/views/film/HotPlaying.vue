<template>
    <div class="hotPlay" style="padding-bottom:55px;">
        <van-list
            v-model="isLoading"
            @load="onload"
            :finished="isFinished"
            finished-text="没有啦！！！！"
            :immediate-check="false"
        >
            <van-cell v-for="film in filmList" :key="film.filmId">
                <img :src="film.poster" alt="" @click="goDetail(film.filmId)">
                <h3>{{film.name}}</h3>
                <p class="actor">主演:{{film.actors | actorsfilter}}</p>
            </van-cell>
        </van-list>
        
    </div>
</template>
<script>
import http from "@/utils/http.js"
import Vue from "vue"
import { List,Cell } from "vant"
Vue.use(List).use(Cell)

Vue.filter("actorsfilter",(actors) => {
    // console.log(actors);
    if(!actors){
        return "暂时没有演职人员";
    }
    return actors.map(item => item.name).join(" ")
})

//引入vuex中的映射模块
import {mapState,mapMutations,mapActions} from "vuex"

export default {
    data(){
        return {
            isLoading:false,
            current:1,
            isFinished:false
        }
    },
    computed:{
        ...mapState("filmModule",['filmList','filmTotal']),
        ...mapState("cityModule",['cityId']),
    },
    mounted(){

        if(this.filmList.length === 0){
            const ps = this.getFilmData({
                current:this.current,
                cityId:this.cityId
            });
            ps.then(() => {
                // console.log("数据请求结束");
            })
        }
   },
   methods:{
       ...mapActions('filmModule',["getFilmData"]),
       goDetail(id){
           // console.log(id);
           this.$router.history.push("/detail/" + id )
       },
       onload(){
          
           if(this.filmList.length === this.filmTotal){
               this.isFinished = true; // 加载完毕的设置
               return;
           }
           // 正在加载
           this.isLoading = true
           // 从第二页开始加载
            this.current++
            this.getFilmData({
                current:this.current,
                cityId:this.cityId
            }).then(() => {
                this.isLoading = false;
            });
       }
   }
}
</script>
<style lang="scss" scoped>
    .van-cell{
        overflow: hidden;
        padding: 10px;
        img{
            float: left;
            width: 100px;
        }
    }
    .actor{
        width: 150px;
        overflow: hidden;
        text-overflow:ellipsis;
        white-space: nowrap;
    }
</style>


