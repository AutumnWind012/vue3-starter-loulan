<template>
  <div>
    姓名：<input v-model="userName"> {{ userName }} <br>
    薪水：<input type="number" v-model="salary"> {{ salary }} <br>
    <button @click="addSal">添加薪水</button>
  </div>
</template>

<script setup lang="ts">
import MySal from '@/components/mySal';

const {userName, salary, addSal} = MySal();

console.log("=========");
 
</script>

<style scoped></style>