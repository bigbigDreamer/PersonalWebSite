import http from '../../tools/axios'
import {baseUrl} from '../../tools/config'

export const getArticle = (url,data = null) => http.request({
    baseURL: baseUrl + url,
    method: 'get',
    params: data
});

export const getRecommendData = (url,data = null) => http.request({
    baseURL: baseUrl + url,
    method: 'get',
    params: data
});