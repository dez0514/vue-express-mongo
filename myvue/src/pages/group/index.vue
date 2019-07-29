<template>
    <div class="container">
        <div class="main">
            <div class="title">categories</div>
            <div class="total">总计分类 00 个</div>
            <div class="group-list">
                <div class="group-item" v-for="(item,index) in grouplist" :key="index">
                    <div class="group-name"><span class="name">{{item.groupname}}</span> <span class="num">({{item.totalnum}})</span></div>
                    <ul class="group-item-list" v-for="(inItem,inIndex) in item.list" :key="inIndex">
                        <li><span class="name">{{inItem.txt}}</span> <span class="num">({{inItem.num}})</span></li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return {
            grouplist:[
                {
                    groupname:'React',
                    totalnum: 1,
                    list: [
                        {txt:'redux', num:1},
                        {txt:'hooks', num:1}
                    ]
                },
                {
                    groupname:'Vue',
                    totalnum: 1,
                    list: [
                        {txt:'vue-router', num:1}
                    ]
                },
                {
                    groupname:'Node.js',
                    totalnum: 1,
                    list: [
                        {txt:'fs', num:1}
                    ]
                }
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
  .group-name {
      font-size: 14px;
      padding: 6px 0;
      color: #0593d3;
      .name {
         color: #0593d3;
         border-bottom: 1px solid #999;
         cursor: pointer;
       }
       .name:hover {
          color: #1982B6;
          border-bottom: 1px solid #0593d3; 
       }
       .num {
           color: #bbb;
       }
  }
  .group-item-list {
      font-size: 14px;
      list-style-type:circle;
      list-style-position:inside;
      li {
        padding: 6px 0;
        .name {
            color: #0593d3;
            border-bottom: 1px solid #999;
            cursor: pointer;
        }
        .name:hover {
          color: #1982B6;
          border-bottom: 1px solid #0593d3; 
       }
        .num {
            color: #bbb;
        }
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

