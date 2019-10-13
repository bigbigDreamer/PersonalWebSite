import http from '../../tools/axios'
import {baseUrl} from '../../tools/config'

export const login = (url, data) => {
    // console.log(url,data)
    return http.request({
        baseURL: baseUrl + url,
        method: 'get',
        params: data
    })
};