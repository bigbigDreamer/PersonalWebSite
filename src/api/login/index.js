import http from '../../tools/axios'
import {baseUrl} from '../../tools/config'

export const login = (url, data) =>  http.request({
        baseURL: baseUrl + url,
        method: 'get',
        params: data
    });