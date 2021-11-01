<template>
    <div>
        <van-index-bar :index-list="getLetter">
            <div v-for="(item,index) in citiesList" :key="index">
                <van-index-anchor :index="item.type" />
                <van-cell 
                    v-for="(city,i) in  item.list" 
                    :key="i" 
                    :title="city.name"
                    @click="handleClick(city.name,city.cityId)"
                />
            </div>
        </van-index-bar>
    </div>
</template>
<script>
import http from "@/utils/http"
import Vue from "vue"
import { IndexBar, IndexAnchor,Cell } from 'vant';
Vue.use(IndexBar);
Vue.use(IndexAnchor);
Vue.use(Cell);
import {mapState,mapMutations,mapActions} from "vuex"
export default {
    data(){
        return {
            citiesList:[]
        }
    },
    mounted(){
        // /gateway?k=9774392
        http({
            url:`/gateway?k=9774392`,
            headers:{
                'X-Host': 'mall.film-ticket.city.list'
            }
        }).then(res => {
            //console.log(res);
            this.citiesList = this.getCities(res.data.data.cities)
            console.log(this.citiesList);
            
        })
    },
    computed:{
        ...mapState('cityModule',['cityId']),
        getLetter(){
            return this.citiesList.map(item => item.type)
        }
    },
    methods:{
        ...mapMutations('cityModule',['setCityName','setCityId']),
        ...mapMutations('filmModule',['clearFilmData']),
        ...mapMutations('cinemaModule',['clearCinemaData']),
        getCities(cities){
            // 准备好 A-Z的字母数据
            const letterList = [];
            for(let code = 65; code < 91; code++){
                //console.log(String.fromCharCode(code));
                letterList.push(String.fromCharCode(code))
            }

            const newCityList = []
            // console.log(letterList);
            // ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
            letterList.forEach(letter => {
                const list = cities.filter(city => {
                    return city.pinyin[0].toUpperCase() === letter
                })
                //console.log(list);
                if(list.length > 0){
                    newCityList.push({
                        type:letter,
                        list
                    })
                }
            })
            return newCityList
        },
        handleClick(cityName,cityId){
            // 保存全局的vuex状态
                // cityId: '310100',
                // cityName: '上海'
                // console.log(cityName,cityId);
            // 不可取的，不严谨的
            // this.$store.state.cityName = cityName;
            // this.$store.state.cityId = cityId;

            if(this.cityId != cityId){
                this.setCityName(cityName);
                this.setCityId(cityId);
                // 清空原来的filmData
                this.clearFilmData();
                this.clearCinemaData();
            }

            // 返回影院页面
            this.$router.back()
        }
    }
}
</script>

