import http from '../../tools/axios'
import {baseUrl} from '../../tools/config'

export const getAllPhoto = (url,data = null) => http.request({
    baseURL: baseUrl + url,
    params:data,
    method:'get'
});

export const getById = (url,data) => http.request({
    baseURL: baseUrl + url,
    data:data,
    method: 'post'
});