<template>
  <RouterView />
</template>

<script setup>
import { RouterView } from 'vue-router';
import { useScalePage } from './hooks/useScalePage.js';

let option = {
  targetX: 1920,
  targetY: 1080,
  targetRatio: 16 / 9,
}

useScalePage(option);

</script>

<style scoped></style>
