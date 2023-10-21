import { createStore } from 'vuex'
import { db,collection, getDocs ,getAuth,createUserWithEmailAndPassword, signInWithEmailAndPassword, sendPasswordResetEmail} from '../firebase'

export default createStore({
  state: {

      auth:null,
      cache:[]



  },
  getters: {
authChange(state){
  return state.auth
}
  },
  mutations: {
    SET_cache(state,data){
      state.cache.push(data)

    },
      SET_auth(state,data){
          state.auth=data
console.log( state.auth)
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
    },
    signUp( payload,userAuth){
      const auth = getAuth();
      createUserWithEmailAndPassword(auth, userAuth.email, userAuth.password)
          .then((userCredential) => {
            // Signed up
            //const user = userCredential.user;
            console.log( userCredential.user)
           alert("註冊成功 請登入")
            location.reload();
            // ...
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            alert(errorCode+errorMessage)
            // ..
          });

    },signIn({commit,},userAuth){
      const auth = getAuth();
      signInWithEmailAndPassword(auth, userAuth.email, userAuth.password)
          .then((userCredential) => {
            // Signed in
            commit("SET_auth",userCredential.user)

            alert("登入成功")
             // localStorage.setItem('userEmail',userCredential.user.email);
            location.href="#/"
            // ...
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;

            alert(errorCode+errorMessage)
          });
    },logOut({commit}){
          commit("SET_auth",null)
          location.reload();
      },resetPassword(payload,email){
          const auth = getAuth();
          sendPasswordResetEmail(auth, email)
              .then(() => {
                  // Password reset email sent!
                  alert("Password reset email sent!")
              })
              .catch((error) => {
                  const errorCode = error.code;
                  const errorMessage = error.message;
                  alert(errorCode+errorMessage)
                  // ..
              });

      }
  },
  modules: {
  }
})
