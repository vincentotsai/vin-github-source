<template>
  <section class="home">
    <div class="rec">
      <h1 class="mine">个人项目</h1>
      <div class="title">
        <a class="link" href="https://github.com/vincentotsai/vue-shoppingMall.git" target="_blank">vue + node + mongoDB 全栈商城项目</a>
      </div>
      <div class="title">
        <a class="link" href="https://github.com/vincentotsai/vin-keepalive.git" target="_blank">vue2 内部 keep-alive 组件实现页面缓存</a>
      </div>
      <div class="title">
        <a class="link" href="https://github.com/vincentotsai/vin-repo.git" target="_blank">个人常用代码库</a>
      </div>
      <div class="title">
        <a class="link" href="https://github.com/vincentotsai/vin-parcel.git" target="_blank">parcel初尝试 ：项目构建工具，轻量又高效</a>
      </div>
    </div>

    <h1 class="rec-article">文章推荐</h1>
    <articleList></articleList>

  </section>
</template>
<script>
import articleList from '@/components/articleList'
export default {
  name: 'home',
  components: {
    articleList
  },
  mounted() {
    // const searchEle = document.getElementById('search')
    // searchEle.value = 2
    // const myform = document.getElementById('myform')
    // function handleSubmit(e) {
    //   console.log('e->>>', e.target.search.value)
    // }
    // myform.addEventListener('submit', handleSubmit, false)
  }
}
</script>
<style lang="less" scoped>
.home {
  // padding-top: 42px;
  font-size: 16px;
  @media screen and (max-width: 400px) {
    .rec {
      padding: 10px 12px;
      .mine {
        margin-bottom: 10px;
      }
      .title {
        padding: 10px;
        margin-bottom: 5px;
        border-radius: 10px;
        box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
        .link {
          color: black !important;
          font-size: 14px;
        }
      }
    }
  }
  @media screen and (min-width: 400px) {
    .rec {
      text-align: left;
      padding: 10px 100px;
      .mine {
        margin-bottom: 10px;
      }
      .title {
        padding: 10px;
        margin-bottom: 5px;
        border-radius: 10px;
        box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
      }
    }
  }
  .rec-article {
    padding: 10px 100px;
    text-align: left;
  }
}
</style>

