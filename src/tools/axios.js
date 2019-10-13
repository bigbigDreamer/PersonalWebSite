/**
 * @time  2019/10/13 17:52
 * @author  Eric Wang <vuejs@vip.qq.com>
 * @desc   封装ajax
 */
import axios from 'axios'
import {baseUrl} from "./config";

class HttpRequest {
    constructor(baseUrls = baseUrl) {
        this.baseUrl = baseUrls;
        this.queue = {};
    }

    /*
     * @return {Object} -ajax内部实例
     */
    getInsideConfig() {
        return {
            baseURL: this.baseUrl,
            method: 'get',
        }
    }

    // 拦截器
    interceptors(instance, url) {
        // 添加请求拦截器
        instance.interceptors.request.use( config => {
            // 在发送请求之前做些什么
            this.queue[url] = true;
            return config;
        },  error => {
            // 对请求错误做些什么
            return Promise.reject(error);
        });

        // 添加响应拦截器
        instance.interceptors.response.use( response => {
            // 对响应数据做点什么
            delete this.queue[url];
            return response;
        },  error => {
            // 对响应错误做点什么
            delete this.queue[url];
            return Promise.reject(error);
        });
    }

    // 返回实例
    request(options) {
        const instance = axios.create();
        options = Object.assign(this.getInsideConfig(), options);
        this.interceptors(instance, options.baseUrl);
        return instance(options);
    }
}

export default new HttpRequest()
