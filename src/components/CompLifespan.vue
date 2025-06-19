<template>
  <div>
    薪水： <input type="number" v-model="salary"> <br>
    <button @click="addSal">加薪！</button>
  </div>
</template>

<script setup lang="ts">
import { onBeforeMount, onBeforeUnmount, onBeforeUpdate, onMounted, onUnmounted, onUpdated, ref } from 'vue';

const salary = ref(0);
function addSal() {
  salary.value += 1000;
}

console.log("setup");

// 生命周期钩子
onBeforeMount(() => {
  console.log("挂载之前执行");
});

onMounted(() => {
  console.log("挂载之后执行");
});

onBeforeUpdate(() => {
  console.log("更新之前执行");
});

onUpdated(() => {
  console.log("更新之后执行");
});

onBeforeUnmount(() => {
  console.log("卸载之前执行");
});

onUnmounted(() => {
  console.log("卸载之后执行");
})
</script>