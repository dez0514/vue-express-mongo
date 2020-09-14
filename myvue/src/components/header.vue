<template>
    <div class="header">
        <img class="togit" src="./images/togit.png" alt="">
        <div class="inner-header">
            <div class="logo-wrap">
                <div class="logo" @click="jumpRouter('index')">dez</div>
                <div class="openbtn" @click="changeShowList">
                    <span style="margin-top:0"></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
            <transition name="draw">
                <div class="inner-list"  v-show="boxshow">
                    <div class="inner-item" v-for="(item,index) in tablist" :key="index" @click="jumpRouter(item.name)">
                        <div><img class="item-icon" :src="item.icon" alt=""></div>
                        <div class="item-txt">{{item.txt}}</div>
                    </div>
                </div>
            </transition>
        </div>
        <searchWrap ref="search"></searchWrap>
    </div>
</template>
<script>
import searchWrap from './search'
export default {
    components: {
        searchWrap
    },
    data(){
        return {
            tablist: [
                {txt:'首页',name: 'index', icon: require('./images/ico-home.png')},
                {txt:'分类',name: 'group', icon: require('./images/ico-group.png')},
                {txt:'标签',name: 'tags', icon: require('./images/ico-tags.png')},
                {txt:'归档',name: 'archive', icon: require('./images/ico-record.png')},
                {txt:'关于',name: 'about', icon: require('./images/ico-mine.png')},
                {txt:'搜索',name: 'search', icon: require('./images/ico-search.png')}
            ],
            showlist: false,
            boxshow:false
        }
    },
    methods: {
        changeShowList(){
            // this.showlist = !this.showlist
            this.boxshow = !this.boxshow
        },
        changeShowSearch(){
            this.$refs.search.showSearch()
        },
        jumpRouter(name){
            // console.log(this.$router.currentRoute.name)
            if(name == this.$router.currentRoute.name) return
            if(name == 'search') {
                this.changeShowSearch()
                return false
            }
            this.$router.push({name:name})
        }
    }
}
</script>

<style lang="scss" scoped>
  .inner-list {
    overflow: hidden;
    height: 182px;
    font-size: 13px;
    color: #34495e;
    border-top: 1px solid #ddd;
    .inner-item:nth-of-type(1){
        margin-top: 10px;
    }
  }
 .header {
    position: relative;
    background: #f5f5f5;
  }
  .inner-header {
        position: relative;
        padding: 10px 10px 0 10px;
        margin: 0 auto;
        .logo-wrap {
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            align-items: center;
            padding-bottom: 10px;
        }
        .logo {
            margin-left: 10px;
            font-size: 22px;
            font-weight: bolder;
            cursor: pointer;
        }
        .openbtn {
            padding: 9px 10px;
            border: 1px solid #ddd;
            border-radius: 4px;
            cursor: pointer;
            span {
                margin-top: 4px;
                display: block;
                width: 22px;
                height: 2px;
                background: #555;
                border-radius: 1px;
            }
        }
        
        .inner-item {
            display: flex;
            align-items: center;
            padding: 5px 10px;
            border-radius: 2px;
            cursor: pointer;
            .item-icon {
                display: block;
                width: 13px;
            }
            .item-txt {
                margin-left: 5px;
            }
        }
        .inner-item:hover,.openbtn:hover {
            background: #E1E1E1;
        }
    }
  .togit {
     display: none;
  }
  .draw-enter-active, .draw-leave-active {
    transition: all .6s ease;
   }
   .draw-enter,
  .draw-leave-to {
    height: 0;
  }
  
 @media (min-width: 768px) {
    .inner-header {
        padding: 25px 0;
        width: 700px;
        display: flex;
        flex-direction: row-reverse;
        .logo {
            position: absolute;
            left: -10px;
            top: 50%;
            transform: translate(-50%,-50%);
        }
        .openbtn {
            display: none;
        }
        .inner-list {
            display: block!important;
            height: auto;
            padding: 10px 0;
            border: 0;
            .inner-item:nth-of-type(1){
                margin-top: 0;
            }
        }
        .inner-item {
            float: left;
        }
    }
    .togit {
        display: block;
        position: absolute;
        top: 0;
        right: 0;
        border: 0;
        cursor: pointer;
    }
 }
 @media (min-width: 1600px) {
    .inner-header {
      width: 900px;
    }
  }
</style>
