import Mock from 'mockjs'
import data from '../_data/home/articles'
import recommend_data from '../_data/home/recommended_list'

const Article_List = data;
const recommend_List = recommend_data;

// 获取所有文章的mock
Mock.mock(/http:\/\/com.cn\/getArticle.*/, 'get', _ => {
    return Article_List;
});

// 获取所有推荐文章的Mock
Mock.mock(/http:\/\/com.cn\/getRecommendData.*/, 'get', _ => recommend_List);

// 获取文章推荐细节的Mock
Mock.mock(/http:\/\/com.cn\/getDetailsByKey.*/, 'post', options => {
    const {key} = JSON.parse(options.body);
    const res = Article_List.filter(item => item.key === Number.parseInt(key));
    return {
        status: 200,
        data: res[0]
    }
});

// 根据文章的id去修改文章的like数

Mock.mock(/http:\/\/com.cn\/handleDoLike.*/, 'post', options => {
    const {key} = JSON.parse(options.body);
    let optionIndex;
    Article_List.forEach((item, index) => {
        if (item.key === Number.parseInt(key)) {
            optionIndex = index;
        }
    });

    Article_List[optionIndex].like++;

    return {
        status: 200,
        res: 'success'
    }
});
Mock.mock(/http:\/\/com.cn\/changeArticleEye.*/, 'post', options => {
    const {key} = JSON.parse(options.body);
    let optionIndex;
    Article_List.forEach((item, index) => {
        if (item.key === Number.parseInt(key)) {
            optionIndex = index;
        }
    });

    Article_List[optionIndex].eye++;

    return {
        status: 200,
        res: 'success'
    }
});