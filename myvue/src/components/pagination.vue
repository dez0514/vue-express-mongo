<template>
    <div class="pagination-wrap">
        <div class="page-list">
            <div class="prev pages-widgt" v-show="pageidx!=1" @click="prevPage"><</div>
            <div class="pages-widgt" :class="item == pageidx ? 'current':''" v-for="(item,index) in pages" :key="index" @click="changePage(item)">{{item}}</div>
            <div class="next pages-widgt" v-show="pageidx!=pages" @click="nextPage">></div>
        </div>
    </div>
</template>
<script>
export default {
    props: {
        total: { // 总条数
            type: Number,
            default: 10
        },
        pagesize: { // 每页条数
            type: Number,
            default: 5
        },
        pageindex: { // 页码
            type: Number,
            default: 1
        }
    },
    watch:{
        pageindex(val) {
            this.pageidx = val || 1
        },
        pagesize(val) {
            this.limit = val || 5
        },
        total(val) {
            this.size = val || 1
        }
    },
    computed: {
        pages() { // 总页数
            return Math.ceil(this.total/this.pagesize)
        }
    },
    data(){
        return {
            pageidx : this.pageindex, // 当前页码
            limit : this.pagesize, // 每页显示条数
            size : this.total || 1 // 总记录数
        }
    },
    methods:{
        // 点击页码
        changePage(pageindex){
            this.pageidx = pageindex
        },
        // 下一页
        nextPage() {
            if(this.pageidx == this.pages) {
                return false
            }
            this.pageidx ++
        },
        // 上一页
        prevPage() {
            if(this.pageidx == 1) {
                return false
            }
            this.pageidx --
        }
    }
}
</script>
<style lang="scss" scoped>
.page-list {
    overflow: hidden;
    border-top: 1px solid #ccc;
    margin-bottom: 40px;
    .pages-widgt {
        float: left;
        margin: 0 10px 0 0;
        color: #0593d3;
        background: #fff;
        border-top: 1px solid #fff;
        font-size: 14px;
        width: 38px;
        height: 38px;
        line-height: 38px;
        text-align: center;
        cursor: pointer;
    }
    .pages-widgt:hover {
        border-top: 1px solid #000;
    }
    .current {
        color: #fff;
        background: #ccc;
        border-top: 1px solid #ccc!important;
    }
}

</style>

