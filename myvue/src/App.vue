<template>
  <div class="container-wrap" :style="{paddingRight:bodyPadding + 'px'}">
    <vheader></vheader>
    <div class="wrappers">
      <router-view></router-view>
    </div>
    <raside @changeBodyPad="changePadRight"></raside>
    <laside></laside>
    <vfooter></vfooter>
  </div>
</template>

<script>
import vheader from './components/header'
import vfooter from './components/footer'
import raside from './components/slide-right'
import laside from './components/slide-left'
  export default {
    name: 'app',
    components: {
     vheader,
     raside,
     laside,
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
  .wrappers {
    min-height: calc(100vh - 177px);
  }
  @media (max-width: 768px) {
    .wrappers {
      min-height: calc(100vh - 110px);
    }
  }
</style>
