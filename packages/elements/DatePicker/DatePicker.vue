<template>
  <n-date-picker v-model:value="value" v-bind="$attrs" />
</template>

<script setup lang="ts">
const value = defineModel<number>()
</script>
