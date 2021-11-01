import axios from "axios";
import Vue from "vue"
import {Toast} from "vant"
Vue.use(Toast)
const http = axios.create({
    baseURL: `https://m.maizuo.com`,
    headers: {
        'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.0.4","e":"16245894303432078301462529","bc":"150300"}'
    }
})

http.interceptors.request.use(function (config) {
    // Do something before request is sent
    Toast.loading({
        message: '加载中...',
        duration:0
    });
    return config;
  }, function (error) {
    // Do something with request error
    return Promise.reject(error);
  });

// Add a response interceptor
http.interceptors.response.use(function (response) {
    // console.log("拦截的响应",response);
    Toast.clear()
    return response;
  }, function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error);
  });
export default http;