import http from "@/utils/http.js"
const module = {
    namespaced:true,
    state: {
        cinemaList:[]
    },
    mutations: {
        setCinemaList(store,data) {
            store.cinemaList = data
        },
        clearCinemaData(store) {
            store.cinemaList = []
        }
    },
    actions: {
        getCinemaData(store,cityId) {
            return http({
                url:`/gateway?cityId=${cityId}&ticketFlag=1&k=3269820`,
                headers:{
                    'X-Host': 'mall.film-ticket.cinema.list'
                }
            }).then((res) => {
              // this.cinemaList = res.data.data.cinemas
                store.commit("setCinemaList",res.data.data.cinemas)
            })
        }
    }
}
export default module