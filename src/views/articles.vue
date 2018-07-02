<template>
  <section class="article-container">
    
    <articleList></articleList>
  </section>
</template>
<script>
import articleList from '@/components/articleList'
export default {
  name: 'articles',
  components: {
    articleList
  }
}
</script>
<style lang="less" scoped>
.article-container {
  padding-top: 42px;
}
</style>


