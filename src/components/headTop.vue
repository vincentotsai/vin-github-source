<template>
  <header class="head">
    <div class="nav-mask"></div>
    <ul>
      <li>
        <router-link :to="'/home'">home</router-link>
      </li>
      <li>
        <router-link :to="'/articles'">articles</router-link>
      </li>
      <li>
        <router-link :to="'/about'">about</router-link>
      </li>
    </ul>
  </header>
</template>
<script>
</script>

<style lang="less" scoped>
.head {
  position: fixed;
  top: 0;
  height: 82px;
  width: 100%;
  z-index: 200;
  color: #222;
  padding: 0 12px;
  .nav-mask {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: hsla(0, 0%, 100%, 0.4);
    -webkit-box-shadow: rgba(0, 0, 0, 0.1) 0 1px 2px;
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
  }
  ul {
    line-height: 100%;
    li {
      float: left;
      text-align: center;
      line-height: 82px;
      height: 82px;
      position: relative;
      margin: 0 12px;
      background-color: hsla(0, 0%, 100%, 0);
      -webkit-transition: all 0.3s;
      -o-transition: all 0.3s;
      transition: all 0.3s;
    }
  }
}
.router-link-active {
  color: dodgerblue;
  font-weight: bold;
}
</style>
