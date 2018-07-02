<template>
  <section class="detail-box markdown-body">
    <!-- <emmet></emmet> -->
    <!-- <mdLoader></mdLoader> -->
  </section>
</template>
<script>
// import emmet from '@/articles/emmet.md'
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
.markdown-body {
  box-sizing: border-box;
  min-width: 200px;
  max-width: 980px;
  margin: 0 auto;
  padding: 45px;
}

@media (max-width: 767px) {
  .markdown-body {
    padding: 15px;
  }
}
</style>

