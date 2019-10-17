import photoList from "../_data/photo"
import Mock from "mockjs"

// 查询所有的照片
Mock.mock(/http:\/\/com\.cn\/photo\/getAll/,"get", _ => photoList);

// 根据分类查询
Mock.mock(/http:\/\/com\.cn\/photo\/getById/,"post", options => {
    const {key} = JSON.parse(options.body);
    const res = photoList.filter(item => item.key === Number.parseInt(key));
    return {
        status: 200,
        data:res[0].children
    }
});