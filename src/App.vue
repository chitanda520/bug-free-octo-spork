<template>
  <div>
    <tabBar v-show="isShow"></tabBar>
    <router-view></router-view>
  </div>
</template>
<script>

import tabBar from "@/components/TableBar.vue"
import { mapState,mapMutations,mapActions } from "vuex"
export default {
  components:{
    tabBar
  },
  mounted(){},
  computed:{
     ...mapState("tabBarModule",["isShow"])
  }
}
</script>


<style lang="scss">

</style>
