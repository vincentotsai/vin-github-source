<template>
  <section class="detail-box">
    detail{{$route.params.id}}
    <!-- <emmet></emmet> -->
    <!-- <mdLoader></mdLoader> -->
  </section>
</template>
<script>
// import emmet from '@/articles/emmet-guide.md'
// import mdLoader from '@/articles/vue-markdown-loader.md'
export default {
  components: {
    // emmet,
    // mdLoader
  }
}
</script>

<style lang="less" scoped>
.detail-box {
  padding-top: 42px;
}
</style>

