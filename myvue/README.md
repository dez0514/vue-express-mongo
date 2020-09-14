# mytestvue
```
npm install
npm run serve
npm run build
```
### mongodb
```
开启本地MongoDB: net start MongoDB
根目录启动node服务: node app.js


### 接口设计
```
1.首页分页文章列表
// 响应字段
{
    content:[
        {
            title: '从 0 到 1 实现 React 系列',
            createTime: '2019-7-25',
            tags: 'React',
            views: '600',
            words: '1650',
            imgSrc: 'http://with.muyunyun.cn/9c461a61924ed0fecb6024a256671251.jpg',
            simpleIntro: '本系列文章在实现一个 cpreact 的同时帮助大家理顺 React 框架的核心内容(JSX/虚拟DOM/组件/生命周期/diff算法/setState/PureComponent/HOC/…)'
        }
    ],
    totalCount: 1
}
    
        
