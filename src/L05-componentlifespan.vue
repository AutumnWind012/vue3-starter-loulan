<template>
  <div v-if="showComp">
    <CompLifeSpan></CompLifeSpan>
  </div>
  <button @click="toggle">提交</button>

</template>

<script setup lang="ts">

import { ref } from 'vue';
import CompLifeSpan from './components/CompLifeSpan.vue';

const showComp = ref(true);

function toggle() {
  showComp.value = !showComp.value;
}
</script>