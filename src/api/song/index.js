import http from '../../tools/axios'
import {baseUrl} from '../../tools/config'
export const getAllSongList = (url,data = null) => http.request(
    {
        baseURL: baseUrl + url,
        params: data,
        method:'get'
    }
);