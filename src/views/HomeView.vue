<template>
  <NavBar ></NavBar>
  <div>
    <goods :commodity="commodity"></goods>
  </div>
</template>

<script>
// @ is an alias to /src
import NavBar from '@/components/nav.vue'
import goods from '@/components/goods.vue'
export default {
  name: 'HomeView',
  components: {
    NavBar,goods
  },async mounted() {
   this.$store.dispatch("getGoods","point")
this.commodity=this.$store.state.cache
    console.log(this.commodity)
  },data(){
    return{
      commodity:[]


    }
  }
}
</script>
