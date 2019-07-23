<template>
  <div class="container">
   <nav class="navbar navbar-default" role="navigation"> 
    <div class="navbar-header">
        <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#menu">
            <span class="sr-only">展开导航</span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span> 
        </button>
        <a class="navbar-brand" href="#">网站标题</a>
    </div>
    <div class="collapse navbar-collapse" id="menu">
        <ul class="nav navbar-nav">
            <li class="active"><a href="#">首页</a></li>
            <li><a href="#">导航标题1</a></li>
            <li><a href="#">导航标题2</a></li>
            <li class="dropdown"> <a href="#" class="dropdown-toggle" data-toggle="dropdown">下拉菜单 <b class="caret"></b></a>
                <ul class="dropdown-menu">
                    <li><a href="#">下拉菜单1</a></li>
                    <li class="divider"></li>
                    <li><a href="#">下拉菜单2</a></li>
                    <li class="divider"></li>
                </ul>
            </li>
        </ul>
    </div>
</nav>

  </div>
</template>

<script>
export default {
  props: {
   
  },
  data(){
    return {
      list: [],
    //   info: {
    //     id : 1,
    //     title : 'post test',
    //     author : 'zwd',
    //     date : '2019/7/16 16:57',
    //     content : '增加的第一条数据'
    //   }
    }
  },
  methods:{
    // getList(){
    //   this.$http.get('/api/article',{}).then(data => {
    //     console.log(555,data)
    //     this.list = data
    //   }).catch(err => {
    //     console.log(666,err)
    //   })
    // },
    // insertData(){
    //   this.$http.post('/api/article',{
    //     id : this.info.id,
    //     title : this.info.title,
    //     author : this.info.author,
    //     date : this.info.date,
    //     content : this.info.content
    //   }).then(data => {
    //     console.log(555,data)
    //   }).catch(err => {
    //     console.log(666,err)
    //   })
    // }
  },
  mounted(){
    // this.getList()
  }
}
</script>
<style lang="scss" scoped>
@import '../../styles/variable.scss';
.btn {
    background: pink;
    font-size: Px(60);
}
</style>
