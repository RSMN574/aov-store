<script>
/* eslint-disable */
import {  query, where, } from "firebase/firestore";
import { db,collection, getDocs } from '../firebase'
export default {
  name: "goods",
  props:["commodity"],
  data(){
    auth:null
  },
  methods:{
    async addCart(id,name,prize){
      //console.log(id)
      this.$store.dispatch("readStorage")
      this.auth=this.$store.state.auth
      if (this.auth == null) {
       alert("請先登入")

      }else{
        console.log(id)
        let a
        const q = query(collection(db, "cart"), where("goodsId", "==", id));

        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
          // doc.data() is never undefined for query doc snapshots
          a=doc.id
          console.log(doc.id, " => ", doc.data());
        });

        if(a){
        alert("此物品已在購物車")

        }else{
          this.$store.dispatch("addCart",{
            authId:this.auth,
            goodsId:id,
            goodsName:name,
            goodsPrize:prize,
            number:1
          })
        }

      }
    }
  }
}
</script>

<template>
  <div class="card card-image-cover z-1">
    <img :src="(commodity.img)" alt="" />
    <div class="card-body">
      <h2 class="card-header dark:text-white">{{commodity.name}}</h2>
      <p class="text-content2 dark:text-white">${{commodity.prize}}</p>
      <div class="card-footer">
        <button class="btn-secondary btn transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 ">購買</button>
          <svg @click="addCart(commodity.id,commodity.name,commodity.prize)" class="dark:fill-white cursor-pointer transition duration-700 ease-in-out hover:-translate-y-1 hover:scale-110" xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M280-80q-33 0-56.5-23.5T200-160q0-33 23.5-56.5T280-240q33 0 56.5 23.5T360-160q0 33-23.5 56.5T280-80Zm400 0q-33 0-56.5-23.5T600-160q0-33 23.5-56.5T680-240q33 0 56.5 23.5T760-160q0 33-23.5 56.5T680-80ZM246-720l96 200h280l110-200H246Zm-38-80h590q23 0 35 20.5t1 41.5L692-482q-11 20-29.5 31T622-440H324l-44 80h480v80H280q-45 0-68-39.5t-2-78.5l54-98-144-304H40v-80h130l38 80Zm134 280h280-280Z"/></svg>
        </div>
    </div>
  </div>
</template>

<style scoped>
.btn{
  will-change: auto;
}
</style>