<template>
  <NavBar ></NavBar>
  <div>
    <goods></goods>
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
  }
}
</script>
