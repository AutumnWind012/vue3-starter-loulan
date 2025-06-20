<template>
  <p>ID: {{ params.id }}</p>
  <p>标题：{{ params.title }}</p>
  <p>内容：{{ params.content }}<br></p>
</template>

<script setup lang="ts">
import { toRef } from 'vue';
import { useRoute } from 'vue-router';
const route = useRoute();
const params = toRef(route, 'params');
</script>