<template>
  <div id="routerApp">
    <h1>Hello Router!</h1>
    <p>
      <!-- 路径跳转(字符串跳转) -->
      <router-link to="/home">首页</router-link>
      <!-- 对象跳转 -->
      <router-link :to="{path: 'about'}">关于</router-link>
      <!-- 属性名跳转 -->
      <router-link replace :to="{name: 'news'}">新闻 📰</router-link>
    </p>
    <div class="content">
      <router-view> </router-view>
    </div>
  </div>
</template>


<script setup lang="ts">
</script>

<style>
  a {
    margin: 10px;
  }
  .content {
    background-color: yellowgreen;
    widows: 10%;
    height: 400px;
    border: 1cap;
    border-radius: 10px;
  }
</style>