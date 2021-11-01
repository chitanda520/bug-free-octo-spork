const module = {
    namespaced:true,
    state: {
        isShow: true
    },
    mutations: {
        hide(store) {
            // 隐藏tabBar
          store.isShow = false;
        },
        show(store) {
          store.isShow = true;
        },
    },
    actions: {}
}
export default module