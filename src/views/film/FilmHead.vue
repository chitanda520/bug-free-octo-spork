<template>
    <div>
        <ul>
            <router-link to="/film/hotplaying" tag="li" active-class="active">正在热影</router-link>
            <router-link to="/film/willplaying" tag="li" active-class="active">即将上映</router-link>
        </ul>
        <router-view></router-view>
    </div>

</template>
<style lang="scss" scoped>
    ul{
        display: flex;
        height: 40px;
        line-height: 40px;
        text-align: center;
        li{
            flex: 1;
        }
    }
    .active{
        color: red;
        border-bottom: 2px solid red;
    }
</style>
