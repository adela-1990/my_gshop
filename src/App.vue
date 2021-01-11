<template>
  <div>
    <div>
      <router-view/>
    
      <FooterGuide v-show="$route.meta.showFooter" />
    </div>

    


  </div>
  
  
</template>

<script>
import FooterGuide from './components/FooterGuide/FooterGuide'

export default {
  name: 'App',
  components:{
    FooterGuide
  }
}
</script>

<style lang='stylus'  rel='stylesheet/stylus'>
</style>
