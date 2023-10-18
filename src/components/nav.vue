<script>
export default {
  name: "NavBar"
  ,data(){
    return{
      auth:null,
      drop:"hidden"
    }

  },
  mounted () {
   this.auth=this.$store.state.auth
    if(this.auth==null){
      this.auth="登入"

    }else{
      this.drop="dropdown-menu dropdown-menu-bottom-left"
    }
  },
}
</script>

<template>
  <div class="navbar">
    <div class="navbar-start">
      <a class="navbar-item">傳說商店</a>
    </div>
    <div class="navbar-center">
      <a class="navbar-item">點數專區</a>
      <a class="navbar-item">英雄專區</a>
      <a class="navbar-item">裝備專區</a>
      <a class="navbar-item">造型專區</a>
    </div>
    <div class="navbar-end">
      <input class="input mr-4" placeholder="搜尋" />
      <svg class="mr-4 dark:fill-white cursor-pointer"  xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="m480-120-58-52q-101-91-167-157T150-447.5Q111-500 95.5-544T80-634q0-94 63-157t157-63q52 0 99 22t81 62q34-40 81-62t99-22q94 0 157 63t63 157q0 46-15.5 90T810-447.5Q771-395 705-329T538-172l-58 52Zm0-108q96-86 158-147.5t98-107q36-45.5 50-81t14-70.5q0-60-40-100t-100-40q-47 0-87 26.5T518-680h-76q-15-41-55-67.5T300-774q-60 0-100 40t-40 100q0 35 14 70.5t50 81q36 45.5 98 107T480-228Zm0-273Z"/></svg>
      <label for="modal-2"><svg class="mr-4 dark:fill-white cursor-pointer" xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M280-80q-33 0-56.5-23.5T200-160q0-33 23.5-56.5T280-240q33 0 56.5 23.5T360-160q0 33-23.5 56.5T280-80Zm400 0q-33 0-56.5-23.5T600-160q0-33 23.5-56.5T680-240q33 0 56.5 23.5T760-160q0 33-23.5 56.5T680-80ZM246-720l96 200h280l110-200H246Zm-38-80h590q23 0 35 20.5t1 41.5L692-482q-11 20-29.5 31T622-440H324l-44 80h480v80H280q-45 0-68-39.5t-2-78.5l54-98-144-304H40v-80h130l38 80Zm134 280h280-280Z"/></svg>
      </label>
        <div class="avatar avatar-ring avatar-md">
        <div class="dropdown-container">
          <div class="dropdown">
            <label class="btn btn-ghost flex cursor-pointer px-0" tabindex="0">
           <router-link to="/auth"> <p>{{ auth }}</p></router-link>
            </label>
            <div  :class="drop" >
              <a class="dropdown-item text-sm">Profile</a>
              <a tabindex="-1" class="dropdown-item text-sm">Account settings</a>
              <a tabindex="-1" class="dropdown-item text-sm">Subscriptions</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <input class="modal-state" id="modal-2" type="checkbox" />
  <div class="modal w-screen">
    <label class="modal-overlay" for="modal-2"></label>
    <div class="modal-content flex flex-col gap-5 max-w-3xl">
      <label for="modal-2" class="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</label>
      <h2 class="text-xl dark:text-white">結帳</h2>
      <div class="flex gap-3">
        <button class="btn btn-error btn-block">刪除</button>
        <button class="btn btn-block btn-primary">結帳</button>
      </div>
    </div>
  </div>
</template>

<style scoped>
*
{
  font-family: 'Noto Sans TC', sans-serif;
}
</style>