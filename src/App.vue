<template>
  <div id="app">
    <headTop></headTop>
    <keep-alive>
      <router-view v-if="$route.meta.keepAlive"/>
    </keep-alive>
      <router-view v-if="!$route.meta.keepAlive"/>
    <foot></foot>
  </div>
</template>

<script>
import headTop from '@/components/headTop'
import foot from '@/components/foot'
export default {
  name: 'App',
  components: {
    headTop,
    foot
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
@media screen and (max-width: 400px)  {
  #app {
    /* padding: 10px 100px; */
    /* background: #ccc; */
  }
}
</style>
