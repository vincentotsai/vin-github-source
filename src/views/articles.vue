<template>
  <section class="article-container markdown-body">

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
  font-size: 16px;
}
</style>


