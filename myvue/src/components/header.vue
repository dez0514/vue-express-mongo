<template>
    <div>
        <nav class="navbar navbar-default" role="navigation">
            <div class="navbar-header">
                <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#menu">
                    <span class="sr-only">展开导航</span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                </button>
                <a class="navbar-brand" href="#">mytest</a>
            </div>
            <div class="collapse navbar-collapse" id="menu">
                <ul class="nav navbar-nav">
                    <li v-for="(item,index) in tablist" :key="index">{{item.txt}}</li>
                </ul>
            </div>
        </nav>
    </div>
</template>
<script>
export default {
    data(){
        return {
            tablist: [
                {txt:'首页'},
                {txt:'分类'},
                {txt:'标签'},
                {txt:'归档'}
            ]
        }
    }
}
</script>

<style>
 .navbar {
     width: 100%;
 }
</style>
