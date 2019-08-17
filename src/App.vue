<template>
  <div>
    <keep-alive>
      <router-view/>
    </keep-alive>
    <FooterGuide/>
  </div>
</template>

<script>
import FooterGuide from './components/FooterGuide/FooterGuide.vue'

export default {
 data () {
   return {

   }
 },
 components: {
   FooterGuide
 }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">

</style>
