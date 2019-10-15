import Mock from 'mockjs'
import data from '../_data/home/articles'
import recommend_data from '../_data/home/recommended_list'

const Article_List = data;
const recommend_List = recommend_data;

Mock.mock(/http:\/\/com.cn\/getArticle.*/, 'get', _ => {
    return Article_List;
});

Mock.mock(/http:\/\/com.cn\/getRecommendData.*/,'get', _ => recommend_List);

Mock.mock(/http:\/\/com.cn\/getDetailsByKey.*/,'post', options => {
    const {key} = JSON.parse(options.body);
    const res = Article_List.filter(item => {
        return item.key === Number.parseInt(key);
    });

    // console.log(res,'res')
    return {
        status:200,
        data: res[0]
    }
});