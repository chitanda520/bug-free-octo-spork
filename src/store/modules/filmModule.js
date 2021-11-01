import http from "@/utils/http.js"
const module = {
    namespaced:true,
    state: {
        filmList: [], //保存后端数据状态
        filmTotal: 0
    },
    mutations: {
        setFilmData(store,filmData) {
            store.filmList = [...store.filmList,...filmData]
            // console.log("setFilm中", filmData);
          },
          setTotal(store,total) {
            store.filmTotal = total;
          },
          clearFilmData(store) {
            store.filmList = [];
            store.filmTotal = 0;
          },
    },
    actions: {
        // 主要用来做异步处理
        getFilmData(store, options) {
            return http({
                url: `/gateway?cityId=${options.cityId}&pageNum=${options.current}&pageSize=10&type=1&k=5098835`,
                headers: {
                    'X-Host': 'mall.film-ticket.film.list'
                }
            }).then((res) => {
                store.commit("setFilmData", res.data.data.films)
                store.commit("setTotal", res.data.data.total)
            })
        }
    }
}
export default module