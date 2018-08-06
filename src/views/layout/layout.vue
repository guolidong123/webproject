<template>
    <div class="wraper">
      <p>接下来我要绘制侧边栏</p>
      <sidemenu-list class="sidebar-wrapper"></sidemenu-list>
    </div>
</template>

<script>
  import SidemenuList from './sideBar/sidemenulist'
  export default{
    name:'LayOut',
    components: {
      SidemenuList
    }
  }
</script>

<style scoped>
  .wraper{
    width: 100%;
    height: 900px;
    margin-top:-60px;
    background: #222;
    color: balck;
  }


 </style>
