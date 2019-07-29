<template>
    <div class="container">
        <div class="main">
            <div class="title">Tags</div>
            <div class="total">总计标签 32 个</div>
            <div class="tags-list">
                <span v-for="(item,index) in tagslist" :key="index" 
                :class="item.num > 4 ? 'css30' : item.num > 3 ? 'css28': item.num > 2 ? 'css26': item.num > 1 ? 'css24':''">
                    {{item.name}}
                </span>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return {
            tagslist:[
                { name:'ES7', num: 1 },
                { name:'JavaScript', num: 4 },
                { name:'Mvvm', num: 1 },
                { name:'Node.js', num: 2 },
                { name:'Promise', num: 1 },
                { name:'Python', num: 1 },
                { name:'React', num: 10 },
                { name:'Redux', num: 1 },
                { name:'SEO', num: 1 },
                { name:'Schedule', num: 1 },
                { name:'TypeScript', num: 1 },
                { name:'alfred', num: 2 },
                { name:'workflow', num: 1 },
                { name:'blog', num: 1 },
                { name:'decorators', num: 1 },
                { name:'fp', num: 1 },
                { name:'hexo', num: 1 },
                { name:'http', num: 1 },
                { name:'react', num: 1 },
                { name:'redux', num: 1 },
                { name:'redux-middleware', num: 1 },
                { name:'redux-thunk', num: 1 },
                { name:'webpack', num: 1 },
                { name:'数据结构', num: 2 },
                { name:'瀑布流', num: 1 },
                { name:'跨域', num: 1 },
                { name:'轮子', num: 2 }
            ]
        }
    }
}
</script>

<style lang="scss" scoped>
  .container {
    padding-top: 1px;
    width: 700px;
    margin: 0 auto;
    .main {
        margin-top: 50px;
    }
  }
  .title {
    font-family: Palatino,Garamond,Times,Georgia,serif;
    color: #555;
    font-size: 26px;
    font-weight: bolder;
    margin-bottom: 20px;
  }
  .total {
      font-size: 14px;
      color: #555;
      margin-bottom: 20px;
  }
  .tags-list {
      text-align: center;
      span {
          display: inline-block;
          margin: 10px 14px;
          padding-bottom: 5px;
          font-size: 12px;
          color: #ccc;
          border-bottom: 1px solid #ccc;
          cursor: pointer;
      }
      span:hover {
          border-bottom: 1px solid #0593d3;
      }
  }
    .tags-list span.css20{ font-size:14px; color: #8e8e8e;}
    .tags-list span.css22{ font-size:16px; color: #8e8e8e;}
    .tags-list span.css24{ font-size:18px; color: #4f4f4f;}
    .tags-list span.css26{ font-size:20px; color: #4f4f4f;}
    .tags-list span.css28{ font-size:22px; color: #333;}
    .tags-list span.css30{ font-size:24px; color: #111;}

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

