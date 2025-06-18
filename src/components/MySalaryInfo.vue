<template>
  姓名：<input type="text" v-model="salaryInfo.userName"> <br>
  薪水：<input type="number" v-model="salaryInfo.salary"> <br>
  {{ salaryInfo }}
</template>

<script setup lang="ts">

import type { SalaryInfoType } from "@/types/SalaryInfo";

// 允许外部传进来一个 salaryInfo 对象
defineProps<{ salaryInfo: SalaryInfoType }>();

</script>