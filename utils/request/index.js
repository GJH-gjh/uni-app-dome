import Request from './request'
import apiList from './apiList'
import store from '@/store/index.js'

function getApiObj(url) {
    let apiArray = url.split(".");
    let api = apiList;
    apiArray.forEach(v => {
        api = api[v];
    });
    return api;
}

export default function api(options) {
    const {
        url,
        data = {},
        showToast = true
    } = options
    const request = new Request();
    const api = getApiObj(url);
    request.interceptor.request((config, cancel) => {
        /* 请求之前拦截器 */
        if (api.auth) {
            const token = uni.getStorageSync('token');
            if (!token) {
                store.commit('logout'); // 退出登录清空登录态
                throw ('暂未登录,已阻止此次API请求~');
            }
        }
        if (uni.getStorageSync('token')) {
            config.header.token = uni.getStorageSync('token');
        }
        return config
    });

    request.interceptor.response((response) => {
        /* 请求之后拦截器 */
        if (response.data.code === 0) { // 服务端返回的状态码不等于200，则reject()
            if (showToast) {
                uni.showToast({
                    title: response.data.msg || '请求出错,稍后重试',
                    icon: 'none',
                    duration: 1000,
                    mask: true
                });
            }

        }

        if (response.data.code === 401) { // 服务端返回的状态码不等于200，则reject()
            uni.removeStorageSync('token');
        }
        // if (response.config.custom.verification) { // 演示自定义参数的作用
        //   return response.data
        // }
        return response
    }, (response) => { // 预留可以日志上报
        return response
    })

    return request.request({
        url: api.url,
        data,
        method: api.method
    })

}