<script>


import MainHeader from './components/MainHeader.vue';
import MainApp from './components/MainApp.vue';

import MainFooter from './components/MainFooter.vue';

export default {
 name : '',
 components: {
   MainHeader,
   MainApp,
  MainFooter,
    
  },
};


</script>

<template>
  <MainHeader />

  <router-view> </router-view>


  <MainFooter />

</template>

<style lang="scss">



</style>
