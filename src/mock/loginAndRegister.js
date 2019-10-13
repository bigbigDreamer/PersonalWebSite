import Mock from 'mockjs'
import Qs from 'qs'

Mock.mock(/http:\/\/com.cn\/login.*/,'get', option => {

    const loginInfo = Qs.parse(option.url.slice(option.url.indexOf('?')+1,));
    console.log(loginInfo);
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