<template>
  <div class="container-wrap" :style="{paddingRight:bodyPadding + 'px'}">
    <vheader></vheader>
    <router-view></router-view>
    <raside @changeBodyPad="changePadRight"></raside>
  </div>
</template>

<script>
import vheader from './components/header'
import raside from './components/slide-right'
  export default {
    name: 'app',
    components: {
     vheader,
     raside
    },
    data() {
      return {
        bodyPadding: 0
      }
    },
  
    mounted() {
     
    },
    computed: {
  
    },
    methods: {
      changePadRight(padding){
        this.bodyPadding = padding
      }
    }
  }
</script>
<style>
  /*reset*/
  * {
    margin: 0;
    padding: 0;
  }
  em {
    font-style: normal;
  }
  
  ul,
  li {
    list-style: none;
  }
  .container-wrap {
    overflow: hidden;
    transition: all .3s ease;
  }
</style>
