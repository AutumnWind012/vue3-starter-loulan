<template>
  <div>
    姓名： {{ userInfo.username }}
  </div>
</template>


<script setup lang="ts">

import { storeToRefs } from "pinia";
import { userStore } from "@/store/user";

// 拿到 userStore 对象
const store = userStore();

// 数据绑定 响应式
const userInfo = storeToRefs(store);


console.log(userInfo);

// 更新多条字段
store.$patch({
  username: 'lysander'
})

// 更新 username
store.updateUsername('helena');




</script>

