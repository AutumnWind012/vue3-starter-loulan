<template>  
  <div><MySalaryInfo :salary-info="salaryInfo"></MySalaryInfo></div>
  <button @click="addSal">提交</button>
</template>

<script setup lang="ts">

import { reactive } from 'vue';
import MySalaryInfo from './components/MySalaryInfo.vue';

const salaryInfo = reactive({
  userName: 'April',
  salary: 25000
});

function addSal() {
  salaryInfo.salary += 1000;
}


</script>



 