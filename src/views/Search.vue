<template>
    <div>
        <van-search
            v-model="value"
            show-action
            placeholder="请输入搜索关键词"
        />

        <van-list>
            <!-- <van-cell v-for="cinema in $store.state.dataList" :key="cinema.cinemaId"> -->
            <!-- 数据使用vue的计算属性进行过滤搜索  -->
            <van-cell v-for="cinema in computedDataList" :key="cinema.cinemaId">
                <div>{{cinema.name}}</div>
                <div class="address">{{cinema.address}}</div>
            </van-cell>
        </van-list>
    </div>
</template>
<script>
import Vue from 'vue';
import { Search,List,Cell } from 'vant';
Vue.use(Search).use(List).use(Cell);
import {mapState, mapActions} from "vuex"
export default {
    data(){
        return {
            value:""
        }
    },
    computed:{
        ...mapState("cinemaModule",['cinemaList']),
        ...mapState("cityModule",['cityId']),
        computedDataList(){
             //如果用户没有输入要搜索的内容，不需要过滤数据
            if(this.value === "") return []
            return this.cinemaList.filter(item => {
                // return item
                // item.address || item.name
                const reg = new RegExp(this.value);
                return item.address.search(reg) != -1 ||  item.name .search(reg) != -1;
                
            })
        }
    },
    mounted(){
        // 防止用户在当前页面刷新页面，
        if(this.cinemaList.length === 0){
            this.getCinemaData(this.cityId)
        }
    },
    methods:{
        ...mapActions("cinemaModule",['getCinemaData'])
    }
}
</script>
