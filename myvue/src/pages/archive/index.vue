<template>
    <div class="container">
        <div class="main">
           <div class="count">OK! 目前共计 35 篇日志。 继续努力。</div>
           <div class="devlist">
               <div class="dev-item" v-for="(item,index) in devList" :key="index">
                   <div class="year">{{item.year}}</div>
                   <div class="year-list" v-for="(inneritem,innerindex) in item.list" :key="innerindex">
                       <div class="year-item">
                           <div class="item-desc">{{inneritem.title}}</div>
                       </div>
                   </div>
               </div>
           </div>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return {
          articleList: [
            {
                title: '从 0 到 1 实现 React 系列',
                createTime: '2019-7-25',
                tags: 'React',
                views: '600',
                words: '1650',
                imgSrc: 'http://with.muyunyun.cn/9c461a61924ed0fecb6024a256671251.jpg',
                simpleIntro: '本系列文章在实现一个 cpreact 的同时帮助大家理顺 React 框架的核心内容(JSX/虚拟DOM/组件/生命周期/diff算法/setState/PureComponent/HOC/…)'
            },
            {
                title: '从 0 到 1 实现 React 系列 —— 5.PureComponent 实现 && HOC 探幽',
                createTime: '2019-7-22',
                tags: 'React',
                views: '600',
                words: '1650',
                imgSrc: 'http://with.muyunyun.cn/9c461a61924ed0fecb6024a256671251.jpg',
                simpleIntro: '本系列文章在实现一个 cpreact 的同时帮助大家理顺 React 框架的核心内容(JSX/虚拟DOM/组件/生命周期/diff算法/setState/PureComponent/HOC/…)'
            },
            {
                title: '从 0 到 1 实现 React 系列 —— 5.PureComponent 实现 && HOC 探幽',
                createTime: '2018-8-22',
                tags: 'React',
                views: '600',
                words: '1650',
                imgSrc: 'http://with.muyunyun.cn/9c461a61924ed0fecb6024a256671251.jpg',
                simpleIntro: '本系列文章在实现一个 cpreact 的同时帮助大家理顺 React 框架的核心内容(JSX/虚拟DOM/组件/生命周期/diff算法/setState/PureComponent/HOC/…)'
            },
            {
                title: '从 0 到 1 实现 React 系列 —— 5.PureComponent 实现 && HOC 探幽',
                createTime: '2018-6-22',
                tags: 'React',
                views: '600',
                words: '1650',
                imgSrc: 'http://with.muyunyun.cn/9c461a61924ed0fecb6024a256671251.jpg',
                simpleIntro: '本系列文章在实现一个 cpreact 的同时帮助大家理顺 React 框架的核心内容(JSX/虚拟DOM/组件/生命周期/diff算法/setState/PureComponent/HOC/…)'
            }
          ],
          devList: []
        }
    },
    methods: {
        getList(){
            // this.articleList 为接口返回的列表格式
            let developList = this.articleList.map((item,index) => {
                let title = item.title;
                let year = item.createTime.split('-')[0]
                let date = item.createTime.split('-')[1] + '-' + item.createTime.split('-')[2]
                return { title, date, year }
            })
            // console.log(developList)
            // 下面要处理成 按年份对应该年份的列表 
            let newArr = []
            developList.forEach((item, index) => {
                let tempIndex = -1
                let alreadyExists = newArr.some((newItem,newIndex)=>{
                    if(item.year == newItem.year) {
                        tempIndex = newIndex
                        return true
                    }
                })
                if(!alreadyExists){
                    newArr.push({
                        year: item.year,
                        list: [{title:item.title,date:item.date}]
                    })
                } else {
                   newArr[tempIndex].list.push({title:item.title,date:item.date})
                }
            });
            this.devList = newArr
            console.log(this.devList)
        }
    },
    mounted(){
        this.getList()
    }
}
</script>

<style lang="scss" scoped>
  .container {
    padding-top: 1px;
    width: 700px;
    margin: 0 auto;
    .main {
        position: relative;
        margin-top: 50px;
    }
    .main::after {
        content: " ";
        position: absolute;
        top: 14px;
        left: 0;
        margin-left: -2px;
        width: 4px;
        height: 100%;
        background: #f5f5f5;
        z-index: -1;
    }
  }
  .count {
      padding-left: 20px;
        position: relative;
        font-family: 'Monda, Lato',"PingFang SC","Microsoft YaHei",sans-serif;
        font-size: 14px;
        color: #555;
  }
  .count::before {
      content: " ";
        position: absolute;
        left: 0;
        top: 50%;
        margin-left: -5px;
        margin-top: -5px;
        width: 10px;
        height: 10px;
        background: #bbb;
        border-radius: 50%;
  }
  .year {
      position: relative; 
      margin: 60px 0;
      padding-left: 20px;
      font-size: 22px;
      font-family: Palatino,Garamond,Times,Georgia,serif;
  }
  .year::before {
       content: " ";
        position: absolute;
        left: 0;
        top: 50%;
        margin-left: -4px;
        margin-top: -4px;
        width: 8px;
        height: 8px;
        background: #bbb;
        border-radius: 50%;
  }
  .year-item {
      margin: 30px 0;
      padding: 25px;
      font-size: 16px;
      box-shadow: 0 0 5px rgba(202,203,203,.5);
      color: #555;
      .item-desc {
          position: relative;
          padding: 20px;
          border-bottom: 1px dashed #ccc;
      }
      .item-desc::before {
        content: " ";
        position: absolute;
        left: 0;
        top: 50%;
        width: 6px;
        height: 6px;
        margin-left: -4px;
        margin-top: -3px;
        background: #bbb;
        border-radius: 50%;
        border: 1px solid #fff;
        transition-duration: .2s;
        transition-timing-function: ease-in-out;
        transition-delay: 0s;
        transition-property: background;
      }
  }
  @media (min-width: 1600px) {
    .container {
      width: 900px;
      margin: 0 auto;
    }
  }
  @media (max-width: 767px) {
    .container {
      width: auto;
      margin: 0 20px;
    }
  }
</style>

