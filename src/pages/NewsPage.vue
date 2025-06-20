<template>
  <ul>
    <li v-for="news in newsList" :key="news.id">
      <router-link :to="`/news/details/${news.id}/${news.title}/${news.content}`">
        {{ news.title }}
      </router-link>
    </li>
    <li>缺人！需求近百万 岗位也超多</li>
  </ul>
  <div class="news-content">
    <router-view></router-view>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const newsList = ref([
  {id: '1', title: '新闻1', content:'中亚峰会'},
  {id: '2', title: '新闻2', content:'伊以冲突'}
]);

</script>

<style>
.news-content {
  background-color: yellow;
  height: 90%;
}
</style>