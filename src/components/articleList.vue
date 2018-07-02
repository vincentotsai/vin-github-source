<template>
  <section class="articles">
    <div class="article" v-for="(item, index) in articles" :key="index" @click="link(item,index)">
      <h1 class="title">{{item.title}}</h1>
      <p class="date">{{item.createdTime}} - by {{item.author}}</p>
      <p class="desc">{{item.preview}}</p>
    </div>
  </section>
</template>
<script>
// import axios from 'axios'
import Articles from '@/articles/articles.json'

export default {
  data() {
    return {
      articles: []
    }
  },
  created() {
    this.getData()
  },
  methods: {
    getData() {
      // axios.get('./static/index.json').then(res => {
      //   let data = res.data.data
      //   this.articles = data
      // })
      this.articles = Articles
    },
    link(item, index) {
      this.$router.push({
        path: `/articles/${index}`
      })
    }
  }
}
</script>
<style lang="less" scoped>
@media screen and (min-width: 400px) {
  .articles {
    padding: 10px 100px;
    .article {
      padding: 10px;
      margin-bottom: 5px;
      border-radius: 10px;
      box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
      text-align: left;
      cursor: pointer;
      .date {
        font-size: 13px;
        color: #ccc;
      }
    }
  }
}
@media screen and (max-width: 400px) {
  .articles {
    padding: 10px 12px;
    .article {
      padding: 10px;
      margin-bottom: 5px;
      border-radius: 10px;
      box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
      text-align: left;
      cursor: pointer;
      .date {
        font-size: 13px;
        color: #ccc;
      }
    }
  }
}
</style>
