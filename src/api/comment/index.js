import http from '../../tools/axios'
import {baseUrl} from '../../tools/config'

export const findAll = (url,data = null) => http.request(
    {
        baseURL: baseUrl + url,
        params: data
    }
);

export const insertComment = (url,data) => http.request(
    {
        baseURL: baseUrl + url,
        method:'post',
        data
    }
);