import { createStore } from 'vuex'
import { db,collection, getDocs } from '../firebase'
export default createStore({
  state: {

      auth:null,
      cache:[]



  },
  getters: {

  },
  mutations: {
    SET_cache(state,data){
      state.cache.push(data)

    }
  },
  actions: {
    async getGoods({ commit ,}, type){
      console.log(type)
      const querySnapshot = await getDocs(collection(db, type));
      querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        console.log(doc.id, " => ", doc.data());
        commit('SET_cache', doc.data())
      });
    }
  },
  modules: {
  }
})
