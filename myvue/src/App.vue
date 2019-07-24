<template>
  <div>
    <vheader></vheader>
    <router-view></router-view>
  </div>
</template>

<script>
import vheader from './components/header'
  export default {
    name: 'app',
    components: {
     vheader
    },
    data() {
      return {
  
      }
    },
  
    mounted() {
  
    },
    computed: {
  
    },
    methods: {
     
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
</style>
