<script>
/* eslint-disable */
import goods from "@/components/goods.vue";
import NavBar from "@/components/nav.vue";

export default {
  name: "equip",
  components: {NavBar, goods},
  async mounted() {
    if(/reload/gi.test(location.href)){
      location.assign(location.href.substring(0, location.href.length - 7))
      location.reload(true);

    }
   // console.log(sessionStorage.getItem("auth"))
    this.$store.dispatch("readStorage")
    this.$store.dispatch("getGoods","equip")
    this.commodity=this.$store.state.cache
    console.log(this.commodity)
  },data(){
    return{
      commodity:[]


    }
  }
}
</script>

<template>
  <NavBar class="fixed " ></NavBar>
  <div class="mt-20">
    <goods  class="m-4" v-for="( commodity, i) in commodity " :key="i" :commodity="commodity" ></goods>
  </div>
</template>

<style scoped>

</style>