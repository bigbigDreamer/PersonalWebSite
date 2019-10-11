import Mock from 'mockjs'
import Qs from 'qs'

Mock.mock(/http:\/\/com.cn\/customer.*/,'get', option => {
    // console.log(option.url);

    const loginInfo = Qs.parse(option.url.slice(option.url.indexOf('?')+1,));
    if(loginInfo.username === 'admin' && loginInfo.password === 'admin') {
        return {
            status:200,
            result:'success'
        }
    } else {
        return {
            status: 500,
            result:'fail'
        }
    }

});