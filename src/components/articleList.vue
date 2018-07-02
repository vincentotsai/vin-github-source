<template>
  <section class="articles">
    <div class="article" v-for="(item, index) in articles" :key="index" @click="link(item)">
      <h1 class="title">{{item.title}}</h1>
      <p class="date">{{item.date}} - by {{item.author}}</p>
      <p class="desc">{{item.desc}}</p>
    </div>
  </section>
</template>
<script>
import axios from 'axios'
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
      axios.get('./static/index.json').then(res => {
        let data = res.data.data
        this.articles = data
      })
    },
    link(item) {
      this.$router.push({
        path: `/articles/${item.id}`
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
