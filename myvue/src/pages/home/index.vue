<template>
  <div class="container">
    <div class="article-wrap">
      <div class="article-item" v-for="(item, index) in articleList" :key="index">
        <div class="art-item">
          <div class="art-tit">{{item.title}}</div>
          <div class="art-ico-wrap">
            <div class="art-ico-desc">
              <div><img src="../../images/ico-date.png" alt=""></div>
              <div>发表于 {{item.createTime}}</div>
            </div>
            <div class="device">|</div>
            <div class="art-ico-desc">
              <div><img src="../../images/ico-folder.png" alt=""></div>
              <div>分类于 <span class="jumptags">{{item.tags}}</span></div>
            </div>
            <div class="device">|</div>
            <div class="art-ico-desc">
              <div><img src="../../images/ico-eyes.png" alt=""></div>
              <div>热度 {{item.views}}</div>
            </div>
            <div class="device">|</div>
            <div class="art-ico-desc">
              <div><img src="../../images/ico-word.png" alt=""></div>
              <div>{{item.words}} 字</div>
            </div>
          </div>
          <div class="imgwrap">
            <img :src="item.imgSrc" alt="">
          </div>
          <div class="simple-intro">{{item.simpleIntro}} <span class="jumptags">项目地址</span></div>
          <div class="to-more">阅读全文 »</div>
        </div>
      </div> 
    </div>
  </div>
</template>

<script>
  export default {
    props: {

    },
    components: {
 
    },
    data() {
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
            createTime: '2019-7-25',
            tags: 'React',
            views: '600',
            words: '1650',
            imgSrc: 'http://with.muyunyun.cn/9c461a61924ed0fecb6024a256671251.jpg',
            simpleIntro: '本系列文章在实现一个 cpreact 的同时帮助大家理顺 React 框架的核心内容(JSX/虚拟DOM/组件/生命周期/diff算法/setState/PureComponent/HOC/…)'
          }
        ]
      }
    },
    methods: {


    },
    mounted() {

    }
  }
</script>
<style lang="scss" scoped>
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
    margin-bottom: 40px;
    border-radius: 2px;
    box-shadow: 0 0 5px rgba(202, 203, 203, 1);
    .art-item {
      padding: 35px 25px;
      .art-tit {
        font-size: 26px;
        color: #555;
      }
      .art-ico-wrap {
        margin: 10px 0 20px 0;
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        font-size: 12px;
        color: #999;
      }
      .art-ico-wrap .device {
        margin: 0 16px;
        color: #999;
      }
      .art-ico-wrap .art-ico-desc {
        display: flex;
        align-items: center;
        div > img {
          display: block;
          width: 12px;
          margin-right: 5px;
        }
      }
      .imgwrap {
        width: 648px;
        margin-bottom: 25px;
      }
      .imgwrap img {
        display: block;
        width: 100%;
        border: 1px solid #ddd;
      }
      .simple-intro {
        margin-bottom: 25px;
        font-size: 14px;
        color: #555;
      }
      .to-more {
        display: inline-block;
        color: #0593d3;
        font-size: 14px;
        padding-bottom: 4px;
        border-bottom: 2px solid #666;
        cursor: pointer;
      }
      .to-more:hover {
        color: #666;
      }
    }
  }
  .jumptags {
    color: #0593d3;
    border-bottom: 1px solid #999;
    cursor: pointer;
  }
  .jumptags:hover {
    color: #0477AB;
    border-bottom: 1px solid #0477AB;
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
    .art-tit {
      font-size: 20px!important;
      text-align: center;
    }
    .art-ico-wrap {
      justify-content: center;
    }
    .imgwrap {
      width: 100%!important;
    }
  }
</style>