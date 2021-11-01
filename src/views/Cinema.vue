<template>
    <div>
         <!-- 使用NavBar组件,插槽用法 -->
        <van-nav-bar title="影院"  @click-left="handleLeft" @click-right="handleRight">
            <template #left>
                {{ cityName }}<van-icon name="arrow-down" color="black"/>
            </template>
            <template #right>
                <van-icon name="search" size="18" color="black"/>
            </template>
        </van-nav-bar>

        <div class="cinema" :style="{height:height}">
            <ul>
                <li v-for="cinema in cinemaList" :key="cinema.cinemaId">
                    <div>{{cinema.name}}</div>
                    <div class="address">{{cinema.address}}</div>
                </li>
            </ul>
        </div>
    </div>
</template>
<script>

// import http from "@/utils/http"
import BetterScroll from "better-scroll";
import Vue from 'vue';
import { NavBar,Icon } from 'vant';
Vue.use(NavBar).use(Icon);
import {mapState,mapMutations,mapActions} from "vuex"
export default {
    data(){
        return {
            // cinemaList:[],
            height:0
        }
    },
    computed:{
        ...mapState("cinemaModule",['cinemaList']),
        ...mapState("cityModule",['cityId','cityName'])
    },
    mounted(){
        // 设置滚动区域的高度为可视区高度
        this.height = document.documentElement.clientHeight - 100 + "px"
        if(this.cinemaList.length === 0){
            this.getCinemaData(this.cityId).then(() => {
                this.$nextTick(() => {
                    new BetterScroll(".cinema",{
                        scrollbar: {
                            fade: true //滚动时显示滚动条，不滚动时隐藏滚动条
                        }
                    })
                })
            })
        }else{
            this.$nextTick(() => {
                new BetterScroll(".cinema",{
                    scrollbar: {
                        fade: true //滚动时显示滚动条，不滚动时隐藏滚动条
                    }
                })
            })
        }
    },
    methods:{
        ...mapActions("cinemaModule",["getCinemaData"]),
        handleLeft(){
            this.$router.history.push("/city")
        },
        handleRight(){
           this.$router.history.push("/search") 
        }
    }
}
</script>
<style lang="scss" scoped>
    .cinema{
        overflow: hidden;//溢出隐藏才能全better-scroll起作用
        position: relative;//让滚动条相对于cinema定位
    }
    li{
        padding: 5px;
        .address{
            font-size: 12px;
            color: gray;
        }
    }
</style>
