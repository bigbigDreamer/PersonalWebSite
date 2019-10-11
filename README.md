# 课程结题

## 题目：个人网站的设计与实现

## 技术栈

- React
- Node
- ExpressJS
- MongoDB

## 项目概述

&emsp;&emsp;本项目为学校结题项目，项目主要内容为做一个自己的个人网站。

## 主要功能

-[ ] 登录
    -[x] 表单验证
    -[x] token验证
    -[ ] token过期配置
    -[x] 页面跳转
-[ ] 个人主页
    -[ ] 主页文章点赞
    -[ ] 主页文章分享
    -[ ] 主页文章删除
    -[ ] 主页文章排序
    -[ ] 主页文章编写
-[ ] 日志
    -[ ] 日志模板编写
    -[ ] 日志背景换肤
-[ ] 音乐
    -[ ] 接入网易云音乐免费乐库
    -[ ] 动画播放器
-[ ] 留言板
    -[ ] 留言板功能（自己封装组件）
    -[ ] 接入搜狐畅言或者来必力留言模块
-[ ] 相册
    -[ ] 照片上传
    -[ ] 相册浏览
    -[ ] 图片懒加载
-[ ] 个人资料
    -[ ] 个人基本信息CRUD
-[ ] 设置
-[ ] 主题切换
-[ ] 404页面

## 性能优化

### 开发环境
-[x] antd按需加载，避免引入过多的包。
-[x] happypack多核打包，加快打包速度。
-[x] create-react-app内置了`摇树`操作，减少非使用的引入项。

### 生产环境
-[x] 过滤调试代码 `console.log`


## 上线部署

&emsp;&emsp;预计上线部署在阿里云服务器，操作系统为`ubuntu 18.0.4`.

&emsp;&emsp;为了处理高并发需求，采用nginx代理。


