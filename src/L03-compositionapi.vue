<template>
  <div>
    姓名：<input ref="name"><br>
    <button @click="showRes">提交</button>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const name = ref();

function showRes() {
  // refImpl 对象
  console.log(name);
  // input DOM 对象
  console.log(name.value);
  // input 的值
  console.log(name.value.value);
}

</script>

<style scoped></style>