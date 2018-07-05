<template>
  <div id="app">
    <headTop></headTop>
    <keep-alive>
      <router-view v-if="$route.meta.keepAlive" :class="{'markdown-body':$route.path.includes('/articles/')}" />
    </keep-alive>
    <router-view v-if="!$route.meta.keepAlive" :class="{'markdown-body':$route.path.includes('/articles/')}" />
    <foot v-if="!$route.path.includes('about')"></foot>
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
  /* text-align: center; */
  color: #2c3e50;
}
@media screen and (max-width: 400px) {
  #app {
    /* padding: 10px 100px; */
    /* background: #ccc; */
  }
}
.markdown-body {
  box-sizing: border-box;
  min-width: 400px;
  /* max-width: 980px; */
  font-size: 1rem;
  padding: 0 45px;
  margin-top: 42px;
}

@media (max-width: 767px) {
  .markdown-body {
    padding: 0 35px;
  }
}
</style>
