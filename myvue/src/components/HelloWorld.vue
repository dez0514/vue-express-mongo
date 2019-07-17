<template>
  <div class="hello">
    <div v-for="(item,index) in list" :key="index">
      <div>{{item.title}}</div>
      <div>{{item.author}}</div>
      <div>{{item.content}}</div>
      <div>{{item.date}}</div>
    </div>
    <div v-show="list.length == 0">暂无记录</div>
    <div @click="getList">点击请求list</div>
    <div @click="insertData">点击post一条数据</div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
   
  },
  data(){
    return {
      list: [],
      info: {
        id : 1,
        title : 'post test',
        author : 'zwd',
        date : '2019/7/16 16:57',
        content : '增加的第一条数据'
      }
    }
  },
  methods:{
    getList(){
      this.$http.get('/api/article',{}).then(data => {
        console.log(555,data)
        this.list = data
      }).catch(err => {
        console.log(666,err)
      })
    },
    insertData(){
      this.$http.post('/api/article',{
        id : this.info.id,
        title : this.info.title,
        author : this.info.author,
        date : this.info.date,
        content : this.info.content
      }).then(data => {
        console.log(555,data)
      }).catch(err => {
        console.log(666,err)
      })
    }
  },
  mounted(){
    // this.getList()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
