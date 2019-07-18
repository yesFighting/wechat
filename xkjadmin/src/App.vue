<template>
 
    <router-view v-if="isShow"></router-view>
  
 
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'app',
  components: {
    // HelloWorld
  },
  provide(){
    return {
      reload: this.reload
    }
  },
  data(){
    return{
      isShow : true
    }
  },
  methods:{
    reload(){
      this.isShow = false;
      this.$nextTick(function(){
        this.isShow = true;
      })
    }
  }
}
</script>

<style lang="scss">
 @import '../src/assets/public';
 @import '../src/assets/common';
 @import '../src/assets/scrollBar';

</style>
