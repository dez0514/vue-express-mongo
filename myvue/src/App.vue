<template>
  <div class="container-wrap" :style="{paddingRight:bodyPadding + 'px'}">
    <vheader></vheader>
    <router-view></router-view>
    <raside @changeBodyPad="changePadRight"></raside>
    <vfooter></vfooter>
  </div>
</template>

<script>
import vheader from './components/header'
import vfooter from './components/footer'
import raside from './components/slide-right'
  export default {
    name: 'app',
    components: {
     vheader,
     raside,
     vfooter
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
  .container-wrap {
    overflow: hidden;
    transition: all .3s ease;
  }
  /* .container {
    min-height: calc(100vh - 178px)!important;
  }
  @media (min-width: 768px) {
    .container {
      min-height: calc(100vh - 134px)!important;
    }
  } */
</style>
