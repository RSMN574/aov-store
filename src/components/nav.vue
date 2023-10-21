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
      this.drop=""

    }else{
      this.drop="dropdown"
    }
  },
  methods: {
    authCheck() {
      if (this.auth == null) {
        location.href = "#/Auth"
      }
    }, logOut() {
      this.$store.dispatch("logOut", null)
    },
  }
}
</script>

<template>

  <nav class="w-screen">

    <a href="#" class="mr-4">傳說商店</a>
    <ul class="list mr-8">
      <li><a href="#">點數專區</a></li>
      <li><a href="#">英雄專區</a></li>
      <li><a href="#">裝備專區</a></li>
      <li><a href="#">造型專區</a></li>

    </ul>

    <span class="mr-4"><svg class=" dark:fill-white cursor-pointer"  xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="m480-120-58-52q-101-91-167-157T150-447.5Q111-500 95.5-544T80-634q0-94 63-157t157-63q52 0 99 22t81 62q34-40 81-62t99-22q94 0 157 63t63 157q0 46-15.5 90T810-447.5Q771-395 705-329T538-172l-58 52Zm0-108q96-86 158-147.5t98-107q36-45.5 50-81t14-70.5q0-60-40-100t-100-40q-47 0-87 26.5T518-680h-76q-15-41-55-67.5T300-774q-60 0-100 40t-40 100q0 35 14 70.5t50 81q36 45.5 98 107T480-228Zm0-273Z"/></svg>
    </span>
      <label  class="mr-4"><svg class=" dark:fill-white cursor-pointer" xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M280-80q-33 0-56.5-23.5T200-160q0-33 23.5-56.5T280-240q33 0 56.5 23.5T360-160q0 33-23.5 56.5T280-80Zm400 0q-33 0-56.5-23.5T600-160q0-33 23.5-56.5T680-240q33 0 56.5 23.5T760-160q0 33-23.5 56.5T680-80ZM246-720l96 200h280l110-200H246Zm-38-80h590q23 0 35 20.5t1 41.5L692-482q-11 20-29.5 31T622-440H324l-44 80h480v80H280q-45 0-68-39.5t-2-78.5l54-98-144-304H40v-80h130l38 80Zm134 280h280-280Z"/></svg>
    </label>
    <span class=" mr-4 inline" :class="drop" @click="authCheck">

    <label class=" " tabindex="0">
<svg class=" dark:fill-white cursor-pointer" xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M234-276q51-39 114-61.5T480-360q69 0 132 22.5T726-276q35-41 54.5-93T800-480q0-133-93.5-226.5T480-800q-133 0-226.5 93.5T160-480q0 59 19.5 111t54.5 93Zm246-164q-59 0-99.5-40.5T340-580q0-59 40.5-99.5T480-720q59 0 99.5 40.5T620-580q0 59-40.5 99.5T480-440Zm0 360q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q53 0 100-15.5t86-44.5q-39-29-86-44.5T480-280q-53 0-100 15.5T294-220q39 29 86 44.5T480-160Zm0-360q26 0 43-17t17-43q0-26-17-43t-43-17q-26 0-43 17t-17 43q0 26 17 43t43 17Zm0-60Zm0 360Z"/></svg>
    </label>

    <span class="dropdown-menu dropdown-menu-bottom-left">

      <a tabindex="-1" class="dropdown-item text-sm">帳號設定</a>
      <a tabindex="-1" class="dropdown-item text-sm" @click="logOut">登出</a>
    </span> </span>

    <label  class="mr-4 " for="modal-2">
      <svg class=" dark:fill-white cursor-pointer" xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M784-120 532-372q-30 24-69 38t-83 14q-109 0-184.5-75.5T120-580q0-109 75.5-184.5T380-840q109 0 184.5 75.5T640-580q0 44-14 83t-38 69l252 252-56 56ZM380-400q75 0 127.5-52.5T560-580q0-75-52.5-127.5T380-760q-75 0-127.5 52.5T200-580q0 75 52.5 127.5T380-400Z"/></svg></label>





    <label   for="drawer-left">
      <svg class=" dark:fill-white cursor-pointer menu" xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z"/></svg></label>


  </nav>
  <input type="checkbox" id="drawer-left" class="drawer-toggle" />
  <label class="overlay" for="drawer-left"></label>

  <div class="drawer z-50">

    <div class="drawer-content pt-10 flex flex-col h-full z-50">
      <label for="drawer-left" class="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</label>
      <div>
        <h2 class="text-xl font-medium dark:text-white">目錄</h2>
          <ul class="mt-14 dark:text-white">
            <li class="my-4"><a href="#">點數專區</a></li>
            <li class="my-4"><a href="#">英雄專區</a></li>
            <li class="my-4"><a href="#">裝備專區</a></li>
            <li class="my-4"><a href="#">造型專區</a></li>
          </ul>
      </div>
      <div class="h-full flex flex-row justify-end items-end gap-2">

      </div>
    </div>
  </div>
  <input class="modal-state" id="modal-2" type="checkbox" />
  <div class="modal w-screen ">
    <label class="modal-overlay" for="modal-2"></label>
    <div class="modal-content flex flex-col gap-5 max-w-3xl">
      <label for="modal-2" class="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</label>
      <h2 class="text-xl dark:text-white">搜尋</h2>
      <input class="input" placeholder="搜尋" /><div class="flex gap-3">

        <button class="btn btn-block btn-primary">確定</button>
      </div>
    </div>
  </div>
</template>

<style scoped>
*
{
  font-family: 'Noto Sans TC', sans-serif;
}
* {
  box-sizing: border-box;
}

body {
  margin: 0;
  min-height: 200vh;
  font-size: 0;
  font-family: Helvetica, Verdana, sans-serif;
}

nav {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  padding: 16px 20px 30px 20px;
  display: flex;
  align-items: center;
  transition: 0.3s ease-out;
  backdrop-filter: blur(8px) brightness(1.2);
  -webkit-backdrop-filter: blur(8px) brightness(1.2);
  text-shadow: 0 0 5px rgba(0, 0, 0, 0.5);
  color: white;
  font-size: 16px;
}
nav.mask {
  top: 150px;
  mask-image: linear-gradient(black 70%, transparent);
  -webkit-mask-image: linear-gradient(black 70%, transparent);
}
nav.mask-pattern {
  top: 300px;
  mask-image: url("data:image/svg+xml, %3Csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 12.21 10.57%27%3E%3Cpath fill=%27%23ffffff%27 d=%27M6.1 0h6.11L9.16 5.29 6.1 10.57 3.05 5.29 0 0h6.1z%27/%3E%3C/svg%3E"), linear-gradient(black calc(100% - 30px), transparent calc(100% - 30px));
  mask-size: auto 30px, 100% 100%;
  mask-repeat: repeat-x, no-repeat;
  mask-position: left bottom, top left;
  -webkit-mask-image: url("data:image/svg+xml, %3Csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 12.21 10.57%27%3E%3Cpath fill=%27%23ffffff%27 d=%27M6.1 0h6.11L9.16 5.29 6.1 10.57 3.05 5.29 0 0h6.1z%27/%3E%3C/svg%3E"), linear-gradient(black calc(100% - 30px), transparent calc(100% - 30px));
  -webkit-mask-size: auto 30px, 100% 100%;
  -webkit-mask-repeat: repeat-x, no-repeat;
  -webkit-mask-position: left bottom, top left;
}
@media (min-width: 640px) {
  nav {
    padding: 16px 50px 30px 50px;
  }
}

nav.is-hidden {
  transform: translateY(-100%);
}

a {
  color: inherit;
  text-decoration: none;
}
a:hover, a:focus {
  text-decoration: underline;
}

.list {
  list-style-type: none;
  margin-left: auto;
  display: none;
}
@media (min-width: 640px) {
  .list {
    display: flex;
  }
}
.list li {
  margin-left: 20px;
}

.search {
  display: inline-block;
  padding: 0;
  font-size: 0;
  background: none;
  border: none;
  margin-left: auto;
  filter: drop-shadow(0 0 5px rgba(0, 0, 0, 0.5));
}
@media (min-width: 640px) {
  .search {
    margin-left: 20px;
  }
}
.search::before {
  content: "";
  display: inline-block;
  width: 2rem;
  height: 2rem;
  background: center/1.3rem 1.3rem no-repeat url("data:image/svg+xml, %3Csvg%20xmlns=%27http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%27%20viewBox=%270%200%2015.17%2014.81%27%20width=%2715.17%27%20height=%2714.81%27%3E%3Cpath%20d=%27M6,.67A5.34,5.34,0,1,1,.67,6,5.33,5.33,0,0,1,6,.67ZM9.86,9.58l4.85,4.75Z%27%20fill=%27none%27%20stroke=%27%23fff%27%20stroke-width=%271.33%27%2F%3E%3C%2Fsvg%3E");
}

.menu {
  display: inline-block;
  padding: 0;
  font-size: 0;
  background: none;
  border: none;

  filter: drop-shadow(0 0 5px rgba(0, 0, 0, 0.5));
}

@media (min-width: 640px) {
  .menu {
    display: none;
  }
}

img {
  width: 100%;
  min-height: 200vh;
  object-fit: cover;
}
</style>