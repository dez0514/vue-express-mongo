<template>
  <div class="container">
    <div class="article-wrap">
      <div class="article-item" v-for="(item, index) in articleList" :key="index">
        <div class="art-item">
          <div>{{item.title}}</div>
          <div>
            <div>{{item.createTime}}</div>
            <div>{{item.tags}}</div>
            <div>{{item.views}}</div>
            <div>{{item.words}}</div>
          </div>
          <div class="imgwrap">
            <img :src="item.imgSrc" alt="">
          </div>
          <div>阅读原文</div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
  export default {
    props: {

    },
    data() {
      return {
        articleList: [{
          title: '从 0 到 1 实现 React 系列 —— 5.PureComponent 实现 && HOC 探幽',
          createTime: '2019-7-25',
          tags: 'React',
          imgSrc: 'http://with.muyunyun.cn/9c461a61924ed0fecb6024a256671251.jpg',
          views: '600',
          words: '1650'
        }]
      }
    },
    methods: {


    },
    mounted() {

    }
  }
</script>
<style lang="scss" scoped>
  @import '../../styles/variable.scss';

  .container {
    padding-top: 1px;
    width: 700px;
    margin: 0 auto;
  }

  .article-wrap {
    margin-top: 50px;
  }

  .article-item {
    box-sizing: border-box;
    background: #fff;
    padding: 2px;
    border-radius: 2px;
    box-shadow: 0 0 5px rgba(202, 203, 203, .5);
    .art-item {
      padding: 25px;
      .imgwrap {
        width: 100%;
      }
      .imgwrap img {
        display: block;
        width: 100%;
      }
    }
  }
  @media (max-width: 767px) {
    .container {
      width: 100%;
      margin: 20px auto;
    }
  }
</style>