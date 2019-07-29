<template>
<div v-show="isshow">
    <div class="search-pop-overlay"></div>
    <div class="search-pop">
        <div class="search-wrap">
            <div class="ico-wrap"><img src="./images/ico-pop-search.png" alt=""></div>
            <div class="input-wrap">
                <input autocomplete="off" placeholder="搜索..." spellcheck="false" type="text" id="local-search-input" autocapitalize="none" autocorrect="off">
            </div>
            <div class="ico-wrap clear" @click="closeSearch"><img src="./images/ico-clear.png" alt=""></div>
        </div>
        <div class="search-content">

        </div>
    </div>
</div>  
</template>
<script>
export default {
    data(){
        return {
           isshow: false 
        }
    },
    methods: {
        closeSearch(){
            this.isshow = false
        },
        showSearch(){
            this.isshow = true
        }
    }
}
</script>

<style lang="scss" scoped>
.search-pop-overlay {
    position: fixed;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    z-index: 2080;
    background-color: rgba(0,0,0,.3);
}
.search-pop {
    position: fixed;
    top: 10%;
    left: 50%;
    margin-left: -350px;
    width: 700px;
    height: 80%;
    padding: 0;
    background: #fff;
    color: #333;
    z-index: 9999;
    border-radius: 5px;
}
.search-wrap {
    display: flex;
    align-items: center;
    padding: 5px;
    height: 36px;
    background: #f5f5f5;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
    .ico-wrap {
        height: 36px;
        padding-left: 10px;
        padding-right: 10px;
        cursor: pointer;
        img {
            display: block;
            margin-top: 9px;
            width: 18px;
        }
    }
    .clear {
        border-left: 1px solid #eee;
    }
    .input-wrap {
        width: calc(100% - 88px);
        height: 36px;
        line-height: 36px;
        padding: 0 5px;
        input {
            padding: 8px 0;
            height: 20px;
            display: block;
            width: 100%;
            outline: 0;
            border: none;
            background: 0 0;
        }
    }
}
.search-content {
    overflow: auto;
    position: relative;
    padding: 5px 25px;
    height: calc(100% - 55px);
}
</style>
