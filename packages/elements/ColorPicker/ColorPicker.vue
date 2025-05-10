<template>
  <n-color-picker v-bind="$attrs" v-model:value="value" />
</template>

<script setup lang="ts">
const value = defineModel<string>()
</script>
