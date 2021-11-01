const module = {
    namespaced:true,
    state: {
        cityId: '310100',
        cityName: '上海',
    },
    mutations: {
        setCityName(store, cityName) {
            // console.log("按规矩办事",store,cityName);
            store.cityName = cityName
        },
        setCityId(store, cityId) {
            store.cityId = cityId
        },
    },
    actions: {}
}
export default module