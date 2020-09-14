<template>
    <div class="pagination-wrap">
        <div class="page-list">
            <div class="prev pages-widgt" :class="pageidx == 1 ? 'graycolor':''" @click="prevPage">&lt;</div>
            <div class="pages-widgt" :class="item == pageidx ? 'current':''" v-for="(item,index) in pages" :key="index" @click="changePage(item)">{{item}}</div>
            <div class="next pages-widgt" :class="pageidx == pages ? 'graycolor':''" @click="nextPage">&gt;</div>
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
        },
        showmostpage: { //最多展示几个页码? 多的省略号
            type: Number,
            default: 6
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
        },
        showpages(val) {
            this.showmostpage || 6
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
    mounted(){
    },
    methods:{
        // 点击页码
        changePage(pageindex){
            if(this.pageidx == pageindex){
                return false
            }
            this.pageidx = pageindex
            this.$emit('onchange', this.pageidx)
        },
        // 下一页
        nextPage() {
            if(this.pageidx == this.pages) {
                return false
            }
            this.pageidx ++
            this.$emit('onchange', this.pageidx)
        },
        // 上一页
        prevPage() {
            if(this.pageidx == 1) {
                return false
            }
            this.pageidx --
            this.$emit('onchange', this.pageidx)
        }
    }
}
</script>
<style lang="scss" scoped>
.page-list {
    position: relative;
    border-top: 1px solid #ccc;
    margin-bottom: 40px;
    display: flex;
    flex-wrap: wrap;
    .pages-widgt {
        color: #0593d3;
        background: #fff;
        border-top: 1px solid #fff;
        font-size: 14px;
        width: 38px;
        height: 38px;
        line-height: 38px;
        text-align: center;
        cursor: pointer;
        &.prev,&.next {
            width: 30px;
        }
    }
    .pages-widgt:hover {
        border-top: 1px solid #000;
    }
    .prev-hide {
        position: absolute;
        left: 0;
        top: 0;
        width: 38px;
        text-align: center;
        color: #ccc;
        background: #fff;
        border-top: 1px solid #fff;
        font-size: 14px;
        height: 38px;
        line-height: 30px;
    }
    .next-hide {
        position: absolute;
        left: 0;
        top: 0;
        width: 38px;
        text-align: center;
        color: #ccc;
        background: #fff;
        border-top: 1px solid #fff;
        font-size: 14px;
        height: 38px;
        line-height: 30px;
    }
    .current {
        color: #fff;
        background: #ccc;
        border-top: 1px solid #ccc!important;
    }
    .graycolor {
        color: #ccc;
    }
    .graycolor:hover {
        border-top: 1px solid #fff;
    }
}

</style>

