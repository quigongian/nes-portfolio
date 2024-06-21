<template>
  <div>
    <NavTest />
    <RouterView />
  </div>
</template>

<script setup lang="ts">
import { RouterView } from 'vue-router';
import NavTest from './components/NavTest.vue';
</script>