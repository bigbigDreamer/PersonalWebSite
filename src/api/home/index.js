import http from '../../tools/axios'
import {baseUrl} from '../../tools/config'

// 获取所有文章
export const getArticle = (url, data = null) => http.request({
    baseURL: baseUrl + url,
    method: 'get',
    params: data
});

// 获取推荐文章列表
export const getRecommendData = (url, data = null) => http.request({
    baseURL: baseUrl + url,
    method: 'get',
    params: data
});

// 根据文章的key，获取文章详情
export const getDetailsByKey = (url, data) => {
    return http.request({
        baseURL: baseUrl + url,
        method: 'post',
        data
    });
};